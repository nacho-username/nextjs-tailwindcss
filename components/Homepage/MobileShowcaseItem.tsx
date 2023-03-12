import Image from 'next/image'
import { SolidButton } from '../Shared/SolidButton'

interface showcaseProps {
  showcase: {
    width: string
    image: any
    titleHover: string
    titleDescription: string
    websiteLink: string
  }
}

export default function MobileShowcaseItem({ showcase }: showcaseProps) {
  return (
    <div
      className={
        'flex flex-col my-4 md:my-0 items-start justify-start text-left bg-white cursor-pointer col-span-1'
      }
    >
      <Image
        src={`http://localhost:1337${showcase.image.data.attributes.url}`}
        alt=''
        width={showcase.image.data.attributes.width}
        height={showcase.image.data.attributes.height}
      />
      <div className=' bg-white p-4 flex flex-col items-center justify-center text-center text-dark-grey'>
        <h4 className='text-xl font-bold uppercase '>{showcase.titleHover}</h4>
        <p className='text-xs leading-5 font-light'>
          {showcase.titleDescription}
        </p>
        <SolidButton
          classes='bg-deep-purple text-white mt-4 py-2 px-6 cursor-pointer'
          label='view site'
          href={showcase.websiteLink}
        />
      </div>
    </div>
  )
}
