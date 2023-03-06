import Layout from '../components/Layout'
import axios from 'axios'

const Home = ({ homepage, error }: { homepage: any; error: any }) => {
  const { title, hero, metaSeo } = homepage.data.attributes
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
      <h1>{title}</h1>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await axios.get('http://localhost:1337/api/homepage?populate=*')
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
