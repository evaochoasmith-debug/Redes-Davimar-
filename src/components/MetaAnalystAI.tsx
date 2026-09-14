import React, { useState } from 'react';
import {
  Sparkles,
  Send,
  Bot,
  User,
  HelpCircle,
  Lightbulb,
  CheckCircle2,
  RefreshCw,
  X,
  MessageSquare,
} from 'lucide-react';

interface MetaAnalystAIProps {
  onClose?: () => void;
  isModal?: boolean;
}

interface Message {
  role: 'assistant' | 'user';
  text: string;
  timestamp: string;
}

export const MetaAnalystAI: React.FC<MetaAnalystAIProps> = ({ onClose, isModal = false }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: '¡Hola! Soy tu Analista Senior de Meta Ads para **@davimargroup**. He auditado tus métricas de Abril-Mayo vs. Junio-Julio. ¿Qué duda estratégica o técnica tienes sobre el marco de medición, segmentación B2B o el primer lanzamiento de pauta?',
      timestamp: 'Ahora',
    },
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sugerencias = [
    '¿Cómo captar marcas de Colombia, España o Italia con Meta & LinkedIn Ads?',
    '¿Qué contenidos generan máxima confianza a un Export Manager extranjero?',
    '¿Cómo estructurar el primer test piloto de $200 USD para @davimargroup?',
    '¿Qué gancho de video corto funciona mejor para gerentes de compras y retail?',
    '¿Cómo rastrear con CAPI y Pixel las ventas B2B que cierran en WhatsApp?',
  ];

  const handleSendMessage = async (queryText?: string) => {
    const textToSend = queryText || inputQuery;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: Message = {
      role: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/meta-analyst', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: textToSend,
          context: {
            account: '@davimargroup',
            segment: 'B2B Trade, PDV & Retail',
            baselineQ2: 'Abril: 13.4k vistas, 33% no seguidores, +107 seguidores',
            consolidationQ2: 'Julio: 17.3k vistas, 44% no seguidores, +132 seguidores',
            topPosts: 'Impulso en PDV (1.993 vistas) y Checklist de mercaderistas (3.210 vistas)',
          },
        }),
      });

      const data = await res.json();

      const botMsg: Message = {
        role: 'assistant',
        text: data.reply || 'He procesado tu consulta. En B2B para @davimargroup te recomiendo enfocar el 70% del presupuesto en retargeting de video viewers y tráfico directo a WhatsApp comercial.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      const errorMsg: Message = {
        role: 'assistant',
        text: 'Como analista de Meta para @davimargroup, te sugiero priorizar campañas de generación de clientes potenciales con formularios que filtren por número de puntos de venta y enlace directo a WhatsApp.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col ${isModal ? 'h-[600px] max-h-[85vh]' : 'h-[500px]'}`}>
      {/* Top Header */}
      <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-[#1E293B] text-white rounded-t-2xl">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-white/10 text-[#7DD3FC] flex items-center justify-center shadow-xs">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
              Copiloto Analista Meta Ads B2B
              <span className="w-2 h-2 rounded-full bg-[#86EFAC] animate-pulse" />
            </h4>
            <p className="text-[11px] text-slate-300">Consultoría estratégica personalizada para @davimargroup</p>
          </div>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Suggested Quick Prompts */}
      <div className="p-2.5 bg-[#F8FAFC] border-b border-slate-100 overflow-x-auto flex items-center gap-1.5 text-xs">
        <span className="text-[10px] uppercase font-bold text-slate-400 shrink-0 ml-1">Sugerencias:</span>
        {sugerencias.map((sug, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(sug)}
            className="shrink-0 px-3 py-1 bg-white hover:bg-[#E0F2FE] hover:text-[#0369A1] text-slate-700 rounded-full border border-slate-200/80 text-[11px] font-semibold transition-all shadow-2xs cursor-pointer"
          >
            {sug}
          </button>
        ))}
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#F8FAFC]/50 text-xs">
        {messages.map((msg, idx) => {
          const isBot = msg.role === 'assistant';
          return (
            <div
              key={idx}
              className={`flex gap-2.5 max-w-[90%] ${isBot ? 'self-start mr-auto' : 'self-end ml-auto flex-row-reverse'}`}
            >
              <div
                className={`w-7 h-7 rounded-xl shrink-0 flex items-center justify-center text-xs font-bold ${
                  isBot ? 'bg-[#E0F2FE] text-[#0369A1]' : 'bg-[#1E293B] text-white'
                }`}
              >
                {isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
              </div>

              <div className="space-y-1">
                <div
                  className={`p-3.5 rounded-2xl leading-relaxed whitespace-pre-line ${
                    isBot
                      ? 'bg-white text-slate-800 border border-slate-100 shadow-sm'
                      : 'bg-[#1E293B] text-white shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
                <div className={`text-[10px] text-slate-400 ${isBot ? 'text-left pl-1' : 'text-right pr-1'}`}>
                  {msg.timestamp}
                </div>
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-center gap-2 text-slate-500 text-xs py-2 pl-2">
            <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#0369A1]" />
            <span>El Analista de Meta está calculando la recomendación...</span>
          </div>
        )}
      </div>

      {/* Input Bar */}
      <div className="p-3 border-t border-slate-100 bg-white rounded-b-2xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            placeholder="Pregunta a tu Analista sobre presupuesto, audiencias B2B o copys..."
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            className="flex-1 px-3.5 py-2 text-xs bg-[#F8FAFC] border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7DD3FC]/50 focus:border-[#0369A1]"
          />
          <button
            type="submit"
            disabled={!inputQuery.trim() || isLoading}
            className="px-4 py-2 bg-[#0369A1] hover:bg-[#0284C7] disabled:opacity-50 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs shrink-0 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Consultar</span>
          </button>
        </form>
      </div>
    </div>
  );
};
