import "@/styles/globals.css";
import "@/styles/_app.css";

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />
  
};
