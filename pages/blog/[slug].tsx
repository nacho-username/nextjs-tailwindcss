/* eslint-disable @next/next/no-img-element */
import axios from 'axios'
import Image from 'next/image'
import Layout from '../../components/Layout'
import { SolidButton } from '../../components/Shared/SolidButton'
import { formatDate } from '../../utils/helpers'
import ReactMarkdown from 'react-markdown'
import { ArticleI } from '../../types'
import { API_URL } from '../../config'

interface ArticleProps {
  article: ArticleI
}

export default function BlogArticle({ article }: ArticleProps) {
  const { title, datePosted, content, articleImage } =
    article.data[0].attributes
  const imageUrl = articleImage.data.attributes.url
  return (
    // <h1>test</h1>
    <Layout
      meta={{
        title: 'Blog',
        description: 'Latest news articles from Waterfall Digital',
      }}
    >
      <section className='container mx-auto px-8 py-8 bg-white'>
        <SolidButton
          classes='py-3 bg-dark-grey text-white mb-8'
          label='Back to All Articles'
          href='blog'
        />
        <h1 className='text-6xl font-bold uppercase text-center mb-8 text-dark-grey'>
          {title}
        </h1>
        <img
          className='w-full h-96 bg-fixed object-cover rounded-xl'
          src={`${imageUrl}`}
          alt=''
        />
        <h4 className='text-lg text-gray-400'>
          Posted by:
          <span className='text-bold text-dark-grey'>Murray Williams</span>
        </h4>
        <p className='text-lg text-gray-400'>
          Posted on:
          <span className='text-bold text-dark-grey'>
            {formatDate(datePosted)}
          </span>
        </p>

        <div id='post-body' className='mt-4'>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
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
      `${API_URL}/api/articles?populate=deep&filters[slug][$eq]=${slug}`
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
