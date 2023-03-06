import Head from 'next/head'
import Footer from '../Footer'
import Header from '../Header'

export default function Layout({
  children,
  meta,
}: {
  children: any
  meta: any
}) {
  const { title, description, icon } = meta
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='icon' href={icon || '/favicon.ico'} />
      </Head>
      <main>
        <Header />
        <main>{children}</main>
        <Footer />
      </main>
    </>
  )
}
