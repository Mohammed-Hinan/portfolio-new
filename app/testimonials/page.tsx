import { SiteHeader } from "@/components/site-header"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-[#6BA69B] text-4xl md:text-5xl font-light mb-8">Testimonials</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">"Jrdyn is an exceptional designer. Their work consistently exceeds expectations!"</p>
            <p className="font-bold">- Jane Doe, CEO</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">"Working with Jrdyn was a pleasure. They brought our vision to life beautifully."</p>
            <p className="font-bold">- John Smith, Marketing Director</p>
          </div>
        </div>
      </main>
    </div>
  )
}

