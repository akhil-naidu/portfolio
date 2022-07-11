import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Akhil Naidu</title>
        <meta name='description' content='My Personal Portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>Hello world!</h1>
      <p>This is a paragraph</p>
    </div>
  );
};

export default Home;
