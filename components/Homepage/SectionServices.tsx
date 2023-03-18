import { ServiceI } from '../../types'
import Header from '../Shared/Header'
import ServiceItem from './ServiceItem'

interface serviceHeaderProps {
  title: string
  description: string
}
interface ServiceListProps {
  servicesList: ServiceI[]
}

export default function SectionServices({
  serviceHeader,
  servicesList,
}: {
  serviceHeader: serviceHeaderProps
  servicesList: ServiceListProps
}) {
  const { title, description } = serviceHeader
  console.log(servicesList)
  return (
    <section className='bg-beige text-center text-white pt-12 pb-12'>
      <Header
        title={title}
        description={description}
        dark={true}
        alignment='center'
      />
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-4 md:py-12 px-8 md:px-24'>
        {Array.isArray(servicesList) &&
          servicesList.map((service: ServiceI) => (
            <ServiceItem key={service.id} service={service} />
          ))}
      </div>
    </section>
  )
}
