"use client";

import { useState, useMemo } from "react";
import ProductFilters from "./ProductFilters";
import ProductCard from "./ProductCard";
import { MOCK_CASES } from "./mockData";

interface ProductGridProps {
  searchQuery?: string;
}

export default function ProductGrid({ searchQuery = "" }: ProductGridProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCases = useMemo(() => {
    let cases = MOCK_CASES;
    if (activeFilter !== "All") {
      cases = cases.filter((c) => c.supportedModels.includes(activeFilter));
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      cases = cases.filter((c) =>
        c.name.toLowerCase().includes(query) ||
        c.description.toLowerCase().includes(query) ||
        c.supportedModels.some(m => m.toLowerCase().includes(query))
      );
    }
    return cases;
  }, [activeFilter, searchQuery]);

  return (
    <div className="w-full">
      <ProductFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredCases.map((product, index) => (
          <ProductCard key={`${product.id}-${index}`} product={product} />
        ))}
      </div>

      {filteredCases.length === 0 && (
        <div className="py-24 text-center bg-white rounded-2xl border border-[#E4E2DC]">
          <p className="text-[#8892A4] font-medium text-sm">
            Aucune coque trouvée pour « {activeFilter !== "All" ? activeFilter : searchQuery} »
          </p>
        </div>
      )}
    </div>
  );
}
