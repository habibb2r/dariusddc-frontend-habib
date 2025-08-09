"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "../shared/ProductCard";
import laptop from "../../assets/laptop.png";
import watch from "@/assets/watch.png";

import { IProduct } from "@/types/product.type";

const products: IProduct[] = [
  {
    id: 1,
    name: "MacBook Air 256gb",
    image: laptop,
    rating: 105,
    isFavorited: false,
    category: "laptop",
  },
  {
    id: 2,
    name: "MacBook Air 256gb",
    image: watch,
    rating: 105,
    isFavorited: false,
    category: "watch",
  },
  {
    id: 3,
    name: "MacBook Air 256gb",
    image: laptop,
    rating: 105,
    isFavorited: false,
    category: "laptop",
  },
  {
    id: 4,
    name: "MacBook Air 256gb",
    image: watch,
    rating: 105,
    isFavorited: false,
    category: "watch",
  },
  {
    id: 5,
    name: "MacBook Air 256gb",
    image: laptop,
    rating: 105,
    isFavorited: false,
    category: "laptop",
  },
  {
    id: 6,
    name: "MacBook Air 256gb",
    image: watch,
    rating: 105,
    isFavorited: false,
    category: "watch",
  },
  {
    id: 7,
    name: "MacBook Air 256gb",
    image: laptop,
    rating: 105,
    isFavorited: false,
    category: "laptop",
  },
  {
    id: 8,
    name: "MacBook Air 256gb",
    image: watch,
    rating: 105,
    isFavorited: false,
    category: "watch",
  },
];

export default function RecentsLists() {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  const toggleFavorite = (productId: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const currentProducts = products.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Recently Listed</h1>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors disabled:opacity-50 shadow-lg"
              disabled={currentPage === 0}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {currentProducts.map((product) => (
            <ProductCard toggleFavorite={toggleFavorite} product={product} key={product.id} />
          ))}
        </div>

        {/* Bottom border line */}
        <div className="border-b-4 border-cyan-400 w-full rounded-full"></div>
      </div>
    </div>
  );
}
