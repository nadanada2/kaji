"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCustomizerStore } from "@/store/useCustomizerStore";
import { useAuthStore } from "@/store/useAuthStore";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Globe, Lock, ShieldCheck, CreditCard, Truck, Clock, MapPin, Wallet, DollarSign } from "lucide-react";

type DeliveryMethod = "standard" | "express" | "pickup";
type PaymentMethod = "card" | "paypal" | "cod";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, clearCart, publishToVault } = useCustomizerStore();
  const { user, addresses } = useAuthStore();

  const [isProcessing, setIsProcessing] = useState(false);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>("standard");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [selectedAddress, setSelectedAddress] = useState(user?.addresses?.[0]?.id || "");

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const deliveryOptions = {
    standard: { label: "Livraison standard", price: 5.99, days: "5-7", icon: Truck },
    express:  { label: "Livraison express",  price: 12.99, days: "2-3", icon: Clock },
    pickup:   { label: "Point de retrait",   price: 0,     days: "3-5", icon: MapPin },
  };
  const deliveryPrice = deliveryOptions[deliveryMethod].price;
  const tax = subtotal * 0.08;
  const total = subtotal + tax + deliveryPrice;

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => { setIsProcessing(false); setShowPublishModal(true); }, 1500);
  };

  const handleCommunityChoice = (isPublic: boolean) => {
    if (isPublic) {
      cart.forEach((item) => {
        publishToVault({ id: `community-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          phoneModel: item.phoneModel, designName: item.designName, previewImage: item.previewImage,
          likes: 0, author: 'Anonymous Creator', isPublic: true });
      });
    }
    clearCart();
    router.push(isPublic ? '/community' : '/profile?tab=orders');
  };

  if (cart.length === 0 && !showPublishModal) {
    return (
      <div className="min-h-screen bg-[#FAFAF8] flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl font-semibold text-[#0F172A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Votre panier est vide
        </h2>
        <button onClick={() => router.push('/customizer')}
          className="px-6 py-3 bg-[#1E3A5F] text-white rounded-2xl font-semibold text-sm hover:bg-[#162E4D] transition-colors">
          Aller au Customiser
        </button>
      </div>
    );
  }

  const inputClass = "w-full bg-[#FAFAF8] border border-[#E4E2DC] p-3.5 rounded-xl outline-none focus:border-[#C9A84C] focus:ring-4 focus:ring-[#C9A84C]/10 transition-all text-[14px] text-[#0F172A] placeholder-[#C4C2BB]";
  const sectionClass = "bg-white p-6 rounded-2xl border border-[#E4E2DC]";

  return (
    <div className="min-h-screen bg-[#FAFAF8] pb-24">
      {/* Header */}
      <div className="bg-[#F4F3EF] border-b border-[#E4E2DC] pt-12 pb-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-px w-6 bg-[#C9A84C]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C9A84C]">Finalisation</span>
          </div>
          <h1 className="text-4xl font-semibold text-[#0F172A]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>Passer la commande</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-10 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">

        {/* Left: Forms */}
        <div className="flex flex-col gap-5">

          {/* Contact */}
          <div className={sectionClass}>
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-[#8892A4] mb-4">Informations de contact</h3>
            <input type="email" placeholder="Adresse e-mail" className={inputClass} defaultValue={user?.email || ""} />
          </div>

          {/* Shipping */}
          <div className={sectionClass}>
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-[#8892A4] mb-4">Adresse de livraison</h3>
            {addresses && addresses.length > 0 ? (
              <div className="space-y-3">
                {addresses.map((addr) => (
                  <label key={addr.id}
                    className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedAddress === addr.id ? 'border-[#1E3A5F] bg-[#1E3A5F]/5' : 'border-[#E4E2DC] hover:border-[#C9A84C]/50'
                    }`}>
                    <input type="radio" name="address" value={addr.id} checked={selectedAddress === addr.id}
                      onChange={(e) => setSelectedAddress(e.target.value)} className="mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-[13px] text-[#0F172A]">{addr.label}</span>
                        {addr.isDefault && (
                          <span className="text-[10px] bg-[#C9A84C]/15 text-[#C9A84C] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide">Par défaut</span>
                        )}
                      </div>
                      <p className="text-[12px] text-[#8892A4] leading-relaxed">
                        {addr.street}<br />{addr.city}, {addr.state} {addr.zipCode}<br />{addr.country}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="Prénom" className={inputClass} />
                <input type="text" placeholder="Nom" className={inputClass} />
                <input type="text" placeholder="Adresse" className={`${inputClass} col-span-2`} />
                <input type="text" placeholder="Ville" className={inputClass} />
                <input type="text" placeholder="Code postal" className={inputClass} />
              </div>
            )}
          </div>

          {/* Delivery */}
          <div className={sectionClass}>
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-[#8892A4] mb-4">Mode de livraison</h3>
            <div className="space-y-3">
              {Object.entries(deliveryOptions).map(([key, option]) => (
                <label key={key}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    deliveryMethod === key ? 'border-[#1E3A5F] bg-[#1E3A5F]/5' : 'border-[#E4E2DC] hover:border-[#C9A84C]/50'
                  }`}>
                  <input type="radio" name="delivery" value={key} checked={deliveryMethod === key}
                    onChange={(e) => setDeliveryMethod(e.target.value as DeliveryMethod)} />
                  <option.icon className="w-5 h-5 text-[#C9A84C] shrink-0" />
                  <div className="flex-1">
                    <span className="font-semibold text-[13px] text-[#0F172A]">{option.label}</span>
                    <p className="text-[11px] text-[#8892A4]">Estimé : {option.days} jours</p>
                  </div>
                  <span className="font-bold text-[13px] text-[#1E3A5F]">
                    {option.price === 0 ? "Gratuit" : `${option.price.toFixed(2)} TND`}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Payment */}
          <div className={sectionClass}>
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-[#8892A4] mb-4">Mode de paiement</h3>
            <div className="space-y-3">
              {[
                { key: "card",   icon: CreditCard, label: "Carte bancaire" },
                { key: "paypal", icon: Wallet,      label: "PayPal" },
                { key: "cod",    icon: DollarSign,  label: "Paiement à la livraison" },
              ].map(({ key, icon: Icon, label }) => (
                <label key={key}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === key ? 'border-[#1E3A5F] bg-[#1E3A5F]/5' : 'border-[#E4E2DC] hover:border-[#C9A84C]/50'
                  }`}>
                  <input type="radio" name="payment" value={key} checked={paymentMethod === key}
                    onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)} />
                  <Icon className="w-5 h-5 text-[#C9A84C] shrink-0" />
                  <span className="font-semibold text-[13px] text-[#0F172A]">{label}</span>
                </label>
              ))}
            </div>

            {paymentMethod === "card" && (
              <div className="mt-4 space-y-3">
                <input type="text" placeholder="Numéro de carte" className={`${inputClass} font-mono tracking-widest`} defaultValue="**** **** **** 4242" />
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="MM/AA" className={inputClass} />
                  <input type="text" placeholder="CVC" className={inputClass} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Summary */}
        <div>
          <div className="bg-white rounded-2xl border border-[#E4E2DC] overflow-hidden sticky top-24">
            <div className="px-6 py-5 bg-[#F4F3EF] border-b border-[#E4E2DC]">
              <h3 className="text-lg font-semibold text-[#0F172A]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>Récapitulatif</h3>
            </div>

            <div className="px-5 py-4 space-y-3 border-b border-[#E4E2DC]">
              {cart.map(item => (
                <div key={item.id} className="flex items-center gap-3">
                  <img src={item.previewImage} alt="case" className="w-10 h-16 object-contain bg-[#F4F3EF] rounded-lg shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-[13px] text-[#0F172A] truncate">{item.designName}</p>
                    <p className="text-[11px] text-[#8892A4]">{item.phoneModel}</p>
                  </div>
                  <span className="font-bold text-[13px] text-[#0F172A] shrink-0">{item.price.toFixed(2)} TND</span>
                </div>
              ))}
            </div>

            <div className="px-5 py-4 space-y-2.5 border-b border-[#E4E2DC] text-[13px]">
              <div className="flex justify-between text-[#8892A4]">
                <span>Sous-total</span><span className="font-medium text-[#0F172A]">{subtotal.toFixed(2)} TND</span>
              </div>
              <div className="flex justify-between text-[#8892A4]">
                <span>TVA (8%)</span><span className="font-medium text-[#0F172A]">{tax.toFixed(2)} TND</span>
              </div>
              <div className="flex justify-between text-[#8892A4]">
                <span>Livraison</span>
                <span className="font-medium text-[#0F172A]">{deliveryPrice === 0 ? "Gratuit" : `${deliveryPrice.toFixed(2)} TND`}</span>
              </div>
            </div>

            <div className="px-5 py-5">
              <div className="flex justify-between items-center mb-5">
                <span className="text-[12px] font-semibold uppercase tracking-widest text-[#8892A4]">Total</span>
                <span className="text-2xl font-bold text-[#1E3A5F]">{total.toFixed(2)} <span className="text-[13px] font-medium text-[#8892A4]">TND</span></span>
              </div>
              <button onClick={handlePlaceOrder} disabled={isProcessing}
                className="w-full py-3.5 bg-[#1E3A5F] text-white font-semibold text-sm rounded-2xl flex items-center justify-center gap-2 hover:bg-[#162E4D] transition-colors shadow-sm disabled:opacity-50">
                {isProcessing
                  ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  : <><ShieldCheck className="w-4 h-4" />Confirmer la commande</>}
              </button>
              <div className="mt-3 flex items-center justify-center gap-1.5 text-[#8892A4] text-[11px]">
                <Lock className="w-3 h-3" />
                <span>Paiement sécurisé SSL 256-bit</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order confirmed modal */}
      <AnimatePresence>
        {showPublishModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-[#0F172A]/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="bg-white rounded-3xl p-10 max-w-lg w-full text-center shadow-[0_40px_80px_rgba(15,23,42,0.25)] relative overflow-hidden border border-[#E4E2DC]"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1E3A5F] via-[#C9A84C] to-[#1E3A5F]" />
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-5 border border-emerald-200">
                <CheckCircle className="w-8 h-8 text-emerald-500" />
              </div>
              <h2 className="text-4xl font-semibold text-[#0F172A] mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>Commande confirmée !</h2>
              <p className="text-[#8892A4] text-sm mb-3 leading-relaxed">
                Votre commande est en cours de production KaJi.
              </p>
              <p className="text-[#0F172A] text-sm font-semibold mb-8">
                Gagnez 50 TND en vouchers — publiez vos designs dans la{" "}
                <span className="text-[#C9A84C]">Communauté</span> !
              </p>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => handleCommunityChoice(false)}
                  className="p-5 rounded-2xl bg-[#F4F3EF] border border-[#E4E2DC] hover:border-[#1E3A5F]/30 transition-all flex flex-col items-center gap-2">
                  <Lock className="w-5 h-5 text-[#8892A4]" />
                  <span className="font-semibold text-[12px] uppercase tracking-widest text-[#8892A4]">Garder privé</span>
                </button>
                <button onClick={() => handleCommunityChoice(true)}
                  className="p-5 rounded-2xl bg-[#1E3A5F] border border-[#1E3A5F] hover:bg-[#162E4D] transition-all flex flex-col items-center gap-2">
                  <Globe className="w-5 h-5 text-[#C9A84C]" />
                  <span className="font-semibold text-[12px] uppercase tracking-widest text-white text-center">
                    Publier & gagner
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
