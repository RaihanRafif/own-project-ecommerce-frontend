// pages/checkout/index.tsx
import NextBreadcrumb from '@/components/NextBreadcrumb';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState, useMemo } from 'react';
import './checkout.css'

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

const Checkout = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([
        { id: 1, name: 'LCD Monitor', price: 650, quantity: 1, image: '/images/parfum.png' },
        { id: 2, name: 'H1 Gamepad', price: 550, quantity: 1, image: '/images/parfum.png' },
        { id: 3, name: 'Wireless Mouse', price: 45, quantity: 1, image: '/images/parfum.png' },
        { id: 4, name: 'Mechanical Keyboard', price: 120, quantity: 1, image: '/images/parfum.png' },
        { id: 5, name: 'Gaming Headset', price: 75, quantity: 1, image: '/images/parfum.png' },
        { id: 6, name: 'Laptop Stand', price: 35, quantity: 1, image: '/images/parfum.png' },
        { id: 7, name: 'External Hard Drive', price: 90, quantity: 1, image: '/images/parfum.png' },
        { id: 8, name: 'USB-C Hub', price: 50, quantity: 1, image: '/images/parfum.png' },
        { id: 9, name: 'Webcam', price: 60, quantity: 1, image: '/images/parfum.png' },
        { id: 10, name: 'Portable Speaker', price: 85, quantity: 1, image: '/images/parfum.png' },
    ]);

    const [formData, setFormData] = useState({
        firstName: '',
        companyName: '',
        streetAddress: '',
        apartment: '',
        city: '',
        phoneNumber: '',
        email: '',
        saveInfo: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    // Calculate the subtotal
    const subtotal = useMemo(() => {
        return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }, [cartItems]);

    // Assuming shipping is free, total is same as subtotal
    const total = subtotal;
    return (
        <>
            <Head>
                <title>Checkout</title>
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
            <div className="text-4xl font-medium pl-[135px] px-[135px]">Billing Details</div>
            <div className="parent pl-[135px] px-[135px] flex mt-8">
                <div className="form w-5/12">
                    <form className="flex flex-col gap-4">
                        <label className="flex flex-col text-[#7D8184]">
                            First Name*
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="p-2 border border-[#7D8184] bg-[#b8b8b8]  rounded"
                                required
                            />
                        </label>
                        <label className="flex flex-col text-[#7D8184]">
                            Company Name
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                className="p-2 border border-[#7D8184] bg-[#b8b8b8] rounded"
                            />
                        </label>
                        <label className="flex flex-col text-[#7D8184]">
                            Street Address*
                            <input
                                type="text"
                                name="streetAddress"
                                value={formData.streetAddress}
                                onChange={handleChange}
                                className="p-2 border border-[#7D8184] bg-[#b8b8b8] rounded"
                                required
                            />
                        </label>
                        <label className="flex flex-col text-[#7D8184]">
                            Apartment, floor, etc. (optional)
                            <input
                                type="text"
                                name="apartment"
                                value={formData.apartment}
                                onChange={handleChange}
                                className="p-2 border border-[#7D8184] bg-[#b8b8b8] rounded"
                            />
                        </label>
                        <label className="flex flex-col text-[#7D8184]">
                            Town/City*
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="p-2 border border-[#7D8184] bg-[#b8b8b8] rounded"
                                required
                            />
                        </label>
                        <label className="flex flex-col text-[#7D8184]">
                            Phone Number*
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="p-2 border border-[#7D8184] bg-[#b8b8b8] rounded"
                                required
                            />
                        </label>
                        <label className="flex flex-col text-[#7D8184]">
                            Email Address*
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="p-2 border border-[#7D8184] bg-[#b8b8b8] rounded"
                                required
                            />
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="saveInfo"
                                checked={formData.saveInfo}
                                onChange={handleChange}
                                className="mr-2 rounded"
                            />
                            Save this information for faster check-out next time
                        </label>
                    </form>
                </div>
                <div className="detail ml-auto pt-8 ">
                    <div className="item-list overflow-y-auto h-32">
                        {cartItems.map((item, index) => (
                            <div key={item.id} className="header flex  gap-4 text-gray-700 font-semibold rounded mb-4 items-center">
                                <div>
                                    <div className="img flex items-center gap-4 relative">
                                        <Image src={item.image} alt={"item image"} width={50} height={30} />
                                        <p>{item.name}</p>
                                    </div>
                                </div>
                                <div className='ml-auto'>${item.price}</div>
                            </div>
                        ))}
                    </div>
                    <div className="cartTotal w-full ml-auto pt-8 pb-8 flex flex-col gap-4">
                        <div className="subtotal flex justify-between mt-4">
                            <p>Subtotal:</p>
                            <p>${subtotal}</p>
                        </div>

                        <div className="divider w-full h-fit border border-gray-400 border-[1px]"></div>

                        <div className="shipping flex justify-between">
                            <p>Shipping:</p>
                            <p>Free</p>
                        </div>

                        <div className="divider w-full h-fit border border-gray-400 border-[1px]"></div>

                        <div className="Total flex justify-between">
                            <p>Total:</p>
                            <p>${total}</p>
                        </div>

                    </div>
                    <div className="payment">
                        <div className="bank"></div>
                        <div className="cod"></div>
                    </div>
                    <div className="flex">
                        <div className="column">
                            <input type="text" className='w-60 pt-3 pb-3 rounded' placeholder='Coupon Code' />
                        </div>
                        <div className="buttonCoupon pt-3 pb-3 pl-10 pr-10 ml-4 bg-red-500 h-fit w-fit text-white font-semibold rounded">
                            <button>Apply Coupon</button>
                        </div>
                    </div>
                    <div className="buttonCoupon pt-3 pb-3 pl-10 pr-10 mt-4 bg-red-500 h-fit w-fit text-white font-semibold rounded">
                        <button>Place Order</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
