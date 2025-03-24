'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const links = ['about', 'skills', 'services', 'works', 'contact']

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => {
    setIsOpen(false)
    document.body.style.overflow = 'auto'
  }

  const scrollToElement = (elementId: string) => {
    const targetElement = document.getElementById(elementId)
    if (targetElement) {
      const offset = 64
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    event.preventDefault()
    if (isOpen) {
      handleClose()
    }
    const targetElement = document.getElementById(link)
    if (targetElement) {
      scrollToElement(link)
    } else {
      // トップページにリダイレクト
      window.location.href = `/#${link}`
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    // アンマウント時
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  useEffect(() => {
    const hash = window.location.hash.substring(1)
    if (hash) {
      scrollToElement(hash)
      // ハッシュを削除
      window.history.replaceState(null, '', ' ')
    }
  }, [])

  return (
    <header className="from-pink to-blue sticky top-0 left-0 z-10 h-14 w-full bg-white bg-linear-to-r shadow-lg md:h-16">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-3 md:px-6">
        <h1 className="font-caveat text-3xl font-black md:text-5xl">My Portfolio</h1>
        <div
          className={`fixed inset-0 z-10 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'} md:pointer-events-auto md:static`}
        >
          <nav
            className={`from-pink to-blue absolute top-0 right-0 z-10 flex h-full w-full max-w-xs items-center justify-center bg-gradient-to-br shadow-lg transition-transform duration-300 md:static md:max-w-full md:bg-none ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 md:shadow-none`}
          >
            <ul className="flex flex-col items-center text-2xl font-bold capitalize md:flex-row">
              {links.map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link}`}
                    className="font-caveat block p-4 transition-opacity duration-300 hover:opacity-80"
                    onClick={(event) => handleSmoothScroll(event, link)}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <button
          className="relative z-20 flex h-10 w-10 flex-col items-center justify-center gap-2 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`bg-foreground block h-px w-6 duration-300 ${isOpen ? 'w-8 translate-y-2.5 rotate-45' : ''}`}
          />
          <span className={`bg-foreground block h-px w-6 duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span
            className={`bg-foreground block h-px w-6 duration-300 ${isOpen ? 'w-8 translate-x-0 -translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>
    </header>
  )
}
