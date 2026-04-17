import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Cindy Orangis',
    default: 'Cindy Orangis | Cloud Engineer - Toronto',
  },
  description:
    'Toronto-based Cloud Engineer with 5+ years of experience on AWS and Azure. Building production infrastructure with Terraform, Docker, and Next.js.',
  metadataBase: new URL('https://cindyorangis.com'),
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
  openGraph: {
    title: 'Cindy Orangis | Cloud Engineer',
    description:
      'Toronto-based Cloud Engineer with 5+ years of experience on AWS and Azure. Building production infrastructure with Terraform, Docker, and Next.js.',
    url: 'https://www.cindyorangis.com',
    siteName: 'Cindy Orangis',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Cindy Orangis',
              jobTitle: 'Cloud Engineer',
              url: 'https://www.cindyorangis.com',
              address: { '@type': 'PostalAddress', addressLocality: 'Toronto' },
              sameAs: [
                'https://github.com/cindyorangis',
                'https://www.linkedin.com/in/cindyorangis',
              ],
            }),
          }}
        />
      </head>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
