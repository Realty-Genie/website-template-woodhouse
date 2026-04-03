import { FaChartLine, FaBullseye, FaHeart, FaHandshake, FaShieldAlt } from "react-icons/fa"

const achievements = [
    {
        icon: <FaChartLine className="w-8 h-8 text-primary" />,
        title: "Market Intelligence",
        subtitle: "Real-Time Data & Analytics"
    },
    {
        icon: <FaBullseye className="w-8 h-8 text-primary" />,
        title: "Strategic Marketing",
        subtitle: "Professional Campaigns"
    },
    {
        icon: <FaHeart className="w-8 h-8 text-primary" />,
        title: "Client-First Approach",
        subtitle: "Dedicated Support"
    },
    {
        icon: <FaHandshake className="w-8 h-8 text-primary" />,
        title: "Expert Negotiation",
        subtitle: "Maximize Your Value"
    },
    {
        icon: <FaShieldAlt className="w-8 h-8 text-primary" />,
        title: "Trusted Guidance",
        subtitle: "Secure Transactions"
    }
]

export default function Achievement() {
    return (
        <section id="why-us" className="py-20 bg-background text-foreground">
            <div className="container mx-auto px-6 md:px-12 text-center">

                {/* Header */}
                <div className="mb-16 space-y-4">
                    <span className="inline-block text-primary text-sm font-medium tracking-[0.3em] uppercase opacity-90">
                        Why Choose Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                        The Woodhouse Advantage
                    </h2>
                    <div className="w-20 h-[1px] bg-primary mx-auto mt-6 opacity-60" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                    {achievements.map((item, idx) => (
                        <div
                            key={idx}
                            className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg flex flex-col items-center gap-3 hover:-translate-y-1"
                        >
                            {/* Icon Container */}
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-500">
                                {item.icon}
                            </div>

                            <h3 className="text-base font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                                {item.title}
                            </h3>

                            <p className="text-xs text-muted-foreground font-light tracking-wide uppercase">
                                {item.subtitle}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
