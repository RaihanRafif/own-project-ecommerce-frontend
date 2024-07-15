import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const BestSellingProduct = ({ items }: any) => {
  const router = useRouter();

  const getDetail = (itemId: any) => {
    router.push(`/product/${itemId}`);
  };

  return (
    <div className="relative w-full h-full overflow-x-hidden ">
      <div className="flex justify-between transition-transform duration-300 ease-in-out">
        {items.slice(0, 5).map((item: any) => (
          <div key={item.id} className="h-80 w-[256px]" onClick={e => getDetail(item.id)}>
            <div
              className="relative w-64 h-64 bg-gray-200 mr-4 mt-10 group cursor-pointer"
              style={{ backgroundImage: item.images !== null ? `url('${item.images[0]}')` : `url(https://dummyjson.com/image/400x200/008080/ffffff?text=${item.title.replace(/ /g, '+')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute top-2 left-2 w-[55px] h-[26px] bg-[#DB4444] flex items-center justify-center text-white text-xs rounded">
                <span>{item.discountPercentage}%</span>
              </div>
              <div className="absolute top-2 right-2 rounded-full bg-white w-[34px] h-[34px] flex items-center justify-center">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <div className="absolute top-12 right-2 rounded-full bg-white w-[34px] h-[34px] flex items-center justify-center">
                <FontAwesomeIcon icon={faEye} />
              </div>
              <div className="w-full h-10 absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-full h-full bg-black text-white py-1 px-3">Add to Cart</button>
              </div>
            </div>

            <div className="h-16 w-[256px]">
              <p className="text-base font-bold pt-5">{item.title}</p>
              <p className="text-base font-medium text-[#DB4444]">
                ${Math.floor(item.price - (item.price * item.discountPercentage) / 100)} <span className="line-through text-[#808080]">${item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellingProduct;
