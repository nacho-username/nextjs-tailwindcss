import Layout from '../components/Layout'
import axios from 'axios'
import { BorderButton } from '../components/Buttons/BorderButton'

const Home = ({ homepage, error }: { homepage: any; error: any }) => {
  const { title, hero } = homepage.data.attributes
  const { MetaDescription, MetaTitle } = homepage.data.attributes.MetaSeo[0]
  console.log(homepage.data.attributes)
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
        <div className='container mx-auto flex flex-wrap w-full items-center h-full'>
          <div className='w-[90%] md:w-[60%] pt-8 md:pt-28 text-white px-4'>
            <h1 className='text-5xl md:text-8xl font-extrabold capitalize'>
              {hero.title}
            </h1>
            <p className='text-md md:text-2xl font-light text-md py-4 pb-8 leading-8 md:leading-10'>
              {hero.description}
            </p>
            <BorderButton label="let's connect" href='contact' />
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
