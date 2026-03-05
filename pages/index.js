import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          <b>Get started</b> <h3><a href="https://locked-content.com/?5087f8e">Click Here!</a></h3>
        </p>
      </main>

      <Footer />
    </div>
  )
}
