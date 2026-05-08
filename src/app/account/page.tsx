"use client";

import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { 
  User, 
  Package, 
  Heart, 
  Settings, 
  LogOut, 
  Zap, 
  Gift, 
  ChevronLeft,
  Clock,
  ExternalLink
} from "lucide-react";
import Link from "next/link";

export default function AccountPage() {
  const user = {
    name: "أحمد بن محمد",
    email: "ahmad@example.com",
    points: 450,
    joinDate: "مايو 2024"
  };

  const activeSubscriptions = [
    { id: "1", name: "Adobe Creative Cloud", status: "نشط", expiry: "2024-06-15", type: "شهري" },
    { id: "2", name: "Canva Pro", status: "نشط", expiry: "2024-12-30", type: "سنوي" }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-muted/20 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Navigation */}
            <aside className="w-full lg:w-80 space-y-6">
              <div className="bg-card border border-border rounded-[32px] p-8">
                 <div className="flex flex-col items-center text-center space-y-4 mb-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center border-4 border-background">
                       <User size={48} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">{user.name}</h3>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                 </div>

                 <nav className="space-y-1">
                    {[
                      { id: "overview", label: "نظرة عامة", icon: <Package size={20} />, active: true },
                      { id: "orders", label: "طلباتي", icon: <Clock size={20} /> },
                      { id: "wishlist", label: "المفضلة", icon: <Heart size={20} /> },
                      { id: "referral", label: "برنامج الإحالة", icon: <Gift size={20} /> },
                      { id: "settings", label: "الإعدادات", icon: <Settings size={20} /> },
                    ].map((item) => (
                      <button
                        key={item.id}
                        className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all ${
                          item.active ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {item.icon}
                          <span className="font-bold">{item.label}</span>
                        </div>
                        <ChevronLeft size={16} className={item.active ? "opacity-100" : "opacity-0"} />
                      </button>
                    ))}
                    <button className="w-full flex items-center gap-3 px-6 py-4 rounded-2xl text-danger hover:bg-danger/5 transition-all mt-4 font-bold">
                       <LogOut size={20} />
                       خروج
                    </button>
                 </nav>
              </div>

              {/* Loyalty Points Card */}
              <div className="bg-primary border border-white/10 rounded-[32px] p-8 text-white relative overflow-hidden group">
                 <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4 opacity-80">
                       <Gift size={20} />
                       <span className="text-xs font-bold uppercase tracking-widest">نقاط الولاء</span>
                    </div>
                    <div className="text-4xl font-black mb-2">{user.points} <span className="text-lg font-bold">نقطة</span></div>
                    <p className="text-xs text-white/70 mb-6 leading-relaxed">لديك نقاط كافية للحصول على خصم 20 ريال على طلبك القادم!</p>
                    <button className="w-full bg-white text-primary py-3 rounded-xl font-bold text-sm hover:scale-105 transition-all">استبدل النقاط الآن</button>
                 </div>
                 <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-all"></div>
              </div>
            </aside>

            {/* Dashboard Content */}
            <div className="flex-1 space-y-8">
               {/* Welcome Banner */}
               <div className="bg-card border border-border rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="space-y-2 text-center md:text-right">
                    <h2 className="text-3xl font-bold">أهلاً بك مجدداً، أحمد 👋</h2>
                    <p className="text-muted-foreground">هنا يمكنك إدارة اشتراكاتك، تتبع طلباتك، وتحميل بيانات التفعيل.</p>
                  </div>
                  <div className="flex gap-4">
                     <div className="bg-muted p-4 rounded-2xl text-center min-w-[120px]">
                        <div className="text-2xl font-bold text-primary">05</div>
                        <div className="text-[10px] text-muted-foreground font-bold">إجمالي الطلبات</div>
                     </div>
                     <div className="bg-muted p-4 rounded-2xl text-center min-w-[120px]">
                        <div className="text-2xl font-bold text-secondary">02</div>
                        <div className="text-[10px] text-muted-foreground font-bold">اشتراكات نشطة</div>
                     </div>
                  </div>
               </div>

               {/* Active Subscriptions */}
               <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                       <Zap className="text-primary" />
                       اشتراكاتي النشطة
                    </h3>
                    <Link href="/account/subscriptions" className="text-primary text-sm font-bold hover:underline">عرض الكل</Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {activeSubscriptions.map((sub) => (
                       <div key={sub.id} className="bg-card border border-border rounded-3xl p-6 hover:shadow-lg transition-all">
                          <div className="flex justify-between items-start mb-6">
                             <div className="w-12 h-12 bg-muted rounded-xl p-2 flex items-center justify-center">
                                <img 
                                  src={sub.name.includes("Adobe") ? "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Creative_Cloud_logo_2020.svg" : "https://upload.wikimedia.org/wikipedia/commons/3/34/Canva_logo_2021.svg"} 
                                  alt={sub.name} 
                                  className="w-full h-full object-contain"
                                />
                             </div>
                             <span className="bg-success/10 text-success text-[10px] font-bold px-2 py-1 rounded-full">{sub.status}</span>
                          </div>
                          <h4 className="font-bold text-lg mb-1">{sub.name}</h4>
                          <div className="flex items-center justify-between text-xs text-muted-foreground mb-6">
                             <span>الخطة: {sub.type}</span>
                             <span>تنتهي في: {sub.expiry}</span>
                          </div>
                          <div className="flex gap-2">
                             <button className="flex-1 bg-primary text-white py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2">
                                <ExternalLink size={14} />
                                بيانات التفعيل
                             </button>
                             <button className="flex-1 bg-muted hover:bg-border py-3 rounded-xl text-xs font-bold transition-all">تجديد</button>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Recent Orders */}
               <div className="space-y-6">
                  <h3 className="text-2xl font-bold">آخر الطلبات</h3>
                  <div className="bg-card border border-border rounded-[32px] overflow-hidden">
                     <table className="w-full text-right">
                        <thead className="bg-muted/50 border-b border-border">
                           <tr>
                              <th className="px-8 py-4 font-bold text-sm">رقم الطلب</th>
                              <th className="px-8 py-4 font-bold text-sm">التاريخ</th>
                              <th className="px-8 py-4 font-bold text-sm">الحالة</th>
                              <th className="px-8 py-4 font-bold text-sm">المجموع</th>
                              <th className="px-8 py-4 font-bold text-sm"></th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                           {[
                             { id: "#SL-45920", date: "2024-05-01", status: "مكتمل", total: "49 ريال" },
                             { id: "#SL-45812", date: "2024-04-15", status: "مكتمل", total: "19 ريال" },
                           ].map((order) => (
                             <tr key={order.id} className="hover:bg-muted/30 transition-all">
                                <td className="px-8 py-6 font-bold">{order.id}</td>
                                <td className="px-8 py-6 text-sm text-muted-foreground">{order.date}</td>
                                <td className="px-8 py-6">
                                   <span className="bg-success/10 text-success text-[10px] font-bold px-2 py-1 rounded-full">{order.status}</span>
                                </td>
                                <td className="px-8 py-6 font-bold text-primary">{order.total}</td>
                                <td className="px-8 py-6 text-left">
                                   <button className="text-primary hover:underline text-sm font-bold">التفاصيل</button>
                                </td>
                             </tr>
                           ))}
                        </tbody>
                     </table>
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
