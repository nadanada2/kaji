"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Truck, Shield, Star, ShoppingCart, ArrowLeft, Check, Heart, Share2, Package } from "lucide-react";
import Link from "next/link";
import { MOCK_CASES } from "@/shop/mockData";
import { useCustomizerStore } from "@/store/useCustomizerStore";
import { v4 as uuidv4 } from "uuid";
import PhoneCaseMask from "@/common/PhoneCaseMask";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCustomizerStore();
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const product = MOCK_CASES.find(p => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-[#0F172A] mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>Produit introuvable</h1>
          <Link href="/shop" className="text-[#C9A84C] hover:underline font-medium">← Retour à la boutique</Link>
        </div>
      </div>
    );
  }

  const averageRating = product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length;
  const totalPrice = product.price * quantity;

  const handleAddToCart = () => {
    const model = selectedModel || product.supportedModels[0];
    addToCart({ id: uuidv4(), phoneModel: model, designName: product.name, previewImage: product.image, price: totalPrice });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    setTimeout(() => router.push('/cart'), 500);
  };

  const renderStars = (rating: number) => Array.from({ length: 5 }, (_, i) => (
    <Star key={i} className={`w-3.5 h-3.5 ${i < rating ? 'text-[#C9A84C] fill-[#C9A84C]' : 'text-[#E4E2DC] fill-[#E4E2DC]'}`} />
  ));

  return (
    <div className="min-h-screen bg-[#FAFAF8] pb-24">
      {/* Header bar */}
      <div className="bg-[#F4F3EF] border-b border-[#E4E2DC] px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/shop" className="inline-flex items-center gap-2 text-[13px] font-medium text-[#8892A4] hover:text-[#1E3A5F] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Retour à la boutique
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left: Image */}
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45 }}>
            <div className="sticky top-28">
              <div className="bg-white rounded-3xl border border-[#E4E2DC] shadow-[0_8px_40px_rgba(15,23,42,0.06)] relative overflow-hidden aspect-[4/5] flex items-center justify-center">
                <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                  <button onClick={() => setIsLiked(!isLiked)}
                    className={`p-2.5 rounded-full border transition-all ${isLiked ? 'bg-[#C9A84C] border-[#C9A84C] text-white' : 'bg-white border-[#E4E2DC] text-[#8892A4] hover:border-[#C9A84C]'}`}>
                    <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-2.5 bg-white border border-[#E4E2DC] text-[#8892A4] hover:border-[#C9A84C] rounded-full transition-all">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="relative transition-transform duration-500 hover:scale-105"
                    style={{ width: 300, height: 620, transform: 'scale(0.82)', transformOrigin: 'center center' }}>
                    <PhoneCaseMask model={selectedModel || product.supportedModels[0]}>
                      <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
                    </PhoneCaseMask>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { icon: Shield, label: "Paiement sécurisé" },
                  { icon: Truck, label: "Livraison rapide" },
                  { icon: Package, label: "Qualité premium" },
                ].map((badge, i) => (
                  <div key={i} className="bg-white rounded-2xl p-3 border border-[#E4E2DC] flex flex-col items-center gap-1.5 text-center hover:border-[#C9A84C]/40 transition-colors">
                    <badge.icon className="w-5 h-5 text-[#C9A84C]" />
                    <span className="text-[10px] font-medium text-[#8892A4] leading-tight">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Info */}
          <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, delay: 0.15 }}
            className="flex flex-col gap-6">

            {/* Title & Rating */}
            <div>
              <div className="flex items-center gap-1.5 mb-3">
                {renderStars(Math.round(averageRating))}
                <span className="text-[12px] text-[#8892A4] font-medium ml-1">
                  {averageRating.toFixed(1)} ({product.reviews.length} avis)
                </span>
              </div>
              <h1 className="text-4xl font-semibold text-[#0F172A] mb-3 leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {product.name}
              </h1>
              <p className="text-2xl font-bold text-[#1E3A5F]">
                {product.price.toFixed(2)} <span className="text-[15px] font-medium text-[#8892A4]">TND</span>
              </p>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-5 border border-[#E4E2DC]">
              <h3 className="text-[11px] font-semibold uppercase tracking-widest text-[#8892A4] mb-2">Description</h3>
              <p className="text-[#0F172A] leading-relaxed text-[14px]">{product.description}</p>
            </div>

            {/* Model selection */}
            <div className="bg-white rounded-2xl p-5 border border-[#E4E2DC]">
              <h3 className="text-[11px] font-semibold uppercase tracking-widest text-[#8892A4] mb-3">Choisir votre appareil</h3>
              <div className="flex flex-wrap gap-2">
                {product.supportedModels.map((model) => (
                  <button key={model} onClick={() => setSelectedModel(model)}
                    className={`px-4 py-2 rounded-xl border-2 text-[12px] font-semibold tracking-wide transition-all ${
                      selectedModel === model
                        ? 'border-[#1E3A5F] bg-[#1E3A5F] text-white'
                        : 'border-[#E4E2DC] text-[#8892A4] hover:border-[#C9A84C]/60 hover:text-[#0F172A]'
                    }`}>
                    {model}
                  </button>
                ))}
              </div>
            </div>

            {/* Stock & Delivery */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-2xl p-4 border border-[#E4E2DC]">
                <div className="flex items-center gap-2 mb-1.5">
                  <Package className="w-4 h-4 text-[#C9A84C]" />
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#8892A4]">Stock</span>
                </div>
                <span className={`text-[15px] font-bold ${product.stock > 10 ? 'text-emerald-600' : product.stock > 0 ? 'text-amber-500' : 'text-red-500'}`}>
                  {product.stock > 0 ? `${product.stock} disponibles` : 'Rupture de stock'}
                </span>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-[#E4E2DC]">
                <div className="flex items-center gap-2 mb-1.5">
                  <Truck className="w-4 h-4 text-[#C9A84C]" />
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#8892A4]">Livraison</span>
                </div>
                <span className="text-[15px] font-bold text-[#0F172A]">{product.deliveryDays} jours ouvrés</span>
              </div>
            </div>

            {/* Quantity & CTA */}
            <div className="bg-white rounded-2xl p-5 border border-[#E4E2DC]">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-[12px] font-semibold uppercase tracking-widest text-[#8892A4]">Quantité</span>
                <div className="flex items-center border border-[#E4E2DC] rounded-xl overflow-hidden">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3.5 py-2 text-lg font-bold text-[#8892A4] hover:bg-[#F4F3EF] transition-colors">−</button>
                  <span className="px-4 py-2 font-bold text-[#0F172A] min-w-[40px] text-center border-x border-[#E4E2DC]">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}
                    className="px-3.5 py-2 text-lg font-bold text-[#8892A4] hover:bg-[#F4F3EF] transition-colors">+</button>
                </div>
                <div className="ml-auto text-right">
                  <span className="text-[11px] text-[#8892A4] font-medium">Total</span>
                  <p className="text-xl font-bold text-[#1E3A5F]">{totalPrice.toFixed(2)} TND</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={handleAddToCart} disabled={product.stock === 0}
                  className={`flex-1 py-3.5 rounded-2xl font-semibold text-[13px] flex items-center justify-center gap-2 transition-all ${
                    isAdded ? 'bg-emerald-500 text-white'
                    : product.stock === 0 ? 'bg-[#E4E2DC] text-[#8892A4] cursor-not-allowed'
                    : 'bg-[#1E3A5F] text-white hover:bg-[#162E4D] shadow-sm'
                  }`}>
                  {isAdded ? <><Check className="w-4 h-4" />Ajouté !</> : <><ShoppingCart className="w-4 h-4" />Ajouter au panier</>}
                </button>
                <button onClick={handleBuyNow} disabled={product.stock === 0}
                  className={`px-6 py-3.5 rounded-2xl font-semibold text-[13px] transition-all border-2 ${
                    product.stock === 0 ? 'border-[#E4E2DC] text-[#8892A4] cursor-not-allowed'
                    : 'border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-white'
                  }`}>
                  Acheter
                </button>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl p-5 border border-[#E4E2DC]">
              <h3 className="text-lg font-semibold text-[#0F172A] mb-5"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Avis clients ({product.reviews.length})
              </h3>
              <div className="space-y-5">
                {product.reviews.map((review) => (
                  <div key={review.id} className="border-b border-[#F4F3EF] pb-5 last:border-0 last:pb-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-1 mb-1">{renderStars(review.rating)}</div>
                        <span className="font-semibold text-[13px] text-[#0F172A]">{review.author}</span>
                      </div>
                      <span className="text-[11px] text-[#8892A4]">{review.date}</span>
                    </div>
                    <p className="text-[13px] text-[#8892A4] leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
