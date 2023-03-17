export interface ArticleI {
  attributes: {
    title: string
    slug: string
    author: string
    datePosted: string
    content: string
    articleImage: ArticleImageI
  }
  id: number
  data: {
    attributes: {
      title: string
      slug: string
      author: string
      datePosted: string
      content: string
      articleImage: ArticleImageI
    }
  }[]
}
export interface ArticleImageI {
  data: {
    attributes: {
      url: string
    }
  }
}

export interface ServiceI {
  title: string
  description: string
  icon: ServiceIconI
  id: number
}

export interface ServiceIconI {
  data: {
    attributes: {
      url: string
      width: number
      height: number
    }
  }
}
export interface StrapiServiceResponseI {
  data: {
    data: ServiceI[]
  }
}

export interface StrapiArticleResponseI {
  data: {
    data: ArticleI[]
  }
}
