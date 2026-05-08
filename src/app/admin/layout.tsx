"use client";

import React from "react";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings, 
  Bell, 
  Search,
  Menu
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted/30 flex rtl">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-l border-border hidden lg:flex flex-col">
        <div className="p-6 border-b border-border">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">ص</span>
            </div>
            <span className="font-bold text-xl">لوحة الإدارة</span>
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {[
            { label: "الرئيسية", icon: <LayoutDashboard size={20} />, href: "/admin", active: true },
            { label: "المنتجات", icon: <Package size={20} />, href: "/admin/products" },
            { label: "الطلبات", icon: <ShoppingCart size={20} />, href: "/admin/orders" },
            { label: "العملاء", icon: <Users size={20} />, href: "/admin/customers" },
            { label: "التقارير", icon: <BarChart3 size={20} />, href: "/admin/reports" },
            { label: "الإعدادات", icon: <Settings size={20} />, href: "/admin/settings" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                item.active ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {item.icon}
              <span className="font-bold text-sm">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
           <div className="bg-muted rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">A</div>
              <div className="flex flex-col overflow-hidden">
                 <span className="text-xs font-bold truncate">المدير العام</span>
                 <span className="text-[10px] text-muted-foreground">تعديل الملف</span>
              </div>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-8 sticky top-0 z-40">
           <div className="flex items-center gap-4 flex-1">
              <button className="lg:hidden p-2"><Menu size={20} /></button>
              <div className="relative max-w-md w-full">
                 <input 
                   type="text" 
                   placeholder="ابحث عن طلب، عميل، أو منتج..." 
                   className="w-full bg-muted border-none rounded-xl py-2 px-10 text-sm focus:ring-2 focus:ring-primary/50 outline-none"
                 />
                 <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              </div>
           </div>
           
           <div className="flex items-center gap-4">
              <button className="relative p-2 text-muted-foreground hover:text-primary transition-colors">
                 <Bell size={20} />
                 <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full border-2 border-card"></span>
              </button>
              <div className="h-6 w-px bg-border"></div>
              <Link href="/" className="text-sm font-bold text-primary hover:underline">عرض المتجر</Link>
           </div>
        </header>
        
        <main className="flex-1 p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
