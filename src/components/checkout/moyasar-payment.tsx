"use client";

import React, { useEffect, useRef } from "react";

interface MoyasarPaymentProps {
  amount: number; // Amount in HALALAS (e.g., 4900 for 49.00 SAR)
  description: string;
  onSuccess: (id: string) => void;
}

declare global {
  interface Window {
    Moyasar: any;
  }
}

const MoyasarPayment = ({ amount, description, onSuccess }: MoyasarPaymentProps) => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMoyasar = () => {
      if (window.Moyasar) {
        window.Moyasar.init({
          element: ".mysr-form",
          amount: amount,
          currency: "SAR",
          description: description,
          publishable_api_key: process.env.NEXT_PUBLIC_MOYASAR_PUBLISHABLE_KEY,
          callback_url: `${window.location.origin}/order-confirmation`,
          methods: ["creditcard", "applepay"],
          on_completed: function (payment: any) {
            if (payment.status === "paid") {
              onSuccess(payment.id);
            }
          }
        });
      } else {
        // Retry after a short delay if script not ready
        setTimeout(initMoyasar, 500);
      }
    };

    if (typeof window !== "undefined") {
      initMoyasar();
    }
  }, [amount, description]);

  return (
    <div className="space-y-6">
      <div className="mysr-form shadow-none border-none"></div>
      <div className="text-center text-[10px] text-muted-foreground pt-4">
        بالنقر على دفع، أنت توافق على شروط الخدمة لمتجر صلة.
      </div>
    </div>
  );
};

export default MoyasarPayment;
