"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-white font-bold text-lg">
          Zenith Engineering Company
        </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-6 text-sm text-white/80">
          <li>
            <button
              onClick={() =>
                document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-white transition"
            >
              About Us
            </button>
          </li>

          <li>
            <button
              onClick={() =>
                document.getElementById("services-section")?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-white transition"
            >
              Services
            </button>
          </li>

          <li>
            <button
              onClick={() =>
                document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-white transition"
            >
              Projects
            </button>
          </li>

          <li>
            <button
              onClick={() =>
                document.getElementById("certification-section")?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-white transition"
            >
              Certifications
            </button>
          </li>

          <li>
            <button
              onClick={() =>
                document.getElementById("social-section")?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-white transition"
            >
              Social
            </button>
          </li>

          <li>
            <button
              onClick={() =>
                document.getElementById("awards-section")?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-white transition"
            >
              Awards
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
