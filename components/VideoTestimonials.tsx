export default function VideoTestimonials() {
    const videos = [
        {
            id: "video-1",
            title: "Downpayment Requirements in Canada",
            embedUrl: "https://www.youtube.com/embed/_seVFGbcTuE",
            type: "agent-talk"
        },
        {
            id: "video-2",
            title: "$4,000 Renovation = $40,000 Difference",
            embedUrl: "https://www.youtube.com/embed/m3bze5M_WUA",
            type: "success-story"
        },
        {
            id: "video-3",
            title: "New Member Orientation",
            embedUrl: "https://www.youtube.com/embed/PCm3oVtP1sQ",
            type: "team"
        },
        {
            id: "video-4",
            title: "Agent Introduction: Arpit Sirohi",
            embedUrl: "https://www.youtube.com/embed/bhvlL7Y6ioI",
            type: "agent-intro"
        },
        {
            id: "video-5",
            title: "February Sales Meeting Highlights",
            embedUrl: "https://www.youtube.com/embed/3Y5-o6Bndqw",
            type: "team"
        },
    ]

    return (
        <section className="py-20 bg-muted text-foreground">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase opacity-90 block">
                        Watch Our Videos
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                        What Other Sellers Are Saying?
                    </h2>
                    <div className="w-20 h-[1px] bg-primary mx-auto mt-6 opacity-60" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                    {videos.map((video, idx) => {
                        let lgClass = "lg:col-span-2"; // Default for first row
                        if (idx === 3) lgClass = "lg:col-start-2 lg:col-span-2";
                        if (idx === 4) lgClass = "lg:col-start-4 lg:col-span-2";

                        return (
                            <div
                                key={video.id}
                                className={`group flex flex-col gap-4 ${lgClass}`}
                            >
                                {/* Video Container - Aspect Ratio 16/9 */}
                                <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border shadow-lg group-hover:border-primary/30 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(197,160,89,0.1)] bg-black">
                                    <iframe
                                        src={video.embedUrl}
                                        title={video.title}
                                        className="absolute inset-0 w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-serif text-foreground group-hover:text-primary transition-colors duration-300 leading-snug text-center">
                                    {video.title}
                                </h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
