import Image from 'next/image'

interface WhoWeAreSectionProps {
  title: string
  description: string
  problemImage: string
}

interface imageProps {
  url: string
}

export default function WhoWeAreSection({
  headerWhoWeAre,
}: {
  headerWhoWeAre: WhoWeAreSectionProps
}) {
  console.log(headerWhoWeAre)
  return (
    <section className='bg-dark-grey text-center text-white pt-12 md:pt-24 pb-32 md:pb-56'>
      <div className='w-16 h-1 mx-auto border-0 bg-green-300 bg-gradient-to-r from-green-300 to-green-900 mb-4'></div>
      <h3 className='uppercase text-sm'>Who we are</h3>
      <p className='w-[80%] md:w-1/2 mx-auto text-lg md:text-2xl font-medium pt-4 md:pt-8 leading-7 md:leading-10'>
        Through navigating unexpected paths is when the most innovative and
        effective solutions emerge.
      </p>
      <Image
        className='mx-auto pt-8 md:pt-16 px-8'
        src='/images/problem-path.svg'
        alt=''
        width={1024}
        height={200}
      />
    </section>
  )
}
