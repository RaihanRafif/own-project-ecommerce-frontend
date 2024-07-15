import Head from 'next/head';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SlRefresh } from 'react-icons/sl';
import { TbTruckDelivery } from 'react-icons/tb';

export default function ProductPage() {
    const params = useParams();
    // const [product, setProduct] = useState<any | null>(null);
    const [product, setProduct] = useState({
        "id": 2,
        "title": "Nature's Secret Face Cream",
        "description": "Nature's Secret Face Cream is formulated with natural ingredients to hydrate and rejuvenate your skin. Enjoy a fresh and youthful glow with this gentle, cruelty-free cream.",
        "category": "beauty",
        "price": 15.99,
        "discountPercentage": 10.5,
        "rating": 4.8,
        "stock": 10,
        "tags": [
            "beauty",
            "face cream"
        ],
        "brand": "Nature's Secret",
        "sku": "NSF01A",
        "weight": 1.5,
        "dimensions": {
            "width": 10.5,
            "height": 5.7,
            "depth": 3.2
        },
        "warrantyInformation": "6 months warranty",
        "shippingInformation": "Ships in 2 weeks",
        "availabilityStatus": "In Stock",
        "reviews": [
            {
                "rating": 5,
                "comment": "This face cream is amazing!",
                "date": "2024-05-23T08:56:21.618Z",
                "reviewerName": "Jane Smith",
                "reviewerEmail": "jane.smith@x.dummyjson.com"
            },
            {
                "rating": 4,
                "comment": "Very good, but a bit pricey.",
                "date": "2024-05-23T08:56:21.618Z",
                "reviewerName": "Michael Johnson",
                "reviewerEmail": "michael.johnson@x.dummyjson.com"
            },
            {
                "rating": 5,
                "comment": "Highly recommend!",
                "date": "2024-05-23T08:56:21.618Z",
                "reviewerName": "Emily Davis",
                "reviewerEmail": "emily.davis@x.dummyjson.com"
            }
        ],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 12,
        "meta": {
            "createdAt": "2024-05-23T08:56:21.618Z",
            "updatedAt": "2024-05-23T08:56:21.618Z",
            "barcode": "8274035109868",
            "qrCode": "..."
        },
        "thumbnail": "https://dummyjson.com/image/400x400/008080/ffffff?text=Face+Cream",
        "images": [
            "https://dummyjson.com/image/400x400/008080/ffffff?text=Face+Cream+1",
            "https://dummyjson.com/image/400x400/008080/ffffff?text=Face+Cream+2",
            "https://dummyjson.com/image/400x400/008080/ffffff?text=Face+Cream+3",
            "https://dummyjson.com/image/400x400/008080/ffffff?text=Face+Cream+4",
            "https://dummyjson.com/image/400x400/008080/ffffff?text=Face+Cream+5",
            "https://dummyjson.com/image/400x400/008080/ffffff?text=Face+Cream+6"
        ]
    }
    );

    console.log(params?.id);


    // useEffect(() => {
    //     // Fetch product details using the product ID
    //     if (params && params.id) {
    //         fetch(`https://dummyjson.com/products/2`)
    //             .then(response => response.json())
    //             .then(data => setProduct(data))
    //             .catch(error => console.error('Error fetching product:', error));
    //     }
    // }, [params]);

    if (!product) {
        return <div>Loading...</div>;
    }

    console.log("LLLL", product);


    return (
        <>
            <Head>
                <title>Product</title>
            </Head>
            <div className="parents pl-[135px] px-[135px] w-full flex justify-between ">
                <div className="product-image w-fit h-[600px] bg-red-50 flex flex-col overflow-auto">
                    {
                        product.images.map((e) => {
                            console.log("GGGG : ", e);

                            return (
                                <div className="h-[160px] w-[170px] mb-4 overflow-hidden" key={e}>
                                    <img src="https://dummyjson.com/image/400x400/008080/ffffff?text=Face+Cream+6" alt="" />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="product-display w-[40%] bg-slate-700"></div>
                <div className="product-detail w-[30%] bg-fuchsia-400">
                    <p>{product.title}</p>
                    <p>${product.price}</p>
                    <p>{product.description}</p>

                    <div className=""></div>
                    <div className="colors">
                        <p>Colors : </p>
                    </div>

                    <div className="size">
                        <p>Size: </p>
                        <div className="size-option"></div>
                    </div>

                    <div className="option">
                        <div className="counter"></div>
                        <div className="buynow"></div>
                        <div className="wishlist"></div>
                    </div>

                    <div className="information">
                        <div className="free-delivery">
                            <div className="img">
                                <TbTruckDelivery />
                            </div>
                            <div className="detail">
                                <p>Free Delivery</p>
                                <p className='underline'>Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <div className="return-delivery">
                            <div className="img">
                                <SlRefresh />
                            </div>
                            <div className="detail">
                                <p>Return Delivery</p>
                                <p>Free 30 Days Delivery Returns. Details</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
