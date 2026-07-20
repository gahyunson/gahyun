interface BadgeProps {
  label: string
  level?: 'expert' | 'advanced' | 'intermediate' | 'beginner'
  variant?: 'default' | 'tech'
}

const levelConfig = {
  expert:       { label: 'Expert',       bg: 'bg-brand-100 dark:bg-brand-900/40', text: 'text-brand-800 dark:text-brand-200', dot: 'bg-brand-500' },
  advanced:     { label: 'Advanced',     bg: 'bg-emerald-100 dark:bg-emerald-900/40', text: 'text-emerald-800 dark:text-emerald-200', dot: 'bg-emerald-500' },
  intermediate: { label: 'Intermediate', bg: 'bg-amber-100 dark:bg-amber-900/40',  text: 'text-amber-800 dark:text-amber-200', dot: 'bg-amber-500' },
  beginner:     { label: 'Beginner',     bg: 'bg-gray-100 dark:bg-gray-800',  text: 'text-gray-700 dark:text-gray-300', dot: 'bg-gray-400' },
}

export default function Badge({ label, level, variant = 'default' }: BadgeProps) {
  if (variant === 'tech') {
    return (
      <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {label}
      </span>
    )
  }

  const cfg = level ? levelConfig[level] : null

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors ${cfg ? `${cfg.bg} ${cfg.text}` : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'}`}
      title={level ? levelConfig[level].label : undefined}
    >
      {cfg && <span className={`h-1.5 w-1.5 rounded-full ${cfg.dot}`} aria-hidden="true" />}
      {label}
    </span>
  )
}
