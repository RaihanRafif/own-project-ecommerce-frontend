import Head from 'next/head';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SlRefresh } from 'react-icons/sl';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import Image from 'next/image';
import './product.css';
import NextBreadcrumb from '@/components/NextBreadcrumb';
import { LuMinus, LuPlus } from 'react-icons/lu';
import { CiHeart } from 'react-icons/ci';
import ItemSlider from '@/components/ItemSlider';
import { useRouter } from 'next/router';
import { FaEye, FaHeart } from 'react-icons/fa6';

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

export default function ProductPage() {
    const params = useParams();
    const router = useRouter();

    const [product, setProduct] = useState<Product>();
    const [productRelated, setProductRelated] = useState<Product[]>([]);

    const [selectedImage, setSelectedImage] = useState<string>('');
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [countItem, setCountItem] = useState<number>(0)

    useEffect(() => {
        if (params && params.id) {
            fetch(`https://dummyjson.com/products/${params.id}`)
                .then(response => response.json())
                .then(data => {
                    setProduct(data);
                    setSelectedImage(data.images[0]);

                    fetch(`https://dummyjson.com/products/category/${data.category}`)
                        .then(response => response.json())
                        .then(data => {
                            setProductRelated(data.products);
                        })
                        .catch(error => console.error('Error fetching product:', error));
                })
                .catch(error => console.error('Error fetching product:', error));
        }
    }, [params]);

    const handleImageClick = (image: string) => {
        setSelectedImage(image);
    };

    const handleColorClick = (color: string) => {
        setSelectedColor(color);
    };

    const handleSizeClick = (size: string) => {
        setSelectedSize(size);
    };

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

    if (!product) {
        return <div className='text-center'>Loading...</div>;
    }

    const handleCountItem = (status: string) => {
        status == "plus" ? setCountItem(countItem + 1) : countItem == 0 ? '' : setCountItem(countItem - 1)
    }

    const getDetail = (itemId: any) => {
        router.push(`/product/${itemId}`);
    };


    return (
        <>
            <Head>
                <title>Product</title>
            </Head>
            <NextBreadcrumb
                homeElement={'Home'}
                separator={<span> | </span>}
                activeClasses='text-amber-500'
                containerClasses='flex py-5 bg-gradient-to-r from-purple-600 to-blue-600'
                listClasses='hover:underline mx-2 font-bold'
                capitalizeLinks
                productName={product?.title}
            />
            <div className="parents pl-[135px] px-[135px] w-full flex justify-between">
                <div className="product-image">
                    {product.images.map((image: string) => (
                        <div
                            className="product-image-item w-[170px]"
                            key={image}
                            onClick={() => handleImageClick(image)}
                        >
                            <Image src={image} alt={product.title} width={170} height={170} />
                        </div>
                    ))}
                </div>
                <div className="product-display rounded w-[50%] bg-[#F5F5F5]">
                    {selectedImage && <Image src={selectedImage} alt={product.title} width={500} height={500} />}
                </div>
                <div className="product-detail w-[30%] flex flex-col gap-4 justify-between">
                    <p className="font-semibold text-3xl">{product.title}</p>
                    <div className='flex gap-4'>
                        {renderRatingStars(product.rating)}
                        <p className='text-gray-600'>({Math.floor(product.rating * 100)} Reviews)</p>
                        <p>|</p>
                        <p className={`${product.stock > 0 ? 'text-green-400' : 'text-red-500'}`}>{product.stock > 0 ? 'In Stock' : 'Out Stock'}</p>
                    </div>
                    <p className="text-2xl">${product.price}</p>
                    <p className="text-xl w-11/12 text-justify">{product.description}</p>

                    <div className="colors flex items-center">
                        <p className="text-xl font-medium">Colors:</p>
                        <div className="color-option ml-6 flex gap-2">
                            <div
                                className={`color-option-border rounded-full border-2 ${selectedColor === 'first' ? 'border-black' : 'border-red-500'}`}
                                onClick={() => handleColorClick('first')}
                            >
                                <div
                                    className={`color-option-item bg-red-500 w-5 h-5 rounded-full border-2 ${selectedColor === 'first' ? 'border-white' : 'border-red-500'}`}
                                />
                            </div>
                            <div
                                className={`color-option-border rounded-full border-2 ${selectedColor === 'second' ? 'border-black' : 'border-blue-500'}`}
                                onClick={() => handleColorClick('second')}
                            >
                                <div
                                    className={`color-option-item bg-blue-500 w-5 h-5 rounded-full border-2 ${selectedColor === 'second' ? 'border-white' : 'border-blue-500'}`}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="size flex">
                        <p className="text-xl font-medium mr-6">Size:</p>
                        <div
                            className={`size-option flex align-middle justify-center w-8 h-8 border-[1px]  rounded font-semibold mr-4 hover:cursor-pointer ${selectedSize === 'first' ? 'text-white bg-[#DB4444] border-[#DB4444]' : 'border-black'}`}
                            onClick={() => handleSizeClick('first')}
                        >
                            <p>XS</p>
                        </div>
                        <div
                            className={`size-option flex align-middle justify-center w-8 h-8 border-[1px] rounded font-semibold mr-4 hover:cursor-pointer ${selectedSize === 'second' ? 'text-white bg-[#DB4444] border-[#DB4444]' : 'border-black'}`}
                            onClick={() => handleSizeClick('second')}
                        >
                            <p>S</p>
                        </div>
                    </div>

                    <div className="option flex justify-between h-11">
                        <div className="counter flex">
                            <div className='w-10 border border-slate-600 flex justify-center items-center rounded-l-[4px] hover:cursor-pointer hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-white' onClick={e => handleCountItem('minus')}>
                                <LuMinus className='' />
                            </div>
                            <div className='border border-slate-600 w-12 flex justify-center items-center'>
                                {countItem}
                            </div>
                            <div className='w-10 border border-slate-600 flex justify-center items-center rounded-r-[4px]  hover:cursor-pointer hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white' onClick={e => handleCountItem('plus')}>
                                <LuPlus className='' />
                            </div>

                        </div>
                        <div className="buynow">
                            <div className='bg-[#DB4444] text-white h-full pl-12 px-12 rounded  flex justify-center items-center'>
                                Buy Now
                            </div>
                        </div>
                        <div className="wishlist w-10 flex justify-center items-center rounded border border-slate-600 text-2xl font-bold hover:cursor-pointer hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white">
                            <CiHeart />
                        </div>
                    </div>

                    <div className="information">
                        <div className="free-delivery flex items-center gap-4 border-[1px] pl-4 pt-3 pb-3 border-black rounded-t-lg">
                            <div className="img flex align-middle items-center text-[40px]">
                                <TbTruckDelivery />
                            </div>
                            <div className="detail">
                                <p className="text-base font-semibold">Free Delivery</p>
                                <p className="underline text-base font-semibold">Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <div className="return-delivery flex items-center gap-4 border-[1px] pl-4 pt-3 pb-3 border-black rounded-b-lg">
                            <div className="img flex align-middle items-center text-[40px]">
                                <SlRefresh />
                            </div>
                            <div className="detail">
                                <p className="text-base font-semibold">Return Delivery</p>
                                <p className="underline text-base font-semibold">Free 30 Days Delivery Returns. Details</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* related Items */}
            <div className="relatedItems w-full flex justify-between mt-[140px]">
                <div className="titleSection px-[135px] flex items-center text-center">
                    <div className="redBlock w-5 h-10 bg-red-500 rounded"></div>
                    <div className="title text-center ml-2 text-[#DB4444] text-base font-semibold">
                        Related Items
                    </div>
                </div>
            </div>

            <div className="product-slider px-[135px] pt-12 pb-24">
                <div className="slider flex gap-4">
                    {Array.isArray(productRelated) && productRelated.slice(0, 5).map((item: Product) => (
                        <div key={item.id} className="h-80" onClick={e => getDetail(item.id)}>
                            <div
                                className="relative w-64 h-64 bg-gray-200 mr-4 mt-10 group cursor-pointer"
                                style={{ backgroundImage: item.images !== null ? `url('${item.images[0]}')` : `url(https://dummyjson.com/image/400x200/008080/ffffff?text=${item.title.replace(/ /g, '+')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            >
                                <div className="absolute top-2 left-2 w-[55px] h-[26px] bg-[#DB4444] flex items-center justify-center text-white text-xs rounded">
                                    <span>{item.discountPercentage}%</span>
                                </div>
                                <div className="absolute top-2 right-2 rounded-full bg-white w-[34px] h-[34px] flex items-center justify-center">
                                    <FaHeart />
                                </div>
                                <div className="absolute top-12 right-2 rounded-full bg-white w-[34px] h-[34px] flex items-center justify-center">
                                    <FaEye />
                                </div>
                                <div className="w-full h-10 absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="w-full h-full bg-black text-white py-1 px-3">Add to Cart</button>
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
        </>
    );
}
