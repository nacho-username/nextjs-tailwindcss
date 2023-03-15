/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { checkIfContactPage } from '../../utils/helpers'

export default function Footer() {
  return (
    <footer
      className={`${
        checkIfContactPage() ? 'bg-dark-grey' : 'bg-deep-purple'
      } text-white py-12 px-4 md:px-8`}
    >
      <div className='container mx-auto flex flex-wrap justify-between'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0 flex flex-col items-start'>
          <img src='/images/logo.svg' alt='Logo' className='w-16 h-16 mb-2' />
          <p className='text-lg font-medium pr-24'>
            Solving unique problems through the use of engaging UX/UI
          </p>
        </div>
        <div className='w-1/3 flex flex-col items-start'>
          <p className='text-sm mb-2 text-light-purple'>Let's meet</p>
          <p className='text-sm font-light leading-6'>
            <a
              href='https://www.google.com/maps/place/Bootlegger+Coffee+Company/@-33.8903419,18.5080587,17z/data=!3m1!4b1!4m6!3m5!1s0x1dcc5c1ab391d3a1:0xb6182b1af7bd531a!8m2!3d-33.8903419!4d18.5102527!16s%2Fg%2F11c6zxkhfl'
              className='cursor-pointer hover:text-teal-300'
              target='_blank'
              rel='noopener noreferrer'
            >
              Bootleggers - Century City Cape Town
            </a>
          </p>
          <p className='text-sm mb-2 text-light-purple mt-2 md:mt-8'>
            Contact info
          </p>
          <p className='text-sm font-light leading-6'>
            <Link
              className='cursor-pointer hover:text-teal-300'
              href='mailto:hello@waterfalldigital.co.za'
            >
              hello@waterfalldigital.co.za
            </Link>
          </p>
        </div>
        <div className='w-1/3 flex flex-col items-start'>
          <p className='text-sm mb-2 text-light-purple'>Quick links</p>
          <div className='flex flex-wrap w-full'>
            <div className='flex flex-col my-2 w-32 gap-4'>
              <Link className='hover:text-teal-300 cursor-pointer' href='/'>
                Home
              </Link>
              <Link
                className='hover:text-teal-300 cursor-pointer'
                href='/#case-study'
              >
                Case Study
              </Link>
            </div>
            <div className='flex flex-col my-2 w-32 gap-4'>
              <Link className='hover:text-teal-300 cursor-pointer' href='/blog'>
                Blog
              </Link>
              <Link
                className='hover:text-teal-300 cursor-pointer'
                href='/contact'
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
