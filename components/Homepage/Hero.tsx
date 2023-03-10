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
      className='bg-deep-purple bg-no-repeat bg-cover bg-center w-full h-[70%] md:h-[90%]'
    >
      <div className='container mx-auto flex flex-wrap w-full items-center h-full'>
        <div className='w-[90%] md:w-[60%] pt-8 md:pt-2 text-white px-4'>
          <h1 className='text-5xl md:text-7xl font-extrabold capitalize'>
            {title}
          </h1>
          <p className='text-md md:text-xl font-light text-md py-4 pb-12 leading-8 md:leading-10'>
            {description}
          </p>
          <BorderButton
            label="let's connect"
            href='contact'
            classes='cursor-pointer'
          />
        </div>
      </div>
    </main>
  )
}
