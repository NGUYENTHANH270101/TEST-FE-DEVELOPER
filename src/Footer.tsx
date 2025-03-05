import { image6, Social, Frame2 } from "./component/ExportImgFigma"

const Footer: React.FC = () => {
    return (
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
    )
}
export default Footer