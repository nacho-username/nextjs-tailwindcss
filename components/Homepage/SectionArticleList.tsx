import { title } from 'process'
import Header from '../Shared/Header'
import { SolidButton } from '../Shared/SolidButton'
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
    <section className='py-8 md:py-16 px-4 text-center'>
      <Header
        title='Stay Updated'
        description='Recent News'
        dark={true}
        alignment='center'
        classes='text-center'
      />
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 pb-12'>
        {articleData.map((article: articleProps) => (
          <NewsArticle key={article.slug} articleData={article} />
        ))}
      </div>
      <SolidButton
        classes='cursor-pointer bg-dark-grey text-white py-4 px-12'
        label='All Articles'
        href='blog'
      />
    </section>
  )
}
