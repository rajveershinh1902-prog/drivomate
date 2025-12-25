import { Shield, Eye, AlertTriangle, Gauge } from "lucide-react";

export default function Services() {
  const solutions = [
    {
      Icon: Shield,
      title: "Advanced Driver Assistance Systems (ADAS)",
      description:
        "Comprehensive ADAS solutions that enhance vehicle safety through intelligent monitoring and real-time intervention.",
      features: [
        "Lane Departure Warning & Assistance",
        "Adaptive Cruise Control",
        "Collision Avoidance Systems",
        "Automatic Emergency Braking",
        "Blind Spot Detection",
        "Parking Assistance Systems",
      ],
    },
    {
      Icon: Eye,
      title: "AI & Computer Vision for Vehicles",
      description:
        "Cutting-edge computer vision systems that enable vehicles to see, understand, and respond to their environment.",
      features: [
        "Object Detection & Recognition",
        "Pedestrian & Cyclist Detection",
        "Traffic Sign Recognition",
        "Lane Line Detection",
        "Real-time Scene Understanding",
        "Night Vision Enhancement",
      ],
    },
    {
      Icon: AlertTriangle,
      title: "Vehicle Safety & Monitoring Systems",
      description:
        "Comprehensive monitoring solutions that ensure driver alertness, vehicle health, and overall road safety.",
      features: [
        "Driver Drowsiness Detection",
        "Distraction Monitoring",
        "Driver Behavior Analysis",
        "Vehicle Health Monitoring",
        "Fleet Safety Management",
        "Real-time Alert Systems",
      ],
    },
    {
      Icon: Gauge,
      title: "Smart Mobility & Automation",
      description:
        "Next-generation automation solutions that make transportation smarter, safer, and more efficient.",
      features: [
        "Semi-Autonomous Driving Features",
        "V2X Communication Systems",
        "Smart Traffic Integration",
        "Predictive Maintenance",
        "Route Optimization",
        "Connected Vehicle Solutions",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
            Our <span className="text-green-400">Solutions</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive automotive intelligence solutions designed to transform
            vehicle safety and performance.
          </p>
        </div>

        {/* Solutions */}
        <div className="space-y-14">
          {solutions.map(({ Icon, title, description, features }) => (
            <div
              key={title}
              className="bg-gray-900/60 border border-gray-800 rounded-3xl p-10 md:p-14 hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/10 transition"
            >
              <div className="flex flex-col md:flex-row gap-10">
                <div className="flex-shrink-0">
                  <div className="bg-green-500/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                    <Icon size={32} className="text-green-400" />
                  </div>
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {title}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-gray-400"
                      >
                        <span className="w-2 h-2 bg-green-400 rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 bg-gradient-to-r from-green-900/30 to-gray-900/60 border border-green-500/20 rounded-3xl p-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Custom Solutions for Your Needs
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Every automotive challenge is unique. We build tailored solutions that
            meet industry standards and real-world requirements.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              { value: "100%", label: "Customizable" },
              { value: "24/7", label: "Support" },
              { value: "Real-time", label: "Performance" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="bg-gray-900/60 border border-gray-800 rounded-2xl px-8 py-6"
              >
                <div className="text-3xl font-bold text-green-400 mb-1">
                  {value}
                </div>
                <div className="text-gray-400 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
