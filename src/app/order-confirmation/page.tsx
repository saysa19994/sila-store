"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { CheckCircle2, Copy, Download, Zap, ExternalLink, Mail, MessageCircle, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function OrderConfirmationPage() {
  const [copied, setCopied] = useState(false);

  const orderData = {
    id: "SL-88452",
    date: "8 مايو 2024",
    total: "49 ريال",
    product: "Adobe Creative Cloud",
    digitalKey: "ADOBE-AUTH-KEY-88X-442-99L",
    activationSteps: [
      "قم بالذهاب إلى موقع Adobe الرسمي.",
      "سجل دخولك ببريدك الإلكتروني.",
      "أدخل كود التفعيل المذكور أعلاه.",
      "استمتع بالوصول الكامل لجميع التطبيقات."
    ]
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(orderData.digitalKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-muted/20 min-h-screen">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center mb-12 space-y-4"
          >
             <div className="w-20 h-20 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={48} />
             </div>
             <h1 className="text-4xl font-bold">تم الدفع بنجاح! 🎉</h1>
             <p className="text-muted-foreground text-lg">شكراً لك على ثقتك بمتجر صلة. طلبك رقم <strong>{orderData.id}</strong> مكتمل.</p>
          </motion.div>

          <div className="space-y-8">
            {/* Instant Delivery Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-primary text-white rounded-[32px] p-8 md:p-12 shadow-2xl shadow-primary/30 relative overflow-hidden group"
            >
               <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="space-y-4 text-center md:text-right">
                     <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                        <Zap className="w-4 h-4 text-secondary" />
                        <span>تم التسليم الفوري</span>
                     </div>
                     <h2 className="text-2xl font-bold">كود التفعيل الخاص بك:</h2>
                     <div className="flex items-center gap-4 bg-white/10 border border-white/20 rounded-2xl p-4 font-mono text-xl md:text-2xl font-bold backdrop-blur-md">
                        <span className="flex-1 overflow-x-auto no-scrollbar">{orderData.digitalKey}</span>
                        <button 
                          onClick={copyToClipboard}
                          className="p-2 hover:bg-white/20 rounded-xl transition-all relative"
                        >
                           {copied ? <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-primary text-[10px] px-2 py-1 rounded">تم النسخ!</span> : null}
                           <Copy size={24} />
                        </button>
                     </div>
                  </div>
                  <div className="shrink-0">
                     <div className="w-32 h-32 bg-white/10 rounded-3xl border border-white/20 flex items-center justify-center p-6 backdrop-blur-sm group-hover:rotate-12 transition-all duration-500">
                        <Download size={64} className="text-secondary" />
                     </div>
                  </div>
               </div>
               <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            </motion.div>

            {/* Next Steps / Activation */}
            <div className="bg-card border border-border rounded-[32px] p-8 md:p-10 space-y-8">
               <h3 className="text-xl font-bold flex items-center gap-3">
                  <ArrowLeft className="text-primary" />
                  كيف تقوم بالتفعيل؟
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <ul className="space-y-6">
                    {orderData.activationSteps.map((step, i) => (
                      <li key={i} className="flex gap-4">
                        <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-muted/50 rounded-2xl p-6 space-y-4">
                     <h4 className="font-bold text-sm">هل تحتاج مساعدة في التفعيل؟</h4>
                     <p className="text-xs text-muted-foreground leading-relaxed">فريق الدعم الفني متواجد الآن لمساعدتك خطوة بخطوة.</p>
                     <div className="flex flex-col gap-2">
                        <a 
                          href="https://wa.me/966567588261" 
                          target="_blank"
                          className="flex items-center justify-center gap-2 bg-success text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-success/20"
                        >
                           <MessageCircle size={18} />
                           تحدث معنا واتساب
                        </a>
                        <button className="flex items-center justify-center gap-2 bg-card border border-border py-3 rounded-xl font-bold text-sm">
                           <Mail size={18} />
                           مراسلة الدعم
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            {/* Order Details Mini */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground pt-4">
               <span>رقم الطلب: <strong className="text-foreground">{orderData.id}</strong></span>
               <span>التاريخ: <strong className="text-foreground">{orderData.date}</strong></span>
               <span>الإجمالي: <strong className="text-primary font-bold">{orderData.total}</strong></span>
               <Link href="/account/orders" className="text-primary font-bold flex items-center gap-1 hover:underline">
                  <ExternalLink size={14} />
                  عرض تفاصيل الفاتورة
               </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
