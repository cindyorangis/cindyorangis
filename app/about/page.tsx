import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/futc-rkwS8sDYlYk-unsplash.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description: 'Cindy Orangis | Cloud Engineer',
  alternates: {
    canonical: 'https://www.cindyorangis.com/about',
  },
}

export default function About() {
  const photo = {
    src: portraitImage,
    alt: 'Photo by FUTC on Unsplash',
  }

  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={photo.src}
              alt={photo.alt}
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Cindy Orangis. I live in Toronto, where I build things for
            the web and the infrastructure that runs beneath it.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              It started with video games. Growing up, I was the kid who wanted
              to know how the game worked as much as I wanted to play it — what
              was running under the hood, how the pieces fit together, why it
              felt the way it did. That curiosity eventually pointed me toward
              computers, and I never really looked back. I studied Computer
              Programming and Analysis at Seneca Polytechnic, where that
              tinkering instinct found a proper foundation.
            </p>
            <p>
              From there I went deep on cloud — earning AWS and Azure
              credentials, and spending years in fast-moving support
              environments where I touched everything from authentication
              pipelines to connectivity failures. It gave me a strong intuition
              for infrastructure: how systems talk to each other, where they
              break, and how to build them so they don&apos;t.
            </p>
            <p>
              Now I&apos;m growing in a different direction. I&apos;m currently
              working toward my Terraform Associate 004, building out my skills
              in infrastructure as code alongside front end development and full
              stack projects. I&apos;m drawn to roles where the work lives
              across the stack — where you might be writing a React component in
              the morning and provisioning cloud resources in the afternoon.
              That kind of breadth feels right to me.
            </p>
            <p>
              I believe the best engineers understand both what users see and
              what keeps it running. I&apos;m building toward being one of them.
            </p>
            <p>
              Open to cloud engineer roles in Toronto — let&apos;s get in touch.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/cindyorangis"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/cindyorangis"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:cindyorangis@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              cindyorangis@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
