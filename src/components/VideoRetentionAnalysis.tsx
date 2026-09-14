import React, { useState } from 'react';
import { CURVA_RETENCION_VIDEO } from '../data/metricsData';
import { VideoRetentionPoint } from '../types';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';
import {
  Film,
  Play,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Target,
} from 'lucide-react';

export const VideoRetentionAnalysis: React.FC = () => {
  const [selectedPointIndex, setSelectedPointIndex] = useState<number>(1); // Hook 3s default
  const selectedPoint = CURVA_RETENCION_VIDEO[selectedPointIndex];

  return (
    <section id="video-retention-section" className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
            Módulo 4 · Consumo Audiovisual & Retención
          </h2>
          <h3 className="text-lg font-bold text-slate-900 tracking-tight">
            Tiempo de Visualización & Curva de Retención de Video (Watch Time)
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Análisis segundo a segundo del comportamiento de los decisores B2B al consumir Reels y videos de @davimargroup.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-3 py-1 bg-[#FAF5FF] text-[#9333EA] rounded-full border border-[#E9D5FF] flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#9333EA]" />
            Promedio Retención: 10.4s (Superior al Benchmark)
          </span>
        </div>
      </div>

      {/* Main Retention Chart */}
      <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#EA580C]" /> Curva de Retención: @davimargroup vs. Benchmark B2B
          </span>
          <span className="text-[11px] text-slate-500">
            Haz clic en los puntos o usa la barra inferior para ver el diagnóstico de cada segundo
          </span>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={CURVA_RETENCION_VIDEO}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              onClick={(e: any) => {
                if (e && e.activeTooltipIndex !== undefined) {
                  setSelectedPointIndex(e.activeTooltipIndex);
                }
              }}
            >
              <defs>
                <linearGradient id="colorDavimar" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7DD3FC" stopOpacity={0.7} />
                  <stop offset="95%" stopColor="#7DD3FC" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id="colorBenchmark" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#CBD5E1" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#CBD5E1" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
              <XAxis dataKey="etiqueta" tick={{ fill: '#64748B', fontSize: 11 }} />
              <YAxis tick={{ fill: '#64748B', fontSize: 11 }} unit="%" domain={[0, 100]} />
              <Tooltip
                formatter={(value: any, name: any) => [`${value}%`, name]}
                contentStyle={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  fontSize: '12px',
                }}
              />
              <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '8px' }} />
              <Area
                type="monotone"
                dataKey="retencionDavimar"
                name="Retención @davimargroup (%)"
                stroke="#0284C7"
                strokeWidth={2.5}
                fillOpacity={1}
                fill="url(#colorDavimar)"
                activeDot={{ r: 6, fill: '#0369A1' }}
              />
              <Area
                type="monotone"
                dataKey="benchmarkB2B"
                name="Promedio Industria B2B (%)"
                stroke="#94A3B8"
                strokeWidth={2}
                strokeDasharray="4 4"
                fillOpacity={1}
                fill="url(#colorBenchmark)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Interactive Timeline & Step Inspector */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {CURVA_RETENCION_VIDEO.map((point, index) => {
          const isSelected = selectedPointIndex === index;
          return (
            <button
              key={point.segundo}
              onClick={() => setSelectedPointIndex(index)}
              className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                isSelected
                  ? 'bg-white border-[#0284C7] shadow-xs ring-2 ring-[#7DD3FC]'
                  : 'bg-white border-slate-200/80 hover:bg-[#F8FAFC]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-500">{point.segundo}s</span>
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                    point.retencionDavimar > point.benchmarkB2B
                      ? 'bg-[#DCFCE7] text-[#15803D]'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {point.retencionDavimar}%
                </span>
              </div>
              <div className="text-xs font-semibold text-slate-800 mt-1 truncate">
                {point.etiqueta.split('(')[0]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Step Detailed Diagnostic */}
      {selectedPoint && (
        <div className="p-5 bg-[#F0F9FF] rounded-2xl border border-sky-100 shadow-2xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3 border-b border-sky-200/60 pb-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E0F2FE] text-[#0369A1]">
                {selectedPoint.faseVideo}
              </span>
              <h4 className="text-sm font-bold text-slate-900">
                Punto de Medición: {selectedPoint.etiqueta}
              </h4>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="text-slate-600">
                Retención Registrada: <strong className="text-[#0369A1] font-bold">{selectedPoint.retencionDavimar}%</strong>
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-600">
                Benchmark: <strong className="text-slate-700">{selectedPoint.benchmarkB2B}%</strong>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1">
              <span className="font-semibold text-slate-800 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0369A1]" /> Diagnóstico del Comportamiento B2B:
              </span>
              <p className="text-slate-600 leading-relaxed pl-4.5">{selectedPoint.explicacion}</p>
            </div>

            <div className="space-y-1 bg-white p-3.5 rounded-xl border border-sky-100 shadow-2xs">
              <span className="font-semibold text-slate-900 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" /> Recomendación Directa para Meta Video Ads:
              </span>
              <p className="text-slate-700 leading-relaxed font-medium">{selectedPoint.recomendacionAds}</p>
            </div>
          </div>
        </div>
      )}

      {/* Blueprint for B2B Video Creatives */}
      <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200 text-xs space-y-3">
        <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
          <Target className="w-4 h-4 text-[#0369A1]" /> Fórmula de Guión Ganador para Reels & Anuncios de @davimargroup (15-30s):
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-1">
          <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
            <span className="text-[10px] font-bold text-[#0369A1] uppercase tracking-wider block mb-1">
              1. Hook (0 a 3s)
            </span>
            <p className="text-slate-600">«¿Tu producto se queda frío en góndola mientras la competencia rota el doble?»</p>
          </div>
          <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
            <span className="text-[10px] font-bold text-[#EA580C] uppercase tracking-wider block mb-1">
              2. El Dolor (3 a 10s)
            </span>
            <p className="text-slate-600">Mostrar quiebre de stock real y falta de supervisión de mercaderistas en punto de venta.</p>
          </div>
          <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
            <span className="text-[10px] font-bold text-[#16A34A] uppercase tracking-wider block mb-1">
              3. Solución Davimar (10 a 22s)
            </span>
            <p className="text-slate-600">Toma del equipo Davimar en acción, reporte en vivo y ordenamiento impecable de góndola.</p>
          </div>
          <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
            <span className="text-[10px] font-bold text-[#9333EA] uppercase tracking-wider block mb-1">
              4. CTA B2B (22 a 30s)
            </span>
            <p className="text-slate-600">«Haz clic en el enlace para solicitar un diagnóstico gratuito de tus puntos de venta».</p>
          </div>
        </div>
      </div>
    </section>
  );
};
