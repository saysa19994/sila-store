import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle, Send, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">ص</span>
              </div>
              <span className="text-2xl font-bold">صلة<span className="text-primary">.</span></span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              أكبر متجر عربي للاشتراكات الرقمية. نوفر لك أفضل الأدوات والخدمات بأسعار تنافسية مع تسليم فوري وضمان كامل.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Send className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Globe className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <MessageCircle className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/shop" className="hover:text-primary transition-colors">المتجر الكامل</Link></li>
              <li><Link href="/account" className="hover:text-primary transition-colors">حسابي</Link></li>
              <li><Link href="/admin" className="hover:text-primary transition-colors">لوحة الإدارة</Link></li>
              <li><Link href="/register" className="hover:text-primary transition-colors">انضم إلينا</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6">الدعم والمساعدة</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/faq" className="hover:text-primary transition-colors">الأسئلة الشائعة</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">شروط الاستخدام</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">سياسة الخصوصية</Link></li>
              <li><Link href="/refund-policy" className="hover:text-primary transition-colors">سياسة الاسترداد</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">تواصل معنا</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>support@sila.store</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-secondary" />
                <a href="https://wa.me/966567588261" target="_blank" className="hover:text-primary transition-colors" dir="ltr">+966 56 758 8261</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>المملكة العربية السعودية، الرياض</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © 2026 صلة ستور. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
            <img src="https://moyasar.com/images/logos/apple-pay.svg" alt="Apple Pay" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
