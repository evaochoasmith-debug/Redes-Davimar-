import React, { useState, useRef, useEffect } from 'react';
import { InformativeCloudData } from '../types';
import {
  HelpCircle,
  X,
  Info,
  ShieldCheck,
  AlertTriangle,
  TrendingUp,
  Target,
  Sparkles,
} from 'lucide-react';

interface InformativeCloudProps {
  data: InformativeCloudData;
  label?: string;
  badgeClassName?: string;
  variant?: 'button' | 'inline' | 'floating';
}

export const InformativeCloud: React.FC<InformativeCloudProps> = ({
  data,
  label = 'Nube Informativa & Criterios Ads',
  badgeClassName = 'bg-[#E0F2FE] hover:bg-[#BAE6FD] text-[#0369A1] border-sky-200',
  variant = 'button',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Close on Escape or outside click
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block" ref={popoverRef}>
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all border shadow-2xs cursor-pointer active:scale-95 ${badgeClassName}`}
        title="Ver nube informativa: qué significa este dato, por qué importa, y qué evaluar antes y después de pagar Ads"
      >
        <HelpCircle className="w-3.5 h-3.5" />
        <span>{label}</span>
      </button>

      {/* Popover / Modal Overlay */}
      {isOpen && (
        <div className="absolute right-0 sm:right-auto sm:left-0 mt-2 z-50 w-[320px] sm:w-[420px] max-w-[90vw] bg-white rounded-2xl border border-slate-200 shadow-2xl p-4.5 text-xs text-slate-700 animate-in fade-in zoom-in-95 duration-150">
          {/* Header */}
          <div className="flex items-start justify-between gap-2 pb-3 border-b border-slate-100 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-[#0369A1] text-white flex items-center justify-center shrink-0 shadow-2xs">
                <Info className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0369A1] block">
                  Guía Técnica del Analista
                </span>
                <h4 className="text-sm font-bold text-slate-900 leading-tight">
                  {data.titulo}
                </h4>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-1">
            {/* Block 1: ¿Qué es? */}
            <div className="bg-[#F8FAFC] p-3 rounded-xl border border-slate-100">
              <span className="font-bold text-slate-900 flex items-center gap-1.5 mb-1 text-[11px]">
                <Info className="w-3.5 h-3.5 text-[#0369A1]" />
                1. ¿Qué información estamos mostrando?
              </span>
              <p className="text-slate-600 leading-relaxed">{data.queEs}</p>
            </div>

            {/* Block 2: ¿Por qué es relevante? */}
            <div className="bg-[#F0F9FF] p-3 rounded-xl border border-sky-100">
              <span className="font-bold text-[#0369A1] flex items-center gap-1.5 mb-1 text-[11px]">
                <Sparkles className="w-3.5 h-3.5 text-[#0369A1]" />
                2. ¿Por qué es relevante este número?
              </span>
              <p className="text-slate-700 leading-relaxed">{data.porQueImporta}</p>
            </div>

            {/* Block 3: Criterio Pre-Ads */}
            <div className="bg-[#FFF7ED] p-3 rounded-xl border border-[#FDBA74]/50">
              <span className="font-bold text-[#EA580C] flex items-center gap-1.5 mb-1 text-[11px]">
                <AlertTriangle className="w-3.5 h-3.5 text-[#EA580C]" />
                3. ¿Qué evaluar ANTES de pagar Ads? (Criterio Pre-Ads)
              </span>
              <p className="text-slate-700 leading-relaxed">{data.antesDePagarAds}</p>
            </div>

            {/* Block 4: Criterio Post-Ads */}
            <div className="bg-[#F0FDF4] p-3 rounded-xl border border-[#86EFAC]/70">
              <span className="font-bold text-[#15803D] flex items-center gap-1.5 mb-1 text-[11px]">
                <TrendingUp className="w-3.5 h-3.5 text-[#15803D]" />
                4. ¿Qué evaluar DESPUÉS de activar Ads? (Criterio Post-Ads)
              </span>
              <p className="text-slate-700 leading-relaxed">{data.despuesDeActivarAds}</p>
            </div>

            {/* Target Goal */}
            {data.metaRecomendada && (
              <div className="bg-[#1E293B] text-white p-3 rounded-xl flex items-start gap-2">
                <Target className="w-4 h-4 text-[#7DD3FC] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7DD3FC] block">
                    Meta Recomendada para @davimargroup
                  </span>
                  <p className="text-[11px] text-slate-200">{data.metaRecomendada}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
