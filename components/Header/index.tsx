import Image from 'next/image'

export default function Header() {
  return (
    <div className='p-4 -mb-36 md:mb-0 md:h-0 md:sticky md:top-4 container mx-auto'>
      <Image src='/images/logo.svg' alt='Logo' width={80} height={100} />
    </div>
  )
}
