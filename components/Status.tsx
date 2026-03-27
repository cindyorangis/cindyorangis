type StatusType = 'Live' | 'In Development' | 'Archived'

const statusStyles: Record<StatusType, string> = {
  Live: 'bg-teal-400/10 text-teal-400 ring-1 ring-teal-400/30',
  'In Development': 'bg-amber-400/10 text-amber-400 ring-1 ring-amber-400/30',
  Archived: 'bg-zinc-400/10 text-zinc-400 ring-1 ring-zinc-400/30',
}

const statusDotStyles: Record<StatusType, string> = {
  Live: 'bg-teal-400',
  'In Development': 'bg-amber-400',
  Archived: 'bg-zinc-400',
}

export function StatusBadge({ status }: { status: string }) {
  const s = status as StatusType
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[s] ?? statusStyles['Archived']}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${statusDotStyles[s] ?? statusDotStyles['Archived']} ${s === 'Live' ? 'animate-pulse' : ''}`}
      />
      {status}
    </span>
  )
}

export function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="relative z-10 mt-4 flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center rounded-md bg-zinc-800/60 px-2 py-0.5 text-xs font-medium text-zinc-400 ring-1 ring-zinc-700/50 transition-colors hover:text-zinc-200 hover:ring-zinc-500/50"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
