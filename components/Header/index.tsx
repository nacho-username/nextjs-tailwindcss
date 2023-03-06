import Image from 'next/image'

export default function Header() {
  return (
    <div className='absolute top-8 left-16'>
      <div className='container mx-auto'>
        <Image src='/images/logo.svg' alt='Logo' width={80} height={100} />
      </div>
    </div>
  )
}
