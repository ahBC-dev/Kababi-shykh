"use client";

import { useState, useEffect, useRef } from "react";
import NavItems from "./subComponents/NavItems";

// Helper: Convert English digits to Persian digits
const toPersianDigits = (str: string) => {
  const persianDigits = ["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];
  return str.replace(/\d/g, (d) => persianDigits[parseInt(d)]);
};

export default function Header() {
  const [showBanner, setShowBanner] = useState(true);
  const bannerRef = useRef<HTMLDivElement>(null);
  const [bannerHeight, setBannerHeight] = useState(0);

  useEffect(() => {
    if (bannerRef.current) {
      setBannerHeight(bannerRef.current.offsetHeight);
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowBanner(false);
      } else {
        setShowBanner(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 z-40 bg-black/60 md:bg-black/50 md:backdrop-blur-md transition-all duration-300">
      {/* Navbar */}
      <div className="w-full transition-transform duration-500">
        <NavItems />
      </div>
    </header>
  );
}
