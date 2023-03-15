import { BorderButton } from '../Shared/BorderButton'
interface HomepageProps {
  title: string
  description: string
  backgroundImage: any
}

export default function Hero({
  homepageData,
}: {
  homepageData: HomepageProps
}) {
  const { title, description, backgroundImage } = homepageData
  const heroBgImage = backgroundImage.data.attributes.url

  return (
    <main
      style={{ backgroundImage: `url(http://localhost:1337${heroBgImage})` }}
      className='bg-deep-purple bg-no-repeat bg-[length:600px_400px] pt-12 pb-24 md:bg-cover md:bg-left w-full lg:h-screen'
    >
      <div className='container mx-auto flex flex-wrap w-full items-start h-full'>
        <div className='w-[90%] md:w-[45%] md:pt-20 text-white px-4'>
          <h1 className='text-3xl md:text-7xl font-extrabold capitalize'>
            {title}
          </h1>
          <p className='text-sm md:text-xl font-light text-md py-4 pb-12 leading-7 md:leading-10'>
            {description}
          </p>
          <BorderButton
            label="let's connect"
            href='contact'
            classes='cursor-pointer py-3 px-6'
          />
        </div>
      </div>
    </main>
  )
}
