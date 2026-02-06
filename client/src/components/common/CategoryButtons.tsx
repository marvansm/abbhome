"use client";
import { categories } from "@/constant/categories";
import { useState } from "react";

export default function CategoryButtons() {
  const [active, setActive] = useState(false);

  return (
    <div className="flex items-center gap-[15px] flex-wrap ">
      {categories &&
        categories.map((c, idx) => (
          <button
            key={idx}
            onClick={() => setActive((prev) => !prev)}
            className={
              active
                ? `py-[12px] px-[24px] font-sans text-[16px] leading-[24px]  bg-[#1b63ed1f] text-[#1b63ed] font-medium h-[48px] rounded-[100px] cursor-pointer duration-200`
                : `py-[12px] px-[24px] font-sans text-[16px] leading-[24px] hover:bg-[#E1E1EB] bg-[#F2F2F7] text-[#000000A3] font-medium h-[48px] rounded-[100px] cursor-pointer duration-200`
            }
          >
            {c}
          </button>
        ))}
    </div>
  );
}
