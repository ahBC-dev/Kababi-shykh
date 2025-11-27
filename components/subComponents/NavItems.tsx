"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "صفحه اصلی", href: "/" },
  { label: "منو", href: "/menu" },
  { label: "درباره کبابی شیخ", href: "/about" },
  { label: "ارتباط با ما", href: "/contact" },
];

export default function NavItems() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const menuVariants: Variants = {
    hidden: { x: "100%" },
    visible: { 
      x: 0, 
      transition: { type: "spring", stiffness: 300, damping: 30 } 
    },
    exit: { 
      x: "100%", 
      transition: { type: "spring", stiffness: 300, damping: 30 } 
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, type: "spring", stiffness: 300 },
    }),
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex w-full px-10 z-50 flex-row-reverse items-center justify-between mx-auto max-w-7xl h-16">
        {/* Logo */}
        <Image 
          src="/assets/loko.png" 
          alt="Logo" 
          width={65} 
          height={25} 
          className="object-contain" 
        />
        
        <ul 
          className="flex gap-5 lg:gap-6 xl:gap-10 text-lg" 
          style={{ fontFamily: "'Fustat', serif" }}
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.href} className="relative">
              <Link
                href={item.href}
                className="relative group font-light cursor-pointer golden-brown px-4 py-3 inline-block hover:text-amber-400 transition-colors duration-300"
              >
                <span>{item.label}</span>
                <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-golden rounded-full origin-center transition-all duration-300 group-hover:w-full -translate-x-1/2"></span>
                {isActive(item.href) && (
                  <span className="absolute -bottom-1 left-1/2 w-full h-[2px] bg-golden rounded-full -translate-x-1/2"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden w-full flex items-center justify-between px-4 py-3 sticky top-0 z-50 bg-transparent">
        {/* Logo */}
        <Image 
          src="/assets/loko.png" 
          alt="Logo" 
          width={65} 
          height={25} 
          className="object-contain" 
        />

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-10 h-10 flex flex-col items-center justify-center transition-all duration-300 focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          <motion.span
            className="absolute block w-6 h-[2px] bg-golden rounded"
            animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute block w-6 h-[2px] bg-golden rounded"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute block w-6 h-[2px] bg-golden rounded"
            animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
            transition={{ duration: 0.3 }}
          />
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed top-0 right-0 h-full w-[60vw] max-w-sm bg-black/50 backdrop-blur-md z-[999] flex flex-col items-center pt-16 px-6"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Logo inside menu */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="mb-10"
              >
                <Image
                  src="/assets/loko.png"
                  alt="Menu Logo"
                  width={100}
                  height={40}
                  className="object-contain drop-shadow-[0_0_15px_rgba(255,215,0,0.7)] filter brightness-110 animate-pulse-slow"
                />
              </motion.div>

              {/* Navigation Items */}
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.href}
                  custom={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="w-full mb-4 relative"
                >
                  <Link
                    href={item.href}
                    className={`block w-full text-2xl py-2 font-light transition-colors duration-300 ${
                      isActive(item.href) ? "text-amber-400" : "text-golden"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}