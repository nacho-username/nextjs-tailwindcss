import { title } from 'process'
import Header from '../Shared/Header'
import { SolidButton } from '../Shared/SolidButton'
import Article from './Article'
import { ArticleI } from '../../types'
import { sortArticlesByDatePosted, limitByNumber } from '../../utils/helpers'

// interface SectionArticleListProps {
//   articles: ArticleI[],
//   author: AuthorI
// }

interface ArticleListProps {
  articlesData: ArticleI[]
}

export default function SectionArticleList({ articlesData }: ArticleListProps) {
  const sortedArticles = sortArticlesByDatePosted(articlesData)
  const latestArticles = limitByNumber(sortedArticles, 3)

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
        {latestArticles.map((article: ArticleI) => (
          <Article key={article.attributes.slug} article={article} />
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
