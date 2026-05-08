import { supabase } from "@/lib/supabase";
import { whatsappService } from "./whatsapp";
import { emailService } from "./email";

/**
 * Service to handle automated delivery of digital products
 */
export const deliveryService = {
  /**
   * Processes an order and allocates digital assets (keys/files)
   */
  async processOrder(orderId: string) {
    console.log(`[Delivery Service] Starting delivery for order ${orderId}...`);
    
    // 1. Fetch order items with linked order and product info
    const { data: items, error: itemsError } = await supabase
      .from('order_items')
      .select('*, products(*), orders(*)')
      .eq('order_id', orderId);

    if (itemsError) {
      console.error("[Delivery Service] Error fetching order items:", itemsError);
      throw itemsError;
    }

    if (!items || items.length === 0) {
      console.error("[Delivery Service] No items found for order:", orderId);
      return;
    }

    // 2. Fetch Customer Info
    const { data: userData } = await supabase
      .from('profiles')
      .select('full_name, phone, email')
      .eq('id', items[0].orders.user_id)
      .single();

    for (const item of items) {
      if (item.products.delivery_type === 'instant') {
        // 3. Find an unused key from inventory
        const { data: inventoryKey, error: invError } = await supabase
          .from('inventory')
          .select('*')
          .eq('product_id', item.product_id)
          .eq('is_used', false)
          .limit(1)
          .single();

        if (invError || !inventoryKey) {
          console.error(`[Delivery Service] No stock available for product ${item.product_id}`);
          // TODO: Alert admin about out-of-stock
          continue;
        }

        // 4. Mark key as used and link to order
        await supabase
          .from('inventory')
          .update({ is_used: true, order_id: orderId })
          .eq('id', inventoryKey.id);

        // 5. Update order item with delivery data
        await supabase
          .from('order_items')
          .update({ delivery_data: inventoryKey.content })
          .eq('id', item.id);

        // 6. Trigger WhatsApp Notification
        if (userData?.phone) {
          await whatsappService.sendActivationMessage(
            userData.phone,
            userData.full_name || "عميلنا العزيز",
            item.products.title_ar,
            inventoryKey.content
          );
        }
        
        console.log(`[Delivery Service] Instant delivery successful for ${item.products.title_ar}`);
      }
    }

    // 7. Send Email Confirmation (Invoice)
    if (userData?.email) {
      await emailService.sendOrderConfirmation(
        userData.email,
        userData.full_name || "عميلنا العزيز",
        orderId.split('-')[0].toUpperCase(), // Short Order ID
        `${items[0].orders.total_amount} ${items[0].orders.currency}`
      );
    }

    // 8. Update final order status
    await supabase
      .from('orders')
      .update({ 
        delivery_status: 'delivered',
        payment_status: 'paid' 
      })
      .eq('id', orderId);
      
    console.log(`[Delivery Service] Order ${orderId} fully processed and notifications sent.`);
  }
};
