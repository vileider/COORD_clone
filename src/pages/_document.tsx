import { Html, Head, Main, NextScript } from 'next/document';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {' '}
        <TopBar />{' '}
      </Head>
      <body className="bg-[#D9D9D9] dark:bg-[#0C0C0C]">
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
