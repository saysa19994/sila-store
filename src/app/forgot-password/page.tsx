import React from "react";
import Link from "next/link";
import { Mail, ArrowLeft, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8 relative overflow-hidden text-right">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-8 relative z-10"
      >
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto text-primary">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-3xl font-bold">نسيت كلمة المرور؟</h1>
          <p className="text-muted-foreground">أدخل بريدك الإلكتروني وسنرسل لك رابطاً لاستعادة الوصول لحسابك.</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold mr-1">البريد الإلكتروني</label>
            <div className="relative">
              <input 
                type="email" 
                required
                placeholder="name@example.com"
                className="w-full bg-card border border-border focus:border-primary rounded-2xl py-4 px-12 outline-none transition-all text-left"
              />
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            إرسال رابط الاستعادة
          </button>
        </form>

        <div className="text-center">
          <Link href="/login" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-bold">
            <ArrowLeft size={18} className="rotate-180" />
            العودة لتسجيل الدخول
          </Link>
        </div>

        <div className="bg-card/50 border border-border p-6 rounded-3xl space-y-3">
          <div className="flex items-center gap-2 text-primary font-bold text-sm">
            <Zap size={16} />
            نصيحة أمنية
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            تأكد من استخدام بريد إلكتروني نشط، وإذا لم تجد الرسالة في صندوق الوارد، يرجى التحقق من مجلد "الرسائل غير المرغوب فيها" (Spam).
          </p>
        </div>
      </motion.div>
    </div>
  );
}
