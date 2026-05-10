"use client";

import React from "react";

export default function HoldPage() {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#FDFCF8] flex items-center justify-center p-8 font-sans">
      <div className="max-w-lg w-full text-center">
        
        {/* Minimal Brand Name - Serif Style like SIORA */}
        <h2 className="text-sm uppercase tracking-[0.4em] text-gray-400 mb-20 font-light">
          SIORA
        </h2>

        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl font-light text-gray-800 tracking-tight leading-tight">
            Website Access <br /> 
            Temporarily Paused
          </h1>
          
          <div className="h-px w-12 bg-gray-200 mx-auto" />

          <p className="text-gray-600 text-lg leading-relaxed font-light">
            Hi, your website access is currently on hold due to 
            <span className="text-gray-900 font-normal"> pending payment formalities</span>. 
            Request you to clear the outstanding dues at the earliest so we can restore the services immediately.
          </p>

          <div className="pt-12">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
              Contact for Support
            </p>
            <p className="text-base font-medium text-gray-800">
              Verve Nova Technologies
            </p>
          </div>
        </div>

        {/* Subtle Footer */}
        <div className="absolute bottom-12 left-0 w-full">
          <p className="text-[10px] text-gray-300 tracking-widest uppercase">
            Service Notice ID: VNT-HOLD-01
          </p>
        </div>
      </div>
    </div>
  );
}
