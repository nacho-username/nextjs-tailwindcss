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
    <div className='flex w-full p-8 justify-start items-start border-2 border-light-purple rounded-lg group hover:bg-white hover:border-white hover:cursor-cell'>
      <div className='w-32'>
        <Image
          className='shadow-lg rounded-full'
          src={`http://localhost:1337${url}`}
          width={width}
          height={height}
          alt=''
        />
      </div>
      <div className='text-left ml-4 group-hover:text-dark-grey'>
        <h4 className='text-xl font-bold uppercase '>{title}</h4>
        <p className='text-sm pt-2 leading-5 font-light'>{description}</p>
      </div>
    </div>
  )
}
