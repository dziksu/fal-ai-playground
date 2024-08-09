import { redirect } from 'next/navigation';
import Playground from '@/modules/playground/playground';
import * as React from 'react';

export default function Home() {
  if (!process.env.FAL_KEY) {
    redirect('/missing-key');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2 py-4 md:px-8 md:py-16">
      <Playground />
    </main>
  );
}
