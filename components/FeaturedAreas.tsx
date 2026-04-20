import Image from "next/image"

const areas = [
  { name: "Downtown", image: "/burnaby.jpg" },
  { name: "Midtown", image: "/vancover.jpg" },
  { name: "Eastside", image: "/coquitlum.png" },
  { name: "Westside", image: "/port.jpg" },
  { name: "North District", image: "/west_vancover.jpg" },
  { name: "South End", image: "/north_vancover.jpg" },
]

export default function FeaturedAreas() {
  return (
    <section id="areas" className="py-24 bg-background text-foreground">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Featured Areas
          </h2>
          <p className="text-muted-foreground text-lg font-medium">Explore the diverse neighbourhoods and communities we serve.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, idx) => (
            <div
              key={idx}
              className="group relative h-[320px] md:h-[400px] rounded-xl overflow-hidden cursor-pointer shadow-sm border border-border"
            >
              {/* Background Image */}
              <Image
                src={area.image}
                alt={area.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Label */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                <span className="text-2xl font-serif font-bold text-white transition-transform duration-300 group-hover:-translate-y-1">
                  {area.name}
                </span>
                <span className="text-white/80 font-medium text-sm mt-1 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  View Properties &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
