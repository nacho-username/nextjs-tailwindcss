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
      <main className='bg-hero-image bg-no-repeat bg-cover bg-center h-full'>
        <div className='container mx-auto flex w-full'>
          <div className='w-1/2 py-32 text-white'>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='text-2xl'>{hero.description}</p>
          </div>
        </div>
      </main>
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
