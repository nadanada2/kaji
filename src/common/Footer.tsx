import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0F172A", color: "white" }}>
      <style>{`
        .footer-link { color: rgba(255,255,255,0.45); text-decoration: none; font-size: 13px; transition: color 0.15s; }
        .footer-link:hover { color: white; }
        .footer-social { width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.5); transition: background 0.15s, color 0.15s; text-decoration: none; }
        .footer-social:hover { background: rgba(201,168,76,0.25); color: #C9A84C; }
      `}</style>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48 }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#C9A84C" }}>KJ</span>
              </div>
              <span style={{ fontSize: 22, fontWeight: 600, fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>KaJi</span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.45)", marginBottom: 24 }}>
              Coques premium conçues en Tunisie.<br />Art, protection et identité.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="footer-social">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="#" aria-label="X" className="footer-social">
                <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* TikTok */}
              <a href="#" aria-label="TikTok" className="footer-social">
                <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C", marginBottom: 20 }}>Navigation</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Link href="/shop"       className="footer-link">Boutique</Link>
              <Link href="/customizer" className="footer-link">Customiser une coque</Link>
              <Link href="/community"  className="footer-link">Communauté</Link>
              <Link href="/my-designs" className="footer-link">Mes designs</Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C", marginBottom: 20 }}>Support</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Link href="/faq"      className="footer-link">FAQ</Link>
              <Link href="/shipping" className="footer-link">Livraison & retours</Link>
              <Link href="/care"     className="footer-link">Entretien de la coque</Link>
              <Link href="/terms"    className="footer-link">Conditions d'utilisation</Link>
              <Link href="/privacy"  className="footer-link">Confidentialité</Link>
            </div>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C", marginBottom: 20 }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
              {[
                { emoji: "📍", text: "Tunis, Tunisie" },
                { emoji: "✉️", text: "bonjour@kaji.tn" },
                { emoji: "📞", text: "+216 71 000 000" },
              ].map(({ emoji, text }) => (
                <div key={text} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 13 }}>{emoji}</span>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>{text}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 10 }}>
              Newsletter
            </p>
            <div style={{ display: "flex" }}>
              <input type="email" placeholder="votre@email.com"
                style={{ flex: 1, padding: "10px 14px", fontSize: 12, outline: "none", borderRadius: "10px 0 0 10px", backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRight: "none", color: "white", minWidth: 0 }} />
              <button type="button"
                style={{ padding: "10px 16px", borderRadius: "0 10px 10px 0", backgroundColor: "#C9A84C", color: "#0F172A", fontSize: 11, fontWeight: 700, border: "none", cursor: "pointer" }}>
                OK
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "20px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", margin: 0 }}>
            © 2025 KaJi. Tous droits réservés. Conçu avec soin en Tunisie 🇹🇳
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            {["Visa", "Mastercard", "PayPal", "D17"].map((p) => (
              <span key={p} style={{ fontSize: 10, fontWeight: 600, padding: "4px 10px", borderRadius: 8, backgroundColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.3)" }}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
