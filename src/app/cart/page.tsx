"use client";

import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Trash2, Plus, Minus, ArrowLeft, Zap, ShieldCheck, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  // Mock cart items
  const cartItems = [
    {
      id: "1",
      name: "Adobe Creative Cloud",
      plan: "شهري",
      price: 49,
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Adobe_Creative_Cloud_logo_%282020%29.png",
      quantity: 1,
    }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-muted/20 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-12">سلة المشتريات</h1>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Cart Items List */}
            <div className="flex-1 space-y-6">
              {cartItems.length > 0 ? (
                <>
                  <div className="bg-card border border-border rounded-3xl overflow-hidden">
                    <table className="w-full text-right">
                      <thead className="bg-muted/50 border-b border-border hidden md:table-header-group">
                        <tr>
                          <th className="px-8 py-4 font-bold text-sm">المنتج</th>
                          <th className="px-8 py-4 font-bold text-sm">السعر</th>
                          <th className="px-8 py-4 font-bold text-sm">الكمية</th>
                          <th className="px-8 py-4 font-bold text-sm">المجموع</th>
                          <th className="px-8 py-4"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {cartItems.map((item) => (
                          <tr key={item.id} className="flex flex-col md:table-row p-6 md:p-0">
                            <td className="px-8 py-6">
                              <div className="flex items-center gap-6">
                                <div className="w-20 h-20 bg-muted rounded-2xl p-4 flex items-center justify-center flex-shrink-0">
                                  <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                                </div>
                                <div>
                                  <h4 className="font-bold text-lg">{item.name}</h4>
                                  <p className="text-sm text-muted-foreground">الخطة: {item.plan}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-8 py-6 hidden md:table-cell">
                              <span className="font-bold">{item.price} ريال</span>
                            </td>
                            <td className="px-8 py-6">
                              <div className="flex items-center gap-4 bg-muted w-fit rounded-xl px-2 py-1">
                                <button className="p-1 hover:text-primary transition-colors"><Minus size={16} /></button>
                                <span className="font-bold w-6 text-center">{item.quantity}</span>
                                <button className="p-1 hover:text-primary transition-colors"><Plus size={16} /></button>
                              </div>
                            </td>
                            <td className="px-8 py-6">
                              <span className="font-bold text-primary">{item.price * item.quantity} ريال</span>
                            </td>
                            <td className="px-8 py-6 text-left">
                               <button className="text-danger hover:bg-danger/10 p-2 rounded-xl transition-all">
                                 <Trash2 size={20} />
                               </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex items-center gap-4 text-muted-foreground p-6 bg-primary/5 rounded-2xl border border-primary/10">
                     <Zap size={24} className="text-primary" />
                     <p className="text-sm">هذا المنتج يدعم <strong>التسليم الفوري</strong>. ستصلك البيانات مباشرة بعد الدفع.</p>
                  </div>
                </>
              ) : (
                <div className="bg-card border border-border rounded-3xl p-20 text-center space-y-6">
                   <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto">
                      <ShoppingCart size={48} className="text-muted-foreground" />
                   </div>
                   <h2 className="text-2xl font-bold">سلتك فارغة حالياً</h2>
                   <p className="text-muted-foreground max-w-sm mx-auto">ابدأ باكتشاف أفضل الاشتراكات والخدمات الرقمية وأضفها إلى سلتك.</p>
                   <Link href="/shop" className="inline-flex bg-primary text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-primary/20">العودة للمتجر</Link>
                </div>
              )}
            </div>

            {/* Summary Sidebar */}
            <div className="w-full lg:w-96 space-y-6">
              <div className="bg-card border border-border rounded-[32px] p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-8">ملخص الطلب</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-muted-foreground">
                    <span>المجموع الفرعي</span>
                    <span className="font-bold text-foreground">{subtotal} ريال</span>
                  </div>
                  <div className="flex justify-between items-center text-muted-foreground">
                    <span>الضريبة (15%)</span>
                    <span className="font-bold text-foreground">0 ريال (شاملة)</span>
                  </div>
                  <div className="h-px bg-border my-4"></div>
                  <div className="flex justify-between items-center text-2xl font-bold">
                    <span>الإجمالي</span>
                    <span className="text-primary">{subtotal} ريال</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="كود الخصم" 
                      className="w-full bg-muted border border-transparent focus:border-primary rounded-xl py-3 px-4 focus:outline-none transition-all"
                    />
                    <button className="absolute left-2 top-1.5 bg-primary text-white px-4 py-1.5 rounded-lg text-sm font-bold">تطبيق</button>
                  </div>

                  <Link 
                    href="/checkout" 
                    className="flex w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg items-center justify-center gap-2 shadow-xl shadow-primary/30 hover:scale-[1.02] transition-all"
                  >
                    إتمام الطلب
                    <ArrowLeft className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="space-y-4">
                 <div className="flex items-center gap-3 text-sm text-muted-foreground">
                   <ShieldCheck className="w-5 h-5 text-success" />
                   <span>دفع آمن 100% ومشفر</span>
                 </div>
                 <div className="flex items-center gap-3 text-sm text-muted-foreground">
                   <Zap className="w-5 h-5 text-secondary" />
                   <span>تسليم فوري ومضمون</span>
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
