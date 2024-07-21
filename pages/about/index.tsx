import NextBreadcrumb from '@/components/NextBreadcrumb';
import Image from 'next/image';
import React from 'react';
import { CiDollar, CiShop } from 'react-icons/ci';
import { FaWarehouse } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import { GrMoney } from 'react-icons/gr';

const About = () => {
    return (
        <>
            <NextBreadcrumb
                homeElement={'Home'}
                separator={<span> | </span>}
                activeClasses='text-amber-500'
                containerClasses='flex py-5 bg-gradient-to-r from-purple-600 to-blue-600'
                listClasses='hover:underline mx-2 font-bold'
                capitalizeLinks
                productName={''}
            />

            <div className="pl-[135px]">
                <div className="flex items-center gap-48">
                    <div className="detail flex-1">
                        <p className='text-[54px] font-semibold'>Our Story</p>
                        <p className='text-justify'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                        <br />
                        <p className='text-justify'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                    </div>
                    <div className="image ">
                        <Image src={"/images/two womans.png"} alt='two WOman' width={100} height={100} className='w-[705px]' />
                    </div>
                </div>
            </div>

            <div className="flex item-center justify-center mt-40 gap-7">
                <div className="flex flex-col w-[300px] pt-[30px] pb-[30px] border border-[2px] rounded items-center justify-center align-middle hover:bg-red-500 group">
                    <div className="rounded-full bg-black w-[80px] h-[80px] border-[12px] text-white flex justify-center items-center text-4xl group-hover:border-red-400 group-hover:bg-white group-hover:text-black">
                        <CiShop />
                    </div>

                    <p className='text-[32px] font-bold group-hover:text-white'>10.5k</p>
                    <p className='font-semibold group-hover:text-white'>Sallers active our site</p>
                </div>


                <div className="flex flex-col w-[300px] pt-[30px] pb-[30px] border border-[2px] rounded items-center justify-center align-middle hover:bg-red-500 group">
                    <div className="rounded-full bg-black w-[80px] h-[80px] border-[12px] text-white flex justify-center items-center text-3xl group-hover:border-red-400 group-hover:bg-white group-hover:text-black">
                        <CiDollar />
                    </div>

                    <p className='text-[32px] font-bold group-hover:text-white'>33k</p>
                    <p className='font-semibold group-hover:text-white'>Monthly Produduct Sale</p>
                </div>

                <div className="flex flex-col w-[300px] pt-[30px] pb-[30px] border border-[2px] rounded items-center justify-center align-middle hover:bg-red-500 group">
                    <div className="rounded-full bg-black w-[80px] h-[80px] border-[12px] text-white flex justify-center items-center text-3xl group-hover:border-red-400 group-hover:bg-white group-hover:text-black">
                        <FiShoppingBag />
                    </div>

                    <p className='text-[32px] font-bold group-hover:text-white'>45.5k</p>
                    <p className='font-semibold group-hover:text-white'>Customer active in our site</p>
                </div>

                <div className="flex flex-col w-[300px] pt-[30px] pb-[30px] border border-[2px] rounded items-center justify-center align-middle hover:bg-red-500 group">
                    <div className="rounded-full bg-black w-[80px] h-[80px] border-[12px] text-white flex justify-center items-center text-3xl group-hover:border-red-400 group-hover:bg-white group-hover:text-black">
                        <GrMoney />
                    </div>

                    <p className='text-[32px] font-bold group-hover:text-white'>25k</p>
                    <p className='font-semibold group-hover:text-white'>Anual gross sale in our site</p>
                </div>
            </div>
        </>
    )
}

export default About;
