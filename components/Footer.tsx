"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaLink } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full flex flex-col justify-center items-center bg-black/70 text-amber-300 pt-12 pb-6 border-t border-amber-400/10 backdrop-blur-sm">
            
            {/* --- TOP GRID --- */}
            <div className="max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-12">

                {/* --- COLUMN 1: LOGO --- */}
                <div className="flex flex-col items-center  text-center gap-3">
                    <Image
                        src="/assets/loko.png"
                        alt="Kababi Shykh Logo"
                        width={200}
                        height={80}
                        className="object-contain drop-shadow-[0_0_20px_rgba(255,200,50,0.4)]"
                    />
                    <div className="flex flex-row items-center justify-center gap-5">
                        <Link
                            href="https://www.instagram.com/kababi_shykh"
                            target="_blank"
                            className="text-3xl hover:text-amber-400 transition-all hover:scale-110"
                        >
                            <FaInstagram />
                        </Link>

                        <Link
                            href="https://wa.me/989330171732"
                            target="_blank"
                            className="text-3xl hover:text-amber-400 transition-all hover:scale-110"
                        >
                            <FaWhatsapp />
                        </Link>
                    </div>

                </div>

                {/* --- COLUMN 2: LOCATION --- */}
                <div className="flex flex-col items-center justify-center gap-3">
                    <h3
                        className="text-xl golden-brown font-bold flex items-center gap-1"
                        style={{ fontFamily: "'Fustat', serif" }}
                    >
                        مکان ما <span className="text-amber-400 text-3xl"><MdOutlineLocationOn /></span>
                    </h3>

                    <p
                        className="text-amber-200/80 leading-loose text-base text-center"
                        style={{ fontFamily: "'Beiruti', sans-serif" }}
                    >
                        استان هرمزگان – بندرلنگه<br />
                        روستای گزیر – پشت باغ لالا
                    </p>
                </div>

                {/* --- COLUMN 3: OPENING HOURS + SOCIALS --- */}
                <div className="flex flex-col items-center justify-center md:items-start gap-4">

                    {/* Socials */}
                    
                    <h3
                        className="text-xl golden-brown font-bold flex items-center gap-1"
                        style={{ fontFamily: "'Fustat', serif" }}
                    >
                        ساعات کاری <span className="text-amber-400 text-3xl "><IoTimeOutline /></span>
                    </h3>

                    <p
                        className="text-amber-200/80 text-base leading-loose"
                        style={{ fontFamily: "'Beiruti', sans-serif" }}
                    >
                        هر شب از ساعت ۱۸:۰۰ تا ۳:۰۰ بامداد
                    </p>
                </div>
            </div>

            {/* --- DIVIDER LINE --- */}
            <div className="w-full h-px bg-amber-400/20 mt-10"></div>

            {/* --- BOTTOM COPYRIGHT ROW --- */}
            <div
                className="py-5 pb-0 text-center text-amber-300 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6"
                style={{ fontFamily: "'Beiruti', sans-serif" }}
            >
                <span className="text-base md:text-lg">© 2025 Kababi Shykh — All Rights Reserved</span>

                <span className="hidden md:block h-5 w-px bg-amber-400/40"></span>

                <span className="text-amber-200/90 flex items-center flex-col space-y-2 text-lg">
                    <div className="flex flex-row gap-2 items-center">
                        برنامه‌نویسی و سرپرست فنی :<Link href="https://ahmadaljaziri.com" target="_blank"><span className="text-amber-400">احمد حسینی</span></Link>
                        <Link href="https://www.instagram.com/ahmad_aljaziri1" target="_blank" className="text-amber-400 hover:underline"><FaInstagram /></Link>
                        <Link href="https://www.ahmadaljaziri.com/" target="_blank" className="text-amber-400 hover:underline"><FaLink /></Link>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <span>مدیر پروژه :</span>
                        <span className="text-amber-400">صديق شیخی</span>
                        <Link href="https://www.instagram.com/s.alj71/" target="_blank" className="text-amber-400 hover:underline"><FaInstagram /></Link>
                    </div>
                </span>
            </div>

        </footer>
    );
}
