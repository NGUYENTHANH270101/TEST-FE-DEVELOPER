import './App.css';
import { Frame, Frame2, image6, Logo, MenuIcon, Social } from './component/ExportImgFigma';
import Banner from './Banner';
import Content from './Content';
import Footer from './Footer';

function App() {
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
        <Banner />
        <Content />
        <Footer />
      </div>

    </div>

  );
}

export default App;
