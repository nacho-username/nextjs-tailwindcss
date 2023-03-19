import Image from 'next/image'
import { ServiceI } from '../../types'

interface ServiceProps {
  service: ServiceI
}

export default function ServiceItem({ service }: ServiceProps) {
  const { title, description } = service
  const { url, width, height } = service.icon.data.attributes
  return (
    <div className='flex flex-wrap md:flex-nowrap w-full p-4 md:p-12 justify-start items-start bg-white rounded-lg group hover:bg-dark-grey hover:border-white cursor-pointer'>
      <div className='w-32'>
        <Image
          className='rounded-full'
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`}
          width={width}
          height={height}
          alt=''
        />
      </div>
      <div className='text-left ml-4 text-dark-grey group-hover:text-white'>
        <h4 className='text-lg md:text-xl font-bold uppercase '>{title}</h4>
        <p className='text-xs md:text-sm pt-2 leading-5 font-light'>
          {description}
        </p>
      </div>
    </div>
  )
}
