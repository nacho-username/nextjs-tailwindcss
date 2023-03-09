import Image from 'next/image'

interface serviceItemProps {
  title: string
  description: string
  icon: {
    url: string
    width: number
    height: number
  }
}

export default function ServiceItem({
  serviceItem,
}: {
  serviceItem: serviceItemProps
}) {
  const { title, description } = serviceItem
  const { url, width, height } = serviceItem.icon.data.attributes
  return (
    <div className='flex w-full p-12 justify-start items-start bg-white rounded-lg group hover:bg-dark-grey hover:border-white hover:cursor-cell'>
      <div className='w-32'>
        <Image
          className='rounded-full'
          src={`http://localhost:1337${url}`}
          width={width}
          height={height}
          alt=''
        />
      </div>
      <div className='text-left ml-4 text-dark-grey group-hover:text-white'>
        <h4 className='text-xl font-bold uppercase '>{title}</h4>
        <p className='text-sm pt-2 leading-5 font-light'>{description}</p>
      </div>
    </div>
  )
}
