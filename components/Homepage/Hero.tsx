import { BorderButton } from '../Buttons/BorderButton'
interface HeroProps {
  title: string
  description: string
}

export default function Hero({ homepageData }: { homepageData: HeroProps }) {
  const { title, description } = homepageData
  return (
    <main className='bg-deep-purple bg-hero-image bg-no-repeat bg-cover bg-center w-full h-screen'>
      <div className='container mx-auto flex flex-wrap w-full items-center h-full'>
        <div className='w-[90%] md:w-[60%] pt-8 md:pt-2 text-white px-4'>
          <h1 className='text-5xl md:text-7xl font-extrabold capitalize'>
            {title}
          </h1>
          <p className='text-md md:text-xl font-light text-md py-4 pb-12 leading-8 md:leading-10'>
            {description}
          </p>
          <BorderButton label="let's connect" href='contact' />
        </div>
      </div>
    </main>
  )
}
