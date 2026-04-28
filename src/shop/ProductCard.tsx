"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CaseProduct } from "./mockData";
import { useEcoStore } from "../store/ecoStore";

export default function ProductCard({ product }: { product: CaseProduct }) {
  const { ecoMode } = useEcoStore();

  const CardContent = (
    <div className={`group relative flex flex-col gap-0 rounded-2xl overflow-hidden h-full cursor-pointer bg-white border transition-all duration-300 ${
      ecoMode
        ? "border-[#E4E2DC]"
        : "border-[#E4E2DC] hover:border-[#C9A84C]/40 hover:shadow-[0_12px_40px_rgba(201,168,76,0.12)]"
    }`}>
      {/* Image */}
      <div className={`relative aspect-[3/4] w-full overflow-hidden bg-[#F4F3EF] ${
        ecoMode ? "opacity-75 grayscale saturate-50" : ""
      }`}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover ${!ecoMode ? "transition-transform duration-700 group-hover:scale-105" : ""}`}
          quality={ecoMode ? 20 : 85}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Subtle overlay on hover */}
        {!ecoMode && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
        {ecoMode && (
          <div className="absolute top-3 right-3 rounded-lg bg-emerald-800/80 px-2 py-1 text-[10px] font-semibold tracking-wider text-emerald-200">
            ECO
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1.5 p-4 flex-1">
        <h3 className="font-semibold text-[15px] text-[#0F172A] leading-snug"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '17px' }}>
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-[14px] font-semibold text-[#1E3A5F]">
            {product.price.toFixed(2)} <span className="text-[11px] font-medium text-[#8892A4]">TND</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-1 mt-1">
          {product.supportedModels.slice(0, 3).map((model) => (
            <span key={model} className="rounded-md bg-[#F4F3EF] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[#8892A4]">
              {model}
            </span>
          ))}
          {product.supportedModels.length > 3 && (
            <span className="rounded-md bg-[#F4F3EF] px-2 py-0.5 text-[10px] font-medium text-[#C9A84C]">
              +{product.supportedModels.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <Link href={`/shop/${product.id}`} className="h-full block">
      {ecoMode ? (
        CardContent
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="h-full"
        >
          {CardContent}
        </motion.div>
      )}
    </Link>
  );
}
