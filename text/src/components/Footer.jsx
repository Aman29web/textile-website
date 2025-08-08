import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#242c80] text-gray-300 py-16 px-6 md:px-12" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Brand & Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-wide">GARLON POLYFAB</h2>
          <p className="text-gray-400 max-w-xs leading-relaxed">
            Premium Textile Manufacturer specializing in high-quality fabrics, innovative designs, and sustainable production techniques. Our commitment is to excellence and customer satisfaction.
          </p>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} GARLON POLYFAB INDUSTRIES LIMITED. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Footer navigation" className="space-y-2">
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About Us", "Products", "Services", "Gallery", "Contact Us"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.replace(/\s+/g, "").toLowerCase()}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <address className="not-italic space-y-3 text-gray-400">
            <p>123 Textile Road, Industrial Park</p>
            <p>Cityname, State, ZIP</p>
            <p>Phone: <a href="tel:+919876543210" className="hover:text-white transition">{"+91 98765 43210"}</a></p>
            <p>Email: <a href="mailto:info@garlonpolyfab.com" className="hover:text-white transition">info@garlonpolyfab.com</a></p>
            <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
          </address>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <p className="text-gray-400">Stay connected on social media for latest updates, news, and offers.</p>
          <div className="flex space-x-6 mt-3">
            {[{
              icon: Facebook,
              href: "https://facebook.com/garlonpolyfab",
              label: "Facebook",
              color: "#4267B2",
            }, {
              icon: Twitter,
              href: "https://twitter.com/garlonpolyfab",
              label: "Twitter",
              color: "#1DA1F2",
            }, {
              icon: Instagram,
              href: "https://instagram.com/garlonpolyfab",
              label: "Instagram",
              color: "#E1306C",
            }, {
              icon: Linkedin,
              href: "https://linkedin.com/company/garlonpolyfab",
              label: "LinkedIn",
              color: "#0077B5",
            }].map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-full p-3 bg-gray-700 hover:bg-gray-600 transition-colors duration-200 shadow-lg"
                style={{ boxShadow: `0 0 8px ${color}` }}
              >
                <Icon className="w-6 h-6 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
