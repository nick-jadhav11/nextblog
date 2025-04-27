import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <section aria-labelledby="footer-about">
            <h2 id="footer-about" className="text-lg font-semibold mb-4">
              About
            </h2>
            <p className="text-sm text-gray-400">
              Spabooky is your wellness destination offering curated spa and
              therapy experiences.
            </p>
          </section>

          <nav aria-labelledby="footer-nav">
            <h2 id="footer-nav" className="text-lg font-semibold mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-amber-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-amber-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-amber-400">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-amber-400">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <address className="not-italic" aria-labelledby="footer-contact">
            <h2 id="footer-contact" className="text-lg font-semibold mb-4">
              Contact
            </h2>
            <p className="text-sm text-gray-400">123 Spa Street, Wellness City</p>
            <p className="text-sm text-gray-400">
              Email:{" "}
              <a href="mailto:info@spabooky.com" className="hover:text-amber-400">
                info@spabooky.com
              </a>
            </p>
            <p className="text-sm text-gray-400">
              Phone:{" "}
              <a href="tel:+1234567890" className="hover:text-amber-400">
                +1 234 567 890
              </a>
            </p>
          </address>

          <section aria-labelledby="footer-newsletter">
            <h2 id="footer-newsletter" className="text-lg font-semibold mb-4">
              Stay Updated
            </h2>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button
                type="submit"
                className="bg-amber-400 text-black px-4 py-2 rounded-md hover:bg-amber-500 transition"
              >
                Subscribe
              </button>
            </form>
          </section>
        </div>

        <div className="mt-10 border-t border-zinc-700 pt-6 text-sm text-gray-500 text-center">
          &copy; 2025 Spabooky. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
