import Image from 'next/image'
import { SolidButton } from '../Shared/SolidButton'

interface callToActionCardProps {
  backgroundColour: string
  headline: string
  subHeading: string
  image: any
  buttonLabel: string
  buttonLink: string
}

export default function CallToActionCard({
  backgroundColour,
  headline,
  subHeading,
  image,
  buttonLabel,
  buttonLink,
}: callToActionCardProps) {
  if (backgroundColour === 'solid') {
    return (
      <div className='h-auto md:min-h-[500px] rounded-xl pt-8 px-4 md:px-12 w-[45%] md:mx-0 md:w-1/3 overflow-hidden shadow-2xl bg-dark-grey'>
        <div className='flex flex-col items-start text-white gap-2 md:gap-4'>
          <h4 className='text-xs md:text-sm font-light uppercase'>
            {subHeading}
          </h4>
          <h2 className='text-xl md:text-5xl font-bold leading-5 md:leading-12'>
            {headline}
          </h2>
          <SolidButton
            label={buttonLabel}
            href={buttonLink}
            classes={
              'bg-gradient-to-r from-teal-400 to-teal-800 text-white py-2 px-4 md:py-4 md:px-12 text-[10px] md:text-xs md:mt-8'
            }
          />
        </div>
        <Image
          src={`http://localhost:1337${image.url}`}
          className='mt-8 -mb-4 md:-mb-32 md:mt-16 self-center'
          alt=''
          width={image.width}
          height={image.height}
        />
      </div>
    )
  }

  if (backgroundColour === 'gradient') {
    return (
      <div className='h-auto md:min-h-[500px] rounded-xl pt-8 px-4 md:px-12 w-[45%] md:mx-0 md:w-1/3 overflow-hidden shadow-2xl bg-gradient-to-tl from-teal-400 to-teal-700'>
        <div className='flex flex-col items-start text-white gap-2 md:gap-4'>
          <h4 className='text-xs md:text-sm font-light uppercase'>
            {subHeading}
          </h4>
          <h2 className='text-xl md:text-5xl font-bold leading-5 md:leading-12'>
            {headline}
          </h2>
          <SolidButton
            label={buttonLabel}
            href={buttonLink}
            classes={
              'bg-dark-grey text-white py-2 px-4 md:py-4 md:px-12 text-[10px] md:text-xs md:mt-8'
            }
          />
        </div>
        <Image
          src={`http://localhost:1337${image.url}`}
          className='mt-12 md:-mb-24 md:mt-16 self-center'
          alt=''
          width={image.width}
          height={image.height}
        />
      </div>
    )
  }

  return null
}
