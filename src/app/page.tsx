"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Palette, ChevronDown, Star, Sparkles, Shield, Truck, RefreshCw } from "lucide-react";
import ProductGrid from "@/shop/ProductGrid";

export default function Home() {
  const shopRef = useRef<HTMLDivElement>(null);

  const scrollToShop = () => {
    shopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAFAF8" }}>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#F4F3EF" }}>
        {/* Subtle dot grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #0F172A 1px, transparent 0)",
          backgroundSize: "32px 32px",
          opacity: 0.025
        }} />
        {/* Gold glow top-right */}
        <div className="absolute top-0 right-0 pointer-events-none" style={{
          width: 500, height: 500,
          background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)",
          opacity: 0.07,
          transform: "translate(30%, -30%)"
        }} />

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 lg:pt-28 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left copy */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-px w-8" style={{ backgroundColor: "#C9A84C" }} />
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase" style={{ color: "#C9A84C" }}>
                  Coques Artisanales · Tunisie
                </span>
              </div>

              <h1 className="text-5xl lg:text-[58px] font-semibold leading-[1.08] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F172A" }}>
                Votre téléphone,<br />
                <em style={{ color: "#1E3A5F" }}>votre identité.</em>
              </h1>

              <p className="text-[15px] leading-relaxed mb-10 max-w-md" style={{ color: "#8892A4" }}>
                Des coques d'exception conçues par des artistes ou personnalisées par vous.
                Qualité premium, livraison rapide, style inimitable.
              </p>

              {/* Stats row */}
              <div className="flex items-center gap-10 mb-10">
                {[
                  { value: "500+", label: "Designs" },
                  { value: "4.9★", label: "Note clients" },
                  { value: "2k+", label: "Commandes" },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F172A" }}>{s.value}</div>
                    <div className="text-[11px] font-medium uppercase tracking-widest mt-0.5" style={{ color: "#8892A4" }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3">
                <Link href="/customizer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-semibold text-[14px] transition-all"
                  style={{ backgroundColor: "#1E3A5F", color: "white" }}>
                  <Palette className="w-4 h-4" style={{ color: "#C9A84C" }} />
                  Créer ma coque
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button onClick={scrollToShop}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-semibold text-[14px] border transition-all"
                  style={{ backgroundColor: "white", borderColor: "#E4E2DC", color: "#0F172A" }}>
                  Voir la collection
                  <ChevronDown className="w-4 h-4" style={{ color: "#8892A4" }} />
                </button>
              </div>
            </div>

            {/* Right visual */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-full max-w-sm">
                {/* Main card */}
                <div className="relative w-full max-w-sm transform scale-150 origin-center">
                  <img src="/cases/minimal.png" alt="..." className="w-full h-full object-cover" />
                </div>

                
                {/* Floating badge */}
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES BAR ── */}
      <section className="border-b" style={{ backgroundColor: "white", borderColor: "#E4E2DC" }}>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Truck,      label: "Livraison rapide",     sub: "Dès 2 jours ouvrés" },
              { icon: Shield,     label: "Qualité garantie",     sub: "Coque testée & certifiée" },
              { icon: Palette,    label: "100% personnalisable", sub: "Studio intégré" },
              { icon: RefreshCw,  label: "Retours faciles",      sub: "14 jours satisfait ou remboursé" },
            ].map(({ icon: Icon, label, sub }, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#F4F3EF" }}>
                  <Icon className="w-5 h-5" style={{ color: "#C9A84C" }} />
                </div>
                <div>
                  <p className="text-[13px] font-semibold" style={{ color: "#0F172A" }}>{label}</p>
                  <p className="text-[11px]" style={{ color: "#8892A4" }}>{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHOP SECTION ── */}
      <section ref={shopRef} className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px w-6" style={{ backgroundColor: "#C9A84C" }} />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: "#C9A84C" }}>Collection</span>
            </div>
            <h2 className="text-4xl font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0F172A" }}>
              Nos designs
            </h2>
          </div>
          <Link href="/shop"
            className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-semibold transition-colors"
            style={{ color: "#1E3A5F" }}>
            Voir tout <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <ProductGrid />
      </section>

    </div>
  );
}
