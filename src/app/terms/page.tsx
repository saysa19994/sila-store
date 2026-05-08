"use client";

import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card border border-border rounded-[32px] p-8 md:p-12 space-y-10 shadow-sm">
             <div className="space-y-4">
                <h1 className="text-4xl font-bold">شروط الاستخدام</h1>
                <p className="text-muted-foreground">آخر تحديث: 8 مايو 2024</p>
             </div>

             <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">1. مقدمة</h2>
                <p className="leading-relaxed text-muted-foreground">
                  باستخدامك لمتجر صلة، فأنت توافق على الالتزام بالشروط والأحكام التالية. يرجى قراءتها بعناية قبل إتمام أي عملية شراء.
                </p>
             </section>

             <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">2. المنتجات الرقمية</h2>
                <p className="leading-relaxed text-muted-foreground">
                  جميع المنتجات المباعة في المتجر هي منتجات رقمية (أكواد تفعيل، اشتراكات، حسابات). بمجرد استلام الكود أو تفعيل الخدمة، لا يمكن استرجاع المنتج إلا في حال وجود خلل فني في الكود نفسه.
                </p>
             </section>

             <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">3. سياسة الاسترجاع</h2>
                <p className="leading-relaxed text-muted-foreground">
                  نظراً لطبيعة المنتجات الرقمية، فإننا نعتذر عن استرجاع المبالغ بعد استلام الكود إلا في الحالات التالية:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
                   <li>إذا كان الكود المرسل لا يعمل وتم إثبات ذلك بالصور أو الفيديو.</li>
                   <li>إذا تم التأخر في تسليم المنتج لأكثر من 24 ساعة (في حال لم يكن المنتج تسليماً فورياً).</li>
                </ul>
             </section>

             <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">4. مسؤولية المستخدم</h2>
                <p className="leading-relaxed text-muted-foreground">
                  المستخدم مسؤول عن التأكد من توافق المنتج مع جهازه أو منطقته الجغرافية قبل الشراء. المتجر غير مسؤول عن أي سوء استخدام أو مخالفة لشروط شركة الخدمة الأصلية (مثل Adobe أو Netflix).
                </p>
             </section>

             <div className="pt-10 border-t border-border flex items-center justify-center">
                <p className="text-sm text-muted-foreground">إذا كان لديك أي استفسار حول هذه الشروط، يرجى التواصل معنا عبر البريد: legal@sila.store</p>
             </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
