import Layout from '../components/Layout'
import axios from 'axios'
import Hero from '../components/Homepage/Hero'
import WhoWeAreSection from '../components/Homepage/SectionWhoWeAre'
import CallToActionCardList from '../components/Homepage/CallToActionCardList'
import SectionWhyNext from '../components/Homepage/SectionWhyNext'
import SectionNextShowcase from '../components/Homepage/SectionNextShowcase'
import SectionServices from '../components/Homepage/SectionServices'
import SectionCaseStudy from '../components/Homepage/SectionCaseStudy'

const Home = ({ data, error }: { data: any; error: any }) => {
  const { MetaDescription, MetaTitle } = data.MetaSeo[0]

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
      <Hero homepageData={data.hero} />
      <WhoWeAreSection whoWeAreData={data.headerWhoWeAre} />
      <CallToActionCardList
        showcaseCardData={data.showcaseCard}
        connectCardData={data.connectCard}
      />
      <SectionWhyNext
        whyNextHeader={data.headerWhyNext}
        featureCards={data.NextFeatureCards}
      />
      <SectionNextShowcase
        nextShowcaseHeader={data.portfolioHeaderNext}
        nextShowcaseData={data.showcaseNext}
      />
      <SectionServices
        serviceHeader={data.servicesWeOfferHeader}
        servicesList={data.servicesWeOffer}
      />
      <SectionCaseStudy />
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await axios.get(
    'http://localhost:1337/api/homepage?populate=deep'
  )
  try {
    const homepage = res.data
    return {
      props: {
        data: homepage.data.attributes,
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
