import "@/styles/globals.css";
import "@/styles/_app.css";

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return(
  <>
  <Component {...pageProps} />
  <button type="button" onClick={() => router.push('/results')}> results page </button>
  </>
  )
};