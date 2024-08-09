'use client';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

const paths = {
  home: '/',
  localGallery: '/local-gallery',
} as const;

export const HeaderNavigation = () => {
  const pathname = usePathname();

  const getActiveClass = (key: keyof typeof paths) => {
    return pathname === paths[key] ? 'underline font-bold' : '';
  };

  return (
    <div className="flex flex-row space-x-4">
      <Link
        className={buttonVariants({ variant: 'link', className: getActiveClass('home') })}
        href={paths.home}
      >
        Generate images
      </Link>
      <Link
        className={buttonVariants({ variant: 'link', className: getActiveClass('localGallery') })}
        href={paths.localGallery}
      >
        Local gallery
      </Link>
    </div>
  );
};
