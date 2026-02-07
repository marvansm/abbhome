"use client";
import { useQuery } from "@tanstack/react-query";
import api from "@/services/api";
import { Category } from "@/types";

export default function CategoryButtons({
  selectedCategoryId,
  onSelect,
}: {
  selectedCategoryId: string | null;
  onSelect: (id: string | null) => void;
}) {
  const { data: categories = [] } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: () => api.getData("/categories"),
  });

  return (
    <div className="flex items-center gap-[15px] flex-wrap ">
      <button
        onClick={() => onSelect(null)}
        className={
          selectedCategoryId === null
            ? `py-[12px] px-[24px] font-sans text-[16px] leading-[24px]  bg-[#1b63ed1f] text-[#1b63ed] font-medium h-[48px] rounded-[100px] cursor-pointer duration-200`
            : `py-[12px] px-[24px] font-sans text-[16px] leading-[24px] hover:bg-[#E1E1EB] bg-[#F2F2F7] text-[#000000A3] font-medium h-[48px] rounded-[100px] cursor-pointer duration-200`
        }
      >
        Hamısı
      </button>
      {categories
        .filter((c: any) => c.name !== "Hamısı")
        .map((c: any) => (
          <button
            key={c._id}
            onClick={() => onSelect(c._id)}
            className={
              selectedCategoryId === c._id
                ? `py-[12px] px-[24px] font-sans text-[16px] leading-[24px]  bg-[#1b63ed1f] text-[#1b63ed] font-medium h-[48px] rounded-[100px] cursor-pointer duration-200`
                : `py-[12px] px-[24px] font-sans text-[16px] leading-[24px] hover:bg-[#E1E1EB] bg-[#F2F2F7] text-[#000000A3] font-medium h-[48px] rounded-[100px] cursor-pointer duration-200`
            }
          >
            {c.name}
          </button>
        ))}
    </div>
  );
}
