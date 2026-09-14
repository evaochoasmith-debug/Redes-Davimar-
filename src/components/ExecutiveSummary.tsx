import React from 'react';
import { MonthlyMetric } from '../types';
import { NUBES_INFORMATIVAS } from '../data/metricsData';
import { InformativeCloud } from './InformativeCloud';
import {
  Eye,
  UserPlus,
  Compass,
  Clock,
  Target,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Flame,
  HelpCircle,
  FileDown,
} from 'lucide-react';

interface ExecutiveSummaryProps {
  metricas: MonthlyMetric[];
  periodoActivo: string;
  onOpenExportModal?: () => void;
}

export const ExecutiveSummary: React.FC<ExecutiveSummaryProps> = ({
  metricas,
  periodoActivo,
  onOpenExportModal,
}) => {
  // Aggregate stats based on active view
  const totalVistas = metricas.reduce((acc, m) => acc + m.vistasTotales, 0);
  const promedioVistas = Math.round(totalVistas / metricas.length);
  const totalCrecimiento = metricas.reduce((acc, m) => acc + m.crecimientoSeguidoresNeto, 0);
  const avgEngagement = (
    metricas.reduce((acc, m) => acc + m.engagementRate, 0) / metricas.length
  ).toFixed(2);
  const totalNoSeguidores = metricas.reduce((acc, m) => acc + m.vistasNoSeguidores, 0);
  const pctNoSeguidores = Math.round((totalNoSeguidores / totalVistas) * 100);
  const avgRetencion = (
    metricas.reduce((acc, m) => acc + m.retencionPromedioSegundos, 0) / metricas.length
  ).toFixed(1);

  return (
    <section id="executive-summary-section" className="space-y-6">
      {/* Top Banner Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Strategic Overview Card */}
        <div className="lg:col-span-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Diagnóstico de Analista Senior Meta Ads
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E0F2FE] text-[#0369A1]">
                  Base Actual: 2.471 Seguidores (+57 en Agosto)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <InformativeCloud data={NUBES_INFORMATIVAS.estancamiento_seguidores} label="Nube: Diagnóstico Meseta" />
                <span className="px-3 py-1 bg-[#F0FDF4] text-[#16A34A] rounded-full text-xs font-semibold">
                  Pre-Ad Validado
                </span>
                {onOpenExportModal && (
                  <button
                    id="btn-download-pdf-summary"
                    onClick={onOpenExportModal}
                    className="px-3 py-1 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-full text-xs font-bold transition-all shadow-2xs active:scale-95 cursor-pointer flex items-center gap-1.5"
                  >
                    <FileDown className="w-3.5 h-3.5 text-white" />
                    Descargar PDF
                  </button>
                )}
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
              De Base Orgánica B2B a Maquinaria de Pauta Predictiva para @davimargroup
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              La auditoría histórica de 5 meses (<strong>Abril a Agosto 2026</strong>) confirma que el contenido tiene un poder de conversión extraordinario: la tasa de visita al perfil se mantuvo en un sobresaliente <strong>48,2% en Agosto</strong> (942 visitas de 1.953 espectadores únicos) tras el récord del <strong>53,5% en Julio</strong>. El Reel de{' '}
              <span className="text-slate-900 font-semibold">«Descarga con montacargas en patio»</span> (2.400 vistas en agosto),{' '}
              <span className="text-slate-900 font-semibold">«Atiende Bonito»</span> (1.600 vistas) y{' '}
              <span className="text-slate-900 font-semibold">«Activaciones PDV con Alimentos Mary»</span> consolidan la máxima solvencia operativa.
            </p>

            {/* Crucial Stagnation & August Alert Callout */}
            <div className="mt-3 p-3.5 bg-[#FFF7ED] rounded-xl border border-amber-200 text-xs text-slate-700">
              <span className="font-bold text-[#EA580C] flex items-center gap-1.5 mb-1">
                <AlertTriangle className="w-3.5 h-3.5 text-[#EA580C]" />
                Diagnóstico de Agosto & Advertencia Algorítmica de Meta:
              </span>
              <p className="leading-relaxed text-slate-600">
                En agosto la actividad disminuyó considerablemente (3 reels, 1 post y 1 historia), activando una <strong>advertencia directa del algoritmo de Meta</strong> sobre pérdida de ritmo. Para septiembre se han fijado <strong>5 oportunidades prioritarias</strong>: reactivar 7 reels y 4 carruseles, activar 2-3 historias diarias, monetizar las 942 visitas al perfil optimizando enlaces en bio, publicar en días pico (Lunes, Jueves y Domingo 18h-21h) y potenciar la fórmula 40% almacén + 30% PDV + 30% cultura y catálogo Q4.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
              <span>Comunidad B2B Cualificada: <strong className="text-slate-800">2.471 decisores (79,7% en 25-54 años)</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0369A1]"></span>
              <span>Vistas Acumuladas (5 Meses): <strong className="text-slate-800">{totalVistas.toLocaleString('es-CO')} impactos</strong></span>
            </div>
          </div>
        </div>

        {/* Right: Sleek Dark Metric Box */}
        <div className="lg:col-span-4 bg-[#1E293B] p-6 rounded-2xl shadow-xl text-white flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Estrategia Ads Q4 Recomendada
              </h2>
              <span className="px-2 py-0.5 bg-[#0369A1] rounded text-[10px] font-bold text-white">
                Sept - Nov
              </span>
            </div>

            <div className="space-y-3.5 text-sm">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-[#7DD3FC] shrink-0 mt-1.5"></div>
                <div>
                  <p className="text-xs font-bold text-white">1. Always-On Reconocimiento (40%)</p>
                  <p className="text-[11px] text-slate-300">Reels de Montacargas, Flota 5 AM y Trade Mary.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-[#86EFAC] shrink-0 mt-1.5"></div>
                <div>
                  <p className="text-xs font-bold text-white">2. Conversión B2B / WhatsApp (60%)</p>
                  <p className="text-[11px] text-slate-300">Casos de rotación góndola y catálogo Q4.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-[#FDBA74] shrink-0 mt-1.5"></div>
                <div>
                  <p className="text-xs font-bold text-white">3. Conversión a Perfil: 48,2% - 53,5%</p>
                  <p className="text-[11px] text-slate-300">Curiosidad B2B récord: 1 de cada 2 decisores visita el perfil.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Potencial de Escala Meta Ads</span>
              <span className="text-2xl font-bold text-white tracking-tight">94<span className="text-xs text-slate-400 font-normal">/100</span></span>
            </div>
            <div className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-[#7DD3FC]">
              Excelente ROI B2B
            </div>
          </div>
        </div>
      </div>

      {/* Sleek Pastel Metric Stat Cards with Left Borders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Card 1: Vistas Promedio */}
        <div className="p-4 bg-[#F0F9FF] rounded-xl border-l-4 border-[#7DD3FC] shadow-2xs relative">
          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-500 font-medium">Visualizaciones / Mes</p>
            <InformativeCloud data={NUBES_INFORMATIVAS.vistas_descubrimiento} label="?" />
          </div>
          <p className="text-2xl font-bold text-slate-800 tracking-tight mt-1">
            ~{promedioVistas.toLocaleString('es-CO')}
          </p>
          <p className="text-[11px] text-slate-500 mt-2 flex items-center gap-1">
            <span className="text-[#0369A1] font-semibold">Pico: 35.1k (May)</span>
            <span>·</span>
            <span className="text-slate-700 font-medium">80k acum.</span>
          </p>
        </div>

        {/* Card 2: Descubrimiento No Seguidores */}
        <div className="p-4 bg-[#F0FDF4] rounded-xl border-l-4 border-[#86EFAC] shadow-2xs relative">
          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-500 font-medium">Descubrimiento Orgánico</p>
            <InformativeCloud data={NUBES_INFORMATIVAS.vistas_descubrimiento} label="?" />
          </div>
          <p className="text-2xl font-bold text-slate-800 tracking-tight mt-1">
            {pctNoSeguidores}% <span className="text-xs font-normal text-[#16A34A]">No seguidores</span>
          </p>
          <p className="text-[11px] text-slate-500 mt-2">
            1 de cada 3 impactos es orgánico hacia nuevos decisores.
          </p>
        </div>

        {/* Card 3: Crecimiento y Base */}
        <div className="p-4 bg-[#FFF7ED] rounded-xl border-l-4 border-[#FDBA74] shadow-2xs relative">
          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-500 font-medium">Comunidad Actual</p>
            <InformativeCloud data={NUBES_INFORMATIVAS.estancamiento_seguidores} label="?" />
          </div>
          <p className="text-2xl font-bold text-slate-800 tracking-tight mt-1">
            2.471 <span className="text-xs font-normal text-[#EA580C]">seguidores</span>
          </p>
          <p className="text-[11px] text-slate-500 mt-2">
            <strong className="text-amber-800">+57 en Agosto</strong> · 79,7% en 25-54 años.
          </p>
        </div>

        {/* Card 4: Tasa Conversión a Perfil */}
        <div className="p-4 bg-[#FAF5FF] rounded-xl border-l-4 border-[#C084FC] shadow-2xs relative">
          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-500 font-medium">Conversión a Perfil</p>
            <InformativeCloud data={NUBES_INFORMATIVAS.visitas_perfil_conversion} label="?" />
          </div>
          <p className="text-2xl font-bold text-slate-800 tracking-tight mt-1">
            48,2% <span className="text-xs font-normal text-[#9333EA]">en Agosto (942 vis.)</span>
          </p>
          <p className="text-[11px] text-slate-500 mt-2">
            1 de cada 2 personas que ve un post visita el perfil comercial.
          </p>
        </div>

        {/* Card 5: Engagement Promedio */}
        <div className="p-4 bg-[#FDF2F8] rounded-xl border-l-4 border-[#F472B6] shadow-2xs relative">
          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-500 font-medium">Hook Rate Video 3s</p>
            <InformativeCloud data={NUBES_INFORMATIVAS.retencion_video_hook} label="?" />
          </div>
          <p className="text-2xl font-bold text-slate-800 tracking-tight mt-1">
            68% <span className="text-xs font-normal text-[#DB2777]">vs 54% bench</span>
          </p>
          <p className="text-[11px] text-slate-500 mt-2">
            Ganchos de montacargas y PDV detienen el scroll.
          </p>
        </div>
      </div>
    </section>
  );
};
