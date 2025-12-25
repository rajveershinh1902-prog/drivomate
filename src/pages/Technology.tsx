import { Brain, Eye, Cpu, Network, Database, Zap } from "lucide-react";

export default function Technology() {
  const technologies = [
    {
      Icon: Brain,
      title: "Artificial Intelligence & Machine Learning",
      description:
        "We leverage state-of-the-art AI and ML algorithms to enable vehicles to learn from data, recognize patterns, and make intelligent decisions in real-time.",
      applications: [
        "Deep learning for object classification",
        "Neural networks for behavior prediction",
        "Reinforcement learning for decision-making",
        "Continuous model improvement through data",
      ],
    },
    {
      Icon: Eye,
      title: "Computer Vision",
      description:
        "Our advanced computer vision systems process visual data from cameras to understand the vehicle’s surroundings and identify potential hazards.",
      applications: [
        "Real-time object detection and tracking",
        "Semantic segmentation of road scenes",
        "Lane and road boundary detection",
        "Multi-camera fusion for 360° awareness",
      ],
    },
    {
      Icon: Network,
      title: "Sensor Fusion",
      description:
        "We combine data from cameras, radar, LiDAR, and ultrasonic sensors to build a complete perception of the vehicle environment.",
      applications: [
        "Multi-sensor data integration",
        "Redundancy for improved reliability",
        "Enhanced perception in all conditions",
        "Precise distance and speed measurement",
      ],
    },
    {
      Icon: Cpu,
      title: "Embedded Systems",
      description:
        "Our embedded solutions are optimized for automotive-grade hardware, ensuring reliable real-time performance.",
      applications: [
        "Low-latency edge processing",
        "Automotive-grade reliability standards",
        "Power-efficient computation",
        "RTOS integration",
      ],
    },
    {
      Icon: Database,
      title: "Data Processing & Analytics",
      description:
        "We process large-scale vehicle data to extract insights, improve performance, and enable predictive intelligence.",
      applications: [
        "Big data processing pipelines",
        "Real-time analytics dashboards",
        "Predictive maintenance algorithms",
        "Fleet-wide performance monitoring",
      ],
    },
    {
      Icon: Zap,
      title: "Edge Computing & IoT",
      description:
        "We leverage edge computing for instant decisions while maintaining cloud connectivity for long-term learning.",
      applications: [
        "On-device inference for low latency",
        "V2X communication protocols",
        "Over-the-air software updates",
        "Cloud-based model training",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
            Our <span className="text-green-400">Technology</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Powered by AI, computer vision, and embedded systems driving the future
            of automotive intelligence.
          </p>
        </div>

        {/* Intro */}
        <div className="mb-24 bg-gradient-to-r from-green-900/30 to-gray-900/60 border border-green-500/20 rounded-3xl p-14 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            The Technology Stack Behind Our Solutions
          </h2>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
            We integrate artificial intelligence, computer vision, sensor fusion,
            and embedded computing to deliver real-time, automotive-grade solutions.
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">
          {technologies.map(({ Icon, title, description, applications }) => (
            <div
              key={title}
              className="bg-gray-900/60 border border-gray-800 rounded-3xl p-10 hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/10 transition"
            >
              <div className="flex items-start gap-5 mb-6">
                <div className="bg-green-500/10 p-3 rounded-xl">
                  <Icon size={28} className="text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>

              <div className="space-y-2 pl-16">
                {applications.map((app) => (
                  <div
                    key={app}
                    className="flex items-start gap-3 text-gray-400"
                  >
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2" />
                    <span className="text-sm">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Development Approach */}
        <div className="bg-gradient-to-r from-green-900/30 to-gray-900/60 border border-green-500/20 rounded-3xl p-14">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Our Development Approach
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              {
                step: "01",
                title: "Research & Development",
                text: "Continuous innovation to stay ahead of automotive technology trends.",
              },
              {
                step: "02",
                title: "Real-World Testing",
                text: "Rigorous testing across diverse driving conditions for reliability.",
              },
              {
                step: "03",
                title: "Scalable Deployment",
                text: "Solutions built to scale from prototype to mass production.",
              },
            ].map(({ step, title, text }) => (
              <div key={step}>
                <div className="text-green-400 text-5xl font-bold mb-3">
                  {step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
