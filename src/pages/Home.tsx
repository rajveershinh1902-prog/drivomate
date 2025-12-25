import { ArrowRight, Shield, Brain, Cpu, Radio } from "lucide-react";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const features = [
    {
      Icon: Shield,
      title: "ADAS Solutions",
      description:
        "Advanced Driver Assistance Systems that enhance vehicle safety and prevent collisions through real-time monitoring and alerts.",
    },
    {
      Icon: Brain,
      title: "AI-Powered Automotive Systems",
      description:
        "Intelligent systems leveraging machine learning and computer vision to enable smarter, safer driving experiences.",
    },
    {
      Icon: Radio,
      title: "Smart Vehicle Safety",
      description:
        "Comprehensive safety solutions that monitor driver behavior, road conditions, and vehicle health in real-time.",
    },
    {
      Icon: Cpu,
      title: "Embedded & IoT Systems",
      description:
        "Cutting-edge embedded solutions and IoT connectivity for seamless vehicle-to-everything communication.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black">
      
      {/* ================= HERO ================= */}
      <div className="relative overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.18),transparent_65%)]" />

        <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-28 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
            Driving the Future with
            <span className="block text-green-400 mt-3">
              Intelligent Mobility Solutions
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed">
            Drivomate Technologies is pioneering the next generation of automotive intelligence.
            We develop cutting-edge ADAS and AI-powered systems that make roads safer and transportation smarter.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
            <button
              onClick={() => onNavigate("services")}
              className="inline-flex items-center justify-center gap-2 px-10 py-4
                bg-green-500 hover:bg-green-600 text-black font-semibold
                rounded-xl shadow-lg shadow-green-500/25
                transition-transform hover:scale-105"
            >
              Explore Solutions
              <ArrowRight size={20} />
            </button>

            <button
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center justify-center px-10 py-4
                border-2 border-green-500 text-green-400
                hover:bg-green-500/10
                font-semibold rounded-xl transition"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* ================= FEATURES ================= */}
      <div className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Core Focus Areas
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transforming automotive technology through innovation and intelligent systems
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="group bg-gray-900/60 border border-gray-800 rounded-2xl p-8
                hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/10
                transition transform hover:-translate-y-1"
            >
              <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-xl bg-green-500/10 group-hover:bg-green-500/20 transition">
                <Icon size={28} className="text-green-400" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-28">
        <div className="bg-gradient-to-r from-green-900/30 to-gray-900/60
          rounded-3xl p-16 border border-green-500/20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Ready to Transform Your Automotive Solutions?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Join us in building the future of intelligent transportation and road safety.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center px-12 py-4
              bg-green-500 hover:bg-green-600 text-black font-semibold
              rounded-xl shadow-lg shadow-green-500/25
              transition-transform hover:scale-105"
          >
            Get Started Today
            <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
