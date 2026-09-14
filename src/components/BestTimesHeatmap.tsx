import React, { useState } from 'react';
import { MAPA_CALOR_DIAS_HORAS } from '../data/metricsData';
import { HeatmapCell } from '../types';
import {
  CalendarDays,
  Clock,
  Flame,
  AlertCircle,
  Sparkles,
  Info,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';

export const BestTimesHeatmap: React.FC = () => {
  const [selectedCell, setSelectedCell] = useState<HeatmapCell | null>(null);
  const [filterMode, setFilterMode] = useState<'todos' | 'optimos' | 'laborales'>('todos');

  const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  const horas = Array.from({ length: 24 }, (_, i) => i);

  const getCellColor = (actividad: number, esOptimo: boolean) => {
    if (esOptimo) {
      if (actividad >= 90) return 'bg-emerald-400 text-emerald-950 font-bold';
      if (actividad >= 80) return 'bg-emerald-300 text-emerald-900 font-semibold';
      return 'bg-emerald-200 text-emerald-900';
    }
    if (actividad >= 60) return 'bg-sky-200 text-sky-900';
    if (actividad >= 40) return 'bg-sky-100 text-sky-800';
    if (actividad >= 20) return 'bg-slate-100 text-slate-600';
    return 'bg-slate-50 text-slate-400';
  };

  return (
    <section id="best-times-heatmap-section" className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
            Módulo 3 · Dayparting & Patrones de Conexión
          </h2>
          <h3 className="text-lg font-bold text-slate-900 tracking-tight">
            Mapa de Calor de Actividad & Horarios Óptimos B2B
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Análisis de momentos de mayor receptividad y atención de los decisores comerciales para publicaciones y pauta.
          </p>
        </div>

        {/* Filter / Highlight Controls */}
        <div className="inline-flex p-1 bg-[#F1F5F9] rounded-xl border border-slate-200 text-xs font-semibold">
          <button
            onClick={() => setFilterMode('todos')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              filterMode === 'todos'
                ? 'bg-white text-[#0369A1] font-bold shadow-xs border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            Semana Completa
          </button>
          <button
            onClick={() => setFilterMode('optimos')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              filterMode === 'optimos'
                ? 'bg-[#1E293B] text-white font-bold shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-[#FDBA74]" /> Franjas Pico B2B
          </button>
        </div>
      </div>

      {/* 3 Key B2B Windows Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-[#F0FDF4] rounded-xl border-l-4 border-[#86EFAC] shadow-2xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#16A34A]" /> Franja 1: 07:30 - 09:00 AM
            </span>
            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#DCFCE7] text-[#15803D]">
              Pico Matutino
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            <strong>Momento de Agenda:</strong> Los jefes de compras y gerentes revisan novedades del sector antes de abrir tiendas o iniciar reuniones operativas.
          </p>
        </div>

        <div className="p-4 bg-[#F0F9FF] rounded-xl border-l-4 border-[#7DD3FC] shadow-2xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#0369A1]" /> Franja 2: 12:30 - 02:00 PM
            </span>
            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#E0F2FE] text-[#0369A1]">
              Pausa Mediodía
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            <strong>Mayor Consumo de Video:</strong> Horario estelar para Reels educativos de rotación en góndola y casos de éxito durante el almuerzo.
          </p>
        </div>

        <div className="p-4 bg-[#FFF7ED] rounded-xl border-l-4 border-[#FDBA74] shadow-2xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#EA580C]" /> Franja 3: 05:30 - 08:30 PM
            </span>
            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#FFEDD5] text-[#C2410C]">
              Pico Revalidado en Agosto
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            <strong>Data Real de Agosto:</strong> La mayor actividad se concentra en <strong>Lunes, Jueves y Domingo (6:00 PM a 9:00 PM)</strong>. Programar entre 5:30 PM y 6:30 PM para capturar la curva de atención al finalizar la jornada.
          </p>
        </div>
      </div>

      {/* Heatmap Visual Matrix */}
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[700px]">
          {/* Hour labels */}
          <div className="grid grid-cols-25 gap-1 mb-1 text-[10px] text-slate-400 font-medium text-center">
            <div className="w-20 text-left font-semibold text-slate-500">Día / Hora</div>
            {horas.map((h) => (
              <div key={h} className="truncate">
                {h}h
              </div>
            ))}
          </div>

          {/* Heatmap Rows */}
          <div className="space-y-1.5">
            {dias.map((dia) => (
              <div key={dia} className="grid grid-cols-25 gap-1 items-center">
                <div className="w-20 text-xs font-semibold text-slate-700 truncate flex items-center gap-1">
                  {(dia === 'Lunes' || dia === 'Jueves' || dia === 'Domingo') && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0" title="Día Pico Confirmado Agosto" />
                  )}
                  {dia}
                </div>

                {horas.map((hora) => {
                  const cell = MAPA_CALOR_DIAS_HORAS.find((c) => c.dia === dia && c.hora === hora);
                  const isHighlighted = filterMode === 'optimos' ? cell?.esOptimo : true;
                  const isSelected = selectedCell?.dia === dia && selectedCell?.hora === hora;

                  return (
                    <button
                      key={`${dia}-${hora}`}
                      onClick={() => cell && setSelectedCell(cell)}
                      title={`${dia} ${hora}:00 - Actividad: ${cell?.actividad}%`}
                      className={`h-7 rounded-sm transition-all text-[9px] flex items-center justify-center cursor-pointer ${
                        cell ? getCellColor(cell.actividad, cell.esOptimo) : 'bg-slate-50'
                      } ${!isHighlighted ? 'opacity-20 grayscale' : 'opacity-100'} ${
                        isSelected ? 'ring-2 ring-slate-900 scale-110 z-10' : 'hover:scale-105'
                      }`}
                    >
                      {cell?.actividad && cell.actividad >= 85 ? '★' : ''}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Cell Modal/Detail */}
      {selectedCell && (
        <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-slate-200 flex items-start justify-between gap-3 text-xs">
          <div className="flex items-start gap-2.5">
            <Info className="w-4 h-4 text-[#0369A1] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900">
                {selectedCell.dia} a las {selectedCell.hora}:00 hrs
              </span>
              <span className="text-slate-500 ml-2 font-medium">
                (Índice de Actividad B2B: <strong>{selectedCell.actividad}/100</strong>)
              </span>
              <p className="text-slate-600 mt-0.5">{selectedCell.comentario}</p>
            </div>
          </div>
          <button
            onClick={() => setSelectedCell(null)}
            className="text-[11px] text-slate-400 hover:text-slate-700 underline shrink-0 cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      )}

      {/* Dayparting Ads Efficiency Note */}
      <div className="bg-[#1E293B] text-white rounded-2xl p-5 border border-slate-800 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#FDBA74] shrink-0">
            <AlertCircle className="w-4 h-4" />
          </div>
          <span className="text-slate-300">
            <strong className="text-white">Impacto en la Eficiencia del Presupuesto (Dayparting):</strong> En B2B, los fines de semana registran una caída del <strong>65% en intención comercial</strong>. Se recomienda programar la pauta de Meta Ads con puja activa de <strong>Lunes a Viernes de 07:00 a 19:30</strong>, reduciendo el gasto nocturno y de fin de semana para no quemar presupuesto en vistas desatendidas.
          </span>
        </div>
      </div>
    </section>
  );
};
