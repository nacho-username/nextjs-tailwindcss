import axios from 'axios'
import Image from 'next/image'
import Layout from '../../components/Layout'
import Article from '../../components/Homepage/Article'
import { ArticleI } from '../../types'

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
      <h1 className='container mx-auto text-4xl mt-8 text-dark-grey'>
        News Articles
      </h1>
      <section className='container mx-auto grid grid-cols-1 md:grid-cols-3 items-start md:gap-4 pt-8 md:pb-12'>
        {articlesData.data.map((article: any) => (
          <div key={article.id} className=' text-white'>
            <Article article={article} />
          </div>
        ))}
      </section>
    </Layout>
  )
}

export async function getServerSideProps() {
  try {
    const articles = await axios.get(
      'http://localhost:1337/api/articles?populate=deep'
    )
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
