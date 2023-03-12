import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { SolidButton } from '../Shared/SolidButton'
import { isMobile } from 'react-device-detect'

// Dynamically import MobileComponent and DesktopComponent
const MobileShowcase = dynamic(() => import('./MobileShowcaseItem'))
const DesktopShowcase = dynamic(() => import('./DesktopShowcaseItem'))

interface nextShowcaseProps {
  title: string
}

interface showcaseCardProps {
  width: string
  image: any
  titleHover: string
  titleDescription: string
  websiteLink: string
}

export default function SectionNextShowcase({
  nextShowcaseHeader,
  nextShowcaseData,
}: {
  nextShowcaseData: showcaseCardProps[]
  nextShowcaseHeader: nextShowcaseProps
}) {
  const { title } = nextShowcaseHeader
  return (
    <section className='bg-beige text-center  px-8 md:pt-16 md:px-16 text-deep-grey'>
      <h3 className='md:w-1/2 mx-auto capitalize text-lg md:text-3xl font-bold'>
        {title}
      </h3>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 md:gap-4 pt-8 md:pb-12'>
        {nextShowcaseData.map((showcase, index) => (
          <>
            {isMobile ? (
              <MobileShowcase key={index} showcase={showcase} />
            ) : (
              <DesktopShowcase key={index} showcase={showcase} />
            )}
          </>
        ))}
      </div>
    </section>
  )
}
