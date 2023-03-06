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
    <section className='bg-dark-grey text-center text-white pt-24 pb-56'>
      <div className='w-16 h-1 mx-auto border-0 bg-green-300 bg-gradient-to-r from-green-300 to-green-900 mb-4'></div>
      <h3 className='uppercase text-sm'>Who we are</h3>
      <p className='w-1/2 mx-auto text-2xl font-medium pt-8 leading-10'>
        Through navigating unexpected paths is when the most innovative and
        effective solutions emerge.
      </p>
      <Image
        className='mx-auto pt-16'
        src='/images/problem-path.svg'
        alt=''
        width={1024}
        height={200}
      />
    </section>
  )
}
