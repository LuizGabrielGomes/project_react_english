import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import banner from "../../../public/assets/banner.png"
import banner2 from "../../../public/assets/banner2.png"

export function CarouselComponent() { 
  return (
    <Carousel>
      <Carousel.Item>
        <Image src={banner} height={100} style={{ width: '100%', height: '350px' }} />
      </Carousel.Item>
      <Carousel.Item>
      <Image src={banner2} height={100} style={{ width: '100%', height: '350px' }} />
      </Carousel.Item>
    </Carousel>
  );
}

