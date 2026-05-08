"use client";

import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Trash2, Plus, Minus, ArrowLeft, Zap, ShieldCheck, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/cart-context";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-muted/20 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-12">سلة المشتريات</h1>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 space-y-6">
              {cart.length > 0 ? (
                <>
                  <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm">
                    <table className="w-full text-right">
                      <thead className="bg-muted/50 border-b border-border hidden md:table-header-group">
                        <tr>
                          <th className="px-8 py-4 font-bold text-sm text-muted-foreground">المنتج</th>
                          <th className="px-8 py-4 font-bold text-sm text-muted-foreground">السعر</th>
                          <th className="px-8 py-4 font-bold text-sm text-muted-foreground">الكمية</th>
                          <th className="px-8 py-4 font-bold text-sm text-muted-foreground">المجموع</th>
                          <th className="px-8 py-4"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {cart.map((item) => (
                          <tr key={item.id} className="flex flex-col md:table-row p-6 md:p-0">
                            <td className="px-8 py-6">
                              <div className="flex items-center gap-6">
                                <div className="w-20 h-20 bg-muted rounded-2xl p-4 flex items-center justify-center flex-shrink-0">
                                  <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                                </div>
                                <div>
                                  <h4 className="font-bold text-lg">{item.name}</h4>
                                  <p className="text-sm text-muted-foreground">الخطة: {item.plan || 'شهري'}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-8 py-6 hidden md:table-cell">
                              <span className="font-bold">{item.price} ريال</span>
                            </td>
                            <td className="px-8 py-6">
                              <div className="flex items-center gap-4 bg-muted w-fit rounded-xl px-2 py-1 border border-border/50">
                                <button 
                                  onClick={() => updateQuantity(item.id, -1)} 
                                  className="p-1 hover:text-primary transition-colors hover:bg-background rounded-lg"
                                >
                                  <Minus size={16} />
                                </button>
                                <span className="font-bold w-6 text-center">{item.quantity}</span>
                                <button 
                                  onClick={() => updateQuantity(item.id, 1)} 
                                  className="p-1 hover:text-primary transition-colors hover:bg-background rounded-lg"
                                >
                                  <Plus size={16} />
                                </button>
                              </div>
                            </td>
                            <td className="px-8 py-6">
                              <span className="font-bold text-primary">{item.price * item.quantity} ريال</span>
                            </td>
                            <td className="px-8 py-6 text-left">
                               <button 
                                 onClick={() => removeFromCart(item.id)} 
                                 className="text-danger hover:bg-danger/10 p-2 rounded-xl transition-all"
                                 title="حذف المنتج"
                               >
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
                <div className="bg-card border border-border rounded-[40px] p-20 text-center space-y-6 shadow-xl shadow-primary/5">
                   <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto animate-bounce">
                      <ShoppingCart size={48} />
                   </div>
                   <h2 className="text-3xl font-bold">سلتك فارغة</h2>
                   <p className="text-muted-foreground max-w-sm mx-auto text-lg">لم تقم بإضافة أي منتج حتى الآن. استكشف متجرنا وابدأ التسوق!</p>
                   <Link href="/shop" className="inline-flex bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-all">اكتشف المنتجات</Link>
                </div>
              )}
            </div>

            {/* Summary Sidebar */}
            {cart.length > 0 && (
              <div className="w-full lg:w-96 space-y-6">
                <div className="bg-card border border-border rounded-[40px] p-8 shadow-xl shadow-primary/5 sticky top-32">
                  <h3 className="text-xl font-bold mb-8">ملخص الطلب</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center text-muted-foreground">
                      <span>المجموع الفرعي</span>
                      <span className="font-bold text-foreground">{cartTotal} ريال</span>
                    </div>
                    <div className="flex justify-between items-center text-muted-foreground">
                      <span>الضريبة (15%)</span>
                      <span className="font-bold text-foreground">0 ريال (شاملة)</span>
                    </div>
                    <div className="h-px bg-border my-4"></div>
                    <div className="flex justify-between items-center text-2xl font-bold">
                      <span>الإجمالي</span>
                      <span className="text-primary">{cartTotal} ريال</span>
                    </div>
                  </div>

                  <Link 
                    href="/checkout" 
                    className="flex w-full bg-primary text-white py-5 rounded-2xl font-bold text-xl items-center justify-center gap-3 shadow-xl shadow-primary/30 hover:scale-[1.02] transition-all"
                  >
                    إتمام الطلب
                    <ArrowLeft className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
