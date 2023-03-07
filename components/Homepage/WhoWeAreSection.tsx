import Image from 'next/image'

interface whoWeAreDataProps {
  title: string
  description: string
}

export default function WhoWeAreSection({
  whoWeAreData,
}: {
  whoWeAreData: whoWeAreDataProps
}) {
  const { title, description } = whoWeAreData
  return (
    <section className='bg-deep-purple text-center text-white pt-2 pb-32 md:pb-64'>
      <div className='w-16 h-1 mx-auto border-0 bg-green-300 bg-gradient-to-r from-green-300 to-green-900 mb-4'></div>
      <h3 className='uppercase text-sm'>{title}</h3>
      <p className='w-[80%] md:w-1/2 mx-auto text-lg md:text-2xl font-medium pt-4 md:pt-8 leading-7 md:leading-10'>
        {description}
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
