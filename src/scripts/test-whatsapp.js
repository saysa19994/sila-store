/**
 * Quick script to test WhatsApp connection
 * Run this using: node src/scripts/test-whatsapp.js
 */
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../../.env.local') });

async function testWhatsApp() {
  const instanceId = process.env.ULTRAMSG_INSTANCE;
  const token = process.env.ULTRAMSG_TOKEN;
  const testNumber = "966567588261"; // Your number
  
  console.log("🚀 Starting WhatsApp Test...");
  console.log(`Instance: ${instanceId}`);

  const message = `
🌟 *رسالة تجريبية من متجر صلة* 🌟

أهلاً بك! إذا وصلتك هذه الرسالة، فهذا يعني أن نظام الإشعارات التلقائية في متجرك يعمل بنجاح بنسبة 100%.

🔑 كود التفعيل التجريبي: TEST-123-SILA
  `.trim();

  try {
    const response = await fetch(`https://api.ultramsg.com/${instanceId}/messages/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        token: token,
        to: testNumber,
        body: message,
        priority: '10'
      })
    });

    const result = await response.json();
    console.log("✅ API Response:", result);
    
    if (result.sent === "true") {
      console.log("🎊 Success! Check your WhatsApp.");
    } else {
      console.log("❌ Failed. Check your Instance ID and Token.");
    }
  } catch (error) {
    console.error("💥 Error during test:", error);
  }
}

testWhatsApp();
