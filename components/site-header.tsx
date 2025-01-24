import Link from "next/link"
import { Search } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="w-full py-6 px-4 md:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-[#6BA69B] text-2xl font-light">
          jrdyn harrison
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/work" className="text-gray-600 hover:text-[#6BA69B]">
            Work
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-[#6BA69B]">
            About
          </Link>
          <Link href="/testimonials" className="text-gray-600 hover:text-[#6BA69B]">
            Testimonials
          </Link>
          <Link href="/resume" className="text-gray-600 hover:text-[#6BA69B]">
            Resume
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-[#6BA69B]">
            Contact
          </Link>
        </nav>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Search className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </header>
  )
}

