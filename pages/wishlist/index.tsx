// pages/wishlist/index.tsx
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { FaEye, FaHeart, FaRegTrashAlt, FaShoppingCart, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { useRouter } from "next/navigation";

interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: string;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Array<string>;
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: string;
    thumbnail: string;
    images: string[];
}

const Wishlist = () => {
    const [items, setItems] = useState([]);
    const [productRelated, setProductRelated] = useState<Product[]>([]);

    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setItems(data.products); // Assuming the response has a "products" key
                setLoading(false);
            });
    }, []);

    const renderRatingStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating - fullStars >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <div className="flex items-center">
                {Array(fullStars).fill(0).map((_, index) => (
                    <FaStar key={index} className="text-yellow-500" />
                ))}
                {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
                {Array(emptyStars).fill(0).map((_, index) => (
                    <FaRegStar key={index} className="text-gray-400" />
                ))}
            </div>
        );
    };

    const getDetail = (itemId: any) => {
        router.push(`/product/${itemId}`);
    };

    return (
        <>
            <Head>
                <title>Wishlist</title>
            </Head>
            <div className='parent flex flex-col pl-[135px] px-[135px] mt-20'>
                <div className="wishlist w-full">
                    <div className="header flex justify-between items-center">
                        <p className='text-lg font-semibold'>Wishlist (4)</p>
                        <div className="button h-14 border-black border-[1px] flex justify-center items-center pl-12 px-12 rounded font-semibold">
                            <p>Move All To Bag</p>
                        </div>
                    </div>
                    <div className="list-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
                        {items.slice(0, 10).map((item: any) => (
                            <div key={item.id} className="item h-80 w-full" onClick={e => getDetail(item.id)}>
                                <div
                                    className="relative w-full h-64 bg-gray-200 mt-10 group cursor-pointer"
                                    style={{ backgroundImage: item.images !== null ? `url('${item.images[0]}')` : `url(https://dummyjson.com/image/400x200/008080/ffffff?text=${item.title.replace(/ /g, '+')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                >
                                    <div className="absolute top-2 left-2 w-[55px] h-[26px] bg-[#DB4444] flex items-center justify-center text-white text-xs rounded">
                                        <span>{item.discountPercentage}%</span>
                                    </div>
                                    <div className="absolute top-2 right-2 rounded-full bg-white w-[34px] h-[34px] flex items-center justify-center">
                                        <FaRegTrashAlt />
                                    </div>
                                    <div className="w-full h-10 absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="w-full h-full bg-black text-white py-1 px-3 flex items-center justify-center gap-4">
                                            <FaShoppingCart />
                                            <p>Add to Cart</p>
                                        </button>
                                    </div>
                                </div>
                                <div className="h-16 w-full">
                                    <p className="text-base font-bold pt-5">{item.title}</p>
                                    <p className="text-base font-medium text-[#DB4444]">
                                        ${Math.floor(item.price - (item.price * item.discountPercentage) / 100)} <span className="line-through text-[#808080]">${item.price}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="justforyou mt-14">
                    <div className="titleSection flex items-center text-center justify-between">
                        <div className="flex justify-between items-center text-center">
                            <div className="redBlock w-5 h-10 bg-red-500 rounded"></div>
                            <div className="title text-center ml-2 text-base font-semibold">
                                Just For You
                            </div>
                        </div>

                        <div className="button h-14 border-black border-[1px] flex justify-center items-center pl-12 px-12 rounded font-semibold">
                            <p>See All</p>
                        </div>
                    </div>

                    <div className="product-slider pb-24">
                        <div className="list-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
                            {items.slice(0, 5).map((item: Product) => (
                                <div key={item.id} className="item h-[340px] w-full" onClick={e => getDetail(item.id)}>
                                    <div
                                        className="relative w-full h-64 bg-gray-200 mt-10 group cursor-pointer"
                                        style={{ backgroundImage: item.images !== null ? `url('${item.images[0]}')` : `url(https://dummyjson.com/image/400x200/008080/ffffff?text=${item.title.replace(/ /g, '+')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                    >
                                        <div className="absolute top-2 left-2 w-[55px] h-[26px] bg-[#DB4444] flex items-center justify-center text-white text-xs rounded">
                                            <span>{item.discountPercentage}%</span>
                                        </div>
                                        <div className="absolute top-2 right-2 rounded-full bg-white w-[34px] h-[34px] flex items-center justify-center">
                                            <FaEye />
                                        </div>
                                        <div className="w-full h-10 absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <button className="w-full h-full bg-black text-white py-1 px-3 flex items-center justify-center gap-4">
                                                <FaShoppingCart />
                                                <p>Add to Cart</p>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="h-16 w-full">
                                        <p className="text-base font-bold pt-5">{item.title}</p>
                                        <p className="text-base font-medium text-[#DB4444]">
                                            ${Math.floor(item.price - (item.price * item.discountPercentage) / 100)} <span className="line-through text-[#808080]">${item.price}</span>
                                        </p>
                                        <div className="flex">
                                            {renderRatingStars(item.rating)}
                                            <p className='text-gray-600'>({Math.floor(item.rating * 100)} Reviews)</p>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Wishlist;
