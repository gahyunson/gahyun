import emailjs from '@emailjs/browser'
import { useState, type FormEvent } from 'react'
import Button from '../ui/Button'
import Card from '../ui/Card'
import SectionTitle from '../ui/SectionTitle'
import type { ResumeData } from '../../types'

interface ContactProps {
  data: ResumeData['personal']
}

const links = [
  {
    key: 'email' as const,
    label: 'Email',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    key: 'github' as const,
    label: 'GitHub',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    key: 'linkedin' as const,
    label: 'LinkedIn',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    key: 'blog' as const,
    label: 'Blog',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
]

export default function Contact({ data }: ContactProps) {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState('')

  const getHref = (key: (typeof links)[number]['key']) => {
    if (key === 'email') return `mailto:${data.email}`
    return data[key]
  }

  const getDisplayText = (key: (typeof links)[number]['key']) => {
    if (key === 'email') return data.email
    return data[key].replace(/^https?:\/\//, '')
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setError('이름, 이메일, 메시지를 모두 입력해주세요.')
      return
    }

    setIsSending(true)
    setError('')

    try {
      emailjs.init({
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        // Do not allow headless browsers
        // blockHeadless: true,
        // blockList: {
        //   // Block the suspended emails
        //   list: ['foo@emailjs.com', 'bar@emailjs.com'],
        //   // The variable contains the email address
        //   watchVariable: 'userEmail',
        // },
        limitRate: {
          // Set the limit rate for the application
          id: 'app',
          // Allow 1 request per 10s
          throttle: 10000,
        },
      });
      const data = {
        serviceID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams: {
          name: formState.name.trim(),
          email: formState.email.trim(),
          message: formState.message.trim(),
        },
      }
      const response = await emailjs.send(
        data.serviceID,
        data.templateID,
        data.templateParams,
      )
      console.log(response)
      setSubmitted(true)
    } catch (error) {
      console.error(error)
      setError('메시지를 보내지 못했습니다. 잠시 후 다시 시도해주세요.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-white py-20 dark:bg-gray-950 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          id="contact-heading"
          title="Contact"
          subtitle="언제든지 연락주세요!"
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Contact links */}
          <div>
            <p className="mb-6 text-base leading-relaxed text-gray-600 dark:text-gray-400">
              새로운 기회, 협업 제안, 또는 그냥 인사라도 환영합니다. 최대한 빠르게 답변드리겠습니다.
            </p>
            <ul className="space-y-4">
              {links.map(({ key, label, icon }) => (
                <li key={key}>
                  <a
                    href={getHref(key)}
                    target={key === 'email' ? undefined : '_blank'}
                    rel={key === 'email' ? undefined : 'noopener noreferrer'}
                    className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-brand-300 hover:shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:hover:border-brand-700"
                    aria-label={`${label}으로 연락하기`}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors group-hover:bg-brand-50 group-hover:text-brand-600 dark:bg-gray-800 dark:text-gray-400 dark:group-hover:bg-brand-900/30 dark:group-hover:text-brand-400">
                      {icon}
                    </span>
                    <div>
                      <p className="text-xs font-medium text-gray-400 dark:text-gray-500">{label}</p>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{getDisplayText(key)}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact form */}
          <Card padding="lg">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center" role="status" aria-live="polite">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl dark:bg-emerald-900/30">
                  ✅
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">메시지 전송 완료!</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  빠른 시일 내에 답변드리겠습니다.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false)
                    setFormState({ name: '', email: '', message: '' })
                  }}
                  className="mt-4 text-sm text-brand-600 hover:underline dark:text-brand-400"
                >
                  다시 보내기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="연락 양식" aria-busy={isSending}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      이름 <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      autoComplete="name"
                      value={formState.name}
                      onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                      placeholder="김길동"
                      className="mt-1.5 block w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500 dark:focus:border-brand-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      이메일 <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={formState.email}
                      onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                      placeholder="you@example.com"
                      className="mt-1.5 block w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500 dark:focus:border-brand-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      메시지 <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                      placeholder="안녕하세요, 즐거운 제안을 드리고 싶습니다!"
                      className="mt-1.5 block w-full resize-none rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500 dark:focus:border-brand-400"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                      {error}
                    </p>
                  )}

                  <Button type="submit" variant="primary" size="md" className="w-full justify-center" disabled={isSending}>
                    {isSending ? '전송 중...' : '메시지 보내기'}
                  </Button>
                </div>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}
