import Layout from '../components/Layout'
import axios from 'axios'
import Hero from '../components/Homepage/Hero'
import WhoWeAreSection from '../components/Homepage/WhoWeAreSection'
import CallToActionCardList from '../components/Homepage/CallToActionCardList'

const Home = ({ homepage, error }: { homepage: any; error: any }) => {
  const { MetaDescription, MetaTitle } = homepage.data.attributes.MetaSeo[0]

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
      <Hero homepageData={homepage.data.attributes.hero} />
      <WhoWeAreSection whoWeAreData={homepage.data.attributes.headerWhoWeAre} />
      <CallToActionCardList
        showcaseCardData={homepage.data.attributes.showcaseCard}
        connectCardData={homepage.data.attributes.connectCard}
      />
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
        homepage,
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
