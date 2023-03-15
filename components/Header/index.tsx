import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { checkIfContactPage } from '../../utils/helpers'
import { useScrollDirection } from '../../utils/scrollHook'
import Sidebar from './Sidebar'

export default function Header() {
  // const scrollDirection = useScrollDirection()
  const [active, setActive] = useState(false)

  return (
    <nav
      className={`flex items-center flex-wrap px-2 md:px-12 w-full sticky top-0 ${
        checkIfContactPage() ? '' : 'bg-deep-purple'
      } cursor-pointer z-20`}
    >
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
        className={`bg-opacity-80 w-full rounded-lg pl-12 pr-2 text-right py-2 md:inline-flex md:flex-grow md:w-auto`}
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
