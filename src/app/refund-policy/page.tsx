import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, RefreshCcw, Clock } from "lucide-react";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-black">سياسة الاسترداد</h1>
          <p className="text-muted-foreground text-lg">نحن نهتم برضاكم وضمان حقوقكم في متجر صلة.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card p-6 rounded-3xl border border-border text-center space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-primary">
              <ShieldCheck />
            </div>
            <h3 className="font-bold">ضمان الخدمة</h3>
            <p className="text-sm text-muted-foreground">نضمن عمل جميع الاشتراكات طوال فترة الضمان المحددة.</p>
          </div>
          <div className="bg-card p-6 rounded-3xl border border-border text-center space-y-4">
            <div className="w-12 h-12 bg-success/10 rounded-2xl flex items-center justify-center mx-auto text-success">
              <RefreshCcw />
            </div>
            <h3 className="font-bold">استبدال فوري</h3>
            <p className="text-sm text-muted-foreground">في حال وجود مشكلة تقنية، نقوم باستبدال الحساب فوراً.</p>
          </div>
          <div className="bg-card p-6 rounded-3xl border border-border text-center space-y-4">
            <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto text-secondary">
              <Clock />
            </div>
            <h3 className="font-bold">استرداد نقدي</h3>
            <p className="text-sm text-muted-foreground">يتم الاسترداد النقدي في حال عدم القدرة على توفير الخدمة.</p>
          </div>
        </div>

        <div className="bg-card rounded-[32px] border border-border p-8 md:p-12 space-y-8 text-right leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">1. متى يحق لك طلب الاسترداد؟</h2>
            <p className="text-muted-foreground">
              يحق للعميل طلب استرداد المبلغ كاملاً في الحالات التالية:
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>إذا لم يتم تسليم المنتج الرقمي خلال 24 ساعة من وقت الطلب.</li>
                <li>إذا كان المنتج لا يعمل وتم إبلاغ الدعم الفني ولم يتم حل المشكلة خلال 48 ساعة.</li>
                <li>إذا كان المنتج مختلفاً تماماً عن الوصف المذكور في المتجر.</li>
              </ul>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">2. حالات لا يسري فيها الاسترداد</h2>
            <p className="text-muted-foreground">
              بسبب طبيعة المنتجات الرقمية، لا يمكننا قبول طلبات الاسترداد في الحالات التالية:
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>تغيير رأي العميل بعد استلام الكود أو الحساب وهو يعمل بشكل صحيح.</li>
                <li>سوء استخدام الحساب مما أدى لإغلاقه من قبل الشركة المزودة (مثل نتفلكس أو يوتيوب).</li>
                <li>إذا تم تجاوز فترة الضمان المحددة للمنتج.</li>
              </ul>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">3. آلية الاسترداد</h2>
            <p className="text-muted-foreground">
              بعد الموافقة على طلب الاسترداد من قبل الدعم الفني، يتم إعادة المبلغ إلى نفس الوسيلة التي تم الدفع بها خلال 3 إلى 7 أيام عمل، حسب سياسة البنك الخاص بك.
            </p>
          </section>

          <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="font-bold">هل لديك استفسار آخر؟</p>
            <Link href="https://wa.me/yournumber" className="bg-primary text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2">
              تواصل مع الدعم الفني
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
