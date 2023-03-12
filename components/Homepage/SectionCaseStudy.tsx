import Image from 'next/image'
import { BorderButton } from '../Shared/BorderButton'
import Header from '../Shared/Header'

export default function SectionCaseStudy() {
  return (
    <section id='case-study'>
      <div className="flex flex-wrap bg-deep-purple min-h-900 py-12 md:py-24 justify-center items-center p-4 bg-[url('/images/fibre-phoenix-case-study-bird.svg')] bg-no-repeat bg-right">
        <div className='md:w-5/12'>
          <Image
            src={'/images/fibre-phoenix-case-study.png'}
            width={600}
            height={600}
            alt='Fibre Phoenix Case Study'
            className=''
          />
        </div>
        <div className='md:w-4/12 self-start text-left py-8'>
          <Header title='case study' description='Fibre Phoenix' />
          <p className='text-md font-light leading-8 text-white py-4 mb-8'>
            Discover how the Fibre Phoenix web application helped customers find
            the best deals for fibre internet connections. Learn how our web
            agency team created a user-friendly interface, integrated with ISP's
            systems, and optimized the site for different devices to ensure its
            success.
          </p>
          <BorderButton
            label='View Case Study'
            href='contact'
            classes='py-3 text-teal-300 hover:text-slate-900 cursor-pointer'
          />
        </div>
      </div>
    </section>
  )
}
