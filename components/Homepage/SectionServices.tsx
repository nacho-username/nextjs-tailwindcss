import ServiceItem from './ServiceItem'

interface serviceHeaderProps {
  title: string
  description: string
}

interface serviceItemProps {
  title: string
  description: string
  icon: {
    url: string
    width: number
    height: number
  }
}

export default function SectionServices({
  serviceHeader,
  servicesList,
}: {
  serviceHeader: serviceHeaderProps
  servicesList: serviceItemProps[]
}) {
  const { title, description } = serviceHeader
  return (
    <section className='bg-deep-purple text-center text-white pt-16 pb-24'>
      <div className='w-16 h-1 mx-auto border-0 bg-green-300 bg-gradient-to-r from-green-300 to-green-900 mb-4'></div>
      <h3 className='uppercase text-sm'>{title}</h3>
      <p className='w-[80%] md:w-1/2 mx-auto text-lg md:text-2xl font-medium pt-0 leading-7 md:leading-10'>
        {description}
      </p>
      <div className='w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 pb-12'>
        {servicesList.map((service, index) => (
          <ServiceItem key={index} serviceItem={service} />
        ))}
      </div>
    </section>
  )
}
