import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Email Service using official Resend SDK
 */
export const emailService = {
  async sendOrderConfirmation(email: string, customerName: string, orderId: string, total: string) {
    console.log(`[Email Service] Sending confirmation to ${email} via Resend SDK...`);
    
    try {
      const { data, error } = await resend.emails.send({
        from: 'Sila Store <onboarding@resend.dev>', // You can change this to your domain later
        to: [email],
        subject: `تأكيد الطلب #${orderId} - متجر صلة`,
        html: `
          <div style="font-family: 'Cairo', sans-serif; direction: rtl; text-align: right; padding: 20px; border: 1px solid #eee; border-radius: 20px;">
            <h1 style="color: #6C3CE1;">شكراً لطلبك من متجر صلة! 🎉</h1>
            <p style="font-size: 16px;">أهلاً <strong>${customerName}</strong>،</p>
            <p>لقد استلمنا طلبك بنجاح وهو الآن قيد المعالجة.</p>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 10px; margin: 20px 0;">
               <p style="margin: 5px 0;">رقم الطلب: <strong>${orderId}</strong></p>
               <p style="margin: 5px 0;">إجمالي المبلغ: <strong>${total}</strong></p>
            </div>
            <p>يمكنك دائماً متابعة طلبك وتحميل أكواد التفعيل من خلال لوحة تحكم حسابك.</p>
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/account" style="display: inline-block; background-color: #6C3CE1; color: white; padding: 12px 25px; border-radius: 10px; text-decoration: none; font-weight: bold; margin-top: 20px;">دخول لحسابي</a>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;" />
            <p style="font-size: 12px; color: #999; text-align: center;">متجر صلة الرقمي - الرياض، المملكة العربية السعودية</p>
          </div>
        `,
      });

      if (error) {
        console.error("[Email Service] Resend Error:", error);
        return { success: false, error };
      }

      console.log(`[Email Service] Email sent successfully! ID: ${data?.id}`);
      return { success: true, id: data?.id };
    } catch (error) {
      console.error("[Email Service] Unexpected Error:", error);
      return { success: false, error };
    }
  }
};
