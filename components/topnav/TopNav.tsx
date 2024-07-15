"use client";

import { faHeart } from '@fortawesome/free-regular-svg-icons/faHeart';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function TopNav() {
    const pathname = usePathname();
    console.log(pathname);

    const isActive = (path: any) => pathname === path;

    return (
        <header className="flex items-center px-[135px] py-[40px] h-10 border-b border-black">
            <div className="mainIcon">
                <h1 className="font-league-spartan text-[24px] font-extrabold">papayataha.</h1>
            </div>
            <div className="navList flex gap-x-12 ml-auto">
                <Link href="/" className={`${isActive('/') ? 'underline underline-offset-4' : ''} hover:cursor-pointer`}>
                    Home
                </Link>
                <Link href="/contact" className={`${isActive('/contact') ? 'underline underline-offset-4' : ''} hover:cursor-pointer`}>
                    Contact
                </Link>
                <Link href="/about" className={`${isActive('/about') ? 'underline underline-offset-4' : ''} hover:cursor-pointer`}>
                    About
                </Link>
                <Link href="/auth/signup" className={`${isActive('/auth/signup') ? 'underline underline-offset-4' : ''} hover:cursor-pointer`}>
                    Sign Up
                </Link>
            </div>
            <div className="searchBar flex items-center ml-auto relative">
                <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="bg-slate-200 text-lg px-4 py-2 w-[280px] placeholder:text-slate-500 rounded"
                    style={{ fontSize: '18px' }}
                />
                <FontAwesomeIcon
                    icon={faSearch}
                    className="absolute right-2"
                />
            </div>
            {/* <div className="rightSide ml-24 flex gap-x-4">
                <FontAwesomeIcon icon={faHeart} className="w-8 h-8"/>
                <FontAwesomeIcon icon={faCartShopping}  className="w-8 h-8" />
            </div> */}
        </header>
    );
}
