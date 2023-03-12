import axios from 'axios'
import Image from 'next/image'
import Layout from '../../components/Layout'
import { SolidButton } from '../../components/Shared/SolidButton'
import { formatDate } from '../../utils/helpers'

interface ArticleProps {
  title: string
  datePosted: string
  articleImage: any
}

export default function BlogArticle({ article }: { article: ArticleProps }) {
  const { title, datePosted } = article.data[0].attributes
  const articleImage =
    article.data[0].attributes.articleImage.data.attributes.url
  return (
    <Layout
      meta={{
        title: 'Blog',
        description: 'Latest news articles from Waterfall Digital',
      }}
    >
      <section className='container mx-auto my-8'>
        <SolidButton
          classes='py-3 bg-dark-grey text-white mb-8'
          label='Back to All Articles'
          href='/blog'
        />
        <img
          className='w-full h-72 object-cover object-center'
          src={`http://localhost:1337${articleImage}`}
          alt=''
        />

        <h1 className='text-4xl mt-8 text-dark-grey'>{title}</h1>
        <h4 className='text-lg text-gray-400'>
          By <span className='text-bold text-dark-grey'>Murray Williams</span>
        </h4>
        <p className='text-lg text-gray-400'>{formatDate(datePosted)}</p>
      </section>
    </Layout>
  )
}

export async function getServerSideProps({
  params,
}: {
  params: { slug: string }
}) {
  try {
    const { slug } = params
    const res = await axios.get(
      `http://localhost:1337/api/articles?populate=deep&filters[slug][$eq]=${slug}`
    )
    const article = res.data
    return {
      props: {
        article,
      },
    }
  } catch (error: any) {
    return {
      props: {
        error: {
          message: error.message,
        },
      },
    }
  }
}
