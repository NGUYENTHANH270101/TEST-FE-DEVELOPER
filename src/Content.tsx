import { Button1, Subtract, Button2, QR, Button3, arrow, video_demo, arrowright, Tabs, image, Frame54 } from "./component/ExportImgFigma"

const Content: React.FC = () => {
    return (
        <div className='px-[116px] py-[100px] flex flex-col gap-[100px]'>
            <div className=' flex gap-[80px] justify-center'>
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
            <div >
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
                    <div className='flex justify-center'>
                        <img src={Tabs} alt="" />
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
            <div className=' w-full flex justify-center'>
                <img src={Frame54} alt="" />
            </div>
        </div>
    )
}
export default Content