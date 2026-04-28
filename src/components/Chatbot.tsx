'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  options?: { value: string; label: string }[];
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [conversationState, setConversationState] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Fermeture : on vide tout
  const handleClose = () => {
    setIsOpen(false);
    setMessages([]);
    setConversationState(null);
  };

  // Ouverture : si aucun message, on démarre
  useEffect(() => {
    if (isOpen && messages.length === 0 && !isLoading) {
      sendChoice('');
    }
  }, [isOpen, messages.length, isLoading]);

  const sendChoice = async (choice: string) => {
    if (isLoading) return;
    if (choice) {
      const userMsg: Message = { id: Date.now().toString(), text: choice, sender: 'user' };
      setMessages(prev => [...prev, userMsg]);
    }
    setIsLoading(true);
    try {
      const res = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ choice, conversationState })
      });
      const data = await res.json();
      setConversationState(data.newState);

      let botText = data.reply;
      let botOptions: { value: string; label: string }[] | undefined = undefined;
      if (typeof botText === 'string' && botText.startsWith('{')) {
        try {
          const parsed = JSON.parse(botText);
          if (parsed.type === 'question') {
            botText = parsed.text;
            botOptions = parsed.options;
          }
        } catch(e) {}
      }
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        sender: 'bot',
        options: botOptions
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      setMessages(prev => [...prev, { id: Date.now().toString(), text: "Erreur, veuillez réessayer.", sender: 'bot' }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Bouton flottant (chat fermé)
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-[#1E3A5F] text-white px-5 py-3 rounded-full shadow-lg hover:bg-[#152c47] transition-all duration-200 flex items-center gap-2 group"
        aria-label="Ouvrir l'assistant"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="font-medium text-sm hidden sm:inline">Assistant</span>
        <span className="absolute inset-0 rounded-full animate-ping bg-[#C9A84C] opacity-20 pointer-events-none"></span>
      </button>
    );
  }

  // Fenêtre ouverte
  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
      <div className="bg-[#1E3A5F] p-4 text-white flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Assistant Kaji 🐯</h2>
          <p className="text-sm text-[#C9A84C]">Trouvez la coque parfaite en 6 questions</p>
        </div>
        <button onClick={handleClose} className="text-white hover:text-gray-200 transition">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.length === 0 && !isLoading && (
          <div className="text-center text-gray-400 my-8">
            <p>👋 Bonjour !</p>
            <p className="text-sm">Cliquez sur une option pour commencer.</p>
          </div>
        )}
        {messages.map((msg) => (
          <div key={msg.id}>
            <div className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                msg.sender === 'user'
                  ? 'bg-[#1E3A5F] text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
              </div>
            </div>
            {msg.options && msg.options.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2 ml-2">
                {msg.options.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => sendChoice(opt.value)}
                    className="bg-[#F4F3EF] hover:bg-[#E4E2DC] text-[#1E3A5F] text-sm px-3 py-1 rounded-full transition border border-[#E4E2DC]"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-2xl px-4 py-2">...</div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}