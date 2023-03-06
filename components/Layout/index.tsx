import Head from 'next/head'
import Footer from '../Footer'
import Header from '../Header'
import { Manrope } from 'next/font/google'

const manrope = Manrope({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

export default function Layout({
  children,
  meta,
}: {
  children: any
  meta: any
}) {
  const { title, description, icon } = meta
  return (
    <div className={manrope.className}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='icon' href={icon || '/favicon.ico'} />
      </Head>
      <main className='w-full h-screen bg-slate-900 relative'>
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  )
}
