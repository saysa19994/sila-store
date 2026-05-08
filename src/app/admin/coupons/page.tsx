"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Ticket, Plus, Trash2, Calendar, Tag, Percent } from "lucide-react";

export default function CouponsPage() {
  const [coupons, setCoupons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [newCoupon, setNewCoupon] = useState({
    code: "",
    discount_type: "percentage",
    discount_value: "",
    min_order_amount: "0",
    expiry_date: ""
  });

  useEffect(() => {
    fetchCoupons();
  }, []);

  async function fetchCoupons() {
    const { data } = await supabase.from('coupons').select('*').order('created_at', { ascending: false });
    if (data) setCoupons(data);
    setLoading(false);
  }

  async function handleAddCoupon(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.from('coupons').insert([{
      ...newCoupon,
      discount_value: parseFloat(newCoupon.discount_value),
      min_order_amount: parseFloat(newCoupon.min_order_amount),
      expiry_date: newCoupon.expiry_date || null
    }]);

    if (!error) {
      setShowModal(false);
      fetchCoupons();
      setNewCoupon({ code: "", discount_type: "percentage", discount_value: "", min_order_amount: "0", expiry_date: "" });
    }
  }

  async function deleteCoupon(id: string) {
    if (confirm("هل أنت متأكد من حذف هذا الكوبون؟")) {
      await supabase.from('coupons').delete().eq('id', id);
      fetchCoupons();
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">إدارة الكوبونات</h1>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-primary text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-105 transition-all"
        >
          <Plus size={20} />
          إنشاء كوبون جديد
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coupons.map((coupon) => (
          <div key={coupon.id} className="bg-card border border-border p-6 rounded-[32px] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
            <div className="flex justify-between items-start mb-4">
              <div className="bg-primary/10 text-primary px-4 py-1 rounded-full font-black text-lg tracking-widest">
                {coupon.code}
              </div>
              <button onClick={() => deleteCoupon(coupon.id)} className="text-danger p-2 hover:bg-danger/10 rounded-xl transition-all">
                <Trash2 size={18} />
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                {coupon.discount_type === 'percentage' ? <Percent size={18} className="text-muted-foreground" /> : <Tag size={18} className="text-muted-foreground" />}
                <p className="font-bold">خصم {coupon.discount_value} {coupon.discount_type === 'percentage' ? '%' : 'ريال'}</p>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Calendar size={18} />
                <span>ينتهي في: {coupon.expiry_date ? new Date(coupon.expiry_date).toLocaleDateString('ar-SA') : 'غير محدد'}</span>
              </div>
              <div className="pt-4 border-t border-border flex justify-between items-center text-xs">
                 <span className="text-muted-foreground">استُخدم: {coupon.used_count} مرات</span>
                 <span className={`font-bold ${coupon.is_active ? 'text-success' : 'text-danger'}`}>
                   {coupon.is_active ? 'نشط' : 'متوقف'}
                 </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border w-full max-w-md rounded-[40px] p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
            <h2 className="text-2xl font-bold mb-6">إنشاء كوبون تسويقي</h2>
            <form onSubmit={handleAddCoupon} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-muted-foreground">كود الخصم (مثل: SILA20)</label>
                <input 
                  required
                  className="w-full bg-muted/50 border border-border rounded-xl p-4 outline-none focus:ring-2 focus:ring-primary"
                  value={newCoupon.code}
                  onChange={e => setNewCoupon({...newCoupon, code: e.target.value.toUpperCase()})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-muted-foreground">نوع الخصم</label>
                  <select 
                    className="w-full bg-muted/50 border border-border rounded-xl p-4 outline-none"
                    value={newCoupon.discount_type}
                    onChange={e => setNewCoupon({...newCoupon, discount_type: e.target.value})}
                  >
                    <option value="percentage">نسبة مئوية (%)</option>
                    <option value="fixed">مبلغ ثابت (ريال)</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-muted-foreground">القيمة</label>
                  <input 
                    required
                    type="number"
                    className="w-full bg-muted/50 border border-border rounded-xl p-4 outline-none"
                    value={newCoupon.discount_value}
                    onChange={e => setNewCoupon({...newCoupon, discount_value: e.target.value})}
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-4 font-bold text-muted-foreground">إلغاء</button>
                <button type="submit" className="flex-1 bg-primary text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary/20">تفعيل الكوبون</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
