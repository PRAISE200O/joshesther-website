
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const AiConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Welcome to Joshesther Olive Hotels. I am your personal luxury concierge. How may I assist you with your stay in Ikeja today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    try {
      // Fix: Strictly use process.env.API_KEY directly without fallbacks as per @google/genai guidelines.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are the AI Concierge for Joshesther Olive Hotels, a premium 4-star luxury hotel in Opebi, Ikeja, Lagos. 
          Your tone is sophisticated, warm, and professional. 
          Provide helpful information about:
          1. The hotel (11b Samuel Awoniyi Street, Ikeja).
          2. Room prices (starting at 70,000 NGN).
          3. Local Ikeja attractions (Ikeja City Mall, Kalakuta Museum, local dining).
          4. Airport transfers and general Lagos travel tips.
          Keep responses concise and elegant.`,
        },
      });

      setMessages(prev => [...prev, { role: 'bot', text: response.text || 'I apologize, I am unable to assist at the moment. Please contact our front desk at 0906 000 4674.' }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'bot', text: 'I encountered a slight issue. Please try again or reach out to our staff directly.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-olive text-gold rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 border-2 border-gold/20"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[320px] md:w-[400px] h-[500px] bg-white shadow-2xl rounded-lg border border-beige-dark flex flex-col overflow-hidden animate-fade-in">
          <div className="p-4 bg-olive text-white flex items-center">
            <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-charcoal font-bold mr-3">J</div>
            <div>
              <h4 className="text-sm font-bold tracking-wide">Olive AI Concierge</h4>
              <p className="text-[10px] text-gold uppercase tracking-widest font-bold">Online & Ready to assist</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-beige/30">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  m.role === 'user' 
                  ? 'bg-gold text-charcoal rounded-tr-none' 
                  : 'bg-white border border-beige-dark text-charcoal rounded-tl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-beige-dark p-3 rounded-lg rounded-tl-none shadow-sm">
                   <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gold rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gold rounded-full animate-bounce [animation-delay:-.15s]"></div>
                      <div className="w-2 h-2 bg-gold rounded-full animate-bounce [animation-delay:-.3s]"></div>
                   </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-beige-dark bg-white">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Ask me anything..."
                className="flex-grow outline-none text-sm py-2 px-1"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend}
                disabled={isTyping || !input.trim()}
                className="text-gold disabled:opacity-30 p-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiConcierge;
