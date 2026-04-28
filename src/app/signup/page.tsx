"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Check } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";

export default function SignupPage() {
  const router = useRouter();
  const { signup } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) { setError("Les mots de passe ne correspondent pas."); return; }
    if (password.length < 8) { setError("Le mot de passe doit contenir au moins 8 caractères."); return; }
    if (!agreedToTerms) { setError("Veuillez accepter les conditions d'utilisation."); return; }
    setIsLoading(true);
    try {
      const success = await signup(email, password, firstName, lastName);
      if (success) { router.push("/profile"); }
      else { setError("Une erreur s'est produite. Veuillez réessayer."); }
    } catch { setError("Une erreur s'est produite. Veuillez réessayer."); }
    finally { setIsLoading(false); }
  };

  const passwordStrength = () => {
    if (password.length === 0) return 0;
    if (password.length < 6) return 1;
    if (password.length < 8) return 2;
    if (/[A-Z]/.test(password) && /[0-9]/.test(password)) return 3;
    return 2;
  };

  const strengthColors = ["bg-[#E4E2DC]", "bg-red-400", "bg-amber-400", "bg-emerald-400"];
  const strengthLabels = ["", "Faible", "Moyen", "Fort"];

  const inputClass = "w-full py-3.5 bg-[#FAFAF8] border border-[#E4E2DC] rounded-xl text-[14px] font-medium text-[#0F172A] outline-none focus:border-[#C9A84C] focus:ring-4 focus:ring-[#C9A84C]/10 transition-all placeholder-[#C4C2BB]";

  return (
    <div className="min-h-screen bg-[#F4F3EF] flex items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-[440px]"
      >
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-7">
            <div className="w-7 h-7 rounded-full bg-[#1E3A5F] flex items-center justify-center">
              <span className="text-[10px] font-bold text-[#C9A84C]">KJ</span>
            </div>
            <span className="text-[18px] font-semibold text-[#0F172A]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>KaJi</span>
          </Link>
          <h1 className="text-3xl font-semibold text-[#0F172A] mb-2"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Créer un compte
          </h1>
          <p className="text-[#8892A4] text-sm">Rejoignez la communauté KaJi</p>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-[#E4E2DC] shadow-[0_4px_24px_rgba(15,23,42,0.06)]">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl text-sm font-medium">
                {error}
              </div>
            )}

            {/* Name row */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-widest text-[#8892A4] mb-1.5">Prénom</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8892A4]" />
                  <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}
                    className={`${inputClass} pl-10`} placeholder="Amine" required />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-widest text-[#8892A4] mb-1.5">Nom</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8892A4]" />
                  <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}
                    className={`${inputClass} pl-10`} placeholder="Ben Ali" required />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-widest text-[#8892A4] mb-1.5">Adresse e-mail</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8892A4]" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  className={`${inputClass} pl-11`} placeholder="vous@exemple.com" required />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-widest text-[#8892A4] mb-1.5">Mot de passe</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8892A4]" />
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)}
                  className={`${inputClass} pl-11 pr-11`} placeholder="••••••••" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8892A4] hover:text-[#0F172A] transition-colors">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {password.length > 0 && (
                <div className="mt-2 flex items-center gap-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className={`h-1 flex-1 rounded-full transition-all ${i <= passwordStrength() ? strengthColors[passwordStrength()] : 'bg-[#E4E2DC]'}`} />
                  ))}
                  <span className="text-[10px] font-medium text-[#8892A4] w-12">{strengthLabels[passwordStrength()]}</span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-widest text-[#8892A4] mb-1.5">Confirmer le mot de passe</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8892A4]" />
                <input type={showConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`${inputClass} pl-11 pr-11`} placeholder="••••••••" required />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8892A4] hover:text-[#0F172A] transition-colors">
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3 pt-1">
              <button type="button" onClick={() => setAgreedToTerms(!agreedToTerms)}
                className={`w-5 h-5 rounded-md border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all ${
                  agreedToTerms ? "bg-[#1E3A5F] border-[#1E3A5F]" : "border-[#E4E2DC] hover:border-[#C9A84C]"
                }`}
              >
                {agreedToTerms && <Check className="w-3 h-3 text-white" />}
              </button>
              <label className="text-[12px] text-[#8892A4] leading-relaxed">
                J'accepte les{" "}
                <Link href="/terms" className="font-semibold text-[#1E3A5F] hover:text-[#C9A84C] transition-colors">Conditions d'utilisation</Link>
                {" "}et la{" "}
                <Link href="/privacy" className="font-semibold text-[#1E3A5F] hover:text-[#C9A84C] transition-colors">Politique de confidentialité</Link>
              </label>
            </div>

            <button type="submit" disabled={isLoading}
              className={`w-full py-3.5 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 transition-all mt-1 ${
                isLoading
                  ? "bg-[#E4E2DC] text-[#8892A4] cursor-not-allowed"
                  : "bg-[#1E3A5F] text-white hover:bg-[#162E4D] shadow-sm"
              }`}
            >
              {isLoading ? <span className="opacity-70">Création du compte...</span> : (<>Créer mon compte <ArrowRight className="w-4 h-4" /></>)}
            </button>
          </form>
        </div>

        <p className="text-center mt-6 text-[#8892A4] text-sm">
          Déjà un compte ?{" "}
          <Link href="/login" className="font-semibold text-[#1E3A5F] hover:text-[#C9A84C] transition-colors">
            Se connecter
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
