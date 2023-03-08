import { SolidButton } from '../Buttons/SolidButton'

interface whyNextHeaderProps {
  title: string
  description: string
}
interface featureCard {
  title: string
  description: string
  width: string
}

export default function SectionWhyNext({
  whyNextHeader,
  featureCards,
}: {
  featureCards: featureCard[]
  whyNextHeader: whyNextHeaderProps
}) {
  const { title, description } = whyNextHeader
  return (
    <section className='bg-beige text-center px-16 text-deep-grey pt-2 pb-32 md:pb-64'>
      <div className='w-16 h-1 mx-auto border-0 bg-green-300 bg-gradient-to-r from-green-300 to-green-900 mb-4'></div>
      <h3 className='uppercase text-sm'>{title}</h3>
      <p className='w-[80%] md:w-2/3 mx-auto text-lg md:text-2xl font-medium pt-4 md:pt-8 leading-7 md:leading-10'>
        {description}
      </p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 md:py-16'>
        {featureCards.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col items-start justify-start text-left p-4 md:p-8 rounded-lg bg-white shadow-xl hover:bg-deep-purple group cursor-pointer ${
              feature.width === 'two/thirds' ? 'col-span-2' : 'col-span-1'
            }`}
          >
            <h4 className='text-3xl font-bold group-hover:text-white'>
              {feature.title}
            </h4>
            <p className='text-lg pt-4 md:pt-8 group-hover:text-white'>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      <SolidButton
        classes='mt-36 bg-gradient-to-tr from-teal-300 to-teal-900 text-dark-grey hover:bg-gradient-to-tl hover:from-teal-300 hover:to-teal-900'
        label='let’s build something great'
        href='contact'
      />
    </section>
  )
}
