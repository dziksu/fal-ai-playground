import React from 'react';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/modules/layout/header';
import { FormGeneratorProvider } from '@/modules/form-provider/form-generator-provider';
import { ClientQueryProvider } from '@/modules/shared/client-query-provider';
import { ThemeProvider } from '@/modules/shared/theme-provider';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'FAl AI Playground',
  description:
    'A webapp to run locally a FalAI with private FAL_KEY, and support local gallery storage in localstorage',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <ClientQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <FormGeneratorProvider>{children}</FormGeneratorProvider>
          </ThemeProvider>
        </ClientQueryProvider>
      </body>
    </html>
  );
}
