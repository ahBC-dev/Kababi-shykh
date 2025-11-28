"use client";

import Link from "next/link";
import { FaPhone, FaInstagram, FaMapMarkerAlt, FaCode, FaUserTie, FaCrown } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <div className="fixed inset-0 -z-20 bg-woody-two" />
      <div className="fixed inset-0 -z-10 bg-indigo-500/20" />
      
      {/* Single Section Contact */}
      <section className="w-full min-h-screen flex items-center justify-center px-6 md:px-10 lg:px-18 xl:px-24 py-24">
        
        {/* Main Content Card */}
        <div className="relative z-10 bg-zinc-900/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-amber-400/30 p-8 md:p-12 max-w-4xl w-full flex flex-col justify-center items-center">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 
              className="text-4xl md:text-6xl golden-brown font-bold mb-6 drop-shadow-[0_0_20px_rgba(255,215,0,0.6)]"
              style={{ fontFamily: "'Fustat', serif" }}
            >
              ارتباط با ما
            </h1>
            <p 
              className="text-amber-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Beiruti', sans-serif" }}
            >
              برای تجربه‌ای بی‌نظیر از طعم اصیل جنوب ایران در فضایی سنتی و دلنشین
            </p>
          </div>

          {/* Three Column Layout */}
          <div className="flex flex-col md:flex-1 lg:flex-row gap-8 md:gap-12">
            
            {/* Column 1: Google Maps & Instagram */}
            <div className="space-y-8 text-center">
              
              {/* Google Maps */}
              <div className="group">
                <div className="bg-amber-400/10 p-6 rounded-2xl border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300">
                  <SiGooglemaps className="text-4xl golden-brown mx-auto mb-4" />
                  <h3 
                    className="text-2xl golden-brown mb-3"
                    style={{ fontFamily: "'Fustat', serif" }}
                  >
                    گوگل مپ
                  </h3>
                  <p 
                    className="text-amber-200/80 text-sm mb-4"
                    style={{ fontFamily: "'Beiruti', sans-serif" }}
                  >
                    موقعیت مکانی ما روی نقشه
                  </p>
                  <a 
                    href="https://maps.google.com/?q=کبابی+شیخ+گزیر"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-amber-400 text-black px-4 py-2 rounded-lg hover:bg-amber-300 transition-colors text-sm font-medium"
                  >
                    <FaMapMarkerAlt />
                    مشاهده روی نقشه
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="group">
                <div className="bg-amber-400/10 p-6 rounded-2xl border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300">
                  <FaInstagram className="text-4xl golden-brown mx-auto mb-4" />
                  <h3 
                    className="text-2xl golden-brown mb-3"
                    style={{ fontFamily: "'Fustat', serif" }}
                  >
                    اینستاگرام
                  </h3>
                  <p 
                    className="text-amber-200/80 text-sm mb-4"
                    style={{ fontFamily: "'Beiruti', sans-serif" }}
                  >
                    آخرین تصاویر و اخبار
                  </p>
                  <a 
                    href="https://instagram.com/kababi_shykh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
                  >
                    <FaInstagram />
                    @kababi_shykh
                  </a>
                </div>
              </div>

            </div>

            {/* Column 2: Restaurant Phone & Owner */}
            <div className="space-y-8 text-center">
              
              {/* Restaurant Phone */}
              <div className="group">
                <div className="bg-amber-400/10 p-6 rounded-2xl border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300">
                  <FaPhone className="text-4xl golden-brown mx-auto mb-4" />
                  <h3 
                    className="text-2xl golden-brown mb-4"
                    style={{ fontFamily: "'Fustat', serif" }}
                  >
                    شماره رستوران
                  </h3>
                  <div className="space-y-3">
                    <a 
                      href="tel:+989330171732"
                      className="block text-2xl golden-brown font-bold hover:text-amber-300 transition-colors direction-ltr"
                      style={{ fontFamily: "'Beiruti', sans-serif" }}
                    >
                      ۰۹۳۳ ۰۱۷ ۱۷۳۲
                    </a>
                    <p 
                      className="text-amber-200/80 text-sm"
                      style={{ fontFamily: "'Beiruti', sans-serif" }}
                    >
                      برای رزرو و اطلاعات بیشتر
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Additional Suggestion: Hours */}
              <div className="group">
                <div className="bg-amber-400/10 p-6 rounded-2xl border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300">
                  <FaUserTie className="text-3xl golden-brown mx-auto mb-4" />
                  <h3 
                    className="text-xl golden-brown mb-3"
                    style={{ fontFamily: "'Fustat', serif" }}
                  >
                    ساعات کاری
                  </h3>
                  <p 
                    className="text-amber-200/80 text-sm"
                    style={{ fontFamily: "'Beiruti', sans-serif" }}
                  >
                    هر شب از ساعت ۱۸:۰۰ تا ۳:۰۰ بامداد
                  </p>
                </div>
              </div>

              {/* Restaurant Owner */}
              <div className="group">
                <div className="bg-amber-400/10 p-6 rounded-2xl border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300">
                  <FaCrown className="text-4xl golden-brown mx-auto mb-4" />
                  <h3 
                    className="text-2xl golden-brown mb-4"
                    style={{ fontFamily: "'Fustat', serif" }}
                  >
                    مالک رستوران
                  </h3>
                  <p 
                    className="text-amber-300 text-lg font-medium mb-2"
                    style={{ fontFamily: "'Fustat', serif" }}
                  >
                    شیخ علی حسینی گزیر
                  </p>
                </div>
              </div>

            </div>

            {/* Column 3: Website Team */}
            <div className="space-y-8 text-center">
              
              {/* Website Development Team */}
              <div className="group">
                <div className="bg-amber-400/10 p-6 rounded-2xl border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 items-center flex flex-col">
                  <FaCode className="text-4xl golden-brown mx-auto mb-4" />
                  <h3 
                    className="text-2xl golden-brown mb-6"
                    style={{ fontFamily: "'Fustat', serif" }}
                  >
                    تیم سازنده وب‌سایت
                  </h3>
                  
                  <div className="space-y-4 text-center flex flex-col items-center">
                    {/* Lead Developer */}
                    <div className="bg-black/30 p-4 rounded-lg border border-amber-400/10">
                      <h4 
                        className="text-amber-300 font-medium mb-2"
                        style={{ fontFamily: "'Fustat', serif" }}
                      >
                        برنامه‌نویس و سرپرست فنی
                      </h4>
                      <p 
                        className="text-amber-200/80 text-sm mb-3"
                        style={{ fontFamily: "'Beiruti', sans-serif" }}
                      >
                        احمد حسینی گزیر
                      </p>
                      <div className="flex gap-2 justify-end">
                        {/* Website Button */}
                        <Link 
                          href="https://www.ahmadaljaziri.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 bg-amber-400 text-black px-3 py-1 rounded text-xs hover:bg-amber-300 transition-colors"
                        >
                          <FaCode className="text-xs" />
                          وبسایت
                        </Link>
                        {/* Instagram Button */}
                        <Link 
                          href="https://www.instagram.com/ahmad_aljaziri1/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded text-xs hover:opacity-90 transition-opacity"
                        >
                          <FaInstagram className="text-xs" />
                          اینستاگرام
                        </Link>
                      </div>
                    </div>

                    {/* Project Manager */}
                    <div className="bg-black/30 p-4 rounded-lg border border-amber-400/10 w-full items-center flex flex-col">
                      <h4 
                        className="text-amber-300 font-medium mb-2"
                        style={{ fontFamily: "'Fustat', serif" }}
                      >
                        مدیر پروژه
                      </h4>
                      <p 
                        className="text-amber-200/80 text-sm mb-3"
                        style={{ fontFamily: "'Beiruti', sans-serif" }}
                      >
                        صدیق شیخی
                      </p>
                      <div className="flex gap-2 justify-end">
                        {/* Instagram Button Only */}
                        <Link 
                          href="https://www.instagram.com/s.alj71/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded text-xs hover:opacity-90 transition-opacity"
                        >
                          <FaInstagram className="text-xs" />
                          اینستاگرام
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Footer Note */}
          <div className="text-center mt-12 pt-6 border-t border-amber-400/20">
            <p 
              className="text-amber-300/70 text-sm"
              style={{ fontFamily: "'Beiruti', sans-serif" }}
            >
              با افتخار در خدمت شما مردم خونگرم جنوب ایران هستیم
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}