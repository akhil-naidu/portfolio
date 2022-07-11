import Head from 'next/head';

import type { NextPage } from 'next';

const AboutPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About - Akhil Naidu</title>
        <meta name='description' content="Akhil Naidu's Personal Portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      About
    </div>
  );
};

export default AboutPage;
