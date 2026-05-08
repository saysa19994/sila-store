"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ShieldCheck, Lock, Zap, ArrowRight, CreditCard } from "lucide-react";
import Link from "next/link";
import MoyasarPayment from "@/components/checkout/moyasar-payment";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);

  // In a real app, you would fetch these from a cart context/store
  const cartSummary = {
    total: 49,
    itemsCount: 1,
    currency: "SAR"
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-muted/20 min-h-screen">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left: Payment Method & Details */}
            <div className="flex-1 space-y-8">
               <div className="bg-card border border-border rounded-[32px] p-8 md:p-10 shadow-sm">
                  <h1 className="text-2xl font-bold mb-8 flex items-center gap-3">
                     <CreditCard className="text-primary" />
                     إتمام عملية الدفع
                  </h1>

                  {/* Moyasar Payment Form Container */}
                  <div className="space-y-6">
                     <div className="p-6 bg-muted/50 rounded-2xl border border-dashed border-border text-center space-y-4">
                        <p className="text-sm text-muted-foreground">سيتم معالجة الدفع بشكل آمن عبر بوابة <strong>Moyasar</strong></p>
                        <div className="flex items-center justify-center gap-4 opacity-70 grayscale">
                           <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" alt="Apple Pay" className="h-6" />
                           <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                           <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6" />
                        </div>
                     </div>

                  {/* Moyasar Payment Form */}
                  <div className="pt-4">
                     <MoyasarPayment 
                       amount={4900} 
                       description="Adobe Creative Cloud Subscription - Sila Store" 
                       onSuccess={(id) => {
                         console.log("Payment Success:", id);
                         // Redirect to confirmation
                         window.location.href = "/order-confirmation";
                       }}
                     />
                  </div>
                  </div>
               </div>

               {/* Trust Badges */}
               <div className="flex flex-col sm:flex-row items-center justify-center gap-8 py-4 opacity-60">
                  <div className="flex items-center gap-2 text-sm">
                     <ShieldCheck size={18} className="text-success" />
                     <span>تشفير SSL آمن</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                     <Lock size={18} className="text-primary" />
                     <span>معتمد من PCI DSS</span>
                  </div>
               </div>
            </div>

            {/* Right: Order Summary */}
            <div className="w-full lg:w-96">
               <div className="bg-card border border-border rounded-[32px] p-8 sticky top-32">
                  <h3 className="font-bold text-lg mb-6 pb-4 border-b border-border">ملخص الطلب</h3>
                  
                  <div className="space-y-4 mb-8">
                     <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-muted rounded-xl p-3 flex items-center justify-center">
                           <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Creative_Cloud_logo_2020.svg" alt="product" />
                        </div>
                        <div className="flex-1">
                           <h4 className="font-bold text-sm">Adobe Creative Cloud</h4>
                           <p className="text-xs text-muted-foreground">اشتراك شهري</p>
                        </div>
                        <span className="font-bold text-sm">49 ريال</span>
                     </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-border">
                     <div className="flex justify-between text-sm text-muted-foreground">
                        <span>المجموع</span>
                        <span>49 ريال</span>
                     </div>
                     <div className="flex justify-between text-sm text-muted-foreground">
                        <span>الضريبة</span>
                        <span>0 ريال</span>
                     </div>
                     <div className="flex justify-between text-xl font-bold text-primary pt-2">
                        <span>الإجمالي</span>
                        <span>49 ريال</span>
                     </div>
                  </div>

                  <div className="mt-8 p-4 bg-primary/5 rounded-2xl border border-primary/10">
                     <div className="flex gap-3">
                        <Zap className="w-5 h-5 text-primary shrink-0" />
                        <p className="text-[11px] text-muted-foreground leading-relaxed">
                           بمجرد النقر على "تأكيد الدفع"، سيتم تفعيل اشتراكك **فوراً** وستظهر بيانات الدخول في الصفحة التالية.
                        </p>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
