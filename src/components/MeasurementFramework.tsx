import React, { useState } from 'react';
import { MARCO_MEDICION_DEFINICIONES } from '../data/metricsData';
import { MetricDefinition } from '../types';
import {
  ShieldCheck,
  Scale,
  Sparkles,
  Calculator,
  Sliders,
  DollarSign,
  Layers,
  CheckCircle2,
  Lock,
  Network,
  Share2,
} from 'lucide-react';

export const MeasurementFramework: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<MetricDefinition>(MARCO_MEDICION_DEFINICIONES[2]); // CPL default

  return (
    <section id="measurement-framework-section" className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
            Módulo 5 · Gobernanza & Control Presupuestario
          </h2>
          <h3 className="text-lg font-bold text-slate-900 tracking-tight">
            Marco de Medición, Transparencia & Objetivos de Conversión
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Métricas esenciales para asegurar que cada dólar invertido tenga trazabilidad y justificación financiera.
          </p>
        </div>

        <span className="self-start sm:self-auto text-xs font-semibold px-3 py-1 bg-[#DCFCE7] text-[#15803D] rounded-full flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
          100% Transparencia en la Ejecución
        </span>
      </div>

      {/* Grid of Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {MARCO_MEDICION_DEFINICIONES.map((metric) => {
          const isSelected = selectedMetric.codigo === metric.codigo;
          return (
            <div
              key={metric.codigo}
              onClick={() => setSelectedMetric(metric)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#1E293B] text-white border-slate-900 shadow-md ring-2 ring-[#7DD3FC]'
                  : 'bg-[#F8FAFC] hover:bg-slate-100/90 border-slate-200/80 text-slate-800'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span
                    className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                      isSelected ? 'bg-white/10 text-[#7DD3FC]' : 'bg-white text-slate-700 border border-slate-200'
                    }`}
                  >
                    {metric.codigo}
                  </span>
                  <span
                    className={`text-xs font-bold ${
                      isSelected ? 'text-[#86EFAC]' : 'text-[#0369A1]'
                    }`}
                  >
                    Meta: {metric.rangoEsperadoB2B}
                  </span>
                </div>
                <h4 className={`text-sm font-bold mb-1.5 ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                  {metric.nombre}
                </h4>
                <p className={`text-xs line-clamp-2 leading-relaxed ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                  {metric.porQueImporta}
                </p>
              </div>

              <div className={`mt-3 pt-2.5 border-t text-[11px] flex items-center justify-between font-mono ${
                isSelected ? 'border-slate-800 text-slate-400' : 'border-slate-200/60 text-slate-500'
              }`}>
                <span>Fórmula:</span>
                <span className="truncate max-w-[180px]">{metric.formula}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Metric Deep Dive */}
      <div className="p-5 bg-[#F0FDF4] rounded-2xl border border-[#86EFAC]/60 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 pb-3 border-b border-emerald-200/60">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-[#DCFCE7] text-[#15803D] flex items-center justify-center font-bold text-xs">
              {selectedMetric.codigo}
            </span>
            <div>
              <h4 className="text-sm font-bold text-slate-900">{selectedMetric.nombre}</h4>
              <span className="text-[11px] text-slate-500 font-mono">Fórmula: {selectedMetric.formula}</span>
            </div>
          </div>
          <div className="text-xs bg-white px-3 py-1.5 rounded-xl border border-emerald-200 shadow-2xs">
            <span className="text-slate-500 font-medium">Rango Objetivo en Pauta B2B: </span>
            <strong className="text-[#15803D] font-bold">{selectedMetric.rangoEsperadoB2B}</strong>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="space-y-1">
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A]" /> ¿Por qué es fundamental para @davimargroup?
            </span>
            <p className="text-slate-700 leading-relaxed pl-5.5">{selectedMetric.porQueImporta}</p>
          </div>

          <div className="space-y-1 bg-white p-3.5 rounded-xl border border-emerald-100 shadow-2xs">
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#0369A1]" /> Impacto en Transparencia & Eficiencia de Presupuesto:
            </span>
            <p className="text-slate-700 leading-relaxed font-medium">{selectedMetric.impactoPresupuesto}</p>
          </div>
        </div>
      </div>

      {/* Technical Infrastructure: Tracking Stack */}
      <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200 space-y-3">
        <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
          <Network className="w-4 h-4 text-[#0369A1]" />
          Infraestructura Técnica Requerida Previo a Invertir $1 Dólar en Ads
        </h4>
        <p className="text-xs text-slate-600 leading-relaxed">
          Para garantizar cero fugas de presupuesto y total precisión en la atribución de contratos comerciales:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
          <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-1.5">
            <div className="flex items-center gap-1.5 text-slate-900 font-bold">
              <Lock className="w-3.5 h-3.5 text-[#0369A1]" /> 1. Meta Pixel & CAPI (Server-Side)
            </div>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Instalación de la API de Conversiones para superar restricciones de cookies en iOS/Android y rastrear con 100% de precisión la navegación de gerentes de compra.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-1.5">
            <div className="flex items-center gap-1.5 text-slate-900 font-bold">
              <Share2 className="w-3.5 h-3.5 text-[#16A34A]" /> 2. Eventos Personalizados B2B
            </div>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Configuración de eventos clave: <code className="bg-slate-100 px-1.5 py-0.5 rounded-md text-[10px] font-mono">Lead_PDV</code>, <code className="bg-slate-100 px-1.5 py-0.5 rounded-md text-[10px] font-mono">Contact_WhatsApp</code> y <code className="bg-slate-100 px-1.5 py-0.5 rounded-md text-[10px] font-mono">Download_Checklist</code>.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-1.5">
            <div className="flex items-center gap-1.5 text-slate-900 font-bold">
              <Scale className="w-3.5 h-3.5 text-[#EA580C]" /> 3. Protocolo de Calificación
            </div>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Formularios instantáneos con preguntas filtro (ej. <em>«¿Cuántos puntos de venta supervisas?»</em>) para descartar contactos no calificados antes de enviar a comerciales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
