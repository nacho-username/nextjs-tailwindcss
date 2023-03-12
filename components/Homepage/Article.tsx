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

export default function NewsArticle({ articleData }: articleDataProps) {
  const { title, author, datePosted, slug, articleImage } =
    articleData.attributes
  const { url } = articleImage.data.attributes

  return (
    <Link
      href={`/blog/${slug}`}
      className='flex flex-col items-start justify-start cursor-pointer'
    >
      <Image
        src={`http://localhost:1337${url}`}
        width={350}
        height={200}
        alt=''
        className='rounded-xl w-full'
      />
      <h4 className='text-xs text-gray-400'>
        By <span className='text-bold text-dark-grey'>Murray Williams</span>
      </h4>
      <p className='text-xs text-gray-400'>{formatDate(datePosted)}</p>
      <h2 className='mt-2 text-xl font-bold text-dark-grey leading-6 text-left'>
        {title}
      </h2>
    </Link>
  )
}
