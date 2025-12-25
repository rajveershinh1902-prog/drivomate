import { Linkedin, Twitter, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-white">Drivomate</span>
              <span className="text-green-400"> Technologies</span>
            </h2>
            <p className="text-gray-400 text-sm">
              Driving the future with intelligent mobility solutions.
              Making roads safer through innovation.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400 text-sm">
                <MapPin size={16} className="mr-2 text-green-400" />
                Jaipur, Rajasthan, India
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Mail size={16} className="mr-2 text-green-400" />
                contact@drivomate.tech
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-green-400 transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-green-400 transition"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:contact@drivomate.tech"
                aria-label="Email"
                className="text-gray-400 hover:text-green-400 transition"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Drivomate Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
