import Image from 'next/image'
import { useScrollDirection } from '../../utils/scrollHook'

export default function Header() {
  const scrollDirection = useScrollDirection()

  return (
    <nav className='w-full bg-deep-purple'>
      <div
        className={`py-4 px-2 -mb-20 md:sticky ${
          scrollDirection === 'down' ? 'md:-top-28' : 'md:top-0'
        } backdrop-blur bg-deep-purple/30 rounded-lg md:mb-0 h-20 container mx-auto transition-all duration-300`}
      >
        <Image
          className='pb-4'
          src='/images/logo.svg'
          alt='Logo'
          width={60}
          height={100}
        />
      </div>
    </nav>
  )
}
