import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-6 block">
              AISIDE<span className="text-[#6B5CFF]">.</span>
            </Link>
            <p className="text-white/50 leading-relaxed mb-4">
              AI systems for real estate and local businesses.
            </p>
            <p className="text-white/40 text-sm">
              Built in Estonia
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/60">
              <li><Link href="#services" className="hover:text-[#6B5CFF] transition-colors">Voice Agents</Link></li>
              <li><Link href="#services" className="hover:text-[#6B5CFF] transition-colors">AI Property Visualization</Link></li>
              <li><Link href="#services" className="hover:text-[#6B5CFF] transition-colors">Smart Websites</Link></li>
              <li><Link href="#services" className="hover:text-[#6B5CFF] transition-colors">Data Automation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <p className="text-white/60 mb-4">Ready to start your project?</p>
            <a
              href="mailto:contact@aiside.ee"
              className="text-xl font-medium hover:text-[#6B5CFF] transition-colors"
            >
              contact@aiside.ee
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} AISIDE. Built for real estate & local businesses.</p>
        </div>
      </div>
    </footer>
  )
}
