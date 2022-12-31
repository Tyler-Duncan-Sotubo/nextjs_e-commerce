import React, { FC, useState } from "react";
import { BsChevronLeft, BsChevronRight, BsDot } from "react-icons/bs";

type Props = {};

const slides = [
  {
    url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
  },

  {
    url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
  },
];

export const Slider: FC<Props> = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const nextSlide = () => {
    const currentSlide = currentSlideIndex === slides.length - 1;
    const newSlide = currentSlide ? 0 : currentSlideIndex + 1;
    setCurrentSlideIndex(newSlide);
  };
  const prevSlide = () => {
    const currentSlide = currentSlideIndex === 0;
    const newSlide = currentSlide ? slides.length - 1 : currentSlideIndex - 1;
    setCurrentSlideIndex(newSlide);
  };

  const gotToIndex = (slideIndex: React.SetStateAction<number>) => {
    setCurrentSlideIndex(slideIndex);
  };

  return (
    <div className=" max-w-[1150px] h-[650px] w-full py-4 px-4 mb-10 relative m-auto group">
      <div
        style={{ backgroundImage: `url(${slides[currentSlideIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"></div>
      <div
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-[+50%] translate-x-0 translate-y-[-50%] left-5 cursor-pointer text-violet-200 hover:text-violet-600">
        <BsChevronLeft size={60} />
      </div>
      <div
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-[+50%] translate-x-0 translate-y-[-50%] right-5 cursor-pointer  text-violet-200 hover:text-violet-600">
        <BsChevronRight size={60} />
      </div>
      <div className="flex py-2 absolute top-[+95%] translate-x-[-60%] translate-y-[-95%] left-[+60%] cursor-pointer">
        {slides.map((item, slideIndex) => (
          <div
            className="w-[10%]"
            onClick={() => gotToIndex(slideIndex)}
            key={slideIndex}>
            {slideIndex === currentSlideIndex ? (
              <BsDot className=" text-gray-700" size={70} />
            ) : (
              <BsDot size={70} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
