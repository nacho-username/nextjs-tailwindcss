import Layout from '../components/Layout'

export default function ContactPage() {
  return (
    <main
      style={{
        backgroundImage: `url(http://localhost:3000/images/keyboard.jpg)`,
      }}
      className='bg-no-repeat bg-[length:600px_400px] md:bg-cover md:bg-center w-full h-screen'
    >
      <div className='flex justify-center items-center h-2/3'>
        <h1 className='container mx-auto text-6xl text-white text-center'>
          Contact Us
        </h1>
      </div>
      <section>
        <div className='container mx-auto flex flew-wrap w-full justify-between gap-24'>
          <div className='w-1/2 bg-zinc-900 p-8 rounded-xl'>
            <h2 className='text-4xl text-white font-bold'>Contact form</h2>
            <p className='text-md font-extralight text-white w-[80%] my-2'>
              We will never use your contact information for marketing purposes
            </p>
          </div>
          <div className='w-1/2'>
            <h2 className='text-4xl mt-8 text-white font-bold'>
              Have a project in mind?
            </h2>
            <p className='text-2xl font-extralight text-white w-[80%] my-2'>
              We love collaborating on new and innovative ideas. Get in touch
              with us and let’s build something great!
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
