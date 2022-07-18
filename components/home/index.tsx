import Image from 'next/image';

import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { RoughNotation } from 'react-rough-notation';

const Home = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center space-y-1'>
      <Image
        src='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/206701335/original/a6226ece6cbed984a10f126d5311a93cebc29c99/make-your-own-character-anime-type.jpg'
        alt=''
        height='250px'
        width='250px'
        className='rounded-full'
      />

      <div className='font-extrabold text-7xl text-gray-300'>Akhil Naidu</div>
      <div className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>
        Fullstack Developer
      </div>
      <div className='flex space-x-3'>
        <a
          href='https://www.facebook.com/kaparapu.akhilnaidu'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-gray-100  text-[#1773EA] hover:text-gray-100 p-2 rounded-full hover:bg-[#1773EA] transition ease-in-out duration-300 hover:duration-500 hover:scale-110'
        >
          <span className=''>
            <FaFacebookF />
          </span>
        </a>
        <a
          href='https://twitter.com/_kanaidu'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-gray-100 text-[#1C9CEA] hover:text-gray-100 p-2 rounded-full hover:bg-[#1C9CEA] transition ease-in-out duration-300 hover:duration-500 hover:scale-110'
        >
          <span className=''>
            <FaTwitter />
          </span>
        </a>

        <a
          href='https://github.com/akhil-naidu'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-gray-100 p-2 rounded-full text-black hover:text-gray-100 hover:bg-black transition ease-in-out duration-300 hover:duration-500 hover:scale-110'
        >
          <RoughNotation type='circle' show={true} color='#f87171'>
            <span className=''>
              <FaGithub />
            </span>
          </RoughNotation>
        </a>

        <a
          href='https://www.linkedin.com/in/kaparapuakhilnaidu/'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-gray-100 p-2 rounded-full text-[#0072b1] hover:bg-[#0072b1] hover:text-gray-100 transition ease-in-out duration-300 hover:duration-500 hover:scale-110'
        >
          <span className=''>
            <FaLinkedinIn />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Home;
