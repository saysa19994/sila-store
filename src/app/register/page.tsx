"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, User, Phone, ArrowLeft, Zap, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          full_name: formData.name,
          phone: formData.phone,
        }
      }
    });

    if (error) {
      setError(error.message || "حدث خطأ أثناء إنشاء الحساب.");
      setLoading(false);
    } else {
      // Typically show a verification message or redirect
      router.push("/login?message=check-email");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      {/* Left: Branding */}
      <div className="hidden lg:flex flex-1 bg-card border-l border-border p-12 flex-col justify-between relative">
         <div className="relative z-10">
            <Link href="/" className="flex items-center gap-2 mb-20">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">ص</span>
              </div>
              <span className="text-2xl font-bold">صلة<span className="text-primary">.</span></span>
            </Link>

            <div className="space-y-6">
               <h2 className="text-5xl font-bold leading-tight">ابدأ رحلتك <br /> <span className="text-secondary">في عالم الاشتراك</span></h2>
               <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                 أنشئ حسابك الآن لتتمتع بتجربة تسوق فريدة، دفع آمن، وتسليم لحظي لمشترياتك الرقمية.
               </p>
            </div>
         </div>
      </div>

      {/* Right: Form */}
      <div className="flex-1 flex items-center justify-center p-8 relative z-10">
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="w-full max-w-md space-y-8"
         >
            <div className="space-y-2">
               <h1 className="text-3xl font-bold">إنشاء حساب جديد</h1>
               <p className="text-muted-foreground">انضم لعائلة صلة واستمتع بالمميزات الحصرية.</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-5">
               {error && (
                 <div className="bg-danger/10 border border-danger/20 text-danger text-sm p-4 rounded-xl flex items-center gap-3">
                    <Zap className="w-5 h-5 flex-shrink-0" />
                    {error}
                 </div>
               )}

               <div className="space-y-4">
                  <div className="space-y-2">
                     <label className="text-sm font-bold mr-1">الاسم الكامل</label>
                     <div className="relative">
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="مثال: أحمد محمد"
                          className="w-full bg-card border border-border focus:border-primary rounded-2xl py-3 px-12 outline-none transition-all"
                        />
                        <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-bold mr-1">البريد الإلكتروني</label>
                     <div className="relative">
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="name@example.com"
                          className="w-full bg-card border border-border focus:border-primary rounded-2xl py-3 px-12 outline-none transition-all"
                        />
                        <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-bold mr-1">رقم الجوال</label>
                     <div className="relative">
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="05xxxxxxx"
                          className="w-full bg-card border border-border focus:border-primary rounded-2xl py-3 px-12 outline-none transition-all text-right"
                          dir="ltr"
                        />
                        <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-bold mr-1">كلمة المرور</label>
                     <div className="relative">
                        <input 
                          type="password" 
                          name="password"
                          required
                          value={formData.password}
                          onChange={handleInputChange}
                          placeholder="••••••••"
                          className="w-full bg-card border border-border focus:border-primary rounded-2xl py-3 px-12 outline-none transition-all"
                        />
                        <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                     </div>
                  </div>
               </div>

               <div className="flex items-start gap-2 px-1">
                  <input type="checkbox" required className="mt-1 accent-primary" id="terms" />
                  <label htmlFor="terms" className="text-xs text-muted-foreground leading-relaxed">
                     أوافق على <Link href="/terms" className="text-primary hover:underline">شروط الاستخدام</Link> و <Link href="/privacy" className="text-primary hover:underline">سياسة الخصوصية</Link> الخاصة بمتجر صلة.
                  </label>
               </div>

               <button 
                 disabled={loading}
                 className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all disabled:opacity-50"
               >
                 {loading ? "جاري الإنشاء..." : "إنشاء الحساب"}
               </button>
            </form>

            <div className="relative py-2">
               <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border"></span></div>
               <div className="relative flex justify-center text-xs uppercase"><span className="bg-background px-4 text-muted-foreground">أو التسجيل عبر</span></div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-card border border-border py-3 rounded-xl hover:bg-muted transition-all font-bold text-sm">
               <Globe className="w-5 h-5 text-danger" />
               Google
            </button>

            <p className="text-center text-sm text-muted-foreground">
               لديك حساب بالفعل؟{" "}
               <Link href="/login" className="text-primary font-bold hover:underline">تسجيل الدخول</Link>
            </p>
         </motion.div>
      </div>
    </div>
  );
}
