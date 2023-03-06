import { BorderButton } from '../Buttons/BorderButton'
interface HeroProps {
  title: string
  description: string
}

export default function Hero({ hero }: { hero: HeroProps }) {
  return (
    <main className='bg-hero-image bg-no-repeat bg-cover bg-center h-full'>
      <div className='container mx-auto flex flex-wrap w-full items-center h-full'>
        <div className='w-[90%] md:w-[60%] pt-8 md:pt-28 text-white px-4'>
          <h1 className='text-5xl md:text-8xl font-extrabold capitalize'>
            {hero.title}
          </h1>
          <p className='text-md md:text-2xl font-light text-md py-4 pb-8 leading-8 md:leading-10'>
            {hero.description}
          </p>
          <BorderButton label="let's connect" href='contact' />
        </div>
      </div>
    </main>
  )
}
