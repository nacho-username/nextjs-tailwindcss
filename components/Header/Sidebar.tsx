import Link from 'next/link'
import { useState } from 'react'
import { BorderButton } from '../Shared/BorderButton'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden fixed top-4 right-3 text-white'
        >
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
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='text-xl font-bold text-white fixed top-4 right-4 z-10'
        >
          X
        </button>
      )}
      <div
        className={`top-0 right-0 fixed bg-dark-grey w-42 h-full p-10 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ease-in-out duration-300`}
      >
        <div className='flex flex-col justify-between h-full'>
          <div className='flex flex-col items-start mt-12'>
            <Link
              href='/'
              className='px-3 py-2 rounded text-white font-light  hover:bg-green-600 hover:text-teal-300'
            >
              Home
            </Link>
            {/* <Link
            href='/our-work'
            className='px-3 py-2 rounded text-white font-light items-center justify-center hover:bg-green-600 hover:text-teal-300'
          >
            Our Work
          </Link> */}
            <Link
              href='/blog'
              className=' px-3 py-2 rounded text-white font-light hover:bg-green-600 hover:text-teal-300'
            >
              Blog
            </Link>
            <Link
              href='/contact'
              className=' px-3 py-2 rounded text-white font-light hover:bg-green-600 hover:text-teal-300'
            >
              Contact
            </Link>
          </div>
          <BorderButton
            label="let's connect"
            href='contact'
            classes='cursor-pointer text-teal-300 py-3 !w-32'
          />
        </div>
      </div>
    </>
  )
}
