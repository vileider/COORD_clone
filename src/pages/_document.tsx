import { Html, Head, Main, NextScript } from 'next/document';
import TopBar from '@/components/TopBar';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {' '}
        <TopBar />{' '}
      </Head>
      <body className="dark:bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
