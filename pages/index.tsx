import Head from 'next/head';

import type { NextPage } from 'next';

import Home from '@/components/home';

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Akhil Naidu</title>
        <meta name='description' content='My Personal Portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Home />
    </div>
  );
};

export default HomePage;
