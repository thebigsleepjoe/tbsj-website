import { faCodeBranch, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='relative w-full bg-gradient-to-b from-black to-gray-950 border-t-2 border-gray-900'>
      <div className='absolute inset-0 bg-gradient-to-r from-transparent to-red-600 opacity-10 -z-10' />
      <div className='container mx-auto px-4 py-24 text-gray-500 text-lg md:text-2xl'>
        {/* Columns */}
        <div className='flex justify-center'>
          <div className='flex justify-between w-full max-w-3xl'>
            <p>
              &copy; {currentYear} Joe
            </p>
            <a
              href='https://www.github.com/thebigsleepjoe'
              className='text-cyan-600 hover:text-cyan-400 transition-colors'
            >
              <FontAwesomeIcon icon={faCodeBranch} />
              <span className='ml-2'>GitHub</span>
            </a>
          </div>
        </div>

        {/* Single column row */}
        <div className="flex justify-center w-full mt-16">
          <div>
            <span className='mr-2'>Made by Joe, with</span>
            <FontAwesomeIcon icon={faHeart} className='text-red-600 hover:animate-spin' />
          </div>
        </div>
      </div>
    </footer>
  );
}
