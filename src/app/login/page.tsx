"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, ArrowLeft, Zap, Globe, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("فشل تسجيل الدخول. يرجى التحقق من بياناتك.");
      setLoading(false);
    } else {
      router.push("/account");
    }
  };

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      {/* Left: Branding/Visual */}
      <div className="hidden lg:flex flex-1 bg-card border-l border-border p-12 flex-col justify-between relative overflow-hidden">
         <div className="relative z-10">
            <Link href="/" className="flex items-center gap-2 mb-20">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">ص</span>
              </div>
              <span className="text-2xl font-bold">صلة<span className="text-primary">.</span></span>
            </Link>

            <div className="space-y-6">
               <h2 className="text-5xl font-bold leading-tight">عد إلينا واستمتع <br /> <span className="text-primary">بمنتجاتك الرقمية</span></h2>
               <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                 سجل دخولك الآن للوصول إلى اشتراكاتك، تحميل الأكواد، وتتبع طلباتك في مكان واحد.
               </p>
            </div>
         </div>

         <div className="relative z-10 flex items-center gap-8">
            <div className="flex -space-x-3 rtl:space-x-reverse">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-card bg-muted flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/40?u=${i}`} alt="user" />
                 </div>
               ))}
            </div>
            <p className="text-sm text-muted-foreground">انضم إلى +50,000 عميل سعيد</p>
         </div>

         {/* Floating UI Element */}
         <div className="absolute top-1/2 right-1/2 translate-x-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Right: Form */}
      <div className="flex-1 flex items-center justify-center p-8 relative z-10">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="w-full max-w-md space-y-8"
         >
            <div className="space-y-2">
               <h1 className="text-3xl font-bold">تسجيل الدخول</h1>
               <p className="text-muted-foreground">أهلاً بك مجدداً في متجر صلة.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
               {error && (
                 <div className="bg-danger/10 border border-danger/20 text-danger text-sm p-4 rounded-xl flex items-center gap-3 animate-shake">
                    <Zap className="w-5 h-5 flex-shrink-0" />
                    {error}
                 </div>
               )}

               <div className="space-y-4">
                  <div className="space-y-2">
                     <label className="text-sm font-bold mr-1">البريد الإلكتروني</label>
                     <div className="relative">
                        <input 
                          type="email" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@example.com"
                          className="w-full bg-card border border-border focus:border-primary rounded-2xl py-3 px-12 outline-none transition-all"
                        />
                        <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <div className="flex justify-between items-center px-1">
                        <label className="text-sm font-bold">كلمة المرور</label>
                        <Link href="/forgot-password" className="text-xs text-primary hover:underline">نسيت كلمة المرور؟</Link>
                     </div>
                     <div className="relative">
                        <input 
                          type="password" 
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••"
                          className="w-full bg-card border border-border focus:border-primary rounded-2xl py-3 px-12 outline-none transition-all"
                        />
                        <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                     </div>
                  </div>
               </div>

               <button 
                 disabled={loading}
                 className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none"
               >
                 {loading ? "جاري التحميل..." : "دخول"}
               </button>
            </form>

            <div className="relative">
               <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border"></span></div>
               <div className="relative flex justify-center text-xs uppercase"><span className="bg-background px-4 text-muted-foreground">أو الدخول عبر</span></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <button 
                 onClick={handleGoogleLogin}
                 className="flex items-center justify-center gap-2 bg-card border border-border py-3 rounded-xl hover:bg-muted transition-all font-bold text-sm"
               >
                  <Globe className="w-5 h-5 text-danger" />
                  Google
               </button>
               <button className="flex items-center justify-center gap-2 bg-card border border-border py-3 rounded-xl hover:bg-muted transition-all font-bold text-sm">
                  <Shield className="w-5 h-5" />
                  GitHub
               </button>
            </div>

            <p className="text-center text-sm text-muted-foreground">
               ليس لديك حساب؟{" "}
               <Link href="/register" className="text-primary font-bold hover:underline">أنشئ حسابك الآن</Link>
            </p>
         </motion.div>
      </div>

      {/* Back to Home */}
      <Link href="/" className="absolute top-8 left-8 p-3 rounded-full bg-card border border-border hover:text-primary transition-all lg:hidden">
         <ArrowLeft className="w-6 h-6 rotate-180" />
      </Link>
    </div>
  );
}
