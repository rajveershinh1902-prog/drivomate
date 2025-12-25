import { Target, Lightbulb, Users, TrendingUp } from "lucide-react";

export default function About() {
  const values = [
    {
      Icon: Target,
      title: "Mission-Driven",
      description:
        "Our mission is to revolutionize road safety through intelligent technology. Every solution we build is designed to save lives and prevent accidents.",
    },
    {
      Icon: Lightbulb,
      title: "Innovation First",
      description:
        "We invest heavily in R&D to stay at the forefront of automotive AI and ADAS technology, constantly pushing the boundaries of what's possible.",
    },
    {
      Icon: Users,
      title: "Collaborative Culture",
      description:
        "Our team of engineers, researchers, and innovators work together to create real-world solutions that make a tangible difference.",
    },
    {
      Icon: TrendingUp,
      title: "Scalable Solutions",
      description:
        "We build technology that scales from prototype to production, ensuring our innovations reach the vehicles and roads that need them most.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
            About <span className="text-green-400">Drivomate</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A technology startup committed to making roads safer through artificial intelligence and advanced driver assistance systems.
          </p>
        </div>

        {/* Who We Are */}
        <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-10 md:p-14 mb-20">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Drivomate Technologies is a Jaipur-based automotive technology startup focused on developing intelligent mobility solutions that prioritize safety, efficiency, and innovation.
                </p>
                <p>
                  Founded by a team of passionate engineers and AI researchers, we're building the next generation of Advanced Driver Assistance Systems (ADAS) using computer vision, machine learning, and embedded systems.
                </p>
                <p>
                  Our solutions are designed for real-world applications, rigorously tested, and built to scale across the automotive ecosystem.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-gray-900/50 border border-green-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                To revolutionize road safety and intelligent transportation through cutting-edge AI, computer vision, and embedded systems.
              </p>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Our Vision
              </h3>
              <p className="text-gray-300 leading-relaxed">
                A future where every vehicle is equipped with intelligent systems that prevent accidents, save lives, and make mobility seamless.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-14">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8 hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/10 transition transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-green-500/10 p-3 rounded-xl">
                    <Icon size={28} className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="bg-gradient-to-r from-green-900/30 to-gray-900/60 border border-green-500/20 rounded-3xl p-14 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Building the Future Together
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            We're a team of innovators, researchers, and problem-solvers dedicated to making a real difference in automotive safety and intelligent transportation.
          </p>
        </div>

      </div>
    </section>
  );
}
