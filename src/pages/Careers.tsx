import {
  Rocket,
  Heart,
  Lightbulb,
  Users,
  Briefcase,
  GraduationCap,
} from "lucide-react";

interface CareersProps {
  onNavigate: (page: string) => void;
}

export default function Careers({ onNavigate }: CareersProps) {
  const benefits = [
    {
      Icon: Rocket,
      title: "Innovative Projects",
      description:
        "Work on cutting-edge automotive AI and ADAS technology that shapes the future of transportation.",
    },
    {
      Icon: Lightbulb,
      title: "Learning & Growth",
      description:
        "Access to continuous learning, mentorship, and opportunities to expand your technical expertise.",
    },
    {
      Icon: Users,
      title: "Collaborative Culture",
      description:
        "Join a team of passionate engineers and researchers who support each other and celebrate wins together.",
    },
    {
      Icon: Heart,
      title: "Impact-Driven Work",
      description:
        "Build solutions that save lives and make roads safer for millions of people.",
    },
  ];

  const opportunities = [
    {
      type: "Full-Time",
      Icon: Briefcase,
      roles: [
        "AI/ML Engineer",
        "Computer Vision Engineer",
        "Embedded Systems Engineer",
        "Software Developer",
        "Product Manager",
        "Hardware Engineer",
      ],
    },
    {
      type: "Internships",
      Icon: GraduationCap,
      roles: [
        "AI/ML Intern",
        "Computer Vision Intern",
        "Embedded Systems Intern",
        "Software Development Intern",
        "Research Intern",
        "Data Science Intern",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
            Join <span className="text-green-400">Our Team</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Grow with innovation. Build the future of intelligent mobility alongside passionate engineers and researchers.
          </p>
        </div>

        {/* Why Work Here */}
        <div className="mb-20 bg-gradient-to-r from-green-900/30 to-gray-900/60 border border-green-500/20 rounded-3xl p-14 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Work at Drivomate?
          </h2>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
            We're a startup that values innovation, collaboration, and impact.
            At Drivomate, you'll work on real-world problems that matter and build technology that saves lives.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {benefits.map(({ Icon, title, description }) => (
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

        {/* Opportunities */}
        <div className="mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-14">
            Current Opportunities
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {opportunities.map(({ type, Icon, roles }) => (
              <div
                key={type}
                className="bg-gray-900/60 border border-gray-800 rounded-2xl p-10 hover:border-green-500/40 transition"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-green-500/10 p-3 rounded-xl">
                    <Icon size={28} className="text-green-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {type}
                  </h3>
                </div>

                <div className="space-y-3">
                  {roles.map((role) => (
                    <div
                      key={role}
                      className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition cursor-pointer"
                    >
                      <span className="w-2 h-2 bg-green-400 rounded-full" />
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-900/30 to-gray-900/60 border border-green-500/20 rounded-3xl p-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            We're always looking for talented, passionate individuals who want to work on meaningful problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center justify-center px-10 py-4 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-xl shadow-lg shadow-green-500/20 transition transform hover:scale-105"
            >
              Get in Touch
            </button>
            <a
              href="mailto:careers@drivomate.tech"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-green-500 text-green-400 rounded-xl hover:bg-green-500/10 transition"
            >
              Send Your Resume
            </a>
          </div>

          <p className="text-gray-400 text-sm mt-6">
            careers@drivomate.tech
          </p>
        </div>

      </div>
    </section>
  );
}
