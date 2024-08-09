import Link from 'next/link';
import Image from 'next/image';
import { HeaderGithubIcon } from '@/modules/layout/header-github-icon';
import { HeaderNavigation } from '@/modules/layout/header-navigation';
import { HeaderThemeModeToggle } from '@/modules/layout/header-theme-mode-toggle';

export const Header = () => {
  return (
    <header className="border-b bg-background">
      <div className="container flex items-center justify-between px-4 py-2 md:px-6">
        <Link href="/" className="flex items-center justify-center space-x-4" prefetch={false}>
          <Image className="dark:hidden" src={'/fal-icon.svg'} alt="logo" width="89" height="32" />
          <Image
            className="hidden dark:block"
            src={'/fal-icon-light.svg'}
            alt="logo"
            width="89"
            height="32"
          />
          <h2 className="text-md">Playground</h2>
        </Link>

        <div>
          <HeaderNavigation />
        </div>

        <div className="flex items-center space-x-4">
          <HeaderThemeModeToggle />
          <HeaderGithubIcon />
        </div>
      </div>
    </header>
  );
};
