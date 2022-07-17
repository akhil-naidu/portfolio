import Head from 'next/head';

import type { NextPage } from 'next';

import Home from '@/components/home';

const HomePage: NextPage = () => {
  return (
    <div className='h-full'>
      <Head>
        <title>Akhil Naidu</title>
        <meta name='description' content="Akhil Naidu's Personal Portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Home />
    </div>
  );
};

export default HomePage;
