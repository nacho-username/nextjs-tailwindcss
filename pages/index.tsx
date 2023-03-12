import Layout from '../components/Layout'
import axios from 'axios'
import Hero from '../components/Homepage/Hero'
import WhoWeAreSection from '../components/Homepage/SectionWhoWeAre'
import CallToActionCardList from '../components/Homepage/CallToActionCardList'
import SectionWhyNext from '../components/Homepage/SectionWhyNext'
import SectionNextShowcase from '../components/Homepage/SectionNextShowcase'
import SectionServices from '../components/Homepage/SectionServices'
import SectionCaseStudy from '../components/Homepage/SectionCaseStudy'
import SectionArticleList from '../components/Homepage/SectionArticleList'

const Home = ({
  homepageData,
  articleData,
  error,
}: {
  homepageData: any
  articleData: any
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
      <WhoWeAreSection whoWeAreData={homepageData.headerWhoWeAre} />
      <CallToActionCardList
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
      <SectionArticleList articleData={articleData} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const getHomepageData = await axios.get(
    'http://localhost:1337/api/homepage?populate=deep'
  )
  const getArticleData = await axios.get(
    'http://localhost:1337/api/articles?populate=deep'
  )
  try {
    const homepage = getHomepageData.data
    const articles = getArticleData.data
    return {
      props: {
        homepageData: homepage.data.attributes,
        articleData: articles.data,
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
