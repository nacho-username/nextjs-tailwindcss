import Image from 'next/image'
import Link from 'next/link'
import { useScrollDirection } from '../../utils/scrollHook'

export default function Header() {
  const scrollDirection = useScrollDirection()

  return (
    <nav className='flex items-center flex-wrap px-12 w-full sticky top-0 bg-deep-purple cursor-pointer z-20'>
      <Link href='/'>
        <div
          className={`py-4 px-2 -mb-20 inline-flex bg-deep-purple/30 rounded-lg md:mb-0 h-24 container mx-auto transition-all duration-300`}
        >
          <Image
            className='pb-2'
            src='/images/logo.svg'
            alt='Logo'
            width={60}
            height={100}
          />
        </div>
      </Link>
      <button className='inline-flex md:hidden p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'>
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </button>
      <div className='hidden w-full md:inline-flex md:flex-grow md:w-auto'>
        <div className='md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start flex flex-col md:h-auto'>
          <Link
            href='/'
            className='md:inline-flex md:w-auto w-full px-3 py-2 rounded text-white font-light items-center justify-center hover:bg-green-600 hover:text-teal-300'
          >
            Home
          </Link>
          <Link
            href='/our-work'
            className='md:inline-flex md:w-auto w-full px-3 py-2 rounded text-white font-light items-center justify-center hover:bg-green-600 hover:text-teal-300'
          >
            Our Work
          </Link>
          <Link
            href='/blog'
            className='md:inline-flex md:w-auto w-full px-3 py-2 rounded text-white font-light items-center justify-center hover:bg-green-600 hover:text-teal-300'
          >
            Blog
          </Link>
          <Link
            href='/contact'
            className='md:inline-flex md:w-auto w-full px-3 py-2 rounded text-white font-light items-center justify-center hover:bg-green-600 hover:text-teal-300'
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
