import { SiteHeader } from "@/components/site-header"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-[#6BA69B] text-4xl md:text-5xl font-light mb-8">Resume</h1>
        <div className="max-w-2xl mx-auto">
          <section className="mb-8">
            <h2 className="text-2xl mb-4">Experience</h2>
            <div className="mb-4">
              <h3 className="font-bold">Senior Designer at XYZ Company</h3>
              <p className="text-gray-600">2018 - Present</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Led design team for major client projects</li>
                <li>Implemented new design system, improving efficiency by 30%</li>
              </ul>
            </div>
          </section>
          <section>
            <h2 className="text-2xl mb-4">Education</h2>
            <div>
              <h3 className="font-bold">Bachelor of Fine Arts in Graphic Design</h3>
              <p className="text-gray-600">University of Design, 2014 - 2018</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

