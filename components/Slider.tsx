import Link from "next/link";
import React, { FC, useState } from "react";
import { BsChevronLeft, BsChevronRight, BsDot } from "react-icons/bs";

type Props = {};

const slides = [
  {
    url: "https://images.unsplash.com/photo-1667863033054-9fe40c59a229?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    name: "Air Jordan Retro 1",
  },
  {
    url: "https://images.unsplash.com/photo-1538329972958-465d6d2144ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    name: "Female Fashion Collection",
  },
  {
    url: "https://images.unsplash.com/photo-1533681018184-68bd1d883b97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80",
    name: "Air Jordan Retro 3",
  },

  {
    url: "https://images.unsplash.com/photo-1506544777-64cfbe1142df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    name: "Air Jordan Retro 4",
  },
  {
    url: "https://images.unsplash.com/photo-1631642777454-b43dc9fc2ffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80",
    name: "Air Jordan Retro 5",
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
    <div className=" max-w-full h-[720px] w-full relative m-auto group">
      <div
        style={{ backgroundImage: `url(${slides[currentSlideIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-1000">
        <p className="text-4xl w-[350px] leading-[50px] font-display text-white absolute top-[+45%] translate-x-0 translate-y-[-45%] left-[10%] cursor-pointer">
          {slides[currentSlideIndex].name}
        </p>
        <Link href="/">
          <p className="text-lg font-display uppercase bg-violet-600 text-white inline-block px-8 py-2 absolute top-[+60%] translate-x-0 translate-y-[-60%] left-[10%] cursor-pointer">
            Shop Now
          </p>
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
