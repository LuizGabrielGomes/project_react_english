import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import banner from "../../../public/assets/banner.png"
import banner2 from "../../../public/assets/banner2.png"

export function CarouselComponent() { 
    return (
        <Carousel>
            <Carousel.Item>
                <Image alt="banner with the text let's start" src={banner} height={100} style={{ width: '100%', "object-fit": "cover"}} />
            </Carousel.Item>
            <Carousel.Item>
                <Image alt="banner with the text study english" src={banner2} height={100} style={{ width: '100%', "object-fit": "cover"}} />
            </Carousel.Item>
        </Carousel>
    );
}

