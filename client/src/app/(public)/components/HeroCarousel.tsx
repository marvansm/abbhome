"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import api from "@/services/api";
import { HeroSlide } from "@/types";

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { data: slides = [], isLoading } = useQuery<HeroSlide[]>({
    queryKey: ["hero-slides"],
    queryFn: () => api.getData("/hero-slides"),
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  if (isLoading)
    return (
      <div className="h-[500px] flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <div className="relative max-w-[1344px] mx-auto ">
      <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, i) => (
            <div
              key={slide._id || i}
              className="min-w-full px-16 py-20 flex justify-between items-center transition-colors duration-300"
              style={{ backgroundColor: slide.bgColor || "#8B6BD6" }}
            >
              <div className="max-w-xl text-white">
                <h1 className="text-4xl font-semibold mb-4">{slide.title}</h1>
                <p className="text-base opacity-90">{slide.description}</p>
              </div>

              <Image
                src={slide.image}
                alt={slide.title}
                width={360}
                height={360}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#EDF2F7] shadow flex items-center justify-center cursor-pointer"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#EDF2F7] cursor-pointer shadow flex items-center justify-center"
      >
        <ChevronRight />
      </button>
      {slides[selectedIndex]?.maxAmount && (
        <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-10 py-6 flex items-center gap-10  w-full max-w-[1200px] mx-auto">
          {slides[selectedIndex]?.maxAmount && (
            <Stat
              title={`${slides[selectedIndex].maxAmount.toLocaleString()} AZN`}
              desc="Maksimal məbləğ"
            />
          )}
          {slides[selectedIndex]?.minInterestRate && (
            <Stat
              title={`${slides[selectedIndex].minInterestRate}%-dən`}
              desc="Minimal illik faiz"
            />
          )}
          {slides[selectedIndex]?.maxTerm && (
            <Stat
              title={`${slides[selectedIndex].maxTerm} ilədək`}
              desc="Maksimal müddət"
            />
          )}
          {slides[selectedIndex]?.minDownPayment && (
            <Stat
              title={`${slides[selectedIndex].minDownPayment}%`}
              desc="Minimal ilkin ödəniş"
            />
          )}

          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
            Müraciət edin
          </button>
          <button className="bg-gray-100 px-6 py-3 rounded-xl">
            Daha ətraflı
          </button>
        </div>
      )}
    </div>
  );
}

function Stat({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <div className="font-semibold text-lg">{title}</div>
      <div className="text-sm text-gray-500">{desc}</div>
    </div>
  );
}
