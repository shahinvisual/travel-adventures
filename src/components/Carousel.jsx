import React, { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Navbar from './Navbar';

const Carousel = ({ children: slideImg }) => {
    const [current, setCurrent] = useState(0);
    const previous = () => {
        setCurrent((current) => (current === 0 ? slideImg.length - 1 : current - 1))
    }
    const next = () => {
        setCurrent((current) => (current === slideImg.length - 1 ? 0 : current + 1))
    }
    return (

        <div className="overflow-hidden relative w-full lg:h-[450px]">
            <div className="absolute top-0 left-0 right-0 z-30">
                <Navbar textColor={'text-white'} />
            </div>
            <div
                className="flex w-full h-full transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slideImg}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-5 z-20">
                <button onClick={previous} className="p-1 bg-white/60 rounded-full text-gray-800 hover:bg-white/80">
                    <BiChevronLeft size={40} />
                </button>
                <button onClick={next} className="p-1 bg-white/60 rounded-full text-gray-800 hover:bg-white/80">
                    <BiChevronRight size={40} />
                </button>
            </div>
        </div>


    );
};

export default Carousel;