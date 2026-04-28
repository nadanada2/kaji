"use client";

import { SUPPORTED_MODELS } from "./mockData";

export default function ProductFilters({
  activeFilter,
  setActiveFilter,
}: {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}) {
  return (
    <div className="flex w-full overflow-x-auto gap-2 py-2 mb-8" style={{ scrollbarWidth: 'none' }}>
      {SUPPORTED_MODELS.map((model) => (
        <button
          key={model}
          onClick={() => setActiveFilter(model)}
          className={`whitespace-nowrap px-4 py-2 rounded-full text-[12px] font-semibold transition-all border ${
            activeFilter === model
              ? "bg-[#1E3A5F] text-white border-[#1E3A5F] shadow-sm"
              : "bg-white text-[#8892A4] border-[#E4E2DC] hover:border-[#C9A84C] hover:text-[#0F172A]"
          }`}
        >
          {model}
        </button>
      ))}
    </div>
  );
}
