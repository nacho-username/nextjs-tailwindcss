import axios from 'axios'
import Image from 'next/image'
import Layout from '../../components/Layout'
import Article from '../../components/Homepage/Article'
import { ArticleI } from '../../types'
import { API_URL } from '../../config'

interface BlogProps {
  articlesData: ArticleI[]
}

export default function index({ articlesData }: BlogProps) {
  return (
    <Layout
      meta={{
        title: 'Blog',
        description: 'Latest news articles from Waterfall Digital',
      }}
    >
      <div className='bg-white'>
        <h1 className='container mx-auto text-4xl px-8 md:px-0 mt-8 text-dark-grey'>
          News Articles
        </h1>
        <section className='container mx-auto grid grid-cols-1 md:grid-cols-3 items-start gap-8 md:gap-4 px-8 md:px-0 pt-8 pb-12'>
          {articlesData.map((article: any) => (
            <div key={article.id} className=' text-white'>
              <Article article={article} />
            </div>
          ))}
        </section>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  try {
    const articles = await axios.get(`${API_URL}/api/articles?populate=deep`)

    return {
      props: {
        articlesData: articles.data,
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
