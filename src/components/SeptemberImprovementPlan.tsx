import React, { useState } from 'react';
import { OPORTUNIDADES_MEJORA_SEPTIEMBRE } from '../data/metricsData';
import { ImprovementOpportunity } from '../types';
import { generateDashboardPdf } from '../utils/generateDashboardPdf';
import {
  Sparkles,
  AlertTriangle,
  TrendingUp,
  Clock,
  Video,
  Smartphone,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
  Target,
  FileText,
  ExternalLink,
  Sliders,
  Flame,
  FileDown,
} from 'lucide-react';

export const SeptemberImprovementPlan: React.FC = () => {
  const [selectedOpportunityId, setSelectedOpportunityId] = useState<number>(1);
  const [completedActions, setCompletedActions] = useState<Record<string, boolean>>({});

  const selectedOpp =
    OPORTUNIDADES_MEJORA_SEPTIEMBRE.find((o) => o.id === selectedOpportunityId) ||
    OPORTUNIDADES_MEJORA_SEPTIEMBRE[0];

  const toggleAction = (key: string) => {
    setCompletedActions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const totalActionsCount = OPORTUNIDADES_MEJORA_SEPTIEMBRE.reduce(
    (acc, opp) => acc + opp.planAccion.length,
    0
  );
  const checkedActionsCount = Object.values(completedActions).filter(Boolean).length;
  const progressPercentage = Math.round((checkedActionsCount / totalActionsCount) * 100);

  return (
    <section
      id="september-plan-section"
      className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-8"
    >
      {/* Header with August Context Badge */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FEF3C7] text-[#B45309] border border-amber-200">
              Auditado con Métricas Reales de Agosto 2026
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#DCFCE7] text-[#15803D]">
              Plan Estratégico de Septiembre
            </span>
            <span className="text-xs font-semibold text-slate-400">@davimargroup B2B</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            5 Oportunidades de Mejora Prioritarias para Septiembre
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-3xl">
            A partir del análisis de las métricas de agosto y el comportamiento de los meses previos, se
            estructuran cinco directrices inmediatas para reactivar el algoritmo de Meta y preparar la
            temporada alta de Q4.
          </p>
        </div>

        {/* Action checklist progress indicator & Download PDF */}
        <div className="flex items-center gap-2.5 flex-wrap shrink-0">
          <button
            onClick={() => generateDashboardPdf()}
            className="px-3.5 py-2 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-xl text-xs font-bold transition-all shadow-xs active:scale-95 cursor-pointer flex items-center gap-1.5"
            title="Descargar auditoría completa y plan en PDF"
          >
            <FileDown className="w-3.5 h-3.5 text-white" />
            Descargar PDF
          </button>

          <div className="bg-[#F8FAFC] p-3 rounded-xl border border-slate-200 flex items-center gap-3">
            <div className="text-right">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Avance Tareas</span>
              <span className="text-xs font-bold text-slate-800">
                {checkedActionsCount}/{totalActionsCount} ({progressPercentage}%)
              </span>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-[#16A34A] flex items-center justify-center font-bold text-xs text-[#16A34A]">
              {progressPercentage}%
            </div>
          </div>
        </div>
      </div>

      {/* August Diagnostic Snapshot Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        <div className="p-4 bg-[#FEF2F2] rounded-xl border border-red-100">
          <div className="flex items-center justify-between text-red-700 mb-1">
            <span className="text-[10px] uppercase font-bold tracking-wider">Alerta Algorítmica</span>
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div className="text-lg font-bold text-red-950">5 Piezas Totales</div>
          <p className="text-[11px] text-red-800 mt-0.5 leading-snug">
            3 reels, 1 post, 1 historia. Meta advirtió sobre la pérdida de ritmo de publicación.
          </p>
        </div>

        <div className="p-4 bg-[#F0FDF4] rounded-xl border border-emerald-100">
          <div className="flex items-center justify-between text-emerald-700 mb-1">
            <span className="text-[10px] uppercase font-bold tracking-wider">Conversión a Perfil</span>
            <Target className="w-4 h-4" />
          </div>
          <div className="text-lg font-bold text-emerald-950">48,2% Récord B2B</div>
          <p className="text-[11px] text-emerald-800 mt-0.5 leading-snug">
            942 visitas al perfil de 1.953 espectadores únicos. Curiosidad comercial altísima.
          </p>
        </div>

        <div className="p-4 bg-[#F0F9FF] rounded-xl border border-sky-100">
          <div className="flex items-center justify-between text-[#0369A1] mb-1">
            <span className="text-[10px] uppercase font-bold tracking-wider">Reel Estrella #1</span>
            <Flame className="w-4 h-4 text-[#EA580C]" />
          </div>
          <div className="text-lg font-bold text-sky-950">2.400 Vistas</div>
          <p className="text-[11px] text-sky-800 mt-0.5 leading-snug">
            Descarga con montacargas en patio: 88 likes, 14 compartidos y +5 seguidores directos.
          </p>
        </div>

        <div className="p-4 bg-[#FAF5FF] rounded-xl border border-purple-100">
          <div className="flex items-center justify-between text-purple-700 mb-1">
            <span className="text-[10px] uppercase font-bold tracking-wider">Días y Horarios Pico</span>
            <Clock className="w-4 h-4" />
          </div>
          <div className="text-lg font-bold text-purple-950">Lun, Jue, Dom</div>
          <p className="text-[11px] text-purple-800 mt-0.5 leading-snug">
            Franja dorada: 6:00 PM a 9:00 PM. Programar piezas entre 5:30 PM y 6:30 PM.
          </p>
        </div>
      </div>

      {/* 5 Opportunities Interactive Navigator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Navigation Buttons for the 5 Opportunities */}
        <div className="lg:col-span-4 space-y-2.5">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block px-1">
            Selecciona una Oportunidad para Auditar:
          </span>
          {OPORTUNIDADES_MEJORA_SEPTIEMBRE.map((opp) => {
            const isSelected = selectedOpportunityId === opp.id;
            return (
              <button
                key={opp.id}
                onClick={() => setSelectedOpportunityId(opp.id)}
                className={`w-full text-left p-3.5 rounded-xl transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-[#1E293B] text-white border-slate-900 shadow-sm'
                    : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    Oportunidad {opp.numero}
                  </span>
                  <span
                    className={`text-[10px] font-semibold ${
                      isSelected ? 'text-amber-300' : 'text-slate-400'
                    }`}
                  >
                    {opp.categoria}
                  </span>
                </div>
                <div
                  className={`text-xs font-bold leading-snug line-clamp-2 ${
                    isSelected ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {opp.titulo}
                </div>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200/40 text-[10px]">
                  <span className={isSelected ? 'text-slate-300' : 'text-slate-500'}>
                    {opp.planAccion.length} tareas prácticas
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: In-depth Diagnostic & Action Plan for the Selected Opportunity */}
        <div className="lg:col-span-8 bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200 space-y-6">
          {/* Header of Active Opportunity */}
          <div className="border-b border-slate-200 pb-4">
            <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#0369A1] text-white">
                Prioridad #{selectedOpp.numero} · {selectedOpp.categoria}
              </span>
              <span className="text-xs font-bold text-slate-600 px-2.5 py-0.5 rounded-full bg-slate-200/80">
                {selectedOpp.badge}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
              {selectedOpp.titulo}
            </h3>
          </div>

          {/* Diagnostic & Improvement Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-xl border border-red-100 shadow-2xs">
              <div className="flex items-center gap-1.5 text-xs font-bold text-red-700 mb-2">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                Diagnóstico de Agosto
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {selectedOpp.diagnostico}
              </p>
              <div className="mt-3 pt-2.5 border-t border-slate-100 text-[11px] text-slate-500">
                <strong>Data de soporte:</strong> {selectedOpp.metricasRespaldo}
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-emerald-100 shadow-2xs">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#15803D] mb-2">
                <Sparkles className="w-4 h-4 text-[#16A34A]" />
                Oportunidad de Mejora para Septiembre
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {selectedOpp.oportunidadMejora}
              </p>
              <div className="mt-3 pt-2.5 border-t border-slate-100 text-[11px] text-emerald-800 font-semibold">
                <strong>Meta KPI:</strong> {selectedOpp.kpisObjetivo}
              </div>
            </div>
          </div>

          {/* Action Plan Checklist */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                Plan de Acción Inmediato (Checklist Interactivo):
              </h4>
              <span className="text-[10px] text-slate-400">Marca las acciones ejecutadas</span>
            </div>

            <div className="space-y-2.5">
              {selectedOpp.planAccion.map((tarea, idx) => {
                const itemKey = `${selectedOpp.id}-${idx}`;
                const isChecked = !!completedActions[itemKey];

                return (
                  <div
                    key={idx}
                    onClick={() => toggleAction(itemKey)}
                    className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                      isChecked
                        ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                        : 'bg-slate-50/60 hover:bg-slate-50 border-slate-200/80 text-slate-800'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}}
                      className="mt-0.5 rounded text-[#16A34A] focus:ring-[#16A34A] cursor-pointer"
                    />
                    <div className="text-xs leading-relaxed select-none flex-1">
                      <span className={isChecked ? 'line-through opacity-80' : 'font-medium'}>
                        {tarea}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tactical Recommendation Callout */}
          <div className="p-4 bg-[#1E293B] text-white rounded-xl flex items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2.5">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                <strong>Recomendación Ejecutiva:</strong> Implementar estas 5 directrices simultáneamente
                durante las primeras dos semanas de septiembre para re-entrenar la tasa de distribución del algoritmo de Meta.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Summary Table of the 5 Opportunities */}
      <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#0369A1]" />
            Matriz Consolidada de las 5 Directrices de Septiembre
          </h3>
          <span className="text-xs text-slate-500 font-medium">Hoja de Ruta Operativa</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {OPORTUNIDADES_MEJORA_SEPTIEMBRE.map((opp) => (
            <div
              key={opp.id}
              className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-[11px] flex items-center justify-center">
                    {opp.numero}
                  </span>
                  <span className="text-[10px] font-bold text-slate-500">{opp.categoria}</span>
                </div>
                <h4 className="text-xs font-bold text-slate-900 mb-1.5 leading-snug">
                  {opp.titulo}
                </h4>
                <p className="text-[11px] text-slate-600 line-clamp-4 leading-relaxed">
                  {opp.oportunidadMejora}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-[#0369A1] font-semibold">
                🎯 {opp.kpisObjetivo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
