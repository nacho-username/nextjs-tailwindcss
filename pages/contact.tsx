import Layout from '../components/Layout'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import axios from 'axios'
import Image from 'next/image'

type FormData = {
  name: string
  phone: string
  email: string
  message: string
  errorMessage: string
}

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onBlur',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const handleError = (error: object) => {}

  const contactFormOptions = {
    name: { required: 'Please enter a valid name' },
    phone: { required: 'Please enter a valid phone number' },
    email: {
      required: 'Please enter an email',
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Please enter a valid email',
      },
    },
  }

  async function onSubmitForm(formData: FormData) {
    setIsSubmitting(true)

    try {
      const res = await axios.post('/api/send-contact-email', formData)
      console.log(res)
      setSuccessMessage(res.data.message)

      reset()
    } catch (error) {}
  }
  return (
    <Layout
      meta={{
        title: 'Contact us',
        description:
          'Have a project in mind? We love collaborating on new project ideas!',
      }}
    >
      <main className='z-10'>
        <Image
          className='fixed top-0 w-full -z-10'
          src='/images/keyboard.jpg'
          alt='keyboard'
          width={600}
          height={400}
        />

        <div className='flex justify-center items-center mt-8 md:mt-36 mb-2'>
          <h1 className='container mx-auto text-4xl md:text-6xl font-bold text-white text-center'>
            Contact Us
          </h1>
        </div>
        <section className='bg-dark-grey pt-12 pb-8 md:pb-32 mt-12 md:mt-36'>
          <div className='container mx-auto flex flex-wrap w-full justify-between md:gap-24 px-8 md:px-0'>
            <div className='md:w-[45%] bg-zinc-900 p-8 rounded-xl'>
              <h2 className='text-xl md:text-4xl text-white font-bold text-center md:text-left'>
                Get in touch
              </h2>
              <p className='text-xs md:text-md font-extralight text-white w-full md:w-[80%] my-2 text-center md:text-left'>
                We will never use your contact information for marketing
                purposes
              </p>
              <form onSubmit={handleSubmit(onSubmitForm, handleError)}>
                <div className='my-4'>
                  <label className=' text-zinc-300 text-xs' htmlFor='name'>
                    Fullname
                  </label>
                  <input
                    id='name'
                    {...register('name', contactFormOptions.name)}
                    type='text'
                    className='block w-full px-4 py-2 mt-2 text-white border bg-zinc-900 border-zinc-600 rounded-md focus:ring-teal-300 focus:border-teal-300 focus:outline-none focus:ring'
                  />
                  {errors?.name && (
                    <p className='text-xs italic text-red-400'>
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className='my-4'>
                  <label className=' text-zinc-300 text-xs' htmlFor='phone'>
                    Phone
                  </label>
                  <input
                    id='phone'
                    {...register('phone', contactFormOptions.phone)}
                    type='text'
                    className='block w-full px-4 py-2 mt-2 text-white border bg-zinc-900 border-zinc-600 rounded-md focus:ring-teal-300 focus:border-teal-300 focus:outline-none focus:ring'
                  />
                  {errors?.phone && (
                    <p className='text-xs italic text-red-400'>
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div className='my-4'>
                  <label className=' text-zinc-300 text-xs' htmlFor='email'>
                    Email
                  </label>
                  <input
                    id='email'
                    {...register('email', contactFormOptions.email)}
                    type='text'
                    className='block w-full px-4 py-2 mt-2 text-white border bg-zinc-900 border-zinc-600 rounded-md focus:ring-teal-300 focus:border-teal-300 focus:outline-none focus:ring'
                  />
                  {errors?.email && (
                    <p className='text-xs italic text-red-400'>
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className='my-4'>
                  <label
                    htmlFor='message'
                    className='text-zinc-300 text-xs pb-2'
                  >
                    Your message
                  </label>
                  <textarea
                    id='message'
                    {...register('message')}
                    rows={4}
                    className='block p-2.5 w-full text-sm text-white border bg-zinc-900 border-zinc-600 rounded-md focus:ring-teal-300 focus:border-teal-300 focus:outline-none focus:ring'
                    placeholder='How we can help...'
                  />
                  {errors?.message && (
                    <p className='text-xs italic text-red-400'>
                      {errors.message.message}
                    </p>
                  )}
                </div>
                {successMessage && (
                  <p className='text-teal-300 font-light italic mt-2 mb-4'>
                    {successMessage}
                  </p>
                )}
                <div className='w-full text-center md:text-left'>
                  <button
                    type='submit'
                    className='text-dark-grey hover:text-white bg-teal-300 hover:bg-dark-grey font-medium rounded-lg text-sm px-5 py-2.5 text-center '
                    disabled={isSubmitting}
                  >
                    Submit your request
                  </button>
                </div>
              </form>
            </div>
            <div className='md:w-[45%]'>
              <h2 className='text-xl md:text-4xl mt-8 md:mt-0 text-center md:text-left text-white font-bold'>
                Have a project in mind?
              </h2>
              <p className='text-md md:text-2xl font-extralight text-center md:text-left text-white w-full md:w-[80%] my-4 md:my-8 leading-10'>
                We love collaborating on new and innovative ideas. Get in touch
                with us and let’s build something great!
              </p>
              <div className='mt-4 md:mt-10 w-full'>
                <div className='flex justify-center md:justify-start items-center my-6'>
                  <Image
                    src='/images/email-icon.svg'
                    width={36}
                    height={36}
                    alt='Email Icon'
                    className='inline-block'
                  />
                  <a
                    className='text-md md:text-2xl text-teal-300 font-medium ml-2 cursor-pointer hover:underline'
                    href='mailto:hello@waterfalldigital.co.za'
                  >
                    hello@waterfalldigital.co.za
                  </a>
                </div>
                <div className='flex justify-center md:justify-start items-center my-6'>
                  <Image
                    src='/images/smartphone-icon.svg'
                    width={36}
                    height={36}
                    alt='Smartphone Icon'
                    className='inline-block'
                  />
                  <a
                    className='text-md md:text-2xl text-teal-300 font-medium ml-2 cursor-pointer hover:underline'
                    href='tel:+27632030752'
                  >
                    +27(0) 63 203 0752
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
