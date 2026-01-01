import Link from "next/link"

export function Footer() {
  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-black border-t border-white/10">
      {/* Quick Links Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">AISIDE</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              AI implementation studio based in Tallinn. We help businesses automate and scale with cutting-edge AI solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Get in Touch</h4>
            <a
              href="mailto:contact@aiside.ee"
              className="text-2xl font-bold text-white hover:text-[#6B5CFF] transition-colors block"
            >
              contact@aiside.ee
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2025 AISIDE OÜ · Reg: 17402808
          </p>
          <p className="text-white/40 text-xs">
            AI implementation studio based in Tallinn
          </p>
        </div>
      </div>
    </footer>
  )
}
