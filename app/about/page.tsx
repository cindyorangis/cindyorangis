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
  description: 'Cindy Orangis | Cloud Support Engineer',
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
            I&apos;m Cindy Orangis. I live in Toronto, where I build for the
            cloud and the web.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;ve been drawn to computers for as long as I can remember.
              Growing up, there was nothing more satisfying than figuring out
              how something worked — taking it apart, understanding it, and
              putting it back together better than before. That curiosity led me
              to study Computer Programming and Analysis at Seneca Polytechnic,
              where I built the foundation that shapes everything I do today.
            </p>
            <p>
              My career has grown across two parallel tracks that turned out to
              be more connected than they first appeared. On one side, I went
              deep on cloud infrastructure — earning AWS Cloud Practitioner, AWS
              Developer Associate, and Azure Fundamentals certifications, and
              spending years at ExamPro supporting cloud environments,
              diagnosing complex authentication issues, and managing Azure AD
              and Microsoft 365 at scale. On the other side, I&apos;ve been
              building on the web — contributing to the ExamPro learning
              platform&apos;s front end, delivering client projects in React,
              Next.js, HTML, CSS, and WordPress, and building in public on
              GitHub.
            </p>
            <p>
              What I&apos;ve come to realize is that the best engineers
              understand both sides. Knowing how infrastructure works makes you
              a better developer. Knowing how users experience software makes
              you a better cloud engineer. I&apos;m building toward that
              intersection — and I&apos;m just getting started.
            </p>
            <p>
              Today I&apos;m focused on deepening my cloud development skills,
              currently working through AZ-204 (Azure Developer Associate) and
              building projects that live at the edge of front end and cloud
              infrastructure.
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
