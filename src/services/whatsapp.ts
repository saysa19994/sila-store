/**
 * WhatsApp Notification Service
 * Connects to providers like UltraMsg, Wati, or Twilio
 */
export const whatsappService = {
  /**
   * Sends an automated message to the customer after a successful payment
   */
  async sendActivationMessage(phone: string, customerName: string, productName: string, activationKey: string) {
    const message = `
أهلاً ${customerName}! 🌟

شكراً لشرائك من *متجر صلة*. تم تفعيل طلبك بنجاح!

📦 المنتج: ${productName}
🔑 كود التفعيل: *${activationKey}*

نتمنى لك تجربة ممتعة! لو واجهت أي مشكلة، رد على هذه الرسالة وسيقوم فريق الدعم بمساعدتك فوراً.
    `.trim();

    console.log(`[WhatsApp Service] Sending message to ${phone}...`);
    
    // Ensure phone number doesn't have '+' as per some API requirements
    const formattedPhone = phone.replace('+', '');

    try {
      const response = await fetch(`https://api.ultramsg.com/${process.env.ULTRAMSG_INSTANCE}/messages/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          token: process.env.ULTRAMSG_TOKEN || '',
          to: formattedPhone,
          body: message,
          priority: '10' // High priority for instant delivery
        })
      });
      
      const result = await response.json();
      console.log(`[WhatsApp Service] Message sent successfully to ${phone}`, result);
      return { success: true, result };
    } catch (error) {
      console.error("[WhatsApp Service] Error sending message:", error);
      return { success: false, error };
    }
  }
};
