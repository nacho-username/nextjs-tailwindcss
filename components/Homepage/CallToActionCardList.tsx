import Image from 'next/image'
import CallToActionCard from './CallToActionCard'

interface showcaseCardData {
  backgroundColour: string
  headline: string
  subHeading: string
  image: any
}
interface connectCardData {
  backgroundColour: string
  headline: string
  subHeading: string
  image: any
}

export default function CallToActionCardList({
  showcaseCardData,
  connectCardData,
}: {
  showcaseCardData: showcaseCardData
  connectCardData: connectCardData
}) {
  return (
    <div className='flex flex-wrap justify-center gap-8 md:gap-24 -mt-32 md:-mt-64 py-24 '>
      <CallToActionCard
        backgroundColour={showcaseCardData.backgroundColour}
        headline={showcaseCardData.headline}
        subHeading={showcaseCardData.subHeading}
        image={showcaseCardData.image.data.attributes}
      />
      <CallToActionCard
        backgroundColour={connectCardData.backgroundColour}
        headline={connectCardData.headline}
        subHeading={connectCardData.subHeading}
        image={connectCardData.image.data.attributes}
      />
    </div>
  )
}
