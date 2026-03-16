"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Plus, ArrowRight } from "lucide-react";
import { formatCurrency } from "@/utils/helpers";

const POPULAR_ITEMS = [
  { id: 1, name: "Butter Chicken Thali", category: "Main Course", price: 120, rating: 4.9, reviews: 342, emoji: "🍛", tag: "Bestseller" },
  { id: 2, name: "Veg Biryani", category: "Main Course", price: 90, rating: 4.8, reviews: 280, emoji: "🍚", tag: "Popular" },
  { id: 3, name: "Masala Dosa", category: "Breakfast", price: 60, rating: 4.7, reviews: 195, emoji: "🫓", tag: "Fresh" },
  { id: 4, name: "Chocolate Shake", category: "Beverages", price: 70, rating: 4.8, reviews: 160, emoji: "🍫", tag: "Loved" },
  { id: 5, name: "Paneer Burger", category: "Snacks", price: 80, rating: 4.6, reviews: 230, emoji: "🍔", tag: "New" },
  { id: 6, name: "Gulab Jamun", category: "Desserts", price: 45, rating: 4.9, reviews: 410, emoji: "🍮", tag: "Sweet" },
];

const tagColors = {
  "Bestseller": "bg-primary-500 text-white",
  "Popular": "bg-emerald-500 text-white",
  "Fresh": "bg-cyan-500 text-white",
  "Loved": "bg-rose-500 text-white",
  "New": "bg-violet-500 text-white",
  "Sweet": "bg-accent-400 text-dark-900",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function PopularFoods({ onAddToCart }) {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-primary-500">🔥 Trending Now</p>
            <h2 className="text-4xl font-black text-dark-900">Popular Foods</h2>
            <p className="mt-2 text-dark-500">Most loved dishes by our campus community</p>
          </div>
          <Link href="/menu">
            <motion.span
              whileHover={{ x: 4 }}
              className="hidden items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-700 md:flex cursor-pointer"
            >
              View All Menu <ArrowRight className="h-4 w-4" />
            </motion.span>
          </Link>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {POPULAR_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-2xl border border-dark-100 bg-white shadow-md hover:shadow-xl hover:shadow-primary-500/10 hover:border-primary-200 transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary-50 to-accent-300/20 overflow-hidden">
                <div className="flex h-full items-center justify-center text-8xl">
                  {item.emoji}
                </div>
                <div className="absolute left-3 top-3">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${tagColors[item.tag]}`}>
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="mb-1 flex items-center gap-2">
                  <span className="text-xs font-semibold text-dark-400">{item.category}</span>
                </div>
                <h3 className="mb-1 text-base font-bold text-dark-900">{item.name}</h3>
                <div className="mb-3 flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5 fill-accent-400 text-accent-400" />
                  <span className="text-xs font-bold text-dark-800">{item.rating}</span>
                  <span className="text-xs text-dark-400">({item.reviews} reviews)</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-black text-primary-600">{formatCurrency(item.price)}</p>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => onAddToCart?.(item)}
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-500 text-white shadow-lg shadow-primary-500/30 hover:bg-primary-600 transition-colors"
                  >
                    <Plus className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center md:hidden">
          <Link href="/menu">
            <span className="inline-flex items-center gap-2 rounded-2xl bg-primary-50 px-6 py-3 text-sm font-bold text-primary-600 cursor-pointer">
              View Full Menu <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
