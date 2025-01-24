import Link from "next/link"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <p className="text-gray-500 mb-8">A space where joy and ideas flourish</p>
      <h1 className="text-[#6BA69B] text-8xl md:text-9xl font-light tracking-wide mb-16">
        play
      </h1>
      <Link
        href="/blog"
        className="text-gray-500 hover:text-[#6BA69B] transition-colors"
      >
        Read my blog →
      </Link>
    </section>
  )
}

