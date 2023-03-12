import { title } from 'process'
import Header from '../Shared/Header'
import NewsArticle from './Article'

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

export default function SectionArticleList({ articleData }: articleDataProps) {
  return (
    <section>
      <Header
        title='Stay Updated'
        description='Recent News'
        dark={true}
        alignment='center'
      />
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 pb-12'>
        {articleData.map((article: articleProps) => (
          <NewsArticle key={article.slug} articleData={article} />
        ))}
      </div>
    </section>
  )
}
