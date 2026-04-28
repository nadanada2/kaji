"use client";

import { useCustomizerStore } from "@/store/useCustomizerStore";
import { Trash2, ArrowRight, ShoppingBag, ShieldCheck, Lock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import PhoneCaseMask from "@/common/PhoneCaseMask";

export default function CartPage() {
  const { cart, removeFromCart } = useCustomizerStore();

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.08;
  const shipping = subtotal > 0 ? 5.99 : 0;
  const total = subtotal + tax + shipping;

  return (
    <div className="min-h-screen bg-[#FAFAF8] pb-32">
      {/* Page header */}
      <div className="bg-[#F4F3EF] border-b border-[#E4E2DC] pt-12 pb-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-px w-6 bg-[#C9A84C]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C9A84C]">Votre sélection</span>
          </div>
          <h1 className="text-4xl font-semibold text-[#0F172A]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Panier
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-10">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-28 bg-white rounded-3xl border border-[#E4E2DC]">
            <div className="w-20 h-20 rounded-full bg-[#F4F3EF] flex items-center justify-center mb-6">
              <ShoppingBag className="w-8 h-8 text-[#C4C2BB]" />
            </div>
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-3"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>Votre panier est vide</h2>
            <p className="text-[#8892A4] text-sm mb-8 max-w-sm text-center leading-relaxed">
              Découvrez nos designs ou créez votre propre coque personnalisée.
            </p>
            <div className="flex gap-3">
              <Link href="/shop"
                className="px-6 py-3 bg-[#1E3A5F] text-white text-sm font-semibold rounded-2xl hover:bg-[#162E4D] transition-colors">
                Voir la boutique
              </Link>
              <Link href="/customizer"
                className="px-6 py-3 bg-white border border-[#E4E2DC] text-[#0F172A] text-sm font-semibold rounded-2xl hover:border-[#C9A84C]/50 transition-colors">
                Customiser
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Cart Items */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {cart.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-5 flex items-center gap-6 border border-[#E4E2DC] hover:border-[#C9A84C]/30 transition-all group relative"
                >
                  {/* Image */}
                  <div className="w-[100px] h-[200px] bg-[#F4F3EF] rounded-xl overflow-hidden shrink-0 flex items-center justify-center">
                    {item.isPremium ? (
                      <img src={item.previewImage} alt={item.designName} className="w-full h-full object-contain p-2" />
                    ) : (
                      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                        <div className="flex items-center justify-center" style={{ transform: 'scale(0.33)', width: '300px', height: '620px', flexShrink: 0 }}>
                          <PhoneCaseMask model={item.phoneModel}>
                            <img src={item.previewImage} alt={item.designName} className="absolute inset-0 w-full h-full object-cover" />
                          </PhoneCaseMask>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-[#8892A4] block mb-1">
                      {item.phoneModel}
                    </span>
                    <h3 className="text-xl font-semibold text-[#0F172A] mb-2 leading-snug"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {item.designName}
                    </h3>
                    <div className="flex gap-2">
                      <span className="bg-[#F4F3EF] text-[#8892A4] px-3 py-1 rounded-lg text-[11px] font-semibold uppercase tracking-wider">
                        Qté: 1
                      </span>
                      <span className="bg-[#F4F3EF] text-[#8892A4] px-3 py-1 rounded-lg text-[11px] font-semibold uppercase tracking-wider">
                        Mat
                      </span>
                    </div>
                  </div>

                  {/* Price + remove */}
                  <div className="flex flex-col items-end gap-4 shrink-0">
                    <span className="text-lg font-bold text-[#0F172A]">
                      {item.price.toFixed(2)} <span className="text-[12px] font-medium text-[#8892A4]">TND</span>
                    </span>
                    <button onClick={() => removeFromCart(item.id)}
                      className="p-2 text-[#C4C2BB] hover:text-red-400 hover:bg-red-50 rounded-xl transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-[#E4E2DC] overflow-hidden sticky top-28">
                <div className="px-6 py-5 border-b border-[#E4E2DC] bg-[#F4F3EF]">
                  <h3 className="text-lg font-semibold text-[#0F172A]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Récapitulatif
                  </h3>
                </div>
                <div className="px-6 py-5 space-y-3 text-[13px] border-b border-[#E4E2DC]">
                  <div className="flex justify-between text-[#8892A4]">
                    <span>Sous-total</span>
                    <span className="font-medium text-[#0F172A]">{subtotal.toFixed(2)} TND</span>
                  </div>
                  <div className="flex justify-between text-[#8892A4]">
                    <span>Livraison</span>
                    <span className="font-medium text-[#0F172A]">{shipping.toFixed(2)} TND</span>
                  </div>
                  <div className="flex justify-between text-[#8892A4]">
                    <span>TVA (8%)</span>
                    <span className="font-medium text-[#0F172A]">{tax.toFixed(2)} TND</span>
                  </div>
                </div>
                <div className="px-6 py-5">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[13px] font-semibold text-[#8892A4] uppercase tracking-wider">Total</span>
                    <span className="text-2xl font-bold text-[#1E3A5F]">{total.toFixed(2)} <span className="text-[14px] font-medium text-[#8892A4]">TND</span></span>
                  </div>

                  <Link href="/checkout"
                    className="w-full py-3.5 bg-[#1E3A5F] text-white text-center font-semibold text-sm rounded-2xl flex items-center justify-center gap-2 hover:bg-[#162E4D] transition-colors shadow-sm">
                    Commander
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <div className="mt-4 flex items-center justify-center gap-2 text-[#8892A4] text-[11px]">
                    <Lock className="w-3 h-3" />
                    <span>Paiement sécurisé SSL 256-bit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
