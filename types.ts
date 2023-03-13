export interface ArticleI {
  attributes: {
    title: string
    author: string
    datePosted: string
    slug: string
    articleImage: ArticleImageI
  }
  id: number
}
export interface ArticleImageI {
  data: {
    attributes: {
      url: string
    }
  }
}

export interface StrapiArticleResponseI {
  data: {
    data: ArticleI[]
  }
}
