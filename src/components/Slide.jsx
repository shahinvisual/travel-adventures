import React from 'react';
import Carousel from './Carousel';

const Slide = () => {
    const slideImg = [
        "https://i.ibb.co.com/cK2TTRxV/mountains-8573646-1920.jpg",
        "https://i.ibb.co.com/wN6wb3FG/nature-4351455-1920.jpg",
        "https://i.ibb.co.com/gLPW8zj8/landscape-6692712-1920.jpg",
        "https://i.ibb.co.com/27GdQkxX/mountain-3800239-1920.jpg",
        "https://i.ibb.co.com/ZRqHnwMG/sunset-7133867-1920.jpg"
    ];
    return (
        <div>
            <Carousel>
                {
                    slideImg.map((item, index) => (
                        <div key={index} className="w-full flex-shrink-0 h-full">
                            <img
                                src={item}
                                className="h-full w-full object-cover"
                                alt={`Slide ${index + 1}`}
                            />
                        </div>
                    ))
                }
            </Carousel>



        </div>
    );
};

export default Slide;