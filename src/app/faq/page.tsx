"use client";

import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Plus, Minus, HelpCircle, Zap, ShieldCheck, CreditCard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "كيف أحصل على المنتج بعد الدفع؟",
    answer: "متجر صلة يتميز بنظام تسليم فوري. بمجرد إتمام عملية الدفع بنجاح، سيظهر لك كود التفعيل مباشرة في صفحة نجاح الطلب، كما سيصلك نسخة منه عبر الواتساب والبريد الإلكتروني."
  },
  {
    question: "هل الاشتراكات رسمية ومضمونة؟",
    answer: "نعم، جميع الاشتراكات في صلة رسمية 100% ومضمونة طوال فترة الاشتراك. نحن نتعامل مباشرة مع المزودين الرسميين لضمان استقرار الخدمة."
  },
  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer: "نقبل جميع طرق الدفع الآمنة في المملكة العربية السعودية: مدى (Mada)، فيزا (Visa)، ماستركارد (Mastercard)، و Apple Pay."
  },
  {
    question: "ماذا أفعل إذا واجهت مشكلة في تفعيل الكود؟",
    answer: "فريق الدعم الفني متواجد لمساعدتك 24/7. يمكنك التواصل معنا عبر الواتساب أو البريد الإلكتروني وسنقوم بحل مشكلتك في دقائق."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center space-y-4 mb-16">
             <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold">
                <HelpCircle size={16} />
                <span>مركز المساعدة</span>
             </div>
             <h1 className="text-4xl md:text-5xl font-bold">الأسئلة الشائعة</h1>
             <p className="text-muted-foreground text-lg">كل ما تحتاج معرفته عن خدمات متجر صلة في مكان واحد.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-3xl overflow-hidden transition-all hover:border-primary/30">
                 <button 
                   onClick={() => setOpenIndex(openIndex === i ? null : i)}
                   className="w-full text-right p-6 flex items-center justify-between gap-4"
                 >
                    <span className="text-lg font-bold">{faq.question}</span>
                    <div className={`w-10 h-10 rounded-xl bg-muted flex items-center justify-center transition-all ${openIndex === i ? "bg-primary text-white" : ""}`}>
                       {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                 </button>
                 <AnimatePresence>
                   {openIndex === i && (
                     <motion.div 
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: "auto", opacity: 1 }}
                       exit={{ height: 0, opacity: 0 }}
                       className="overflow-hidden"
                     >
                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border/50 pt-4 mx-6">
                           {faq.answer}
                        </div>
                     </motion.div>
                   )}
                 </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Quick Support Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
             <div className="bg-card border border-border p-8 rounded-[32px] text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto"><Zap /></div>
                <h4 className="font-bold">تسليم لحظي</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">بمجرد الدفع، اشتراكك بين يديك في ثوانٍ.</p>
             </div>
             <div className="bg-card border border-border p-8 rounded-[32px] text-center space-y-4">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mx-auto"><ShieldCheck /></div>
                <h4 className="font-bold">ضمان ذهبي</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">نضمن لك عمل الاشتراك طوال الفترة أو استرداد أموالك.</p>
             </div>
             <div className="bg-card border border-border p-8 rounded-[32px] text-center space-y-4">
                <div className="w-12 h-12 bg-success/10 text-success rounded-2xl flex items-center justify-center mx-auto"><CreditCard /></div>
                <h4 className="font-bold">دفع آمن</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">مشفر بالكامل عبر بوابة مويسر السعودية.</p>
             </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
