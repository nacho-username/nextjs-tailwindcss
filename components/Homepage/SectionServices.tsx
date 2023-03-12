import Header from '../Shared/Header'
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
    <section className='bg-beige text-center text-white pt-12 pb-12 md:pb-24'>
      <Header
        title={title}
        description={description}
        dark={true}
        alignment='center'
      />
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-12 px-8 md:px-24'>
        {servicesList.map((service, index) => (
          <ServiceItem key={index} serviceItem={service} />
        ))}
      </div>
    </section>
  )
}
