"use client"

export default function Footer() {
  return (
    // <footer className=" bg-card border-t border-border py-16 px-4 sm:px-6 lg:px-12">
//     <footer className="border-t border-border py-16 px-4 sm:px-6 lg:px-12
// bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950">
<footer className="border-t border-border py-16 px-4 sm:px-6 lg:px-12
bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950">




      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Zenith Engineering</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              ISO-certified leading contractor specializing in mechanical maintenance and heavy equipment services since
              1983.
            </p>
            <div className="space-y-2 text-sm text-white/80 ">
              <p>✓ ISO 9001:2015</p>
              <p>✓ ISO 45001:2018</p>
            </div>
          </div>



          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Quick Links</h3>

            <ul className="space-y-2 text-sm text-white/80">

              <li>
                <button
                  onClick={() =>
                    document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-primary transition-colors text-left"
                >
                  About Us
                </button>
              </li>

              <li>
                <button
                  onClick={() =>
                    document.getElementById("services-section")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-primary transition-colors text-left"
                >
                  Services
                </button>
              </li>

              <li>
                <button
                  onClick={() =>
                    document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-primary transition-colors text-left"
                >
                  Projects
                </button>
              </li>


              <li>
                <button
                  onClick={() =>
                    document.getElementById("certification-section")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-primary transition-colors text-left"
                >
                  Certifications
                </button>
              </li>

              <li>
                <button
                  onClick={() =>
                    document.getElementById("social-section")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-primary transition-colors text-left"
                >
                  Social
                </button>
              </li>

              <li>
                <button
                  onClick={() =>
                    document.getElementById("recognition-section")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-primary transition-colors text-left"
                >
                  Rewards & Recognition
                </button>
              </li>

              <li>
                <button
                  onClick={() =>
                    document.getElementById("awards-section")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-primary transition-colors text-left"
                >
                  Our Awards
                </button>
              </li>

              <li>
                <button
                  onClick={() =>
                    document.getElementById("suppliers-section")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-primary transition-colors text-left"
                >
                  Equipment Suppliers
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-white/80">
              <p>
                <span className="font-semibold">Address:</span>
                <br />
                Road No. 1, Azad Nagar, Mango
                <br />
                Jamshedpur 832 110, JHARKHAND [INDIA]
              </p>
              <p>
                <span className="font-semibold">Phone:</span>
                <br />
                0657 - 2364116
              </p>
              <p>
                <span className="font-semibold">Email:</span>
                <br />
                zenith.tsl@rediffmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
            <p>&copy; 2025 Zenith Engineering Company. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
