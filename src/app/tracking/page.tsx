'use client';
import { useState } from 'react';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';

export default function TrackingPage() {
  const [orderId, setOrderId] = useState('');
  const [status, setStatus] = useState<{ step: number; message: string; details: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const steps = [
    { icon: Package, label: 'Commandée', value: 1 },
    { icon: Clock, label: 'Préparation', value: 2 },
    { icon: Truck, label: 'Expédiée', value: 3 },
    { icon: CheckCircle, label: 'Livrée', value: 4 },
  ];

  const simulateTracking = () => {
    if (!orderId.trim()) return;
    setLoading(true);
    setTimeout(() => {
      // Simulation selon le numéro
      let step = 1;
      let message = '';
      let details = '';
      if (orderId === '1234') {
        step = 4;
        message = 'Commande livrée ✅';
        details = 'Livrée le 15 avril 2025 à votre domicile.';
      } else if (orderId === '5678') {
        step = 3;
        message = 'En cours de livraison 🚚';
        details = 'Votre colis est chez le transporteur, livraison prévue demain.';
      } else {
        step = 2;
        message = 'Commande confirmée 👩‍💻';
        details = 'Nous préparons votre colis. Vous recevrez un email dès l’expédition.';
      }
      setStatus({ step, message, details });
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] py-12">
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-md overflow-hidden border border-[#E4E2DC] p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-px w-6 bg-[#C9A84C]" />
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C9A84C]">Suivi de commande</span>
        </div>
        <h1 className="text-2xl font-semibold mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#0F172A' }}>
          Où est ma commande ?
        </h1>
        <p className="text-sm text-gray-500 mb-6">Entrez votre numéro de commande pour suivre son état.</p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Ex: 1234, 5678"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="w-full px-4 py-3 border border-[#E4E2DC] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-white text-[#0F172A]"
          />
          <button
            onClick={simulateTracking}
            disabled={loading || !orderId.trim()}
            className="w-full bg-[#1E3A5F] text-white font-semibold py-3 rounded-xl hover:bg-[#152c47] transition disabled:opacity-50"
          >
            {loading ? 'Recherche...' : 'Suivre ma commande'}
          </button>
        </div>

        {status && (
          <div className="mt-8">
            <div className="flex justify-between mb-8">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = status.step >= step.value;
                const isCompleted = status.step > step.value;
                return (
                  <div key={idx} className="flex flex-col items-center flex-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      isActive ? 'bg-[#1E3A5F] text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      {isCompleted ? <CheckCircle className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                    </div>
                    <span className="text-xs mt-2 font-medium text-center">{step.label}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 p-4 bg-[#F4F3EF] rounded-xl border border-[#E4E2DC]">
              <p className="font-semibold text-[#0F172A]">{status.message}</p>
              <p className="text-sm text-gray-600 mt-1">{status.details}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}