import NextBreadcrumb from '@/components/NextBreadcrumb';
import Head from 'next/head';
import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Image from 'next/image';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

const Cart = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([
        { id: 1, name: 'LCD Monitor', price: 650, quantity: 1, image: 'https://example.com/lcd-monitor.jpg' },
        { id: 2, name: 'H1 Gamepad', price: 550, quantity: 2, image: 'https://example.com/h1-gamepad.jpg' },
    ]);

    const handleQuantityChange = (id: number, quantity: number) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity } : item));
    };

    const handleRemoveItem = (id: number) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

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
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>
                <div className="bg-white sm:rounded-lg mb-6">
                    <div className="header grid grid-cols-4 gap-4 px-6 py-4 text-gray-700 font-semibold shadow-custom-header rounded">
                        <div>Product</div>
                        <div>Price</div>
                        <div>Quantity</div>
                        <div>Subtotal</div>
                    </div>
                    {/* {cartItems.map((item) => (
                    ))} */}
                </div>
                <div className="flex justify-between mt-6">
                    <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50">
                        Return To Shop
                    </button>
                    <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                        Update Cart
                    </button>
                </div>
            </div>
        </>
    );
};

export default Cart;
