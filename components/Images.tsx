import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

interface ImageCarouselProps {
  images: string[]; // Array of image URLs
  height?: number; // Carousel height (optional)
  width?: number; // Carousel width (optional)
  autoplay?: boolean; // Autoplay the carousel (optional)
  interval?: number; // Autoplay interval in milliseconds (optional)
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  height = 340,
  width = 1000,
  autoplay = true,
  interval = 3000,
}) => (
    <div className='hidden md:block'>
  <Carousel autoplay={autoplay} autoplaySpeed={interval}>
    {images.map((imageUrl, index) => (
      <div key={index} className='md:ml-[160px]'>
        <Image src={imageUrl} alt={`Image ${index}`} width={width} height={height} />
      </div>
    ))}
  </Carousel>
  </div>
);

export default ImageCarousel;
