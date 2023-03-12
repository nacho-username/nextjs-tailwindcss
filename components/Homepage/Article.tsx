import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '../../utils/helpers'
import { SolidButton } from '../Shared/SolidButton'

interface articleProps {
  title: string
  author: string
  date: string
  slug: string
  image: string
}

interface articleDataProps {
  articleData: articleProps[]
}

export default function Article({ articleData }: articleDataProps) {
  const { title, author, datePosted, slug, articleImage } =
    articleData.attributes
  const { url } = articleImage.data.attributes

  return (
    <Link
      href={`/blog/${slug}`}
      className='flex flex-col items-start justify-start cursor-pointer'
    >
      <div className='relative group'>
        <Image
          src={`http://localhost:1337${url}`}
          width={350}
          height={200}
          alt=''
          className='rounded-xl w-full'
        />
        <div className='opacity-0 group-hover:opacity-100 duration-300 absolute top-0 right-0 bottom-0 left-0 ease-in-out flex justify-center items-center from-deep-purple/70 to-deep-purple/70 bg-gradient-to-t rounded-xl'>
          <img src='/images/search-icon.svg' alt='' />
        </div>
      </div>

      <h4 className='text-sm text-gray-400'>
        Author:
        <span className='text-bold text-dark-grey'>Murray Williams</span>
      </h4>
      <p className='text-sm text-gray-400'>
        Posted:
        <span className='text-bold text-dark-grey'>
          {formatDate(datePosted)}
        </span>
      </p>
      <h2 className='mt-2 text-xl font-bold text-dark-grey leading-6 text-left'>
        {title}
      </h2>
    </Link>
  )
}
