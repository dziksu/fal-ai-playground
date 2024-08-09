import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

export const HeaderGithubIcon = async () => {
  return (
    <Link
      className="ml-4"
      href="https://github.com/dziksu/fal-ai-playground"
      target="_blank"
      referrerPolicy="no-referrer"
    >
      <Avatar className="h-7 w-7">
        <AvatarImage src="/github.svg" className="dark:hidden" alt="@dziksu" />
        <AvatarImage src="/github-light.svg" alt="@dziksu" className="hidden dark:block" />
        <AvatarFallback className="bg-primary text-primary-foreground" />
      </Avatar>
    </Link>
  );
};
