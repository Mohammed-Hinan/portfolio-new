export function VideoGrid() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-[#6BA69B] text-2xl mb-12 text-center">
        songs that brighten my day
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="aspect-video bg-gray-100 rounded-lg">
            <iframe
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-gray-600 text-center">
            Fidelity by Regina Spektor - I&apos;ve seen her in concert!
          </p>
        </div>
        <div className="space-y-4">
          <div className="aspect-video bg-gray-100 rounded-lg">
            <iframe
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-gray-600 text-center">
            Lullaby by Sia (beware you will be sleepy)
          </p>
        </div>
      </div>
    </section>
  )
}

