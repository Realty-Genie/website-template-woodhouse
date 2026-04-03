import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Users, BookOpen, Megaphone, Heart } from "lucide-react"

const benefits = [
    {
        icon: <TrendingUp className="w-6 h-6 text-primary" />,
        title: "Competitive Commission Structures",
        description: "Maximize your earnings with industry-leading splits"
    },
    {
        icon: <Users className="w-6 h-6 text-primary" />,
        title: "Advanced CRM & Lead Tools",
        description: "Cutting-edge technology to grow your business"
    },
    {
        icon: <Megaphone className="w-6 h-6 text-primary" />,
        title: "Marketing Support",
        description: "Professional marketing materials and strategies"
    },
    {
        icon: <BookOpen className="w-6 h-6 text-primary" />,
        title: "Training & Mentorship",
        description: "Continuous learning from industry experts"
    },
    {
        icon: <Heart className="w-6 h-6 text-primary" />,
        title: "Collaborative Culture",
        description: "Supportive team environment that breeds success"
    }
]

export default function AgentRecruitment() {
    return (
        <section id="agents" className="py-20 bg-background text-foreground">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left - Image */}
                    <div className="relative h-[500px] rounded-2xl overflow-hidden">
                        <Image
                            src="/achievements.jpeg"
                            alt="Our Agents"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-white/65" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center p-8">
                                <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase block mb-4">
                                    Join Our Team
                                </span>
                                <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                                    Built for Ambitious Agents
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase opacity-90 block">
                                For Agents
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                                Grow With Us
                            </h2>
                            <p className="text-muted-foreground font-light leading-relaxed">
                                At Woodhouse Realty, we support driven professionals with the tools, training, and culture needed to thrive in today&apos;s competitive market.
                            </p>
                        </div>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {benefits.map((benefit, idx) => (
                                <div 
                                    key={idx}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-foreground font-medium text-sm mb-1">
                                            {benefit.title}
                                        </h4>
                                        <p className="text-muted-foreground text-xs font-light">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8 py-6 tracking-widest text-xs uppercase font-medium transition-all duration-300">
                            Explore Agent Opportunities
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
