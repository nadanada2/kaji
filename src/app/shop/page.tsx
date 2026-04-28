"use client";

import { useState } from "react";
import { Search, X, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ProductGrid from "@/shop/ProductGrid";

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAF8] pb-32">
      
      {/* Hero Header */}
      <div className="bg-[#F4F3EF] border-b border-[#E4E2DC] pt-16 pb-14 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C9A84C]">
                Collection Premium
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold text-[#0F172A] leading-tight mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Coques <em>KaJi</em>
            </h1>
            <p className="text-[#8892A4] text-sm font-medium max-w-md leading-relaxed">
              Designs exclusifs créés par des artistes. Chaque coque est une œuvre d'art pour votre appareil.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10">
        {/* Search Bar */}
        <div className="max-w-xl mb-10">
          <div className={`relative flex items-center transition-all duration-200 ${isSearchFocused ? 'scale-[1.01]' : ''}`}>
            <Search className="absolute left-4 w-4 h-4 text-[#8892A4]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              placeholder="Rechercher par nom, modèle ou style..."
              className="w-full pl-11 pr-10 py-3.5 bg-white border border-[#E4E2DC] rounded-2xl text-[14px] font-medium text-[#0F172A] placeholder-[#8892A4] outline-none focus:border-[#C9A84C] focus:ring-4 focus:ring-[#C9A84C]/10 transition-all shadow-sm"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")}
                className="absolute right-3 p-1.5 hover:bg-[#F4F3EF] rounded-full transition-colors"
              >
                <X className="w-3.5 h-3.5 text-[#8892A4]" />
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {["Cyber", "Retro", "Minimal", "iPhone 15 Pro", "Samsung S24"].map((tag) => (
              <button key={tag} onClick={() => setSearchQuery(tag)}
                className="px-3.5 py-1.5 bg-white border border-[#E4E2DC] rounded-full text-[11px] font-semibold uppercase tracking-wider text-[#8892A4] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid searchQuery={searchQuery} />
      </div>
    </div>
  );
}
