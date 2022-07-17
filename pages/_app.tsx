import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

import '../styles/globals.css';

interface NavLink {
  id: number;
  page: string;
  url: string;
  color: string;
}

function MyApp({ Component, pageProps }: AppProps) {
  const linkData: NavLink[] = [
    { id: 1, page: ' Home ', url: '/', color: 'text-sky-600' },
    { id: 2, page: 'About', url: '/about', color: 'text-indigo-600' },
    { id: 3, page: 'Resume', url: '/resume', color: 'text-cyan-600' },
    { id: 4, page: 'Projects', url: '/projects', color: 'text-purple-600' },
    { id: 5, page: 'Blog', url: '/blog', color: 'text-rose-600' },
    { id: 6, page: 'Contact', url: '/contact', color: 'text-teal-600' },
  ];

  const router = useRouter();
  const currentPageInfo = linkData.find((link: NavLink) => link.url === router.pathname);

  return (
    <div className='container flex flex-col min-h-screen p-4 mx-auto'>
      <nav className='flex gap-8  justify-end'>
        <RoughNotationGroup show={true}>
          {linkData.map(({ id, page, url, color }: NavLink) => (
            <RoughNotation
              key={id}
              type='box'
              order={id}
              color={router.pathname === url ? '#fca5a5' : '#6b7280'}
            >
              <Link href={url}>
                <a className={router.pathname === url ? color : ''}>{page}</a>
              </Link>
            </RoughNotation>
          ))}
        </RoughNotationGroup>
      </nav>

      <main className='flex-grow h-96'>
        <Component {...pageProps} />
      </main>

      <footer className='text-center'>
        {`I'm passionate about what I do `}
        <span className={currentPageInfo?.color}>@Akhil-Naidu</span>
      </footer>
    </div>
  );
}

export default MyApp;
