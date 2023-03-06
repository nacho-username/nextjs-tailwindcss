import Image from 'next/image'

export default function Header() {
  return (
    <div className='h-0 sticky top-4 container mx-auto bg-slate-900'>
      <Image src='/images/logo.svg' alt='Logo' width={80} height={100} />
    </div>
  )
}
