import type { Metadata } from 'next';

import Layout from '@/components/Layout';

import '@/styles/globals.css';
import '@/styles/themes.css';

export const metadata: Metadata = {
  title: {
    default: 'Charles Emmanuel Cruz | Portfolio',
    template: 'Charles Emmanuel Cruz | %s',
  },
  description:
    "Charles Emmanuel Cruz is an avid tech enthusiast building websites and applications you'd love to use",
  keywords: [
    'charles emmanuel cruz',
    'charles',
    'emmanuel cruz',
    'web developer portfolio',
    'charles web developer',
    'charles developer',
    'mern stack',
    'charles emmanuel cruz portfolio',
    'vscode-portfolio',
  ],
  openGraph: {
    title: "Charles Emmanuel Cruz's Portfolio",
    description:
      "A full-stack developer building websites that you'd like to use.",
    images: ['https://imgur.com/4zi5KkQ.png'],
    url: 'https://charlescruz.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
