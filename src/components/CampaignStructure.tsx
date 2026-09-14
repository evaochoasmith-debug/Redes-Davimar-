import React, { useState } from 'react';
import { ESTRUCTURA_CAMPANAS, NUBES_INFORMATIVAS } from '../data/metricsData';
import { CampaignTier } from '../types';
import { InformativeCloud } from './InformativeCloud';
import { FunnelInfoModal } from './FunnelInfoModal';
import { VisualFunnelChart } from './VisualFunnelChart';
import {
  Layers,
  Sparkles,
  MessageCircle,
  Copy,
  Check,
  Target,
  Sliders,
  CheckCircle2,
  PieChart,
  ArrowRight,
  Lightbulb,
  Zap,
  ShieldCheck,
  HelpCircle,
  Info,
  Filter,
} from 'lucide-react';

export const CampaignStructure: React.FC = () => {
  const [selectedTierIndex, setSelectedTierIndex] = useState<number>(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [modalTier, setModalTier] = useState<CampaignTier | null>(null);

  const selectedTier = ESTRUCTURA_CAMPANAS[selectedTierIndex];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="campaign-structure-section" className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Módulo 6 · Arquitectura de Embudo & Pauta
            </h2>
            <InformativeCloud data={NUBES_INFORMATIVAS.vistas_descubrimiento} label="Nube: Configuración Ads" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 tracking-tight">
            Estructura de Campañas Meta Ads & Segmentación B2B
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Arquitectura recomendada para Q4: <strong className="text-slate-800">Campaña Always-On de Reconocimiento + Campaña Continua de Conversión a WhatsApp</strong>.
          </p>
        </div>

        <span className="self-start sm:self-auto text-xs font-semibold px-3 py-1 bg-[#E0F2FE] text-[#0369A1] rounded-full flex items-center gap-1.5 border border-sky-200">
          <PieChart className="w-3.5 h-3.5 text-[#0369A1]" />
          Split Presupuestal: 40% Always-On / 40% Conversión / 20% Retargeting
        </span>
      </div>

      {/* Visual Funnel Chart & Interactive Simulator */}
      <VisualFunnelChart
        campaignTiers={ESTRUCTURA_CAMPANAS}
        selectedTierIndex={selectedTierIndex}
        onSelectTier={setSelectedTierIndex}
        onOpenModal={setModalTier}
      />

      {/* Sub-header for Campaign Tiers & Detailed Ad Sets */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-slate-100">
        <div>
          <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-[#0369A1]" />
            Niveles de Campaña en Meta Ads Manager & Conjuntos de Anuncios
          </h4>
          <p className="text-xs text-slate-500">
            Haz clic en cualquiera de las 3 fases para ver los públicos objetivo, copys de prueba y ganchos audiovisuales validados.
          </p>
        </div>
        <span className="text-xs text-slate-400 font-medium">
          Fase activa: <strong className="text-[#0369A1]">{selectedTier.siglas} ({selectedTier.etapa})</strong>
        </span>
      </div>

      {/* 3 Tier Funnel Cards with Help Question Mark Button */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {ESTRUCTURA_CAMPANAS.map((tier, idx) => {
          const isSelected = selectedTierIndex === idx;
          return (
            <div
              key={idx}
              onClick={() => setSelectedTierIndex(idx)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between relative ${
                isSelected
                  ? 'bg-[#1E293B] text-white border-slate-900 shadow-md ring-2 ring-[#7DD3FC]'
                  : 'bg-[#F8FAFC] hover:bg-slate-100/90 border-slate-200/80 text-slate-800'
              }`}
            >
              <div>
                {/* Header of Card with Question Mark Tooltip Button */}
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                        isSelected ? 'bg-white/10 text-[#7DD3FC]' : 'bg-white text-slate-700 border border-slate-200'
                      }`}
                    >
                      Nivel {idx + 1}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalTier(tier);
                      }}
                      className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full transition-all cursor-pointer active:scale-95 ${
                        isSelected
                          ? 'bg-[#0369A1] hover:bg-[#0284C7] text-white'
                          : 'bg-[#E0F2FE] hover:bg-[#BAE6FD] text-[#0369A1] border border-sky-200'
                      }`}
                      title={`Haz clic para ver qué significa ${tier.siglas}, para qué sirve y qué queremos con esto`}
                    >
                      <HelpCircle className="w-3 h-3" />
                      <span>¿Qué es {tier.siglas}?</span>
                    </button>
                  </div>
                  <span
                    className={`text-xs font-bold ${
                      isSelected ? 'text-[#86EFAC]' : 'text-[#0369A1]'
                    }`}
                  >
                    {tier.presupuestoSugeridoPct}% Presupuesto
                  </span>
                </div>

                <h4 className={`text-sm font-bold mb-1 ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                  {tier.etapa}
                </h4>
                
                {/* Educational Pill on Card */}
                <div className={`text-[11px] font-medium mb-2.5 p-2 rounded-lg ${
                  isSelected ? 'bg-white/5 text-slate-300' : 'bg-white text-slate-600 border border-slate-200/60'
                }`}>
                  <strong className={isSelected ? 'text-[#7DD3FC]' : 'text-[#0369A1]'}>{tier.siglas}:</strong> {tier.nombreFase}
                </div>

                <p className={`text-xs leading-relaxed mb-3 ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                  Objetivo: <strong className={isSelected ? 'text-white' : 'text-slate-800'}>{tier.objetivoMeta}</strong>
                </p>

                <div className="text-[11px] space-y-1.5">
                  <span className={`font-semibold block ${isSelected ? 'text-slate-400' : 'text-slate-500'}`}>
                    KPIs de Control:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {tier.kpisClave.map((kpi, kIdx) => (
                      <span
                        key={kIdx}
                        className={`text-[10px] px-2 py-0.5 rounded-md font-medium ${
                          isSelected ? 'bg-slate-800 text-slate-300' : 'bg-white text-slate-700 border border-slate-200/80 shadow-2xs'
                        }`}
                      >
                        {kpi}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`mt-4 pt-3 border-t text-[11px] flex items-center justify-between font-semibold ${
                isSelected ? 'border-slate-800 text-[#7DD3FC]' : 'border-slate-200/60 text-[#0369A1]'
              }`}>
                <span>Ver configuración detallada</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Tier Deep Dive & Copy Engine */}
      {selectedTier && (
        <div className="p-5 bg-[#F0F9FF] rounded-2xl border border-sky-100 shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-sky-200/60">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-[#0369A1] uppercase tracking-wider">
                  Configuración Recomendada en Meta Ads Manager
                </span>
                <button
                  onClick={() => setModalTier(selectedTier)}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white hover:bg-sky-50 text-[10px] font-bold text-[#0369A1] border border-sky-200 shadow-2xs cursor-pointer"
                >
                  <HelpCircle className="w-3 h-3 text-[#0369A1]" />
                  Explicación {selectedTier.siglas}
                </button>
              </div>
              <h4 className="text-base font-bold text-slate-900 mt-0.5">{selectedTier.etapa}</h4>
            </div>
            <div className="text-xs bg-white px-3 py-1.5 rounded-xl border border-sky-200 shadow-2xs font-medium text-slate-700">
              Formato Creativo Principal: <strong className="text-[#0369A1] font-bold">{selectedTier.formatoCreativo}</strong>
            </div>
          </div>

          {/* Quick Educational Explainer Banner in Selected Tier */}
          <div className="bg-white p-4 rounded-xl border border-sky-100 shadow-2xs">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-slate-100">
                <span className="font-bold text-slate-900 block text-[11px] mb-0.5">
                  1. ¿Qué significan las siglas?
                </span>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  <strong>{selectedTier.siglas}:</strong> {selectedTier.significadoSiglas}
                </p>
              </div>
              <div className="p-2.5 rounded-lg bg-[#F0FDF4] border border-emerald-100">
                <span className="font-bold text-[#15803D] block text-[11px] mb-0.5">
                  2. ¿Para qué sirve?
                </span>
                <p className="text-slate-700 text-[11px] leading-relaxed">
                  {selectedTier.paraQueSirve}
                </p>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FFF7ED] border border-amber-100">
                <span className="font-bold text-[#C2410C] block text-[11px] mb-0.5">
                  3. ¿Qué queremos lograr?
                </span>
                <p className="text-slate-700 text-[11px] leading-relaxed">
                  {selectedTier.queQueremosLograr}
                </p>
              </div>
            </div>
          </div>

          {/* Audiences Breakdown */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <Target className="w-4 h-4 text-[#0369A1]" /> Segmentación & Audiencias Asignadas:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              {selectedTier.audiencias.map((aud, aIdx) => (
                <div key={aIdx} className="bg-white p-3.5 rounded-xl border border-sky-100 shadow-2xs">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0369A1] shrink-0 mt-1.5" />
                    <span className="text-slate-700 leading-relaxed font-medium">{aud}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ad Copy & Hook Angle */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            {/* Copy Template */}
            <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-2.5 relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4 text-[#16A34A]" /> Plantilla de Copy para Anuncio B2B:
                </span>
                <button
                  onClick={() => handleCopy(selectedTier.ejemploCopy, selectedTierIndex)}
                  className="text-[11px] font-semibold text-[#0369A1] hover:text-[#0c4a6e] flex items-center gap-1 bg-[#E0F2FE] px-2.5 py-1 rounded-lg border border-sky-200 transition-all active:scale-95 cursor-pointer"
                >
                  {copiedIndex === selectedTierIndex ? (
                    <>
                      <Check className="w-3 h-3 text-[#16A34A]" /> Copiado
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" /> Copiar Copy
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed bg-[#F8FAFC] p-3.5 rounded-xl border border-slate-100 font-sans italic">
                "{selectedTier.ejemploCopy}"
              </p>
            </div>

            {/* Visual Hook & Direct Angle */}
            <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-2.5">
              <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-[#EA580C]" /> Gancho Visual & Concepto en Pantalla:
              </span>
              <p className="text-xs text-slate-700 leading-relaxed bg-[#FFF7ED] p-3.5 rounded-xl border border-[#FDBA74]/50">
                {selectedTier.ganchoVisual}
              </p>
              <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-1">
                <CheckCircle2 className="w-3 h-3 text-[#16A34A]" />
                Validado con los videos de montacargas, flota y rotación en PDV de mayor rendimiento orgánico.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* A/B Testing Strategy Blueprint */}
      <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200 space-y-3">
        <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#0369A1]" />
          Protocolo de Lanzamiento: Matriz de Pruebas A/B para los Primeros 30 Días
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
            <span className="font-bold text-slate-900 block mb-1">Semana 1-2: Test de Ganchos (Hook Test)</span>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Probar 3 ganchos iniciales de video con idéntico cuerpo para identificar cuál genera un Thumbstop Rate &gt; 65% con menor CPM.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
            <span className="font-bold text-slate-900 block mb-1">Semana 3: Test de Formato de Conversión</span>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Comparar Formulario Instantáneo de Meta vs. Click-to-WhatsApp directo para medir costo por lead calificado y velocidad de respuesta comercial.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
            <span className="font-bold text-slate-900 block mb-1">Semana 4: Escala & Apagado de Ineficiencias</span>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Reasignar el 80% del presupuesto a los 2 anuncios ganadores y pausar creativos con CPL superior a $12 USD.
            </p>
          </div>
        </div>
      </div>

      {/* Funnel Explanatory Modal */}
      {modalTier && (
        <FunnelInfoModal
          tier={modalTier}
          isOpen={!!modalTier}
          onClose={() => setModalTier(null)}
        />
      )}
    </section>
  );
};

