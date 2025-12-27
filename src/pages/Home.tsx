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
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      Icon: Brain,
      title: "AI-Powered Automotive Systems",
      description:
        "Intelligent systems leveraging machine learning and computer vision to enable smarter, safer driving experiences.",
      image: "https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      Icon: Radio,
      title: "Smart Vehicle Safety",
      description:
        "Comprehensive safety solutions that monitor driver behavior, road conditions, and vehicle health in real-time.",
      image: "https://images.pexels.com/photos/163016/crash-test-collision-60-km-h-distraction-163016.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      Icon: Cpu,
      title: "Embedded & IoT Systems",
      description:
        "Cutting-edge embedded solutions and IoT connectivity for seamless vehicle-to-everything communication.",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black">
      
      {/* ================= HERO ================= */}
      <div className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Automotive technology"
            className="w-full h-full object-cover"
          />
        </div>

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
          {features.map(({ Icon, title, description, image }) => (
            <div
              key={title}
              className="group bg-gray-900/60 border border-gray-800 rounded-2xl overflow-hidden
                hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/10
                transition transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 w-12 h-12 flex items-center justify-center rounded-xl bg-green-500/20 backdrop-blur-sm border border-green-500/30">
                  <Icon size={24} className="text-green-400" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {description}
                </p>
              </div>
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
