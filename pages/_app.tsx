import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Reddit Clone</title>
    </Head>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
