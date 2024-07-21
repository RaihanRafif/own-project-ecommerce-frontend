import NextBreadcrumb from '@/components/NextBreadcrumb';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Image from 'next/image';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { ImCross } from 'react-icons/im';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

const Cart = () => {
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

    const handleValue = (index: number, status: string) => {
        setCartItems(prevItems =>
            prevItems.map((item, i) =>
                i === index
                    ? { ...item, quantity: status === 'increase' ? item.quantity + 1 : item.quantity > 0 ? item.quantity - 1 : 0 }
                    : item
            )
        );
    };

    const handleRemove = (index: number) => {
        setCartItems(prevItems => prevItems.filter((_, i) => i !== index));
    };

    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    const subtotal = calculateTotal();
    const shipping = 0; // Adjust the shipping cost if needed
    const total = subtotal + shipping;

    return (
        <>
            <Head>
                <title>Cart</title>
            </Head>
            <div>
                <NextBreadcrumb
                    homeElement={'Home'}
                    separator={<span> | </span>}
                    activeClasses='text-amber-500'
                    containerClasses='flex py-5 bg-gradient-to-r from-purple-600 to-blue-600'
                    listClasses='hover:underline mx-2 font-bold'
                    capitalizeLinks
                    productName={''}
                />
            </div>
            <div className="pl-[135px] px-[135px] w-full">
                <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>
                <div className="bg-white sm:rounded-lg mb-6">
                    <div className="header grid grid-cols-4 gap-4 px-6 py-4 text-gray-700 font-semibold shadow-custom-header rounded mb-4">
                        <div>Product</div>
                        <div>Price</div>
                        <div>Quantity</div>
                        <div>Subtotal</div>
                    </div>
                    <div className="overflow-y-auto h-96">
                        {cartItems.map((item, index) => (
                            <div key={item.id} className="header grid grid-cols-4 gap-4 px-6 py-4 text-gray-700 font-semibold shadow-custom-header rounded mb-4 items-center">
                                <div>
                                    <div className="img flex items-center gap-4 relative">
                                        <div className="removeButton w-4 h-4 rounded-full bg-red-500 absolute -top-1 -left-1 text-white flex justify-center items-center hover:cursor-pointer" onClick={() => handleRemove(index)}>
                                            <ImCross className='w-2 h-2' />
                                        </div>
                                        <Image src={item.image} alt={"item image"} width={50} height={30} />
                                        <p>{item.name}</p>
                                    </div>
                                </div>
                                <div className=''>${item.price}</div>
                                <div>
                                    <div className="quantityParent flex border-black border-[1px] w-fit pt-[6px] pb-[6px] pl-2 pr-2 gap-4 rounded">
                                        <div className="value w-10 text-center">{item.quantity}</div>
                                        <div className="buttonParent">
                                            <div className="up hover:cursor-pointer">
                                                <IoIosArrowUp onClick={() => handleValue(index, 'increase')} />
                                            </div>
                                            <div className="down hover:cursor-pointer">
                                                <IoIosArrowDown onClick={() => handleValue(index, 'decrease')} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>${item.price * item.quantity}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-between mt-6">
                    <button className="px-4 py-2 font-medium border border-black rounded shadow-sm hover:cursor-pointer">
                        Return To Shop
                    </button>
                    <button className="px-4 py-2 font-medium border border-black rounded shadow-sm hover:cursor-pointer">
                        Update Cart
                    </button>
                </div>
                <div className="bottom flex mt-20">
                    <div className="column">
                        <input type="text" className='w-60 pt-3 pb-3 rounded' placeholder='Coupon Code' />
                    </div>
                    <div className="buttonCoupon pt-3 pb-3 pl-10 pr-10 ml-4 bg-red-500 h-fit w-fit text-white font-semibold rounded">
                        <button>Apply Coupon</button>
                    </div>
                    <div className="cartTotal w-96 ml-auto border border-black rounded pl-6 pr-6 pt-8 pb-8 flex flex-col gap-4">
                        <p className='font-semibold text-xl'>Cart Total</p>

                        <div className="subtotal flex justify-between mt-4">
                            <p>Subtotal:</p>
                            <p>${subtotal.toFixed(2)}</p>
                        </div>

                        <div className="divider w-full h-fit border border-gray-400 border-[1px]"></div>

                        <div className="shipping flex justify-between">
                            <p>Shipping:</p>
                            <p>${shipping.toFixed(2)}</p>
                        </div>

                        <div className="divider w-full h-fit border border-gray-400 border-[1px]"></div>

                        <div className="Total flex justify-between">
                            <p>Total:</p>
                            <p>${total.toFixed(2)}</p>
                        </div>

                        <button className='ml-auto mr-auto mt-4 pt-3 pb-3 pl-8 pr-8 bg-red-500 h-fit w-fit text-white font-semibold rounded'>Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
