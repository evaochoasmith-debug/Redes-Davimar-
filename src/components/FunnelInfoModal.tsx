import React, { useState, useRef, useEffect } from 'react';
import { CampaignTier } from '../types';
import {
  HelpCircle,
  X,
  Info,
  Layers,
  Sparkles,
  Target,
  ArrowDown,
  CheckCircle2,
  Zap,
} from 'lucide-react';

interface FunnelInfoModalProps {
  tier: CampaignTier;
  isOpen: boolean;
  onClose: () => void;
}

export const FunnelInfoModal: React.FC<FunnelInfoModalProps> = ({ tier, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        ref={modalRef}
        className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-slate-100 overflow-hidden text-slate-800 animate-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="bg-[#1E293B] text-white p-5 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0369A1] flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm border border-sky-400/30">
              {tier.siglas}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#7DD3FC]">
                  Glosario & Metodología de Embudo
                </span>
                <span className="text-white/40 text-xs">•</span>
                <span className="text-[10px] font-semibold text-[#86EFAC]">
                  Fase: {tier.siglas}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                {tier.nombreFase}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-4 max-h-[75vh] overflow-y-auto text-xs">
          {/* 1. Significado de las siglas */}
          <div className="p-3.5 bg-[#F0F9FF] rounded-xl border border-sky-200/80">
            <div className="flex items-center gap-2 mb-1 text-[#0369A1] font-bold text-[11px] uppercase tracking-wider">
              <Info className="w-4 h-4 text-[#0369A1] shrink-0" />
              1. ¿Qué significan las siglas {tier.siglas}?
            </div>
            <p className="text-slate-800 font-semibold text-xs leading-relaxed">
              {tier.significadoSiglas}
            </p>
          </div>

          {/* 2. ¿Qué es en palabras sencillas? */}
          <div className="p-3.5 bg-[#F8FAFC] rounded-xl border border-slate-200">
            <div className="flex items-center gap-2 mb-1 text-slate-900 font-bold text-[11px] uppercase tracking-wider">
              <Layers className="w-4 h-4 text-[#0369A1] shrink-0" />
              2. ¿Qué significa esta etapa para @davimargroup?
            </div>
            <p className="text-slate-600 leading-relaxed">
              {tier.queEs}
            </p>
          </div>

          {/* 3. ¿Para qué sirve? */}
          <div className="p-3.5 bg-[#F0FDF4] rounded-xl border border-emerald-200">
            <div className="flex items-center gap-2 mb-1 text-[#15803D] font-bold text-[11px] uppercase tracking-wider">
              <Zap className="w-4 h-4 text-[#15803D] shrink-0" />
              3. ¿Para qué sirve en nuestro negocio B2B?
            </div>
            <p className="text-slate-700 leading-relaxed">
              {tier.paraQueSirve}
            </p>
          </div>

          {/* 4. ¿Qué queremos lograr con esto? */}
          <div className="p-3.5 bg-[#FFF7ED] rounded-xl border border-amber-200">
            <div className="flex items-center gap-2 mb-1 text-[#C2410C] font-bold text-[11px] uppercase tracking-wider">
              <Target className="w-4 h-4 text-[#C2410C] shrink-0" />
              4. ¿Qué queremos lograr exactamente con esto?
            </div>
            <p className="text-slate-800 font-medium leading-relaxed">
              {tier.queQueremosLograr}
            </p>
          </div>

          {/* Practical Application Summary */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-500 text-[11px] flex items-center justify-between">
            <span>Objetivo en Meta Ads: <strong className="text-slate-800">{tier.objetivoMeta}</strong></span>
            <span className="font-bold text-[#0369A1]">{tier.presupuestoSugeridoPct}% del presupuesto</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            Diseñado para que cualquier miembro del equipo entienda el embudo comercial.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#1E293B] hover:bg-slate-900 text-white text-xs font-semibold transition-all shadow-xs cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
