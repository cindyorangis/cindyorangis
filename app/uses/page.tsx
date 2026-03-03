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
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="AMD Ryzen 7 5700G Desktop, 28GB RAM">
A capable custom desktop that handles everything I throw at it — multiple remote sessions, VMs, and a dozen browser tabs of documentation open at once. Reliable, fast, and gets the job done without complaint.
          </Tool>
          <Tool title="Logitech G435 Headset">
Lightweight and wireless, which matters when you're on support calls for hours. Clear audio on both ends and comfortable enough to forget you're wearing it.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Cloud & Development">
          <Tool title="Visual Studio Code">
Lightweight but powerful. Whether I'm editing scripts, writing documentation in Markdown, or poking around a config file, VS Code is always the first thing I open.
          </Tool>
          <Tool title="GitHub">
Where I store scripts, automation tools, and anything worth keeping versioned. Good habits with source control make future-you very grateful.
          </Tool>
          <Tool title="Windows 11">
My primary OS both at home and in the environments I support. Knowing it deeply means fewer surprises when something breaks on a user's machine.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Security & Privacy">
          <Tool title="1Password">
The only way to have strong, unique passwords everywhere without losing your mind. Non-negotiable for anyone who takes security seriously.
          </Tool>
          <Tool title="Proton">
Encrypted email and cloud storage that puts privacy first. I trust it with anything sensitive.
          </Tool>
          <Tool title="NordVPN">
Always on when I'm outside my home network. A simple habit that goes a long way.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
