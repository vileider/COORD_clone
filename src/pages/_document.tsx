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
      <body className="dark: bg-[#202020]">
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
