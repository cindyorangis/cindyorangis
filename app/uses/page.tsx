import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
  alternates: {
    canonical: 'https://www.cindyorangis.com/uses',
  },
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="AMD Ryzen 7 5700G Desktop">
            A capable custom desktop that handles everything I throw at it —
            multiple remote sessions, VMs, and a dozen browser tabs of
            documentation open at once. Reliable, fast, and gets the job done
            without complaint.
          </Tool>
          <Tool title="Logitech G435 Headset">
            Lightweight and wireless, which matters when you&apos;re on support
            calls for hours. Clear audio on both ends and comfortable enough to
            forget you&apos;re wearing it.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Cloud & Development">
          <Tool title="Visual Studio Code">
            Lightweight but powerful. Whether I&apos;m editing scripts, writing
            documentation in Markdown, or poking around a config file, VS Code
            is always the first thing I open.
          </Tool>
          <Tool title="GitHub">
            Where I store scripts, automation tools, and anything worth keeping
            versioned. Good habits with source control make future-you very
            grateful.
          </Tool>
          <Tool title="Windows 11">
            My primary OS both at home and in the environments I support.
            Knowing it deeply means fewer surprises when something breaks on a
            user&apos;s machine.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Security & Privacy">
          <Tool title="1Password">
            The only way to have strong, unique passwords everywhere without
            losing your mind. Non-negotiable for anyone who takes security
            seriously.
          </Tool>
          <Tool title="Proton">
            Encrypted email and cloud storage that puts privacy first. I trust
            it with anything sensitive.
          </Tool>
          <Tool title="NordVPN">
            Always on when I&apos;m outside my home network. A simple habit that
            goes a long way.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Games">
          <Tool title="Baldur's Gate 3">
            A deep, story-driven RPG where every choice has consequences. I play
            co-op with friends online — there&apos;s something about
            collaborating through a chaotic D&D-style adventure together that
            never gets old.
          </Tool>
          <Tool title="Warhammer 40k: Dawn of War, Dark Crusade">
            The second expansion to Dawn of War, Dark Crusade introduces a new
            non-linear, risk-style planetary campaign set on the world of
            Kronus. Players choose from multiple factions and compete for
            territory on a strategic world map layered over traditional
            real-time battles. Each faction features a unique stronghold mission
            that must be conquered to eliminate enemies and unlock powerful
            campaign abilities. With no fixed mission order and full planetary
            conquest as the win condition, Dark Crusade adds replayability,
            faction variety, and a deeper layer of strategic planning to the
            Dawn of War experience.
          </Tool>
          <Tool title="Fire Emblem Fates: Conquest">
            A tactical RPG with punishing difficulty — every decision matters.
            The kind of game that teaches you to think three moves ahead.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Books">
          <Tool title="The DevOps Handbook by Gene Kim, Jez Humble, Patrick Debois, John Willis">
            A foundational read for anyone serious about DevOps. It breaks down
            the principles behind high-performing engineering teams — fast
            deployments, continuous delivery, and building a culture where
            development and ops actually work together. Theory backed by
            real-world case studies.
          </Tool>
          <Tool title="The Shadow of Kyoshi by F.C. Yee">
            Continuing Kyoshi&apos;s story, this sequel follows her struggle to
            balance justice and mercy as political tensions rise across the
            Earth Kingdom. Faced with powerful enemies and difficult choices,
            Kyoshi must define what kind of Avatar she will become — intense,
            emotional, and deeply compelling.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
