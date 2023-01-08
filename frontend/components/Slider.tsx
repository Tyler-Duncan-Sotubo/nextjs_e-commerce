import Link from "next/link";
import React, { FC, useState } from "react";
import { BsChevronLeft, BsChevronRight, BsDot } from "react-icons/bs";

type Props = {
  data: [
    {
      id: string;
      name: string;
      url: string;
      featuredImg: string;
      tag: string;
    }
  ];
};

export const Slider: FC<Props> = ({ data }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const featuredSlide = data.filter((item) => {
    if (item.tag.includes("featured")) {
      return item;
    }
  });

  const slides = featuredSlide;

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
    <div className="w-[1220px] h-[650px] relative m-auto group mt-5">
      <div
        style={{
          backgroundImage: `url(${slides[currentSlideIndex].featuredImg})`,
        }}
        className="w-full h-full bg-center bg-cover duration-500">
        <p className="text-4xl w-[350px] leading-[50px] font-display text-white absolute top-[+45%] translate-x-0 translate-y-[-45%] left-[10%] cursor-pointer">
          {slides[currentSlideIndex].name}
        </p>
        <Link href="/">
          <button type="button" className="primary-button">
            Shop Now
          </button>
        </Link>
      </div>
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
      <div className="flex py-2 absolute top-[+95%] translate-x-[-55%] translate-y-[-95%] left-[+55%] cursor-pointer">
        {slides.map((item: any, slideIndex: any) => (
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
