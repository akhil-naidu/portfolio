import Head from 'next/head';

import type { NextPage } from 'next';

const BlogPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blog - Akhil Naidu</title>
        <meta name='description' content="Akhil Naidu's Personal Portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      BlogPage
    </div>
  );
};

export default BlogPage;
