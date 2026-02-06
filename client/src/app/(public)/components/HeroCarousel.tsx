"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    title: "Ev tikinti ipoteka krediti",
    desc: "Fərdi layihəniz ilə evə sahib olun – Tikinti ipoteka krediti ilə istədiyiniz evi tikin!",
    image: "/helmet.png",
  },
  {
    title: "Təmir krediti",
    desc: "Evinizi yeniləyin, rahatlıq yaradın",
    image: "/tools.png",
  },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div className="relative max-w-[1344px] mx-auto ">
      <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="min-w-full bg-[#8B6BD6] px-16 py-20 flex justify-between items-center"
            >
              <div className="max-w-xl text-white">
                <h1 className="text-4xl font-semibold mb-4">{slide.title}</h1>
                <p className="text-base opacity-90">{slide.desc}</p>
              </div>

              <Image
                src={slide.image}
                alt=""
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

      <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-10 py-6 flex items-center gap-10  w-full max-w-[1200px] mx-auto">
        <Stat title="200,000 AZN" desc="Maksimal məbləğ" />
        <Stat title="12%-dən" desc="Minimal illik faiz" />
        <Stat title="15 ilədək" desc="Maksimal müddət" />
        <Stat title="15%" desc="Minimal ilkin ödəniş" />

        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
          Müraciət edin
        </button>
        <button className="bg-gray-100 px-6 py-3 rounded-xl">
          Daha ətraflı
        </button>
      </div>
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
