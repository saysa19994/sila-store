"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function TestConnectionPage() {
  const [status, setStatus] = useState<any>({
    loading: true,
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    connection: "testing...",
    error: null
  });

  useEffect(() => {
    async function test() {
      try {
        const { data, error } = await supabase.from('categories').select('count', { count: 'exact', head: true });
        if (error) throw error;
        setStatus(prev => ({ ...prev, loading: false, connection: "SUCCESS! Connected to Supabase.", data }));
      } catch (err: any) {
        setStatus(prev => ({ ...prev, loading: false, connection: "FAILED", error: err.message }));
      }
    }
    test();
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-500 p-12 font-mono space-y-6">
      <h1 className="text-3xl font-bold border-b border-green-500 pb-4">Supabase Connection Test</h1>
      
      <div className="space-y-4">
        <p><span className="text-white font-bold">1. Configured URL:</span> {status.url || "MISSING"}</p>
        <p><span className="text-white font-bold">2. Connection Status:</span> {status.connection}</p>
        {status.error && (
          <div className="bg-red-900/20 text-red-500 p-4 rounded border border-red-500">
            <p className="font-bold">Error Details:</p>
            <pre className="whitespace-pre-wrap">{status.error}</pre>
          </div>
        )}
        {status.data && (
          <p className="text-blue-400 font-bold">Successfully retrieved data from categories table.</p>
        )}
      </div>

      <div className="pt-8 text-xs text-muted-foreground italic">
        * This page is for debugging only. Remove it before public launch.
      </div>
    </div>
  );
}
