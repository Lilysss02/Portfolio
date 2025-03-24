'use client'

import Link from 'next/link'
import { useEffect } from 'react'

const links = ['about', 'skills', 'services', 'works', 'contact']

export const Header = () => {
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
    const targetElement = document.getElementById(link)
    if (targetElement) {
      scrollToElement(link)
    } else {
      // トップページにリダイレクト
      window.location.href = `/#${link}`
    }
  }

  useEffect(() => {
    const hash = window.location.hash.substring(1)
    if (hash) {
      scrollToElement(hash)
      // ハッシュを削除
      window.history.replaceState(null, '', ' ')
    }
  }, [])
  
  return (
    <header className="from-pink to-blue sticky top-0 left-0 z-10 h-16 w-full bg-white bg-linear-to-r shadow-lg">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-6">
        <h1 className="font-caveat text-5xl font-black">My Portfolio</h1>
        <nav className="">
          <ul className="flex items-center text-2xl font-bold capitalize">
            {links.map((link) => (
              <li key={link}>
                <Link
                  href={`#${link}`}
                  className="font-caveat p-4 transition-opacity duration-300 hover:opacity-80"
                  onClick={(event) => handleSmoothScroll(event, link)}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
