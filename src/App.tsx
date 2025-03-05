import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { arrow, arrowright, Banner1, Banner2, Banner3, Banner4, Banner5, Button, Button1, Button2, Button3, Frame, Frame2, Frame54, image, image6, Logo, MenuIcon, QR, Social, Subtract, Tabs, video_demo } from './component/ExportImgFigma';
const banners = [
  { id: 1, image: Banner1 },
  { id: 2, image: Banner2 },
  { id: 3, image: Banner3 },
  { id: 4, image: Banner4 },
  { id: 5, image: Banner5 },
];
function App() {
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
    <div className='flex items-center justify-center relative bg-[#1E1E1E] h-full'>
      <div className='absolute top-5 w-[1512px] px-[46px] flex justify-between items-center z-10'>
        <img src={Logo} alt="" />
        <div className='flex items-center gap-8'>
          <img src={Frame} alt="" />
          <img src={MenuIcon} alt="" />
        </div>
      </div>

      <div className='flex justify-center items-center flex-col '>
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
        <div className='px-[116px] py-[100px] flex flex-col gap-[100px]'>
          <div className=' flex gap-[80px]'>
            <div className='flex flex-col gap gap-8 w-[566px]'>
              <div className='text-[72px] fw-700 text-[#D9D9D9]'>Registration</div>
              <span className='text-base text-[#D9D9D9]'>For organizational and security reasons, every visitor to the FUN arena Cheb must register before entering the attraction. At the reception, your registration will be completed and you will receive a loyalty card which you will use for our services.</span>
            </div>
            <div className='flex flex-col gap-[96px] w-[634px]'>
              <div className='flex flex-col '>
                <div className='flex items-center'>
                  <div>
                    <img src={Button1} alt="" />
                  </div>
                  <div className='relative'>
                    <img src={Subtract} alt="" />
                    <span className='text-[#D9D9D9] text-[24px] fw-700 absolute top-3 left-[32px]'>Choose an Attraction</span>
                  </div>
                </div>
                <div className='text-[#D9D9D9] text-base pl-[100px] w-[363px]'>Choose from the attractions of the FUN arena.</div>
              </div>
              <div className='flex flex-col relative'>
                <div className='flex items-center'>
                  <div>
                    <img src={Button2} alt="" />
                  </div>
                  <div className='relative'>
                    <img src={Subtract} alt="" />
                    <span className='text-[#D9D9D9] text-[24px] fw-700 absolute top-3 left-[32px]'>Register</span>
                    <button className='bg-[#E30613] rounded-[8px] text-white text-sm fw-700 py-1 w-[86px] absolute right-[165px] top-[19px]'>
                      Click here
                    </button>
                  </div>
                </div>
                <div className='text-[#D9D9D9] text-base pl-[100px] w-[363px]'>You can register at the reception or by clicking the button above from the comfort of your home.</div>
                <div className='absolute right-[23px] top-[14px]'>
                  <img src={QR} alt="" />
                </div>
              </div>
              <div className='flex flex-col '>
                <div className='flex items-center'>
                  <div>
                    <img src={Button3} alt="" />
                  </div>
                  <div className='relative'>
                    <img src={Subtract} alt="" />
                    <span className='text-[#D9D9D9] text-[24px] fw-700 absolute top-3 left-[32px]'>Have Fun</span>
                  </div>
                </div>
                <div className=' pl-[100px] '>
                  <div className='w-[434px] text-[#D9D9D9] text-base'>
                    Thank you for your online registrations. For each purchase you get points, which you can apply to our services and attractions then. We look forward to you!
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='flex flex-col gap-[48px]'>
              <div className='pl-[233px] flex flex-col gap-5'>
                <div className='w-[75%] text-[72px] fw-700 text-[#D9D9D9]'>NEW ENTERTAINMENT CENTRE NEAR CHEB</div>
                <div className='flex items-center justify-between'>
                  <span className='text-base text-[#D9D9D9] w-[32%]'>We have been entertaining children and adults in western Bohemia for more than 10 years!</span>
                  <div className='flex items-center gap-3'>
                    <span className='text-base text-[#D9D9D9]'>Find more about us</span>
                    <img src={arrow} alt="" className='cursor-pointer' />
                  </div>
                </div>
              </div>
              <img src={video_demo} alt="" />
            </div>
          </div>
          <div className=' w-full'>
            <div className='flex flex-col gap-[48px]'>
              <div className='flex items-center justify-between'>
                <span className='text-[72px] fw-700 text-[#D9D9D9]'>OUR ATTRACTIONS</span>
                <div className='flex items-center gap-6'>
                  <span className='text-base text-[#D9D9D9]'>Multiple activities at Fun Arena Cheb</span>
                  <img src={arrowright} alt="" className='cursor-pointer' />
                </div>
              </div>
              <div className='flex'>
                <img src={Tabs} alt="" />
                <img src={image} alt="" />
              </div>
            </div>
          </div>
          <div className=' w-full flex justify-center'>
            <img src={Frame54} alt="" />
          </div>
        </div>

        <div className='border-t-[#292929] border-t py-[80px] px-[116px] w-full flex flex-col gap-6'>
          <div className='flex justify-between items-center'>
            <img src={image6} alt="" />
            <span className='w-[300px] text-sm text-[#D9D9D9]'>New entertainment centre FUN arena Cheb. You will find entertainment and sports activities for children and adults here.</span>
            <div className='flex flex-col items-end gap-[10px]'>
              <span className='text-sm text-[#D9D9D9]'>Potočiště 3, 350 02 Odrava</span>
              <span className='text-sm text-[#D9D9D9]'>fun@funarenacheb.cz</span>
              <span className='text-sm text-[#D9D9D9]'>+420737878891</span>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <img src={Social} alt="" />
            <div className='flex items-center gap-[48px]'>
              <span className='text-sm text-[#D9D9D9]'>© 2025 FUN Arena Cheb. All rights Reserved.</span>
              <img src={Frame2} alt="" className='cursor-pointer' />
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}

export default App;
