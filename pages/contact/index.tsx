"use client";

import Head from 'next/head';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import NextBreadcrumb from '@/components/NextBreadcrumb';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

const Contact: React.FC = () => {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <NextBreadcrumb
                homeElement={'Home'}
                separator={<span> | </span>}
                activeClasses='text-amber-500'
                containerClasses='flex py-5 bg-gradient-to-r from-purple-600 to-blue-600'
                listClasses='hover:underline mx-2 font-bold'
                capitalizeLinks
                productName={''}
            />
            <div className="parents flex gap-4 w-full">
                <div className="contact shadow w-[20%] ml-[135px] p-7" >
                    <div className="flex flex-col gap-4 ">
                        <div className="header flex items-center gap-4">
                            <div className="icon rounded-full w-10 h-10 bg-[#DB4444] flex justify-center items-center text-white">
                                <FaPhoneAlt className='w-2/4 h-2/4' />
                            </div>
                            <p className='text-base font-semibold'>Call To Us</p>
                        </div>

                        <p>We are available 24/7, 7 days a week.</p>
                        <p>Phone: +8801611112222</p>

                        <div className="divider border-gray-500 border-[1px]"></div>
                    </div>
                    <div className="flex flex-col gap-4  mt-4">
                        <div className="header flex items-center gap-4">
                            <div className="icon rounded-full w-10 h-10 bg-[#DB4444] flex justify-center items-center text-white">
                                <MdOutlineMail className='w-3/4 h-3/4' />
                            </div>
                            <p className='text-base font-semibold'>Write To Us</p>
                        </div>

                        <p>Fill out our form and we will contact you within 24 hours.</p>
                        <p>Emails: customer@exclusive.com</p>
                    </div>
                </div>
                <div className="form shadow flex flex-col gap-4 p-8 mr-[135px] w-[80%]">
                    <div className="flex gap-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-1/3 p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-1/3 p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="text"
                            placeholder="Phone"
                            className="w-1/3 p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <textarea
                            placeholder="Message"
                            className="w-full p-2 border border-gray-300 rounded h-52"
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button className="p-2 bg-[#DB4444] text-white rounded">Send Message</button>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .shadow {
                    box-shadow: 0 1px 13px rgba(0, 0, 0, 0.1);
                }
            `}</style>
        </>
    );
}

export default Contact;
