"use client";
import Image from 'next/image';
import { useQuery } from "@tanstack/react-query";
import api from "@/services/api";
import { MortgageProduct } from '@/types';

const MortgageCards = ({ categoryId }: { categoryId: string | null }) => {
  const { data: products = [], isLoading } = useQuery<MortgageProduct[]>({
    queryKey: ["mortgage-products", categoryId],
    queryFn: () => api.getData(categoryId ? `/mortgage-products?category=${categoryId}` : "/mortgage-products"),
  });

  if (isLoading) {
    return (
      <div className="w-full max-w-[1200px] mx-auto p-4 py-[60px]">
        {[1, 2].map((i) => (
          <div key={i} className="flex flex-col gap-10 md:flex-row bg-white overflow-hidden mb-12 last:mb-0 animate-pulse">
            <div className="w-full md:w-[400px] bg-gray-200 h-[300px] rounded-3xl"></div>
            <div className="flex-1 p-8 flex flex-col justify-center">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 mb-8"></div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className="flex flex-col">
                    <div className="h-6 bg-gray-200 rounded w-20 mb-1"></div>
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="h-12 bg-gray-200 rounded-xl w-40"></div>
                <div className="h-12 bg-gray-200 rounded-xl w-40"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="w-full max-w-[1200px] mx-auto p-4 py-[60px]">
      {products.map((product) => (
        <div key={product._id} className="flex flex-col gap-10 md:flex-row bg-white overflow-hidden mb-12 last:mb-0">

          <div
            className="w-full md:w-[400px] relative min-h-[300px] flex items-center justify-center p-8 rounded-3xl transition-colors duration-300"
            style={{ backgroundColor: product.bgColor || "#2D9D5E" }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image src={product.image} alt={product.title} width={300} height={300} className="object-contain" />
            </div>
          </div>

          <div className="flex-1 p-8 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {product.title}
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">{product.maxAmount.toLocaleString()} AZN</span>
                <span className="text-sm text-gray-500 mt-1">Maksimal məbləğ</span>
              </div>

              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">{product.minInterestRate}%-dən</span>
                <span className="text-sm text-gray-500 mt-1">Minimal illik faiz</span>
              </div>

              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">{product.maxTerm} ilədək</span>
                <span className="text-sm text-gray-500 mt-1">Maksimal müddət</span>
              </div>

              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">{product.minDownPayment}%-dən</span>
                <span className="text-sm text-gray-500 mt-1">Minimal ilkin ödəniş</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#1A56DB] hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-xl transition-colors duration-200">
                Müraciət edin
              </button>

              <button className="bg-[#F3F4F6] hover:bg-gray-200 text-gray-900 font-medium py-3 px-8 rounded-xl transition-colors duration-200">
                Daha ətraflı
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MortgageCards;
