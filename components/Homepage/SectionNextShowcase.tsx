import Image from 'next/image'
import Link from 'next/link'
import { SolidButton } from '../Shared/SolidButton'

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
    <section className='bg-beige text-center pt-16 px-16 text-deep-grey'>
      <h3 className='w-[80%] md:w-1/2 mx-auto capitalize text-3xl font-bold'>
        {title}
      </h3>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 pt-8 pb-12'>
        {nextShowcaseData.map((showcase, index) => (
          <div
            key={index}
            className={`flex flex-col items-start justify-start text-left bg-white   cursor-pointer ${
              showcase.width === 'two/thirds' ? 'col-span-2' : 'col-span-1'
            }`}
          >
            <div className='relative'>
              <Image
                src={`http://localhost:1337${showcase.image.data.attributes.url}`}
                alt={showcase.image.data.attributes.alternativeText}
                width={showcase.image.data.attributes.width}
                height={showcase.image.data.attributes.height}
              />

              <div className='opacity-0 hover:opacity-100 duration-300 bg-white m-8 p-6 absolute inset-0 flex flex-col items-center justify-center text-center text-dark-grey'>
                <h4 className='text-xl font-bold uppercase '>
                  {showcase.titleHover}
                </h4>
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
          </div>
        ))}
      </div>
    </section>
  )
}
