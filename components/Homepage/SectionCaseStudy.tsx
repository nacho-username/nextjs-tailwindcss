import { BorderButton } from '../Shared/BorderButton'
import Header from '../Shared/Header'

export default function SectionCaseStudy() {
  return (
    <section>
      <div className="flex flex-wrap bg-deep-purple min-h-500 justify-start p-4 bg-[url('/images/fibre-phoenix-case-study-bird.svg')] bg-no-repeat bg-right">
        <div className="w-1/2 bg-[url('/images/fibre-phoenix-case-study.png')] bg-no-repeat bg-contain bg-center"></div>
        <div className='w-1/2 self-start text-left py-8 pr-36'>
          <Header title='case study' description='Fibre Phoenix' />
          <p className='w-[60%] text-sm font-light leading-8 text-white py-4 mb-8'>
            Discover how the Fibre Phoenix web application helped customers find
            the best deals for fibre internet connections. Learn how our web
            agency team created a user-friendly interface, integrated with ISP's
            systems, and optimized the site for different devices to ensure its
            success.
          </p>
          <BorderButton
            label='View Case Study'
            href='contact'
            classes='text-teal-300 hover:text-slate-900 cursor-pointer'
          />
        </div>
      </div>
    </section>
  )
}
