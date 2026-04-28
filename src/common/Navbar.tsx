"use client";

import Link from "next/link";
import { Leaf, Battery, ShoppingCart, User, LogOut, Heart, Package, ChevronDown } from "lucide-react";
import { useEcoStore } from "../store/ecoStore";
import { useCustomizerStore } from "../store/useCustomizerStore";
import { useAuthStore } from "../store/useAuthStore";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const { ecoMode, toggleEcoMode } = useEcoStore();
  const { cart } = useCustomizerStore();
  const { isAuthenticated, user, logout } = useAuthStore();
  const pathname = usePathname();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowUserMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { href: "/shop", label: "Shop" },
    { href: "/customizer", label: "Customiser" },
    { href: "/community", label: "Communauté" },
  ];

  return (
    <>
      {/* Announcement bar */}
      <div style={{ backgroundColor: "#1E3A5F" }} className="text-white py-2.5 px-4">
        <div className="max-w-[1440px] mx-auto flex items-center justify-center gap-5 text-[11px] font-medium tracking-widest uppercase">
          <span style={{ color: "#F0DFA0" }}>Livraison gratuite</span>
          <span className="text-white opacity-30">·</span>
          <span className="text-white opacity-70">dès 150 TND d'achat</span>
          <span className="text-white opacity-30">·</span>
          <span style={{ color: "#F0DFA0" }}>-10% sur votre 1ère commande</span>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="sticky top-0 z-50 w-full border-b"
        style={{ backgroundColor: "rgba(250,250,248,0.97)", borderColor: "#E4E2DC", backdropFilter: "blur(16px)" }}>
        <div className="mx-auto flex h-[66px] max-w-[1440px] items-center justify-between px-6 lg:px-10">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#1E3A5F" }}>
              <span className="text-[11px] font-bold" style={{ color: "#C9A84C" }}>KJ</span>
            </div>
            <span className="text-[21px] font-semibold" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              color: "#0F172A",
              letterSpacing: "-0.01em"
            }}>KaJi</span>
          </Link>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href}
                className="text-[13px] font-medium tracking-wide transition-colors relative pb-0.5"
                style={{ color: pathname === href ? "#1E3A5F" : "#8892A4" }}>
                {label}
                {pathname === href && (
                  <span className="absolute -bottom-[22px] left-0 right-0 h-[2px] rounded-full"
                    style={{ backgroundColor: "#C9A84C" }} />
                )}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">

            {/* Eco */}
            <button onClick={toggleEcoMode}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase transition-all border"
              style={ecoMode
                ? { backgroundColor: "#f0fdf4", color: "#15803d", borderColor: "#bbf7d0" }
                : { backgroundColor: "#F4F3EF", color: "#8892A4", borderColor: "#E4E2DC" }}>
              {ecoMode ? <Leaf className="h-3.5 w-3.5" /> : <Battery className="h-3.5 w-3.5" />}
              <span className="hidden sm:inline">Éco</span>
            </button>

            {/* User */}
            <div className="relative" ref={menuRef}>
              {isAuthenticated ? (
                <>
                  <button onClick={() => setShowUserMenu(v => !v)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all"
                    style={{ backgroundColor: "#F4F3EF", borderColor: "#E4E2DC", color: "#0F172A" }}>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#1E3A5F" }}>
                      <span className="text-[10px] font-bold uppercase" style={{ color: "#C9A84C" }}>
                        {user?.firstName?.[0]}{user?.lastName?.[0]}
                      </span>
                    </div>
                    <span className="text-[12px] font-semibold hidden sm:inline">{user?.firstName}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showUserMenu ? "rotate-180" : ""}`}
                      style={{ color: "#8892A4" }} />
                  </button>

                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-56 rounded-2xl border overflow-hidden shadow-[0_8px_40px_rgba(15,23,42,0.14)] z-50"
                      style={{ backgroundColor: "white", borderColor: "#E4E2DC" }}>
                      <div className="px-4 py-3 border-b" style={{ backgroundColor: "#F4F3EF", borderColor: "#E4E2DC" }}>
                        <p className="text-[13px] font-semibold" style={{ color: "#0F172A" }}>{user?.firstName} {user?.lastName}</p>
                        <p className="text-[11px]" style={{ color: "#8892A4" }}>{user?.email}</p>
                      </div>
                      <div className="p-1.5">
                        {[
                          { href: "/profile", icon: User, label: "Mon Profil" },
                          { href: "/profile#orders", icon: Package, label: "Mes Commandes" },
                          { href: "/my-designs", icon: Heart, label: "Mes Designs" },
                        ].map(({ href, icon: Icon, label }) => (
                          <Link key={href} href={href} onClick={() => setShowUserMenu(false)}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors hover:bg-[#F4F3EF]">
                            <Icon className="w-4 h-4" style={{ color: "#8892A4" }} />
                            <span className="text-[13px] font-medium" style={{ color: "#0F172A" }}>{label}</span>
                          </Link>
                        ))}
                      </div>
                      <div className="p-1.5 border-t" style={{ borderColor: "#E4E2DC" }}>
                        <button onClick={() => { logout(); setShowUserMenu(false); }}
                          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-colors hover:bg-red-50">
                          <LogOut className="w-4 h-4 text-red-400" />
                          <span className="text-[13px] font-medium text-red-500">Se déconnecter</span>
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link href="/login"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all"
                  style={{ backgroundColor: "#F4F3EF", borderColor: "#E4E2DC", color: "#0F172A" }}>
                  <User className="h-4 w-4" style={{ color: "#8892A4" }} />
                  <span className="text-[12px] font-semibold hidden sm:inline">Connexion</span>
                </Link>
              )}
            </div>

            {/* Cart */}
            <Link href="/cart"
              className="relative flex items-center gap-2 px-4 py-1.5 rounded-full transition-all"
              style={{ backgroundColor: "#1E3A5F", color: "white" }}>
              <ShoppingCart className="h-4 w-4" />
              <span className="text-[12px] font-semibold hidden sm:inline">Panier</span>
              {cart.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center rounded-full text-[9px] font-bold min-w-[18px] h-[18px] px-1"
                  style={{ backgroundColor: "#C9A84C", color: "#0F172A" }}>
                  {cart.length}
                </span>
              )}
            </Link>

          </div>
        </div>
      </nav>
    </>
  );
}
