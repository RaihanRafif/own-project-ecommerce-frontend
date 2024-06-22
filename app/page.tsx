import { faAngleRight, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {

  return (
    <div className="">
      <div className="topDiv px-[135px] flex mb-36">
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
        <div className="rightNav w-[892px] h-[344px]">

        </div>
      </div>

      <div className="row px-[135px]">
        <div className="titleSection flex items-center text-center">
          <div className="redBlock w-5 h-10 bg-red-500 rounded"></div>
          <div className="title  text-center ml-2 text-[#DB4444] text-base font-semibold">
            Today`s
          </div>
        </div>
        <div className="headerTitle flex mt-8 ">
          <div className="title text-4xl font-semibold">
            Flash Sale
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
      </div>


    </div>
  );
}
