import Layout from '../components/Layout'
import axios from 'axios'
import { isMobile } from 'react-device-detect'
import Hero from '../components/Homepage/Hero'
import WhoWeAreSection from '../components/Homepage/SectionWhoWeAre'
import CallToActionCardList from '../components/Homepage/CallToActionCardList'
import SectionWhyNext from '../components/Homepage/SectionWhyNext'
import SectionNextShowcase from '../components/Homepage/SectionNextShowcase'
import SectionServices from '../components/Homepage/SectionServices'
import SectionCaseStudy from '../components/Homepage/SectionCaseStudy'
import SectionArticleList from '../components/Homepage/SectionArticleList'
import { ArticleI, StrapiArticleResponseI } from '../types'
import { API_URL } from '../config'

const Home = ({
  homepageData,
  articlesData,
  error,
}: {
  homepageData: any
  articlesData: ArticleI[]
  error: any
}) => {
  const { MetaDescription, MetaTitle } = homepageData.MetaSeo[0]

  if (error) {
    return <div>Something went wrong</div>
  }

  return (
    <Layout
      meta={{
        title: MetaTitle,
        description: MetaDescription,
      }}
    >
      <Hero homepageData={homepageData.hero} />
      {!isMobile && (
        <WhoWeAreSection whoWeAreData={homepageData.headerWhoWeAre} />
      )}
      {/* <CallToActionCardList
        showcaseCardData={homepageData.showcaseCard}
        connectCardData={homepageData.connectCard}
      />
      <SectionWhyNext
        whyNextHeader={homepageData.headerWhyNext}
        featureCards={homepageData.NextFeatureCards}
      />
      <SectionNextShowcase
        nextShowcaseHeader={homepageData.portfolioHeaderNext}
        nextShowcaseData={homepageData.showcaseNext}
      />
      <SectionServices
        serviceHeader={homepageData.servicesWeOfferHeader}
        servicesList={homepageData.servicesWeOffer}
      />
      <SectionCaseStudy />
      <SectionArticleList articlesData={articlesData} /> */}
    </Layout>
  )
}

export async function getServerSideProps() {
  const getHomepageData = await axios.get(
    `https://waterfall-strapi.herokuapp.com/api/homepage?populate=deep`
  )
  // const getArticleData: StrapiArticleResponseI = await axios.get(
  //   `${API_URL}/api/articles?populate=deep`
  // )
  try {
    const homepage = getHomepageData.data
    const articles = getArticleData.data

    return {
      props: {
        homepageData: homepage.data.attributes,
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

export default Home
