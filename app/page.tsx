"use client";

import { faAngleRight, faArrowLeft, faArrowRight, faDesktop, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel } from "flowbite-react";
import Image from 'next/image';
import { useState } from 'react';
import { faker } from '@faker-js/faker';
import ItemSlider from '@/components/ItemSlider';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons/faMobileScreen';
import { IoWatchOutline } from "react-icons/io5";
import { IoIosDesktop } from "react-icons/io";
import { GiSmartphone } from "react-icons/gi";
import { CiCamera } from "react-icons/ci";
import { FiHeadphones } from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";

export default function Home() {
  const generateItems = (numItems: number) => {
    const items = [];
    for (let i = 1; i <= numItems; i++) {
      let price = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
      let discount = Math.floor(Math.random() * 50) + 1;

      items.push({
        id: i,
        name: faker.commerce.product(),
        discount: discount,
        price: price,
        review: Math.random(),
        image: `https://via.placeholder.com/270x350.png?text=Product+${i}`
      });
    }
    return items;
  };

  const items = generateItems(15);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextFlashSaleSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 5 ? 0 : prevIndex + 1
    );
  };

  const prevFlashSaleSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 5 : prevIndex - 1
    );
  };

  const nextSellingSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 5 ? 0 : prevIndex + 1
    );
  };

  const prevSellingSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 5 : prevIndex - 1
    );
  };


  return (
    <div className="">
      <div className="topDiv px-[135px] flex mb-32">
        <div className="leftNav w-[233px] border-r border-black relative">
          <ul className="space-y-4 pt-10">
            <li className="relative group">
              <div className="flex justify-between items-center">
                <span>Woman`s Fashion</span>
                <FontAwesomeIcon icon={faAngleRight} className='mr-8' />
              </div>
              <ul className="absolute left-full top-0 mt-1 hidden group-hover:block bg-white border border-black w-[200px] space-y-2 p-2">
                <li>Subcategory 1</li>
                <li>Subcategory 2</li>
                <li>Subcategory 3</li>
              </ul>
            </li>
            <li className="relative group">
              <div className="flex justify-between items-center">
                <span>Men`s Fashion</span>
                <FontAwesomeIcon icon={faAngleRight} className='mr-8' />
              </div>
              <ul className="absolute left-full top-0 mt-1 hidden group-hover:block bg-white border border-black w-[200px] space-y-2 p-2">
                <li>Subcategory 1</li>
                <li>Subcategory 2</li>
                <li>Subcategory 3</li>
              </ul>
            </li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby`s & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </div>
        <div className="rightNav w-full h-[385px] pl-10 pt-10">
          <Carousel slide={false}>
            <Image src="https://flowbite.com/docs/images/carousel/carousel-1.svg" width={200} height={100} className='w-full' alt="..." />
            <Image src="https://flowbite.com/docs/images/carousel/carousel-2.svg" width={200} height={100} alt="..." />
            <Image src="https://flowbite.com/docs/images/carousel/carousel-3.svg" width={200} height={100} alt="..." />
            <Image src="https://flowbite.com/docs/images/carousel/carousel-4.svg" width={200} height={100} alt="..." />
            <Image src="https://flowbite.com/docs/images/carousel/carousel-5.svg" width={200} height={100} alt="..." />
          </Carousel>
        </div>
      </div>

      <div className="row">
        <div className="titleSection px-[135px] flex items-center text-center">
          <div className="redBlock w-5 h-10 bg-red-500 rounded"></div>
          <div className="title text-center ml-2 text-[#DB4444] text-base font-semibold">
            Today`s
          </div>
        </div>
        <div className="headerTitle flex mt-8 px-[135px]">
          <div className="title text-4xl font-semibold">
            Flash Sale
          </div>
          <div className="buttonNav ml-auto flex gap-2">
            <div className="leftButton w-[46px] h-[46px] flex items-center justify-center bg-[#F5F5F5] rounded-full cursor-pointer" onClick={prevFlashSaleSlide}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className="rightButton w-[46px] h-[46px] flex items-center justify-center bg-[#F5F5F5] rounded-full cursor-pointer" onClick={nextFlashSaleSlide}>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
        <div className="itemsSlider w-full h-[385px] pl-[135px] overflow-x-hidden">
          <ItemSlider items={items} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        </div>

        <div className="button bg-[#DB4444] w-[234px] h-[56px] flex justify-center items-center ml-auto mr-auto text-white rounded cursor-pointer">
          <p>View All Products</p>
        </div>

        <div className="border-b mx-[135px] mt-[60px] mb-[70px]"></div>
      </div>

      <div className="row">
        <div className="titleSection px-[135px] flex items-center text-center">
          <div className="redBlock w-5 h-10 bg-red-500 rounded"></div>
          <div className="title text-center ml-2 text-[#DB4444] text-base font-semibold">
            Categories
          </div>
        </div>
        <div className="headerTitle flex mt-8 px-[135px]">
          <div className="title text-4xl font-semibold">
            Browse By Category
          </div>
          <div className="buttonNav ml-auto flex gap-2">
            <div className="leftButton w-[46px] h-[46px] flex items-center justify-center bg-[#F5F5F5] rounded-full" >
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className="rightButton w-[46px] h-[46px] flex items-center justify-center bg-[#F5F5F5] rounded-full" >
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
        <div className="itemsSlider w-full h-full overflow-x-hidden flex justify-between pt-[60px] pb-[60px] pl-[135px] pr-[135px]">
          <div className="group flex flex-col items-center justify-center border h-36 w-[170px] rounded border-gray-700 hover:bg-[#DB4444] transition-all duration-200 cursor-pointer">
            <GiSmartphone className="group-hover:text-white" style={{ width: '56px', height: '56px' }} />
            <p className='text-base pt-[16px] group-hover:text-white'>Phones</p>
          </div>
          <div className="group flex flex-col items-center justify-center border h-36 w-[170px] rounded border-gray-700 hover:bg-[#DB4444] transition-all duration-200 cursor-pointer">
            <IoIosDesktop className="group-hover:text-white" style={{ width: '56px', height: '56px' }} />
            <p className='text-base pt-[16px] group-hover:text-white'>Computers</p>
          </div>
          <div className="group flex flex-col items-center justify-center border h-36 w-[170px] rounded border-gray-700 hover:bg-[#DB4444] transition-all duration-200 cursor-pointer">
            <IoWatchOutline className="group-hover:text-white" style={{ width: '56px', height: '56px' }} />
            <p className='text-base pt-[16px] group-hover:text-white'>Smartwatch</p>
          </div>
          <div className="group flex flex-col items-center justify-center border h-36 w-[170px] rounded border-gray-700 hover:bg-[#DB4444] transition-all duration-200 cursor-pointer">
            <CiCamera className="group-hover:text-white" style={{ width: '56px', height: '56px' }} />
            <p className='text-base pt-[16px] group-hover:text-white'>Camera</p>
          </div>
          <div className="group flex flex-col items-center justify-center border h-36 w-[170px] rounded border-gray-700 hover:bg-[#DB4444] transition-all duration-200 cursor-pointer">
            <FiHeadphones className="group-hover:text-white" style={{ width: '56px', height: '56px' }} />
            <p className='text-base pt-[16px] group-hover:text-white'>Headphone</p>
          </div>
          <div className="group flex flex-col items-center justify-center border h-36 w-[170px] rounded border-gray-700 hover:bg-[#DB4444] transition-all duration-200 cursor-pointer">
            <IoGameControllerOutline className="group-hover:text-white" style={{ width: '56px', height: '56px' }} />
            <p className='text-base pt-[16px] group-hover:text-white'>Gaming</p>
          </div>
        </div>
        <div className="border-b mx-[135px] mb-[70px]"></div>
      </div>

      <div className="row">
        <div className="titleSection px-[135px] flex items-center text-center">
          <div className="redBlock w-5 h-10 bg-red-500 rounded"></div>
          <div className="title text-center ml-2 text-[#DB4444] text-base font-semibold">
            This Month
          </div>
        </div>
        <div className="headerTitle flex mt-8 px-[135px]">
          <div className="title text-4xl font-semibold">
            Best Selling Products
          </div>
          <div className="buttonNav ml-auto flex gap-2">
            <div className="button bg-[#DB4444] w-[234px] h-[56px] flex justify-center items-center ml-auto mr-auto text-white rounded cursor-pointer">
              <p>View All</p>
            </div>
          </div>
        </div>
        <div className="itemsSlider w-full h-[385px] pl-[135px] overflow-x-hidden">
          <ItemSlider items={items} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        </div>
      </div>

    </div>
  );
}
