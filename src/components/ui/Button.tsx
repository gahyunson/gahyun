import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type BaseProps = {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: ReactNode
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button'; href?: never }
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string }

type Props = ButtonProps | AnchorProps

const variants = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700 focus-visible:ring-brand-500 dark:bg-brand-500 dark:hover:bg-brand-600',
  outline: 'border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 focus-visible:ring-gray-400 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800',
  ghost:   'bg-transparent text-gray-600 hover:bg-gray-100 focus-visible:ring-gray-400 dark:text-gray-400 dark:hover:bg-gray-800',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-4 py-2 text-sm gap-2',
  lg: 'px-6 py-3 text-base gap-2.5',
}

const base =
  'inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

export default function Button({ variant = 'primary', size = 'md', icon, children, as, ...rest }: Props) {
  const className = `${base} ${variants[variant]} ${sizes[size]}`

  if (as === 'a') {
    const { href, ...anchorRest } = rest as AnchorProps
    return (
      <a href={href} className={className} {...anchorRest}>
        {icon && <span aria-hidden="true">{icon}</span>}
        {children}
      </a>
    )
  }

  return (
    <button className={className} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {icon && <span aria-hidden="true">{icon}</span>}
      {children}
    </button>
  )
}
