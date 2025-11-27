"use client";

import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { FaHistory, FaUsers, FaHeart, FaAward, FaLeaf, FaFire, FaClock, FaStar } from "react-icons/fa";
import { GiCook } from "react-icons/gi";

export default function AboutPage() {
  return (
    <main className="w-full overflow-x-hidden">
        
      {/* ---------------------------- HERO SECTION ---------------------------- */}
      <section className="relative w-full h-[70vh] min-h-[700px] flex items-center justify-center py-20 px-6 md:px-20 text-center overflow-hidden">
        {/* Absolute Background with Overlay */}
        <div className="absolute inset-0 -z-20 bg-woody-three" />
        <div className="fixed inset-0 -z-30 bg-woody-four" />
        <div className="absolute inset-0 -z-10 bg-black/80" />
        
        {/* Glowy Header Text */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="relative z-10 text-center">
            <h1 
                className="text-5xl md:text-7xl golden-brown font-bold drop-shadow-[0_0_30px_rgba(255,215,0,0.8)] animate-pulse"
                style={{ fontFamily: "'Fustat', serif" }}
            >
                درباره کبابی شیخ
            </h1>
            <p 
                className="text-amber-300/90 text-xl mt-6 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                style={{ fontFamily: "'Beiruti', sans-serif" }}
            >
                داستان اصالت، عشق و طعمی که از دل تاریخ برمی‌خیزد
            </p>
            </div>
            <Image
                src="/assets/loko.png"
                alt="About Kababi Sheikh"
                width={300}
                height={400}
                className="rounded-2xl shadow-2xl golden-brown drop-shadow-[0_0_30px_rgba(255,215,0,0.8)] animate-pulse-slow"
            />
        </div>
      </section>

      {/* ---------------------------- HISTORY SECTION ---------------------------- */}
      <section className="w-full bg-black/30 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="text-right space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <FaHistory className="text-4xl golden-brown drop-shadow-[0_0_30px_rgba(255,215,0,0.8)]" />
                <h2 
                  className="text-4xl md:text-5xl golden-brown font-bold drop-shadow-[0_0_30px_rgba(255,215,0,0.8)]"
                  style={{ fontFamily: "'Fustat', serif" }}
                >
                  تاریخچه و داستان شکل‌گیری
                </h2>
              </div>

              <div className="space-y-6">
                <p 
                  className="text-lg md:text-xl text-amber-300 leading-relaxed"
                  style={{ fontFamily: "'Beiruti', sans-serif" }}
                >
                  ساخت این کبابی در سال ۱۳۹۹ آغاز شد و طی چهار سال با تلاش‌های گسترده، برنامه‌ریزی دقیق و کوشش مستمر ادامه یافت.
                </p>
                
                <p 
                  className="text-lg md:text-xl text-amber-300 leading-relaxed "
                  style={{ fontFamily: "'Beiruti', sans-serif" }}
                >
                  این پروژه که با صرف انرژی، دقت و زحمات فراوان همراه بود، سرانجام در سال ۱۴۰۳ به نتیجه‌ای کامل و قابل‌افتخار رسید. این کبابی نمادی‌ست از کار سخت، پشتکار و تعهد در مسیر خلق بهترین‌ها.
                </p>

                <div className="bg-amber-400/10 border-r-4 border-amber-400 p-6 rounded-lg">
                  <p 
                    className="text-lg golden-brown italic leading-relaxed"
                    style={{ fontFamily: "'Fustat', serif" }}
                  >
                    "و سرانجام در سال ۱۴۰۳ با جلال و شکوه گشایش یافت؛ گشایشی که نتیجه سال‌ها تلاش، پشتکار و عشق بی‌پایان بود..."
                  </p>
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative aspect-square rounded-4xl overflow-hidden shadow-2xl border-2 border-amber-400/40 hover:drop-shadow-[0_0_20px_rgba(255,215,0,0.6)] transition-all duration-500">
              <div className="w-full h-full bg-amber-400/10 flex items-center justify-center">
                <Image
                  src="/assets/eftth.png"
                  alt="History of Kababi Sheikh"
                  fill
                  className="rounded-2xl object-cover object-center hover:scale-105  transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------- ARCHITECTURE SECTION ---------------------------- */}
      <section className="w-full bg-stone-800 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Placeholder */}
            <div className="relative aspect-square rounded-4xl overflow-hidden shadow-2xl border-2 border-amber-400/40 hover:drop-shadow-[0_0_20px_rgba(255,215,0,0.6)] transition-all duration-500">
              <div className="w-full h-full bg-amber-400/10 flex items-center justify-center">
                <Image
                  src="/assets/gallery1.jpg"
                  alt="History of Kababi Sheikh"
                  fill
                  className="rounded-2xl object-cover object-center hover:scale-105  transition-transform duration-500"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-right space-y-8 order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6 justify-center lg:justify-end">
                <h2 
                  className="text-4xl md:text-5xl golden-brown font-bold drop-shadow-[0_0_30px_rgba(255,215,0,0.8)]"
                  style={{ fontFamily: "'Fustat', serif" }}
                >
                  هویت معماری و نمای سنتی
                </h2>
                <FaAward className="text-4xl golden-brown drop-shadow-[0_0_30px_rgba(255,215,0,0.8)]" />
              </div>

              <div className="space-y-6">
                <p 
                  className="text-lg md:text-xl text-amber-300 leading-relaxed"
                  style={{ fontFamily: "'Beiruti', sans-serif" }}
                >
                  نمای بیرونی «کبابی شیخ» با الهام از معماری محلی و سنتی طراحی شده است؛ بنایی که روح و اصالت گذشته را در خود حفظ کرده و با جزئیات قدیمی و هنرمندانه آراسته شده است.
                </p>
                
                <p 
                  className="text-lg md:text-xl text-amber-300 leading-relaxed"
                  style={{ fontFamily: "'Beiruti', sans-serif" }}
                >
                  استفاده از مصالح بومی، خطوط آرام و رنگ‌های گرم، به ساختمان هویتی اصیل و دلنشین می‌بخشد و یادآور معماری سنتی و ارزش‌های دیرینه این سرزمین است.
                </p>

                <p 
                  className="text-lg md:text-xl text-amber-300 leading-relaxed"
                  style={{ fontFamily: "'Beiruti', sans-serif" }}
                >
                  این ظاهر سنتی نه‌تنها جلوه‌ای چشم‌نواز دارد، بلکه حس صمیمیت، سادگی و پیوند با ریشه‌های فرهنگی را به مهمانان منتقل می‌کند.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------- PHILOSOPHY SECTION ---------------------------- */}
      <section className="w-full bg-zinc-900 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Section Header */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <GiCook className="text-6xl golden-brown drop-shadow-[0_0_30px_rgba(255,215,0,0.8)]" />
            <h2 
              className="text-4xl md:text-5xl golden-brown font-bold drop-shadow-[0_0_30px_rgba(255,215,0,0.8)]"
              style={{ fontFamily: "'Fustat', serif" }}
            >
              فلسفه آشپزی در کبابی شیخ
            </h2>
          </div>

          {/* Main Philosophy Text */}
          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            <p 
              className="text-lg md:text-xl text-amber-300 leading-relaxed text-center lg:text-right"
              style={{ fontFamily: "'Beiruti', sans-serif" }}
            >
              در «کبابی شیخ» آشپزی فراتر از تهیه غذاست؛ این یک هنر است که داستان اصالت محلی را با روحی مدرن روایت می‌کند. ما معتقدیم هر غذا باید طعم اصیل را به بهترین شکل منتقل کند و در عین حال، دقت و ظرافت در آماده‌سازی و ارائه را نیز داشته باشد.
            </p>

            <p 
              className="text-lg md:text-xl text-amber-300 leading-relaxed text-center lg:text-right"
              style={{ fontFamily: "'Beiruti', sans-serif" }}
            >
              ما بهترین و تازه‌ترین مواد اولیه را انتخاب می‌کنیم و از روش‌های سنتی پخت استفاده می‌کنیم تا طعم‌های طبیعی و غنی حفظ شود، بدون هیچ افزودنی صنعتی. هر دستور غذا ترکیبی از خلاقیت و مهارت است تا تجربه‌ای کامل حسی ایجاد شود.
            </p>
          </div>

          {/* Philosophy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            
            <div className="bg-zinc-800/50 p-8 rounded-2xl border border-amber-400/20 hover:border-amber-400/40 hover:drop-shadow-[0_0_20px_rgba(255,215,0,0.6)] transition-all duration-500">
              <FaLeaf className="text-4xl golden-brown mx-auto mb-4" />
              <h3 className="text-2xl golden-brown mb-4" style={{ fontFamily: "'Fustat', serif" }}>مواد اولیه تازه</h3>
              <p className="text-amber-200/80" style={{ fontFamily: "'Beiruti', sans-serif" }}>
                انتخاب بهترین و تازه‌ترین مواد با استانداردهای کیفیت بالا
              </p>
            </div>

            <div className="bg-zinc-800/50 p-8 rounded-2xl border border-amber-400/20 hover:border-amber-400/40 hover:drop-shadow-[0_0_20px_rgba(255,215,0,0.6)] transition-all duration-500">
              <FaFire className="text-4xl golden-brown mx-auto mb-4" />
              <h3 className="text-2xl golden-brown mb-4" style={{ fontFamily: "'Fustat', serif" }}>روش‌های سنتی</h3>
              <p className="text-amber-200/80" style={{ fontFamily: "'Beiruti', sans-serif" }}>
                پخت با زغال و روش‌های اصیل برای حفظ طعم طبیعی
              </p>
            </div>

            <div className="bg-zinc-800/50 p-8 rounded-2xl border border-amber-400/20 hover:border-amber-400/40 hover:drop-shadow-[0_0_20px_rgba(255,215,0,0.6)] transition-all duration-500">
              <FaStar className="text-4xl golden-brown mx-auto mb-4" />
              <h3 className="text-2xl golden-brown mb-4" style={{ fontFamily: "'Fustat', serif" }}>تجربه کامل</h3>
              <p className="text-amber-200/80" style={{ fontFamily: "'Beiruti', sans-serif" }}>
                ترکیب عطر، طعم و زیبایی برای خلق لحظات به یاد ماندنی
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------- CTA SECTION ---------------------------- */}
      <section className="w-full bg-amber-400/10 py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="bg-zinc-900/80 rounded-2xl p-12 border border-amber-400/30 shadow-2xl">
            <h2 
              className="text-4xl md:text-5xl golden-brown font-bold mb-6 drop-shadow-[0_0_30px_rgba(255,215,0,0.8)]"
              style={{ fontFamily: "'Fustat', serif" }}
            >
              برای تجربه‌ای بی‌همتا
            </h2>
            
            <p 
              className="text-lg md:text-xl text-amber-300 leading-relaxed mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: "'Beiruti', sans-serif" }}
            >
              حضور در «کبابی شیخ» ضروری است. هر گوشه این مجموعه، ترکیبی از شکوه معماری، نورپردازی دلنشین و عطر غذاهای بی‌نظیر را به شما هدیه می‌دهد.
            </p>

            <p 
              className="text-lg golden-brown font-bold mb-8 italic"
              style={{ fontFamily: "'Fustat', serif" }}
            >
              تنها با حضور خود، می‌توانید تجربه‌ای کامل و منحصر به فرد از فرهنگ و طعم اصیل منطقه را احساس کنید.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Link href="/menu" className="flex justify-center">
                <button className="group py-3 px-8 btn-woody text-black font-semibold rounded-lg transition-all duration-300 shadow-lg flex flex-row-reverse items-center justify-center gap-4 cursor-pointer">
                  <IoIosArrowBack className="transform transition-transform duration-300 group-hover:-translate-x-1 text-xl" />
                  <span className="transition-transform duration-300 group-hover:translate-x-1 text-xl">
                    مشاهده منو
                  </span>
                </button>
              </Link>

              <Link href="/contact" className="flex justify-center">
                <button className="group py-3 px-8 btn-woody-two text-white font-semibold rounded-lg transition-all duration-300 shadow-lg flex flex-row-reverse items-center justify-center gap-4 cursor-pointer">
                  <IoIosArrowBack className="transform transition-transform duration-300 group-hover:-translate-x-1 text-xl" />
                  <span className="transition-transform duration-300 group-hover:translate-x-1 text-xl">
                    اطلاعات تماس
                  </span>
                </button>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}