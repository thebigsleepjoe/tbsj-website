import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TagDark } from './tag';

export function Hero() {
  return (
    <div className='xl:-mt-16 -z-10 relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden md:pb-32 pb-0'>
      {/* This is for the gradients */}
      <div className='-mt-16 -z-10 absolute inset-0'>
        <img
          src='https://images.unsplash.com/photo-1628114855639-f8294222fdc2?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Background Image'
          className='object-cover object-center w-full h-full'
        />
        <div className='absolute inset-0 bg-gradient-to-tl from-purple-600 to-blue-600 opacity-75'>
        </div>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        {/* <div className="absolute inset-0 bg-gradient-to-t from-90% from-transparent to-gray-900"></div> */}
        <div className='absolute inset-0 bg-gradient-to-b from-80% from-transparent to-gray-900 opacity-100'>
        </div>
      </div>

      {/* The hero text in the left-center */}
      <div className='-mt-16 relative z-10 flex flex-col justify-center items-center h-full text-center'>
        <h1 className='md:text-7xl text-3xl font-bold leading-tight mb-4'>
          @thebigsleepjoe
        </h1>
        <p className='md:text-3xl text-sm text-gray-300 mb-2'>
          Software Engineer • Web Developer • IT Specialist
        </p>
        <div>
          <div className='flex flex-wrap md:gap-3 gap-2 md:max-w-2xl max-w-xs lg:mt-20 md:mt-16 mt-12 mb-12 md:mb-16 justify-center'>
            <TagDark size='lg' color='purple'>Lua</TagDark>
            <TagDark size='lg' color='green'>Python</TagDark>
            <TagDark size='lg' color='yellow'>JavaScript</TagDark>
            <TagDark size='lg' color='blue'>TypeScript</TagDark>
          </div>
          <div className='flex flex-wrap md:gap-3 gap-2 md:max-w-2xl max-w-xs justify-center'>
            <TagDark size='lg' color='blue'>Next.js</TagDark>
            <TagDark size='lg' color='blue'>React</TagDark>
            <TagDark size='lg' color='yellow'>Tailwind</TagDark>
            <TagDark size='lg' color='yellow'>Bulma</TagDark>
            <TagDark size='lg' color='yellow'>CSS</TagDark>
            <TagDark size='lg' color='yellow'>HTML</TagDark>
            <TagDark size='lg' color='purple'>Love2D</TagDark>
            <TagDark size='lg' color='green'>AI</TagDark>
            <TagDark size='lg' color='green'>ML</TagDark>
            <TagDark size='lg' color='green'>LLMs</TagDark>
            <TagDark size='lg' color='purple'>Modding</TagDark>
            <TagDark size='lg' color='red'>Git</TagDark>
            <TagDark size='lg' color='gray'>GNU/Linux</TagDark>
            <TagDark size='lg' color='gray'>Windows</TagDark>
            <TagDark size='lg' color='gray'>Networking</TagDark>
            <TagDark size='lg' color='orange'>Media</TagDark>
            <TagDark size='lg' color='orange'>Video Editing</TagDark>
            <TagDark size='lg' color='red'>Data Analysis</TagDark>
            <TagDark size='lg' color='green'>Web Scraping</TagDark>
          </div>
        </div>
      </div>

      <div className='z-10 flex flex-col items-center h-full text-center p-0'>
        <div className='text-lg text-gray-300 animate-bounce -mt-32 md:-mt-16 lg:-mt-8'>
          <span className='mr-2'>See more</span>
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
      </div>
    </div>
  );
}
