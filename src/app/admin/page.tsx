"use client";

import React from "react";
import { 
  TrendingUp, 
  Users, 
  ShoppingBag, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight,
  Clock,
  ExternalLink
} from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const stats = [
    { label: "إجمالي المبيعات", value: "45,280 ريال", change: "+12.5%", trend: "up", icon: <DollarSign className="text-success" /> },
    { label: "الطلبات النشطة", value: "124", change: "+5.2%", trend: "up", icon: <ShoppingBag className="text-primary" /> },
    { label: "العملاء الجدد", value: "1,240", change: "-2.1%", trend: "down", icon: <Users className="text-info" /> },
    { label: "معدل التحويل", value: "3.2%", change: "+0.8%", trend: "up", icon: <TrendingUp className="text-secondary" /> },
  ];

  const recentOrders = [
    { id: "#SL-45920", customer: "أحمد محمد", product: "Adobe Creative Cloud", date: "منذ 5 دقائق", amount: "49 ريال", status: "مكتمل" },
    { id: "#SL-45919", customer: "سارة علي", product: "Canva Pro", date: "منذ 12 دقيقة", amount: "19 ريال", status: "قيد الانتظار" },
    { id: "#SL-45918", customer: "خالد فهد", product: "Netflix 4K", date: "منذ 25 دقيقة", amount: "25 ريال", status: "مكتمل" },
    { id: "#SL-45917", customer: "مريم إبراهيم", product: "ChatGPT Plus", date: "منذ ساعة", amount: "79 ريال", status: "مكتمل" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">نظرة عامة</h1>
          <p className="text-muted-foreground">أداء متجرك خلال الـ 30 يوماً الماضية.</p>
        </div>
        <button className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-primary/20">تصدير التقرير</button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-card border border-border p-6 rounded-[24px] space-y-4">
            <div className="flex items-center justify-between">
               <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center">
                  {stat.icon}
               </div>
               <div className={`flex items-center text-xs font-bold ${stat.trend === "up" ? "text-success" : "text-danger"}`}>
                  {stat.change}
                  {stat.trend === "up" ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
               </div>
            </div>
            <div>
               <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">{stat.label}</p>
               <h3 className="text-2xl font-black">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Recent Orders Table */}
         <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
               <h3 className="text-xl font-bold">آخر الطلبات</h3>
               <button className="text-primary text-sm font-bold hover:underline">عرض الكل</button>
            </div>
            <div className="bg-card border border-border rounded-[24px] overflow-hidden">
               <table className="w-full text-right text-sm">
                  <thead className="bg-muted/50 border-b border-border">
                     <tr>
                        <th className="px-6 py-4 font-bold">الطلب</th>
                        <th className="px-6 py-4 font-bold">العميل</th>
                        <th className="px-6 py-4 font-bold">الحالة</th>
                        <th className="px-6 py-4 font-bold">المبلغ</th>
                        <th className="px-6 py-4"></th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                     {recentOrders.map((order) => (
                        <tr key={order.id} className="hover:bg-muted/30 transition-all">
                           <td className="px-6 py-4">
                              <div className="flex flex-col">
                                 <span className="font-bold">{order.id}</span>
                                 <span className="text-[10px] text-muted-foreground">{order.product}</span>
                              </div>
                           </td>
                           <td className="px-6 py-4 font-medium">{order.customer}</td>
                           <td className="px-6 py-4">
                              <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                                 order.status === "مكتمل" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                              }`}>
                                 {order.status}
                              </span>
                           </td>
                           <td className="px-6 py-4 font-bold">{order.amount}</td>
                           <td className="px-6 py-4">
                              <button className="p-2 hover:bg-muted rounded-lg transition-all text-muted-foreground">
                                 <ExternalLink size={16} />
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>

         {/* Stock Alerts / Quick Actions */}
         <div className="space-y-6">
            <h3 className="text-xl font-bold">تنبيهات المخزون</h3>
            <div className="space-y-4">
               {[
                 { name: "Windows 11 Pro", stock: 2, status: "critical" },
                 { name: "Netflix Premium", stock: 5, status: "warning" },
               ].map((item, i) => (
                  <div key={i} className="bg-card border border-border p-4 rounded-2xl flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${item.status === "critical" ? "bg-danger animate-pulse" : "bg-warning"}`}></div>
                        <span className="font-bold text-sm">{item.name}</span>
                     </div>
                     <span className="text-xs text-muted-foreground">متبقي: {item.stock}</span>
                  </div>
               ))}
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-[24px] p-6 space-y-4">
               <h4 className="font-bold text-primary flex items-center gap-2">
                  <Clock size={18} />
                  مهام سريعة
               </h4>
               <div className="grid grid-cols-1 gap-2">
                   <Link href="/admin/products/new" className="w-full text-right px-4 py-2 bg-card border border-border rounded-xl text-xs font-bold hover:bg-primary hover:text-white transition-all block">إضافة منتج جديد</Link>
                   <Link href="/admin/coupons" className="w-full text-right px-4 py-2 bg-card border border-border rounded-xl text-xs font-bold hover:bg-primary hover:text-white transition-all block">إنشاء كود خصم</Link>
                  <button className="w-full text-right px-4 py-2 bg-card border border-border rounded-xl text-xs font-bold hover:bg-primary hover:text-white transition-all">إرسال نشرة بريدية</button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
