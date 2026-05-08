"use client";

import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card border border-border rounded-[32px] p-8 md:p-12 space-y-10 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
             
             <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                   <ShieldCheck size={24} />
                </div>
                <h1 className="text-4xl font-bold">سياسة الخصوصية</h1>
                <p className="text-muted-foreground">خصوصيتك هي أولويتنا في متجر صلة.</p>
             </div>

             <section className="space-y-4">
                <h2 className="text-2xl font-bold">1. المعلومات التي نجمعها</h2>
                <p className="leading-relaxed text-muted-foreground">
                  نحن نجمع فقط المعلومات الضرورية لإتمام طلبك وتقديم الدعم الفني، وهي:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
                   <li>الاسم الكامل.</li>
                   <li>عنوان البريد الإلكتروني.</li>
                   <li>رقم الجوال (لإرسال أكواد التفعيل عبر الواتساب).</li>
                   <li>بيانات الطلبات والمشتريات.</li>
                </ul>
             </section>

             <section className="space-y-4">
                <h2 className="text-2xl font-bold">2. حماية البيانات المالية</h2>
                <p className="leading-relaxed text-muted-foreground">
                  نحن لا نقوم بتخزين أي بيانات لبطاقاتك الائتمانية. جميع عمليات الدفع تتم عبر بوابة **Moyasar** المشفرة والمعتمدة من مؤسسة النقد السعودي (ساما).
                </p>
             </section>

             <section className="space-y-4">
                <h2 className="text-2xl font-bold">3. كيف نستخدم معلوماتك؟</h2>
                <p className="leading-relaxed text-muted-foreground">
                  نستخدم معلوماتك في:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
                   <li>معالجة طلباتك وتسليم المنتجات فورياً.</li>
                   <li>التواصل معك في حال وجود تحديثات على اشتراكك.</li>
                   <li>تحسين تجربة التسوق في المتجر.</li>
                </ul>
             </section>

             <section className="space-y-4">
                <h2 className="text-2xl font-bold">4. الكوكيز (Cookies)</h2>
                <p className="leading-relaxed text-muted-foreground">
                  نستخدم ملفات تعريف الارتباط لتحسين أداء الموقع وحفظ تفضيلاتك (مثل الوضع الداكن أو اللغة).
                </p>
             </section>

             <div className="pt-10 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">بشراءك من المتجر، فأنت توافق على سياسة الخصوصية هذه.</p>
             </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
