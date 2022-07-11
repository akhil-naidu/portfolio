// rather than using this, we are using the _app.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';

import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

interface NavLink {
  id: number;
  name: string;
  url: string;
}

const Layout = ({ children }: any) => {
  const linkData: NavLink[] = [
    { id: 1, name: ' Home ', url: '/' },
    { id: 2, name: 'About', url: '/about' },
    { id: 3, name: 'Resume', url: '/resume' },
    { id: 4, name: 'Projects', url: '/projects' },
    { id: 5, name: 'Blogs', url: '/blogs' },
    { id: 6, name: 'Contact', url: '/contact' },
  ];

  const router = useRouter();

  console.log(router.pathname);

  return (
    <div className='container flex flex-col min-h-screen p-4 mx-auto'>
      <nav className='flex gap-8  justify-end'>
        <RoughNotationGroup show={true}>
          {linkData.map(({ id, name, url }: NavLink) => (
            <RoughNotation key={id} type='box' order={id}>
              <Link href={url}>
                <a className='bg-green-200 cursor-pointer p-1'>{name}</a>
              </Link>
            </RoughNotation>
          ))}
        </RoughNotationGroup>
      </nav>

      <main className='flex-grow'>{children}</main>

      <footer>This is footer</footer>
    </div>
  );
};

export default Layout;
