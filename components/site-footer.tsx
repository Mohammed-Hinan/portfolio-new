import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-[#2F4F4F] text-white py-20 px-4">
      <div className="container mx-auto">
        {/* Top Section with CTA */}
        <div className="mb-16">
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-gray-300/20 text-white px-6 py-3 rounded-full hover:bg-gray-300/30 transition-colors"
          >
            Let&apos;s talk <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Internal Links */}
          <div className="space-y-4">
            <Link href="/" className="block hover:text-gray-300">Home</Link>
            <Link href="/work" className="block hover:text-gray-300">Work</Link>
            <Link href="/about" className="block hover:text-gray-300">About</Link>
            <Link href="/contact" className="block hover:text-gray-300">Contact</Link>
          </div>

          {/* External Links */}
          <div className="space-y-4">
            <Link href="/blog" className="block hover:text-gray-300">Blog</Link>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 hover:text-gray-300"
            >
              Book time with me <ArrowUpRight className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com" 
              className="inline-flex items-center gap-2 hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <ArrowUpRight className="w-4 h-4" />
            </a>
            <a 
              href="https://dribbble.com" 
              className="inline-flex items-center gap-2 hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dribbble <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Logo */}
          <div className="text-4xl font-light">
            play
          </div>
        </div>

        {/* Featured Section */}
        <div className="mb-16">
          <p className="text-gray-400 mb-4">Featured in</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
            <Image 
              src="/placeholder.svg?height=30&width=120"
              alt="VoyageBaltimore"
              width={120}
              height={30}
              className="object-contain"
            />
            <Image 
              src="/placeholder.svg?height=30&width=120"
              alt="EMNLP 2024"
              width={120}
              height={30}
              className="object-contain"
            />
            <Image 
              src="/placeholder.svg?height=30&width=120"
              alt="ComputerWorld"
              width={120}
              height={30}
              className="object-contain"
            />
            <Image 
              src="/placeholder.svg?height=30&width=120"
              alt="Adobe Blog"
              width={120}
              height={30}
              className="object-contain"
            />
          </div>
        </div>

        {/* Startup Section */}
        <div className="mb-16">
          <p className="text-gray-400 mb-4">Startup founder backed by</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-70">
            <Image 
              src="/placeholder.svg?height=30&width=100"
              alt="Google"
              width={100}
              height={30}
              className="object-contain"
            />
            <Image 
              src="/placeholder.svg?height=30&width=100"
              alt="Microsoft"
              width={100}
              height={30}
              className="object-contain"
            />
            <Image 
              src="/placeholder.svg?height=30&width=100"
              alt="Y Combinator"
              width={100}
              height={30}
              className="object-contain"
            />
            <Image 
              src="/placeholder.svg?height=30&width=100"
              alt="Atlassian"
              width={100}
              height={30}
              className="object-contain"
            />
            <Image 
              src="/placeholder.svg?height=30&width=100"
              alt="MongoDB"
              width={100}
              height={30}
              className="object-contain"
            />
            <Image 
              src="/placeholder.svg?height=30&width=100"
              alt="NVIDIA"
              width={100}
              height={30}
              className="object-contain"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-gray-400">
          <div className="space-y-2 md:space-y-0">
            <p>Matthew 5:16</p>
            <p>© 2024. All Rights Reserved to Jordyn Harrison. Built with love and boba in Baltimore.</p>
          </div>
          <div className="mt-4 md:mt-0 relative">
            <div className="bg-gray-300/20 px-6 py-3 rounded-full">
              there&apos;s always more.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

