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

export default function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setItems(data.products); // Assuming the response has a "products" key
        setLoading(false);

      });
  }, []);

  console.log(items);

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

  const [startExploreIndex, setStartExploreIndex] = useState(0);
  const [endExploreIndex, setEndExploreIndex] = useState(10);

  const nextExploreItems = () => {
    if (endExploreIndex < items.length) {
      setStartExploreIndex(prevIndex => prevIndex + 10);
      setEndExploreIndex(prevIndex => prevIndex + 10);
    }
  };

  const previousExploreItems = () => {
    if (startExploreIndex > 0) {
      setStartExploreIndex(prevIndex => prevIndex - 10);
      setEndExploreIndex(prevIndex => prevIndex - 10);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

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
            <div className="leftButton w-[46px] h-[46px] flex items-center justify-center bg-[#F5F5F5] rounded-full">
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className="rightButton w-[46px] h-[46px] flex items-center justify-center bg-[#F5F5F5] rounded-full">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
        <div className="itemsSlider w-full h-full overflow-x-hidden flex justify-between pt-[60px] pb-[60px] pl-[135px] pr-[135px]">
          <div className="group flex flex-col items-center justify-center border h-36 w-[170px] rounded border-gray-700 hover:bg-[#DB4444] hover:text-white cursor-pointer">
            <GiSmartphone size={30} className="mb-3 group-hover:text-white" />
            <p>Smartphones</p>
          </div>
          <div className="group flex flex-col items-center justify-center border h-36 w-[170px] rounded border-gray-700 hover:bg-[#DB4444] hover:text-white cursor-pointer">
            <IoWatchOutline size={30} className="mb-3 group-hover:text-white" />
            <p>Watches</p>
          </div>
          <div className="group flex flex-col items-center justify-center border h-36 w-[170px] rounded border-gray-700 hover:bg-[#DB4444] hover:text-white cursor-pointer">
            <IoGameControllerOutline size={30} className="mb-3 group-hover:text-white" />
            <p>Gaming</p>
          </div>
          <div className="group flex flex-col items-center justify-center border h-36 w-[170px] rounded border-gray-700 hover:bg-[#DB4444] hover:text-white cursor-pointer">
            <IoIosDesktop size={30} className="mb-3 group-hover:text-white" />
            <p>Computers</p>
          </div>
          <div className="group flex flex-col items-center justify-center border h-36 w-[170px] rounded border-gray-700 hover:bg-[#DB4444] hover:text-white cursor-pointer">
            <CiCamera size={30} className="mb-3 group-hover:text-white" />
            <p>Cameras</p>
          </div>
          <div className="group flex flex-col items-center justify-center border h-36 w-[170px] rounded border-gray-700 hover:bg-[#DB4444] hover:text-white cursor-pointer">
            <FiHeadphones size={30} className="mb-3 group-hover:text-white" />
            <p>Headphones</p>
          </div>
        </div>

        <div className="border-b mx-[135px] mt-[60px] mb-[70px]"></div>
      </div>

      <div className="row">
        <div className="titleSection px-[135px] flex items-center text-center">
          <div className="redBlock w-5 h-10 bg-red-500 rounded"></div>
          <div className="title text-center ml-2 text-[#DB4444] text-base font-semibold">
            Best Selling
          </div>
        </div>
        <div className="headerTitle flex mt-8 px-[135px]">
          <div className="title text-4xl font-semibold">
            Best Selling Products
          </div>
          <div className="buttonNav ml-auto flex gap-2">
            <div className="leftButton w-[46px] h-[46px] flex items-center justify-center bg-[#F5F5F5] rounded-full cursor-pointer" onClick={prevSellingSlide}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className="rightButton w-[46px] h-[46px] flex items-center justify-center bg-[#F5F5F5] rounded-full cursor-pointer" onClick={nextSellingSlide}>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
        <div className="itemsSlider w-full h-[385px] pl-[135px] overflow-x-hidden">
          <BestSellingProduct items={items} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        </div>
      </div>

      <div className="row">
        <div className="titleSection px-[135px] flex items-center text-center">
          <div className="redBlock w-5 h-10 bg-red-500 rounded"></div>
          <div className="title text-center ml-2 text-[#DB4444] text-base font-semibold">
            Our Products
          </div>
        </div>
        <div className="headerTitle flex mt-8 px-[135px]">
          <div className="title text-4xl font-semibold">
            Explore Our Products
          </div>
          <div className="buttonNav ml-auto flex gap-2">
            <div className="leftButton w-[46px] h-[46px] flex items-center justify-center bg-[#F5F5F5] rounded-full cursor-pointer" onClick={previousExploreItems}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className="rightButton w-[46px] h-[46px] flex items-center justify-center bg-[#F5F5F5] rounded-full cursor-pointer" onClick={nextExploreItems}>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
        <div className="itemsSlider w-full h-full overflow-x-hidden flex justify-between  pb-[60px] pl-[135px] pr-[135px]">
          <ExploreOurProducts items={items.slice(startExploreIndex, endExploreIndex)} startExploreIndex={startExploreIndex} endExploreIndex={endExploreIndex} />
        </div>

        <div className="button bg-[#DB4444] w-[234px] h-[56px] flex justify-center items-center ml-auto mr-auto text-white rounded cursor-pointer mt-[40px]">
          <p>View All Products</p>
        </div>
      </div>

      <div className="row mt-32">
        <div className="titleSection px-[135px] flex items-center text-center">
          <div className="redBlock w-5 h-10 bg-red-500 rounded"></div>
          <div className="title text-center ml-2 text-[#DB4444] text-base font-semibold">
            Featured
          </div>
        </div>
        <div className="headerTitle flex mt-8 px-[135px]">
          <div className="title text-4xl font-semibold">
            New Arrival
          </div>

        </div>
        <div className="layoutNewArrival w-full pl-[135px] px-[135px] flex h-[600px] pt-[60px] gap-[30px]">
          <div className="leftSide bg-black w-2/4 h-full text-white flex flex-col gap-3 pl-[30px] pb-[32px] relative">
            <div className="absolute left-[110px] bottom-0">
              <img src="/images/ps.png" className='' alt="" />
            </div>

            <div className="title mt-auto w-full z-10">
              <p className='font-semibold text-[24px]'>PlayStation 5</p>
              <p className=' w-80'>Black and White version of the PS5 coming out on sale.</p>
            </div>

            <div className="z-10">
              <p className='underline font-medium text-[16px] hover:cursor-pointer w-fit'>Shop Now</p>
            </div>
          </div>
          <div className="rightSide w-2/4 h-full flex flex-col gap-8">
            <div className="top bg-black h-2/4 relative flex flex-col justify-center items-center text-white">
              <div className="absolute left-2/4 bottom-0">
                <img src="/images/woman-hat.png" className="h-[250px]" alt="Women's Collection" />
              </div>

              <div className="title mt-auto w-full z-10 pl-6">
                <p className='font-semibold text-[24px]'>Women’s Collections</p>
                <p className='w-80 text-[16px] '>Featured woman collections that give you another vibe.</p>
              </div>

              <div className="z-10 pl-6 w-full mb-6">
                <p className='underline font-medium text-[16px] hover:cursor-pointer w-fit'>Shop Now</p>
              </div>
            </div>

            <div className="bottom h-2/4 w-full flex gap-[32px]">
              <div className="left bg-black w-2/4 h-full relative flex flex-col">
                <div className="absolute left-[80px] bottom-[20px] z-0">
                  <img src="/images/speaker.png" className="h-[200px]" alt="Speaker" />
                </div>

                <div className="text-content relative z-10 mt-auto mb-6">
                  <div className="title w-full text-white">
                    <p className='font-semibold text-[24px] text-white ml-6 '>Speakers</p>
                    <p className='w-auto ml-6'>Amazon wireless speakers</p>
                  </div>

                  <div className="z-10 w-full ml-6 text-white">
                    <p className='underline font-medium text-[16px] hover:cursor-pointer w-fit'>Shop Now</p>
                  </div>
                </div>
              </div>


              <div className="right bg-black w-2/4 h-full relative flex flex-col">
                <div className="absolute left-[80px] bottom-[20px] z-0">
                  <img src="/images/parfum.png" className="h-[200px]" alt="parfum" />
                </div>

                <div className="text-content relative z-10 mt-auto mb-6">
                  <div className="title w-full text-white">
                    <p className='font-semibold text-[24px] text-white ml-6 '>Perfume</p>
                    <p className='w-auto ml-6'>GUCCI INTENSE OUD EDP</p>
                  </div>

                  <div className="z-10 w-full ml-6 text-white">
                    <p className='underline font-medium text-[16px] hover:cursor-pointer w-fit'>Shop Now</p>
                  </div>
                </div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-[140px] flex gap-[88px] w-full items-center justify-center">
        <div className="item flex flex-col justify-center align-middle items-center">
          <div className="icon rounded-full border-[10px] border-[#a8a8a8] w-[58px] h-[58px] bg-black text-white flex align-middle items-center justify-center text-[22px]">
            <FaTruckFast />
          </div>
          <div className="title text-center mt-3">
            <p className='font-semibold text-[20px] text-center'>FREE AND FAST DELIVERY</p>
            <p className='text-[14px] text-center'>Free delivery for all orders over $140</p>
          </div>
        </div>
        <div className="item flex flex-col justify-center align-middle items-center">
          <div className="icon rounded-full border-[10px] border-[#a8a8a8] w-[58px] h-[58px] bg-black text-white flex align-middle items-center justify-center text-[22px]">
            <CiHeadphones />
          </div>
          <div className="title text-center mt-3">
            <p className='font-semibold text-[20px] text-center'>24/7 CUSTOMER SERVICE</p>
            <p className='text-[14px] text-center'>Friendly 24/7 customer support</p>
          </div>
        </div>
        <div className="item flex flex-col justify-center align-middle items-center">
          <div className="icon rounded-full border-[10px] border-[#a8a8a8] w-[58px] h-[58px] bg-black text-white flex align-middle items-center justify-center text-[22px]">
            <IoShieldCheckmarkOutline />
          </div>
          <div className="title text-center mt-3">
            <p className='font-semibold text-[20px] text-center'>MONEY BACK GUARANTEE</p>
            <p className='text-[14px] text-center'>We return money within 30 days</p>
          </div>
        </div>
      </div>

      <div className="row mt-[140px] flex w-full gap-20 text-white bg-black h-[440px] pt-20 justify-center">
        <div className="max-content flex flex-col gap-6">
          <p className='text-[24px] font-bold'>Exclusive</p>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <input type="text"></input>
        </div>

        <div className="w-44 flex flex-col gap-6">
          <p className='text-[24px] font-bold'>Support</p>
          <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <input type="text"></input>
        </div>

        <div className="w-44 flex flex-col gap-6">
          <p className='text-[24px] font-bold'>Account</p>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>

        <div className="w-44 flex flex-col gap-6">
          <p className='text-[24px] font-bold'>Quick Link</p>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Wishlist</p>
          <p>Contact</p>
        </div>

        <div className="min-w-max flex flex-col gap-6">
          <p className='text-[24px] font-bold'>Download App</p>
          <p className='opacity-75 text-xs'>Save $3 with App New User Only</p>
          <div className="flex w-full justify-between">
            <div className="left w-2/3 h-2/3">
              <img src="/images/Qr Code.png" alt="" />
            </div>
            <div className="right flex flex-col justify-between ">
              <div className="top ">
                <img src="/images/playstore.png" alt="" />
              </div>
              <div className="bottom">
                <img src="/images/download-appstore.png" alt="" />
              </div>
            </div>
          </div>

          <div className="flex w-full justify-between">
            <div className="w-8 h-8 text-[24px]">
              <TiSocialFacebook />
            </div>
            <div className="w-8 h-8 text-[24px]">
              <CiTwitter />
            </div>
            <div className="w-8 h-8 text-[24px]">
              <FaInstagram />
            </div>
            <div className="w-8 h-8 text-[24px]">
              <TiSocialLinkedin />
            </div>
          </div>
        </div>

      </div>

      <div className="row flex align-middle items-center gap-2 justify-center bg-black text-[#4a4949] border-t-[1px] border-gray-600 pt-4 pb-4">
        <FaRegCopyright />
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>

    </div>
  );
}
