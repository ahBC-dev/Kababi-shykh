"use client";

import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { FaPhone, FaInstagram, FaChild, FaFire, FaCheckCircle, FaUtensils } from "react-icons/fa"
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";


function FeatureItem({ icon, title, desc }) {
  return (
    <div className="flex flex-col items-start text-right bg-zinc-900/60 p-6 rounded-xl shadow-lg border border-amber-400/20 w-full max-w-[320px] hover:-translate-y-1 transition-transform duration-200">
      <div className="text-amber-400 text-3xl mb-3">{icon}</div>

      <h3
        className="text-2xl golden-brown mb-2"
        style={{ fontFamily: "'Fustat', serif" }}
      >
        {title}
      </h3>

      <p
        className="text-amber-200/90"
        style={{ fontFamily: "'Beiruti', sans-serif" }}
      >
        {desc}
      </p>
    </div>
  );
}

function FoodItem({ icon, title, desc }: { icon: JSX.Element; title: string; desc: string }) {
  return (
    <div className="bg-zinc-900/50 rounded-2xl border border-amber-400/30 overflow-hidden flex flex-col items-center w-full max-w-xs
                    transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.6)]">
      
      {/* Top Image / Icon */}
      <div className="w-full h-48 relative">
        {icon}
      </div>

      {/* Title */}
      <h3
        className="text-2xl golden-brown mt-4 mb-2 text-center"
        style={{ fontFamily: "'Fustat', serif" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-amber-200/90 px-4 text-center mb-4"
        style={{ fontFamily: "'Beiruti', sans-serif" }}
      >
        {desc}
      </p>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden">

      {/* ---------------------------- HERO SECTION ---------------------------- */}
      <section className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-20">

        {/* Fixed Background */}
        <div className="fixed inset-0 -z-20 bg-woody" />
        <div className="fixed inset-0 -z-10 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full gap-16 py-32">

          {/* Image */}
          <div className="flex-1 flex rounded-2xl justify-center md:justify-end overflow-hidden max-w-[480px] h-[700px] relative shadow-2xl">
            <Image
              src="/assets/herobg2.jpg"
              alt="hero"
              width={480}
              height={700}
              className="object-cover w-full h-full hover:scale-110 transition duration-700"
            />

            {/* Glowy logo */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
              <Image
                src="/assets/loko.png"
                alt="Logo"
                width={260}
                height={100}
                className="drop-shadow-[0_0_20px_rgba(255,215,0,0.7)] animate-pulse-slow"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center md:text-right gap-6 max-w-[600px]">

            <h1
              className="text-5xl md:text-6xl golden-brown font-bold leading-snug"
              style={{ fontFamily: "'Fustat', serif" }}
            >
              به کبابی شیخ خوش آمدید
            </h1>

            <p
              className="text-lg md:text-xl leading-relaxed text-amber-300"
              style={{ fontFamily: "'Beiruti', sans-serif" }}
            >
              جایی که طعم اصیل ایرانی با معماری سنتی در فضایی دل‌نشین در هم می‌آمیزد.
            </p>

            {/* Phone + Instagram */}
            <div className="flex flex-row items-center gap-4 mt-2">
              <div className="flex items-center gap-2">
                <FaPhone className="golden-brown text-xl" />
                <div className="text-xl text-amber-300" style={{ fontFamily: "'Beiruti'" }}>
                  +۹۸ ۹۳۳ ۰۱۷ ۱۷۳۲
                </div>
              </div>

              <div className="h-6 w-px bg-amber-400/50" />

              <Link href="https://www.instagram.com/kababi_shykh/" target="_blank">
                <FaInstagram className="golden-brown text-2xl hover:scale-125 transition" />
              </Link>

              <div className="h-6 w-px bg-amber-400/50" />

              <Link href="https://wa.me/989330171732" target="_blank">
                <BsWhatsapp className="golden-brown text-2xl hover:scale-125 transition" />
              </Link>

            </div>

            {/* Button */}
            <Link href="/menu" className="w-full md:w-auto flex justify-center md:justify-end">
              <button className="group mt-4 py-3 px-8 btn-woody rounded-lg flex flex-row-reverse gap-4 items-center cursor-pointer shadow-xl">
                <MdOutlineRestaurantMenu className="text-xl transition group-hover:-translate-x-1" />
                <span className="text-xl transition group-hover:translate-x-1">برو به صفحه منو</span>
              </button>
            </Link>

          </div>
        </div>
      </section>

      {/* ---------------------------- ABOUT SECTION ---------------------------- */}
      <section className="w-full bg-zinc-900 py-16 px-6 md:px-20 text-center lg:text-right flex flex-col lg:flex-row items-center gap-14 justify-center">

        <div className="flex flex-col max-w-2xl items-center">
          {/* Title */}
          <h2
            className="text-4xl md:text-5xl mb-10 golden-brown"
            style={{ fontFamily: "'Fustat', serif" }}
          >
            درباره‌ی کبابی شیخ
          </h2>

          {/* Short Intro Text */}
          <p
            className="text-lg md:text-xl leading-relaxe mb-8 text-amber-300"
            style={{ fontFamily: "'Beiruti', sans-serif" }}
          >
            «کبابی شیخ» جاییست که طعم اصیل جنوب ایران با مهمان‌نوازی گرم
            و فضای سنتی در هم آمیخته است.  
            ما تلاش می‌کنیم تجربه‌ای بسازیم که فراتر از یک وعده‌ی غذایی باشد —  
            تجربه‌ای از عطر زغال، نان داغ، آرامش روستا و غذایی که با عشق آماده شده.
          </p>

          {/* Features Grid (1 col on mobile, 2 col on large) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 max-w-[650px]">
            
            <FeatureItem
              icon={<FaFire />}
              title="طعم اصیل جنوب ایران"
              desc="تمام کباب‌ها با زغال مرغوب و روش سنتی جنوبی تهیه می‌شوند."
            />

            <FeatureItem
              icon={<FaChild />}
              title="محیط مناسب خانواده"
              desc="دارای محل بازی کودکان و فضای بزرگ برای خانواده‌ها."
            />

            <FeatureItem
              icon={<FaUtensils />}
              title="مواد اولیه‌ی تازه"
              desc="نان داغ روز، گوشت تازه و ادویه‌های محلی برای بهترین کیفیت."
            />

            <FeatureItem
              icon={<FaCheckCircle />}
              title="فضای سنتی و دلنشین"
              desc="ترکیبی از معماری سنتی، سبک جنوبی و آرامش روستایی."
            />
          </div>
          {/* BUTTON — SEE FULL ABOUT PAGE */}
          <div className="mt-14 flex justify-center">
            <Link href="/about" className="flex flex-row items-center">
              <button className="group mt-4 py-3 px-8 btn-woody text-black font-semibold rounded-lg transition-all duration-300 shadow-lg flex flex-row-reverse items-center justify-center gap-4 cursor-pointer">
                <IoIosArrowBack className="transform transition-transform duration-300 group-hover:-translate-x-1 text-xl" />
                <span className="transition-transform duration-300 group-hover:translate-x-1 text-xl">
                  مشاهده‌ی اطلاعات بیشتر
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* VIDEO PLACEHOLDER (optional, you said you'll add video) */}      
        <div className="mt-16 flex justify-center">
          <video
            src="/assets/videok.mp4"
            controls
            muted
            autoPlay
            loop
            className="rounded-xl shadow-2xl max-w-[470px] w-full drop-shadow-[0_0_20px_rgba(255,215,0,0.7)] animate-pulse-slow border-2 border-amber-400/50 cursor-pointer"
          />
        </div>
      </section>

      {/* ---------------------------- SPECIALTIES SECTION ---------------------------- */}
      <section className="w-full flex flex-col items-center bg-black/40 py-24 px-6 md:px-12 xl:px-20 text-center md:text-right">
        <h2
          className="text-4xl md:text-5xl mb-10 golden-brown"
          style={{ fontFamily: "'Fustat', serif" }}
        >
          غذاهای ویژه‌ی ما
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FoodItem 
            icon={
              <Image
                src="/assets/dande.jpeg"
                alt="دنده کباب"
                fill
                className="object-cover"
              />
            }
            title="دنده کباب"
            desc="دنده‌کبابی آبدار، نرم و زغالی با طعمی اصیل و لذیذ."
          />

          <FoodItem 
            icon={
              <Image
                src="/assets/barreh.jpeg"
                alt="کباب بره"
                fill
                className="object-cover"
              />
            }
            title="کباب بره"
            desc="کباب بره لطیف، آبدار و زغالی با طعمی اصیل و دلنشین."
          />

          <FoodItem 
            icon={
              <Image
                src="/assets/ostrich.jpeg"
                alt="شتر مرغ"
                fill
                className="object-cover"
              />
            }
            title="شتر مرغ"
            desc="کباب شترمرغ نرم، کم‌چرب و خوش‌طعم با عطری خاص و بافتی سبک و لطیف."
          />
        </div>

        {/* BUTTON TO MENU */}
        <div className="mt-16 flex justify-center">
          <Link href="/menu" className="flex flex-row items-center">
            <button className="group mt-4 py-3 px-8 btn-woody text-black font-semibold rounded-lg transition-all duration-300 shadow-lg flex flex-row-reverse items-center justify-center gap-4 cursor-pointer">
              <MdMenuBook className="transform transition-transform duration-300 group-hover:-translate-x-1 text-xl" />
              <span className="transition-transform duration-300 group-hover:translate-x-1 text-xl">
               مشاهده‌ منو
              </span>
            </button>
          </Link>
        </div>
      </section>

      {/* ---------------------------- GALLERY SECTION ---------------------------- */}

      {/* ---------------------------- CONTACT SECTION ---------------------------- */}
      <section className="py-16 px-6 md:px-20 bg-zinc-900 text-right flex">

        <div className=" flex flex-col items-center justify-center w-full ">
          <h2
            className="text-4xl md:text-5xl golden-brown font-bold mb-8"
            style={{ fontFamily: "'Fustat'" }}
          >
            مکان
          </h2>

          <p className="text-amber-300 text-lg mb-4" style={{ fontFamily: "'Beiruti'" }}>
            استان هرمزگان – بندرلنگه
روستای گزیر – پشت باغ لالا            
          </p>

          <p className="text-amber-300 text-lg mb-4" style={{ fontFamily: "'Beiruti'" }}>
            شماره تماس: ۰۹۳۳ ۰۱۷ ۱۷۳۲
          </p>

          <div className="rounded-xl mt-10 shadow-xl w-full h-[320px] max-w-[600px] overflow-hidden border-2 border-amber-400/50">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1781.9053375933233!2d54.926120441013516!3d26.718494668837103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e58290042503db5%3A0xddf5dd60fb7527ae!2z2qnYqNin2KjbjCDYtNuM2K4!5e0!3m2!1sen!2snl!4v1764243590478!5m2!1sen!2snl" 
              style={{ border: 0 }} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="object-cover w-full h-full rounded-xl"
              >
            </iframe>
          </div>
        </div>

      </section>
    </main>
  );
}
