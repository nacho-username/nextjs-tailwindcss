import Image from 'next/image'
import { SolidButton } from '../Buttons/SolidButton'

interface CallToActionCardListProps {
  showcaseCardData: {
    backgroundColour: string
    headline: string
    subHeading: string
  }
  connectCardData: {
    backgroundColour: string
    headline: string
    subHeading: string
  }
}

export default function CallToActionCardList({
  showcaseCardData,
  connectCardData,
}: {
  showcaseCardData: CallToActionCardListProps
  connectCardData: CallToActionCardListProps
}) {
  return (
    <div className='flex justify-center gap-24 -mt-36 '>
      <div
        className={`rounded-xl pt-8 px-16 w-1/3 overflow-hidden shadow-2xl ${
          showcaseCardData.backgroundColour === 'solid' ? 'bg-dark-grey' : ''
        }`}
      >
        <div className='flex flex-col items-start text-white gap-4'>
          <h4 className='text-sm font-light uppercase'>
            {showcaseCardData.subHeading}
          </h4>
          <h2 className='text-5xl font-bold'>{showcaseCardData.headline}</h2>
          <SolidButton
            label='take me there'
            href='our-work'
            classes={'bg-gradient-to-r from-teal-400 to-teal-800 text-white'}
          />
          <img
            className='mt-8 -mb-24 self-center'
            src='/images/iphone-2up--green.png'
            alt=''
          />
        </div>
      </div>
      <div
        className={`rounded-xl pt-8 w-1/3 overflow-hidden shadow-2xl ${
          connectCardData.backgroundColour === 'gradient'
            ? 'bg-gradient-to-tl from-teal-400 to-teal-700'
            : ''
        }`}
      >
        <div className='flex flex-col items-start text-white gap-4 px-16'>
          <h4 className='text-sm font-light uppercase'>
            {connectCardData.subHeading}
          </h4>
          <h2 className='text-5xl font-bold'>{connectCardData.headline}</h2>
          <SolidButton
            label='get in touch'
            href='contact'
            classes={'bg-dark-grey text-white'}
          />
        </div>
        <img
          className='mt-16 -mb-24 w-[90%] mx-auto'
          src='/images/clay-macbook.png'
          alt=''
        />
      </div>
    </div>
  )
}
