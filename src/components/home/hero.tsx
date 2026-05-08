"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Zap, ShieldCheck, Headphones } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-right space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-bold"
            >
              <Zap className="w-4 h-4" />
              <span>تسليم فوري 100% تلقائي</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              عالمك الرقمي بين <span className="text-primary italic">يديك</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              وفر أكثر من 70% على اشتراكاتك المفضلة (أدوبي، نتفلكس، كانفا، وغيرها). 
              اشترك الآن واستلم بياناتك فوراً عبر البريد والواتساب.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href="/shop"
                className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-primary/30 hover:scale-105 transition-all"
              >
                استعرض المنتجات
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <Link
                href="/deals"
                className="w-full sm:w-auto bg-card border border-border px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-muted transition-all"
              >
                عروض اليوم
                <span className="bg-danger text-white text-[10px] px-2 py-0.5 rounded-full">جديد</span>
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 pt-8"
            >
              <div className="flex flex-col items-center lg:items-start gap-2">
                <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center shadow-sm border border-border">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <span className="text-xs font-bold">تسليم لحظي</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center shadow-sm border border-border">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-bold">ضمان ذهبي</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center shadow-sm border border-border">
                  <Headphones className="w-6 h-6 text-info" />
                </div>
                <span className="text-xs font-bold">دعم 24/7</span>
              </div>
            </motion.div>
          </div>

          {/* Visual Content / Featured Cards */}
          <div className="flex-1 relative hidden lg:block">
             <div className="relative z-10 w-full aspect-square max-w-lg mx-auto">
                <motion.div
                   animate={{ y: [0, -20, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-0 right-0 w-64 h-80 glass rounded-3xl p-6 shadow-2xl rotate-6"
                >
                  <div className="w-full h-40 bg-primary/20 rounded-2xl mb-4 flex items-center justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Creative_Cloud_logo_2020.svg" alt="Adobe" className="w-20" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Adobe CC</h3>
                  <p className="text-sm text-muted-foreground mb-4">باقة المصمم المتكاملة</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">49 ريال</span>
                    <span className="bg-secondary/20 text-secondary text-[10px] px-2 py-1 rounded-full font-bold">الأكثر طلباً</span>
                  </div>
                </motion.div>

                <motion.div
                   animate={{ y: [0, 20, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                   className="absolute bottom-0 left-0 w-64 h-80 glass rounded-3xl p-6 shadow-2xl -rotate-6 z-20"
                >
                  <div className="w-full h-40 bg-secondary/10 rounded-2xl mb-4 flex items-center justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/Canva_logo_2021.svg" alt="Canva" className="w-24" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Canva Pro</h3>
                  <p className="text-sm text-muted-foreground mb-4">تصميم احترافي للجميع</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">19 ريال</span>
                    <span className="bg-primary/20 text-primary text-[10px] px-2 py-1 rounded-full font-bold">خصم 50%</span>
                  </div>
                </motion.div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
