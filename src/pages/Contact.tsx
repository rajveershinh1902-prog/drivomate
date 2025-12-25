import { MapPin, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

type Status = "idle" | "loading" | "success";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 4000);
    }, 1200);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
            Contact <span className="text-green-400">Us</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a question or want to discuss a project? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Reach out for partnerships, solutions, or career opportunities.
              </p>
            </div>

            {[
              { Icon: MapPin, title: "Location", text: "Jaipur, Rajasthan, India" },
              { Icon: Mail, title: "Email", text: "contact@drivomate.tech" },
              { Icon: Phone, title: "Phone", text: "+91 (XXX) XXX-XXXX" },
            ].map(({ Icon, title, text }) => (
              <div
                key={title}
                className="flex items-start gap-4 bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-green-500/40 transition"
              >
                <div className="bg-green-500/10 p-3 rounded-xl">
                  <Icon size={24} className="text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    {title}
                  </h3>
                  <p className="text-gray-400">{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-10">
            <h2 className="text-2xl font-bold text-white mb-6">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition"
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition resize-none"
              />

              {status === "success" && (
                <p className="text-green-400 text-sm">
                  Message sent successfully!
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-green-500 hover:bg-green-600 disabled:bg-gray-700 text-black font-semibold rounded-xl shadow-lg shadow-green-500/20 transition transform hover:scale-105 disabled:transform-none"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
