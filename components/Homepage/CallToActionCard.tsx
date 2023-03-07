import Image from 'next/image'
import { SolidButton } from '../Buttons/SolidButton'

interface callToActionCardProps {
  backgroundColour: string
  headline: string
  subHeading: string
  image: any
}

export default function CallToActionCard({
  backgroundColour,
  headline,
  subHeading,
  image,
}: callToActionCardProps) {
  console.log(image)
  if (backgroundColour === 'solid') {
    return (
      <div className='h-auto rounded-xl pt-8 px-16 w-full mx-8 md:mx-0 md:w-1/3 overflow-hidden shadow-2xl bg-dark-grey'>
        <div className='flex flex-col items-start text-white gap-4'>
          <h4 className='text-sm font-light uppercase'>{subHeading}</h4>
          <h2 className=' text-2xl md:text-5xl font-bold'>{headline}</h2>
          <SolidButton
            label='take me there'
            href='our-work'
            classes={'bg-gradient-to-r from-teal-400 to-teal-800 text-white'}
          />
        </div>
        <Image
          src={`http://localhost:1337${image.url}`}
          className='mt-8 mb-0 md:-mb-24 self-center'
          alt=''
          width={image.width}
          height={image.height}
        />
      </div>
    )
  }

  if (backgroundColour === 'gradient') {
    return (
      <div className='md:h-auto rounded-xl pt-8 mx-8 md:mx-0 md:w-1/3 overflow-hidden shadow-2xl bg-gradient-to-tl from-teal-400 to-teal-700'>
        <div className='flex flex-col items-start text-white gap-4 px-16'>
          <h4 className='text-sm font-light uppercase'>{subHeading}</h4>
          <h2 className='text-2xl md:text-5xl font-bold'>{headline}</h2>
          <SolidButton
            label='get in touch'
            href='contact'
            classes={'bg-dark-grey text-white'}
          />
        </div>
        <Image
          src={`http://localhost:1337${image.url}`}
          className='mt-8 mb-0 md:-mb-24 self-center'
          alt=''
          width={image.width}
          height={image.height}
        />
      </div>
    )
  }

  return null
}
