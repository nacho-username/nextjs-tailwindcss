import Image from 'next/image'
import Header from '../Shared/Header'

interface whoWeAreDataProps {
  title: string
  description: string
}

export default function SectionWhoWeAre({
  whoWeAreData,
}: {
  whoWeAreData: whoWeAreDataProps
}) {
  const { title, description } = whoWeAreData
  return (
    <section className='bg-dark-grey text-center text-white pt-2 pb-32 md:pb-64'>
      <Header title={title} description={description} alignment='center' />
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
