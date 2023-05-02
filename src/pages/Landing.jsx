import './Landing.css';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import bg from '../lib/components/assets/landing-bg.jpg'

export default function Landing() {
  return (
    <Fade>
      <div className='overflow-hidden h-screen text-white'>
        <div className='fixed top-0 left-0 w-full h-full overflow-hidden z-[-10]'>
          <img src={bg} alt="beach" className='w-full h-full object-cover opacity-20'/>
        </div>
        <div className='grid h-full place-items-center'>
          <div className='flex flex-col items-center'>
            <div className='text-xl sm:text-2xl border-2 border-gray-400 py-1 px-8 rounded-xl'>
              <span className='text-d-accent '>CA</span>NIME
            </div>
            <div className='mt-1 px-4 text-sm'>
              by LC095
            </div>
            <Fade bottom>
              <div className='text-3xl p-4 md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-8 sm:mt-12 text-center'>
                Experience <span className='text-d-accent'>premium</span>
                <br /> <span className='text-d-accent'>anime</span> entertainment with us
              </div>
            </Fade>
            <Link to='/home' className='mt-8 sm:mt-12'>
              <button className='flex items-center b-gradient px-4 py-2 md:px-5 lg:px-6 lg:py-3 text-xl md:text-2xl lg:text-2xl rounded-full opacity-80 hover:opacity-100 transition duration-200'>
                discover 
                <img src="https://img.icons8.com/windows/32/FFFFFF/long-arrow-up.png" alt='arrow' className='rotate-90 ml-1 md:ml-2  h-auto w-5 md:w-6 lg:w-8 my-auto'/>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
}
