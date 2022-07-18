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
    { id: 1, page: ' Home ', url: '/', color: 'text-sky-300' },
    { id: 2, page: 'About', url: '/about', color: 'text-indigo-300' },
    { id: 3, page: 'Resume', url: '/resume', color: 'text-cyan-300' },
    { id: 4, page: 'Projects', url: '/projects', color: 'text-purple-300' },
    { id: 5, page: 'Blog', url: '/blog', color: 'text-rose-300' },
    { id: 6, page: 'Contact', url: '/contact', color: 'text-teal-300' },
  ];

  const router = useRouter();
  const currentPageInfo = linkData.find((link: NavLink) => link.url === router.pathname);

  return (
    <div className='bg-gray-900 text-gray-100'>
      <div className='container flex flex-col min-h-screen p-4 mx-auto relative'>
        <nav className='flex gap-8 justify-end'>
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

        <footer className='text-center '>
          <span className='text-transparent bg-clip-text bg-gradient-to-r  from-sky-400 via-rose-400 to-lime-400'>{`I'm passionate about what I do `}</span>

          <span className={currentPageInfo?.color}>@Akhil-Naidu</span>
        </footer>
      </div>
    </div>
  );
}

export default MyApp;
