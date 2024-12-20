import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Gallery() {
    const images = [
        { src: '/gallery/dmb.jpg', title: 'Workplace personalities' },
        { src: './DMB0.jpg', title: 'Workplace personalities' },
        { src: './DMB7.jpg', title: 'Workplace personalities' },
        { src: './DMB6.jpg', title: 'Pride 2021' },
        { src: '/gallery/all.jpg', title: 'Pride 2021' },
        
      ];

      const [currentIndex, setCurrentIndex] = useState(null); // Track the current image index
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal visibility

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentIndex(null);
    setIsModalOpen(false);
  };
  return (
    <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h2 className="text-center text-lg tit my-5 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-400 dark:bg-gradient-to-r  dark:from-orange-300 dark:to-yellow-400" data-aos="zoom-in">
        GALERIE
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="group relative block rounded-xl overflow-hidden focus:outline-none cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full h-64 object-cover"
                src={image.src}
                alt={image.title}
              />
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {isModalOpen && currentIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg  max-w-md">
            <button
              className="absolute md:top-2 top-5 md:right-2 left-80 text-yellow-400"
              onClick={closeModal}
            >
              ✕
            </button>
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              className="w-full h-auto rounded-lg"
            />
            <div className="flex justify-between ">
              <button
                className="px-4 py-2 absolute top-40 md:top-44"
                onClick={() =>
                  setCurrentIndex(
                    currentIndex === 0 ? images.length - 1 : currentIndex - 1
                  )
                }
              >
               <GrPrevious className='text-yellow-400'/>
              </button>
              <button
                className="px-4 py-2 absolute top-40 left-80 md:top-44 md:left-96"
                onClick={() =>
                  setCurrentIndex((currentIndex + 1) % images.length)
                }
              >
               <GrNext className='text-yellow-400'/>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
