"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Package, Image as ImageIcon, Save, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NewProductPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    title_ar: "",
    title_en: "",
    slug: "",
    description_ar: "",
    description_en: "",
    price_monthly: "",
    price_yearly: "",
    image_url: "",
    category_id: "",
    delivery_type: "instant",
    is_featured: false
  });

  // Fetch categories for the dropdown
  useEffect(() => {
    async function loadCategories() {
      const { data } = await supabase.from('categories').select('*');
      if (data) setCategories(data);
    }
    loadCategories();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('products').insert([
        {
          ...formData,
          price_monthly: parseFloat(formData.price_monthly),
          price_yearly: formData.price_yearly ? parseFloat(formData.price_yearly) : null,
          slug: formData.title_en.toLowerCase().replace(/\s+/g, '-') || formData.slug
        }
      ]);

      if (error) throw error;

      setSuccess(true);
      setTimeout(() => router.push('/admin'), 2000);
    } catch (error: any) {
      alert("Error adding product: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <CheckCircle2 size={80} className="text-success animate-bounce" />
        <h2 className="text-2xl font-bold">تم إضافة المنتج بنجاح!</h2>
        <p className="text-muted-foreground">جاري العودة للوحة الإدارة...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <Link href="/admin" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all">
          <ArrowRight size={20} />
          <span>العودة للوحة الإدارة</span>
        </Link>
        <h1 className="text-3xl font-bold">إضافة منتج جديد</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Info Card */}
        <div className="bg-card border border-border p-8 rounded-[32px] shadow-sm space-y-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Package className="text-primary" />
            المعلومات الأساسية
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold">اسم المنتج (بالعربي)</label>
              <input 
                required
                type="text" 
                placeholder="مثلاً: أدوبي بريمير"
                className="w-full bg-muted/50 border border-border rounded-xl p-4 focus:ring-2 focus:ring-primary/50 outline-none"
                value={formData.title_ar}
                onChange={(e) => setFormData({...formData, title_ar: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold">اسم المنتج (English)</label>
              <input 
                required
                type="text" 
                placeholder="e.g. Adobe Premiere"
                className="w-full bg-muted/50 border border-border rounded-xl p-4 focus:ring-2 focus:ring-primary/50 outline-none text-left"
                dir="ltr"
                value={formData.title_en}
                onChange={(e) => setFormData({...formData, title_en: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold">الوصف (بالعربي)</label>
            <textarea 
              rows={4}
              placeholder="وصف تفصيلي للمنتج..."
              className="w-full bg-muted/50 border border-border rounded-xl p-4 focus:ring-2 focus:ring-primary/50 outline-none"
              value={formData.description_ar}
              onChange={(e) => setFormData({...formData, description_ar: e.target.value})}
            />
          </div>
        </div>

        {/* Pricing & Category Card */}
        <div className="bg-card border border-border p-8 rounded-[32px] shadow-sm space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold">السعر الشهري (ريال)</label>
              <input 
                required
                type="number" 
                placeholder="49"
                className="w-full bg-muted/50 border border-border rounded-xl p-4 focus:ring-2 focus:ring-primary/50 outline-none"
                value={formData.price_monthly}
                onChange={(e) => setFormData({...formData, price_monthly: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold">السعر السنوي / قبل الخصم</label>
              <input 
                type="number" 
                placeholder="150"
                className="w-full bg-muted/50 border border-border rounded-xl p-4 focus:ring-2 focus:ring-primary/50 outline-none"
                value={formData.price_yearly}
                onChange={(e) => setFormData({...formData, price_yearly: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold">الفئة</label>
              <select 
                required
                className="w-full bg-muted/50 border border-border rounded-xl p-4 focus:ring-2 focus:ring-primary/50 outline-none"
                value={formData.category_id}
                onChange={(e) => setFormData({...formData, category_id: e.target.value})}
              >
                <option value="">اختر الفئة...</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name_ar}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Image & Settings Card */}
        <div className="bg-card border border-border p-8 rounded-[32px] shadow-sm space-y-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <ImageIcon className="text-primary" />
            الصورة والإعدادات
          </h3>
          <div className="space-y-2">
            <label className="text-sm font-bold">رابط صورة المنتج (URL)</label>
            <input 
              required
              type="text" 
              placeholder="https://example.com/image.png"
              className="w-full bg-muted/50 border border-border rounded-xl p-4 focus:ring-2 focus:ring-primary/50 outline-none text-left"
              dir="ltr"
              value={formData.image_url}
              onChange={(e) => setFormData({...formData, image_url: e.target.value})}
            />
          </div>
          
          <div className="flex items-center gap-6 pt-4">
             <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 rounded-lg border-border text-primary focus:ring-primary"
                  checked={formData.is_featured}
                  onChange={(e) => setFormData({...formData, is_featured: e.target.checked})}
                />
                <span className="font-bold">منتج مميز (يظهر في الصفحة الرئيسية)</span>
             </label>
          </div>
        </div>

        <button 
          disabled={loading}
          type="submit" 
          className="w-full bg-primary text-white py-6 rounded-2xl font-bold text-xl shadow-2xl shadow-primary/20 hover:scale-[1.01] transition-all disabled:opacity-50"
        >
          {loading ? "جاري الحفظ..." : "حفظ المنتج ونشره"}
        </button>
      </form>
    </div>
  );
}
