"use client";

import { faAngleRight, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel } from "flowbite-react";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ItemSlider from '@/components/ItemSlider';
import { GiSmartphone } from "react-icons/gi";
import { IoWatchOutline, IoGameControllerOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoIosDesktop } from "react-icons/io";
import { CiCamera, CiHeadphones, CiTwitter } from "react-icons/ci";
import { FiHeadphones } from "react-icons/fi";
import BestSellingProduct from '@/components/bestSellingProduct';
import ExploreOurProducts from '@/components/exploreOurProducts';
import { FaInstagram, FaTruckFast } from 'react-icons/fa6';
import { TiSocialFacebook, TiSocialLinkedin } from 'react-icons/ti';
import { FaRegCopyright } from 'react-icons/fa';
import "./signup.css";
import Head from 'next/head';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';

const SignUp: React.FC = () => {
    return (
        <>
            <Head>
                <title>Sign up</title>
            </Head>
            <div className="parents flex pt-[60px] ">
                <div className="left w-3/6 h-[680px] flex bg-red-50">
                    <img src="/images/background.png" className='w-full' alt="" />
                </div>
                <div className="right w-3/6 mr-auto px-[135px] flex flex-col">
                    <div className="form mt-auto mb-auto ml-auto w-[371px]">
                        <p className="mainTitle text-4xl font-medium">
                            Create an account
                        </p>
                        <p className='mt-6'>Enter your details below</p>

                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full custom-input"
                        />

                        <input
                            type="text"
                            placeholder="Email or Phone Number"
                            className="w-full custom-input"
                            autoComplete="off"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full custom-input"
                            autoComplete="off"
                        />

                        <div className="button-custom bg-[red] rounded text-white flex justify-center items-center h-14 w-full bg-red-400 mt-10  hover:cursor-pointer">Create Account</div>
                        <div className="button-custom rounded flex justify-center items-center h-14 w-full gap-4 border-[1px] border-black mt-4 hover:cursor-pointer">
                            <FcGoogle className='w-6 h-6' />
                            <p>Sign up with Google</p>
                        </div>

                        <div className="signup gap-4 w-full flex mt-7 text-center items-center justify-center">
                            <p>Already have account?</p>
                            <Link href="/auth/signin" className='underline'>
                                Log in
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default SignUp;
