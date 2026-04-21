import { type Metadata } from 'next'
import Image from 'next/image'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { StatusBadge, TagList } from '@/components/Status'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoCosmos from '@/images/logos/cosmos.svg'

const projects = [
  {
    name: "Mya's Short Stories",
    description:
      'A self-hosted Ghost blog deployed on AWS EC2, with CloudFront as the CDN, SSL via AWS Certificate Manager, and DNS managed through Namecheap. Infrastructure provisioned with Terraform. Set up entirely from the command line — no managed hosting, no control panel. Features original short stories and an interactive math game.',
    tags: [
      'Ghost CMS',
      'AWS EC2',
      'CloudFront',
      'ACM',
      'Terraform',
      'Ubuntu',
      'Linux',
      'Namecheap',
    ],
    status: 'Live',
    link: { href: 'https://myaorangis.com/', label: 'myaorangis.com' },
    gitHubUrl: {
      href: 'https://github.com/cindyorangis/myaorangis',
      label: 'github.com',
    },
    logo: logoHelioStream,
  },
  {
    name: 'Snow Plow Services',
    description:
      'A production-architected web application for a snow removal business — built as a Turborepo monorepo with four separate Next.js apps (marketing site, client portal, admin dashboard, crew portal), each deployed to its own subdomain on Vercel. CI/CD via GitHub Actions with Vercel auto-deploy on merge. Currently in active development.',
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Turborepo',
      'GitHub Actions',
      'Vercel',
    ],
    status: 'In Development',
    link: {
      href: 'https://snowplow.services',
      label: 'snowplow.services',
    },
    gitHubUrl: {
      href: 'https://github.com/cindyorangis/snowplow',
      label: 'github.com',
    },
    logo: logoPlanetaria,
  },
  {
    name: 'Personal Resume Website',
    description:
      'My personal portfolio, built from scratch with a focus on production-grade practices — TypeScript strict mode, ESLint, Prettier, and Husky pre-commit hooks enforcing code quality before every push. Deployed on Vercel with automatic preview deployments per branch.',
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'ESLint',
      'Prettier',
      'Husky',
      'Vercel',
    ],
    status: 'Live',
    link: {
      href: 'https://www.cindyorangis.com/',
      label: 'cindyorangis.com',
    },
    gitHubUrl: {
      href: 'https://github.com/cindyorangis/cindyorangis',
      label: 'github.com',
    },
    logo: logoAnimaginary,
  },
  {
    name: 'ServiceOntario Manual Search (RAG Assistant)',
    description:
      'Developed a self-hosted Retrieval-Augmented Generation (RAG) tool designed to eliminate manual PDF searching for ServiceOntario policy manuals. The system allows users to query dense administrative documents using natural language, providing accurate answers backed by specific page citations. By using local embeddings and a vector database, the tool ensures high precision and prevents LLM hallucinations.',
    tags: [
      'Next.js',
      'Llama 3.3 (Groq)',
      'Python',
      'FastAPI',
      'Supabase (PostgreSQL + pgvector)',
      'Railway',
      'Vercel',
    ],
    status: 'In Development',
    link: {
      href: 'https://so-rag.vercel.app',
      label: 'so-rag.vercel.app',
    },
    gitHubUrl: {
      href: 'https://github.com/cindyorangis/so-rag',
      label: 'github.com/cindyorangis/so-rag',
    },
    logo: logoCosmos,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function GitHubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I&apos;ve made trying to put my dent in the universe.',
  alternates: {
    canonical: 'https://www.cindyorangis.com/projects',
  },
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I've built and shipped."
      intro="A selection of projects I'm proud of — from production work to personal experiments. Most are open source, so feel free to explore the code."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="flex w-full items-start justify-between">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <StatusBadge status={project.status} />
            </div>

            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              {project.name}
            </h2>
            <Card.Description>{project.description}</Card.Description>

            <TagList tags={project.tags} />

            <div className="relative z-10 mt-6 flex gap-4">
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm font-medium text-zinc-400 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-400"
              >
                <LinkIcon className="h-5 w-5 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </a>

              <a
                href={project.gitHubUrl.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm font-medium text-zinc-400 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-400"
              >
                <GitHubIcon className="h-5 w-5 flex-none" />
                <span className="ml-2">{project.gitHubUrl.label}</span>
              </a>
            </div>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
