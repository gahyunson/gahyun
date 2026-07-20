interface SectionTitleProps {
  title: string
  subtitle?: string
  id?: string
}

export default function SectionTitle({ title, subtitle, id }: SectionTitleProps) {
  return (
    <div className="mb-10 sm:mb-12">
      <h2
        id={id}
        className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-3xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{subtitle}</p>
      )}
      <div className="mt-4 h-0.5 w-12 rounded-full bg-brand-500" aria-hidden="true" />
    </div>
  )
}
