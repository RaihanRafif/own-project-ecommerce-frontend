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
import "./signin.css";
import Head from 'next/head';
import { FcGoogle } from 'react-icons/fc';

const SignIn: React.FC = () => {
    return (
        <>
            <Head>
                <title>Sign in</title>
            </Head>
            <div className="parents flex pt-[60px] ">
                <div className="left w-3/6 h-[680px] flex bg-red-50">
                    <img src="/images/background.png" className='w-full' alt="" />
                </div>
                <div className="right w-3/6 mr-auto px-[135px] flex flex-col">
                    <div className="form mt-auto mb-auto ml-auto w-[371px]">
                        <p className="mainTitle text-4xl font-medium">
                            Log in to papayataha.
                        </p>
                        <p className='mt-6'>Enter your details below</p>

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

                        <div className="buttonParent flex">
                            <div className="button-custom bg-[red] rounded text-white flex justify-center items-center h-14 w-full bg-red-400 mt-10  hover:cursor-pointer">Log In</div>

                            <div className="signup gap-4 w-full flex mt-7 text-center items-center justify-center">
                                <p className="hover:cursor-pointer text-[red]">Forget Password?</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default SignIn;
