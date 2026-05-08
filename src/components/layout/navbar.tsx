"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Menu, Globe, CreditCard, LogOut, LayoutDashboard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useAuth } from "@/components/providers/auth-provider";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { user, signOut } = useAuth();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button className="p-2 text-foreground">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="text-white font-bold text-xl">ص</span>
          </div>
          <span className="text-2xl font-bold tracking-tight hidden sm:block">
            صلة<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Search Bar - Desktop */}
        <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="ابحث عن اشتراك (أدوبي، نتفلكس، كانفا...)"
              className="w-full bg-card/50 border border-border rounded-full py-2 px-10 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Currency/Lang Switcher */}
          <button className="hidden sm:flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
            <CreditCard className="w-4 h-4" />
            <span>SAR</span>
          </button>

          <div className="h-6 w-px bg-border hidden sm:block"></div>

          {/* Cart */}
          <Link href="/cart" className="relative p-2 text-foreground hover:text-primary transition-colors">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-secondary text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>

          {/* Account/User Actions */}
          {user ? (
            <div className="flex items-center gap-3">
               <Link
                href="/account"
                className="flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-full transition-all duration-300 font-medium"
              >
                <User className="w-5 h-5" />
                <span className="hidden sm:block">حسابي</span>
              </Link>
              <button 
                onClick={() => signOut()}
                className="p-2 text-muted-foreground hover:text-danger transition-colors"
                title="تسجيل الخروج"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-2 bg-primary text-white hover:scale-105 px-6 py-2 rounded-full transition-all duration-300 font-bold shadow-lg shadow-primary/20"
            >
              <User className="w-5 h-5" />
              <span className="hidden sm:block">دخول</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
