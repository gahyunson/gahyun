interface FooterProps {
  name: string
  github: string
}

export default function Footer({ name, github }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      className="border-t border-gray-200 bg-white py-8 dark:border-gray-800 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {year}{' '}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-700 hover:text-brand-600 dark:text-gray-300 dark:hover:text-brand-400"
          >
            {name}
          </a>
          . Built with React &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
