import { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

const paddings = {
  sm: 'p-4',
  md: 'p-5 sm:p-6',
  lg: 'p-6 sm:p-8',
}

export default function Card({ children, hover = false, padding = 'md', className = '', ...rest }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 ${paddings[padding]} ${hover ? 'transition-shadow duration-200 hover:shadow-md dark:hover:shadow-gray-900' : ''} ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}
