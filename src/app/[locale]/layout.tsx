import '@/styles/global.css';

import { NextUIProvider } from '@nextui-org/system';
import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useMessages } from 'next-intl';

import HeaderAuth from '@/components/Shared/HeaderAuth';
import { cn } from '@/libs/cn';
import { AppConfig } from '@/utils/AppConfig';

// font settings
const legend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!AppConfig.locales.includes(props.params.locale)) notFound();

  // Using internationalization in Client Components
  const messages = useMessages();

  return (
    <html lang={props.params.locale} className={cn('dark', legend.className)}>
      <body className="size-full bg-black bg-cover bg-center bg-no-repeat">
        <NextUIProvider>
          <HeaderAuth />
          {/*  <Nav /> */}
          <NextIntlClientProvider
            locale={props.params.locale}
            messages={messages}
          >
            {props.children}
          </NextIntlClientProvider>
        </NextUIProvider>
        {/*  <div
          aria-hidden="true"
          className="fixed right-[-60%] top-[-80%] z-0 rotate-12 border-red-50 2xl:right-[-45%] 2xl:top-[-60%] dark:opacity-70"
        >
          <Image
            src="/background-2.png"
            alt="docs right background"
            fill
            className="transition-transform-opacity rounded-large relative z-10 opacity-0 shadow-none shadow-black/5 duration-300 data-[loaded=true]:opacity-100 motion-reduce:transition-none"
            data-loaded="true"
          />
        </div> */}
        <div />
      </body>
    </html>
  );
}

// Enable edge runtime but you are required to disable the `migrate` function in `src/libs/DB.ts`
// Unfortunately, this also means it will also disable the automatic migration of the database
// And, you will have to manually migrate it with `drizzle-kit push`
// export const runtime = 'edge';
