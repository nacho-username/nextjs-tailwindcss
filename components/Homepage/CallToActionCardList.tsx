import Image from 'next/image'
import CallToActionCard from './CallToActionCard'

interface showcaseCardData {
  backgroundColour: string
  headline: string
  subHeading: string
  image: any
  buttonLabel: string
  buttonLink: string
}
interface connectCardData {
  backgroundColour: string
  headline: string
  subHeading: string
  image: any
  buttonLabel: string
  buttonLink: string
}

export default function CallToActionCardList({
  showcaseCardData,
  connectCardData,
}: {
  showcaseCardData: showcaseCardData
  connectCardData: connectCardData
}) {
  return (
    <div className=' py-12 md:py-24 bg-beige'>
      <div className='flex flex-wrap justify-center gap-4 md:gap-24 md:-mt-64'>
        <CallToActionCard
          backgroundColour={showcaseCardData.backgroundColour}
          headline={showcaseCardData.headline}
          subHeading={showcaseCardData.subHeading}
          image={showcaseCardData.image.data.attributes}
          buttonLabel={showcaseCardData.buttonLabel}
          buttonLink={showcaseCardData.buttonLink}
        />
        <CallToActionCard
          backgroundColour={connectCardData.backgroundColour}
          headline={connectCardData.headline}
          subHeading={connectCardData.subHeading}
          image={connectCardData.image.data.attributes}
          buttonLabel={connectCardData.buttonLabel}
          buttonLink={connectCardData.buttonLink}
        />
      </div>
    </div>
  )
}
