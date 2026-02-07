"use client";
import CategoryButtons from "@/components/common/CategoryButtons";
import HeadingText from "@/components/common/HeadingText";
import MortgageCards from "./MortgageCards";
import { useState } from "react";

export default function MortgageProducts() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  return (
    <div className="max-w-[1200px] mx-auto mt-[90px]">
      <HeadingText title="İpoteka məhsulları" />
      <CategoryButtons selectedCategoryId={selectedCategoryId} onSelect={setSelectedCategoryId} />
      <MortgageCards categoryId={selectedCategoryId} />
    </div>
  );
}
