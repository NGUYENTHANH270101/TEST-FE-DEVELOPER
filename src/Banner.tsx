import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Banner1, Banner2, Banner3, Banner4, Banner5, Button } from "./component/ExportImgFigma";
const banners = [
    { id: 1, image: Banner1 },
    { id: 2, image: Banner2 },
    { id: 3, image: Banner3 },
    { id: 4, image: Banner4 },
    { id: 5, image: Banner5 },
];
const Banner: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
    };
    return (
        <div className="w-[1512px] flex flex-col gap-[100px]">
            <div className="banner-slider relative">
                <Slider {...settings}>
                    {banners.map((banner) => (
                        <div key={banner.id}>
                            <img
                                src={banner.image}
                                alt={`Banner ${banner.id}`}
                                style={{ width: "100%", height: "720px", objectFit: "cover" }}
                            />
                        </div>
                    ))}
                </Slider>
                <div className='flex justify-center absolute bottom-3 left-[40%] right-[40%]'>
                    <img src={Button} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Banner