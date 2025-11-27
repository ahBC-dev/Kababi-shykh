"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MENU_TABS = ["مرغ", "مزه", "گوشت", "ویژه"] as const;

const MENU_ITEMS = {
  مرغ: [
    { name: "کتف و بال", image: "/assets/pics/knormal.jpeg" },
    { name: "کتف و بال تند", image: "/assets/pics/ktond.jpeg" },
    { name: "جوجه زعفرانی", image: "/assets/pics/jjz.jpeg" },
    { name: "جوجه ماستی", image: "/assets/pics/jjm.jpeg" },
    { name: "جوجه لیمونی", image: "/assets/pics/jjl.jpeg" },
    { name: "جوجه تند (اسپایسی)", image: "/assets/pics/jjt.jpeg" },
  ],
  مزه: [
    { name: "گوجه کباب", image: "/assets/pics/goga.jpeg" },
    { name: "فلفل کبابی", image: "/assets/pics/flfl.jpeg" },
    { name: "قارچ کبابی", image: "/assets/pics/qarch.jpeg" },
  ],
  گوشت: [
    { name: "دنده کباب", image: "/assets/pics/dande.jpeg" },
    { name: "کباب بره", image: "/assets/pics/barreh.jpeg" },
    { name: "کباب کهرو", image: "/assets/pics/kabk2.PNG" },
    { name: "گوساله ماستی", image: "/assets/pics/gosm.jpeg" },
    { name: "گوساله لیمویی", image: "/assets/pics/gosl.jpeg" },
  ],
  ویژه: [
    { name: "دنده کباب", image: "/assets/pics/dande.jpeg" },
    { name: "شتر مرغ", image: "/assets/pics/ostrich.jpeg" },
    { name: "کباب کوبیده", image: "/assets/pics/kabk.jpeg" },
    { name: "چربی", image: "/assets/pics/charb.jpeg" },
    { name: "جگر دل و قلوه", image: "/assets/pics/jgr.jpeg" },
    { name: "جگر گوسفندی", image: "/assets/pics/jgrg.jpeg" },
  ],
};

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState<typeof MENU_TABS[number]>("مرغ");

  const itemsToDisplay = useMemo(() => MENU_ITEMS[activeTab], [activeTab]);

  // Simple fade-in + slide-up variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <main className="w-full min-h-screen bg-zinc-900/5 py-28 px-6 md:px-20">
        {/* Fixed Background */}
        <div className="fixed inset-0 -z-20 bg-woody-two" />
        <div className="fixed inset-0 -z-10 bg-black/40" />

      {/* Header */}
      <h1
        className="text-4xl md:text-5xl golden-brown font-bold mb-12 text-center"
        style={{ fontFamily: "'Fustat', serif" }}
      >
        منوی کبابی شیخ
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {MENU_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`btn-woody px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === tab
                ? "scale-105 shadow-lg"
                : "opacity-70 hover:scale-105 hover:shadow-md"
            }`}
            style={{ fontFamily: "'Beiruti', sans-serif" }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto"
        layout
        >
        {itemsToDisplay.map((item, idx) => (
        <motion.div
            key={idx}
            className="relative h-64 rounded-xl overflow-hidden cursor-pointer group shadow-lg border border-amber-400/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
    >
            <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center p-4 group-hover:bg-black/50 transition-all duration-300">
                <h3
                className="text-3xl golden-brown mb-2 transition-all duration-300 drop-shadow-[0_0_15px_rgba(255,215,0,0.9)]"
                style={{ fontFamily: "'Fustat', serif" }}
                >
                {item.name}
                </h3>
            </div>
            </motion.div>
        ))}
        </motion.div>

    </main>
  );
}
