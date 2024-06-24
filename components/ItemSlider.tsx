import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

const ItemSlider = ({ items, currentIndex, setCurrentIndex }: any) => {
  const sliderRef = useRef(null);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragging, setDragging] = useState(false);

  const handleDragStart = (e: any) => {
    setDragStartX(e.clientX);
    setDragging(true);
  };

  const handleDragEnd = (e: any) => {
    if (!dragging) return;
    const dragEndX = e.clientX;
    const dragDistance = dragStartX - dragEndX;

    if (dragDistance > 50) {
      setCurrentIndex((prevIndex: any) =>
        prevIndex === items.length - 5 ? 0 : prevIndex + 1
      );
    } else if (dragDistance < -50) {
      setCurrentIndex((prevIndex: any) =>
        prevIndex === 0 ? items.length - 5 : prevIndex - 1
      );
    }

    setDragging(false);
  };

  const handleDragOver = (e: any) => {
    if (dragging) {
      e.preventDefault();
    }
  };

  return (
    <div
      className="relative w-full"
      ref={sliderRef}
      onMouseDown={(e) => handleDragStart(e)}
      onMouseUp={(e) => handleDragEnd(e)}
      onMouseLeave={(e) => handleDragEnd(e)}
      onMouseMove={dragging ? handleDragOver : undefined}
      onTouchStart={(e) => handleDragStart(e.touches[0])}
      onTouchEnd={(e) => handleDragEnd(e.changedTouches[0])}
      onTouchMove={dragging ? handleDragOver : undefined}
    >
      <div
        className="flex w-full gap-5 transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / 5)}%)` }}
      >
        {items.map((item: any) => (
          <div key={item.id} className="h-80">
            <div
              className="relative w-64 h-64 bg-gray-200 mr-4 mt-10  group cursor-pointer"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute top-2 left-2 w-[55px] h-[26px] bg-[#DB4444] flex items-center justify-center text-white text-xs rounded">
                <span>-{item.discount}%</span>
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

            <div className="h-16 w-full">
              <p className="text-base font-bold pt-5">{item.name}</p>
              <p className="text-base font-medium text-[#DB4444]">
                ${Math.floor(item.price - (item.price * item.discount) / 100)} <span className="line-through text-[#808080]">${item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemSlider;
