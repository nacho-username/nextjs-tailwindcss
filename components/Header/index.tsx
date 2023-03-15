import Image from 'next/image'
import Link from 'next/link'
import { checkIfContactPage } from '../../utils/helpers'
import Sidebar from './Sidebar'

export default function Header() {
  return (
    <nav className='flex items-center flex-wrap px-2 md:px-12 w-full sticky top-0 bg-dark-grey bg-opacity-90 backdrop-blur-sm cursor-pointer z-20'>
      <Link href='/'>
        <div
          className={`py-4 px-2 -mb-20 inline-flex  md:mb-0 h-24 container mx-auto transition-all duration-300`}
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

      <div
        className={`w-full text-right md:py-2 md:inline-flex md:flex-grow md:w-auto`}
      >
        <Sidebar />
        <div className='hidden md:inline-flex md:flex-row md:ml-auto md:w-auto md:items-center text-right md:h-auto'>
          <Link
            href='/'
            className='md:inline-flex md:w-auto w-full px-3 py-2 rounded text-white font-light items-center justify-center hover:bg-green-600 hover:text-teal-300'
          >
            Home
          </Link>
          {/* <Link
            href='/our-work'
            className='md:inline-flex md:w-auto w-full px-3 py-2 rounded text-white font-light items-center justify-center hover:bg-green-600 hover:text-teal-300'
          >
            Our Work
          </Link> */}
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
