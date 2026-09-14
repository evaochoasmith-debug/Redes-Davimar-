import React, { useState } from 'react';
import { MonthlyMetric } from '../types';
import { NUBES_INFORMATIVAS } from '../data/metricsData';
import { InformativeCloud } from './InformativeCloud';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  LineChart,
  Line,
  CartesianGrid,
  ComposedChart,
} from 'recharts';
import {
  Layers,
  Sparkles,
  BarChart3,
  Bookmark,
  Share2,
  TrendingUp,
  FileCheck2,
  Search,
  Calendar,
  Eye,
  Users,
  Target,
  ArrowUpRight,
  Flame,
  Award,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';

interface ComparativeAnalysisProps {
  metricas: MonthlyMetric[];
  periodoActivo: string;
}

export const ComparativeAnalysis: React.FC<ComparativeAnalysisProps> = ({
  metricas,
  periodoActivo,
}) => {
  const [activeMainTab, setActiveMainTab] = useState<'evolucion_4_meses' | 'desglose_individual' | 'matriz_funnel'>('evolucion_4_meses');
  const [selectedMonthId, setSelectedMonthId] = useState<'abril' | 'mayo' | 'junio' | 'julio' | 'agosto'>('agosto');
  const [activeChartTab, setActiveChartTab] = useState<'vistas' | 'conversion_perfil' | 'crecimiento' | 'formatos'>('vistas');
  const [searchTerm, setSearchTerm] = useState('');

  // Selected Month Metric
  const selectedMetric = metricas.find((m) => m.mesId === selectedMonthId) || metricas[metricas.length - 1];

  // Chart data: 5 months
  const chartDataVistas = metricas.map((m) => ({
    mes: m.mes.replace(' 2026', ''),
    'Vistas Totales': m.vistasTotales,
    'Feed + Reels': m.vistasFeedReels,
    'Seguidores': m.vistasSeguidores,
    'No Seguidores (Descubrimiento)': m.vistasNoSeguidores,
  }));

  const chartDataConversion = metricas.map((m) => ({
    mes: m.mes.replace(' 2026', ''),
    'Cuentas Alcanzadas': m.alcanceCuentas,
    'Visitas al Perfil': m.visitasPerfil,
    'Tasa Conversión a Perfil (%)': m.tasaConversionPerfil,
  }));

  const chartDataCrecimiento = metricas.map((m) => ({
    mes: m.mes.replace(' 2026', ''),
    'Seguidores Netos': m.crecimientoSeguidoresNeto,
    'Base Acumulada': m.baseAcumulada,
  }));

  const chartDataFormatos = metricas.map((m) => ({
    mes: m.mes.replace(' 2026', ''),
    'Carruseles / Posts': m.piezasContenido.feedCarruseles,
    'Reels (Video Corto)': m.piezasContenido.reels,
    'Historias': m.piezasContenido.historias,
    'Interacciones': m.interacciones,
  }));

  // Diagnostic matrix table rows
  const matrixRows = [
    {
      indicador: 'Visualizaciones Totales (Impresiones)',
      abril: '~13.412',
      mayo: '35.142 🏆 (Pico)',
      junio: '22.920',
      julio: '8.600',
      agosto: '8.675',
      diagnostico: 'Mayo alcanzó el pico histórico gracias a la alta actividad de Historias (45,3%) y Feed. Agosto (8.675) mantuvo nivel estable con 3 Reels de alto impacto liderados por el montacargas.',
      categoria: 'Alcance',
    },
    {
      indicador: 'Vistas Feed + Reels',
      abril: '13.000',
      mayo: '20.000 (+55%)',
      junio: '18.900',
      julio: '6.400',
      agosto: '7.375 (+15%)',
      diagnostico: 'En Agosto los Reels concentraron el 85% de las vistas directas, recuperando terreno en contenido de video operativo.',
      categoria: 'Alcance',
    },
    {
      indicador: 'Cuentas Únicas Alcanzadas (Reach)',
      abril: '~4.912',
      mayo: '4.569 (-7%)',
      junio: '2.928',
      julio: '1.718',
      agosto: '1.953 (+13,7%)',
      diagnostico: 'Agosto logró un repunte a 1.953 cuentas únicas impulsado por la viralidad del Reel de descarga de montacargas.',
      categoria: 'Audiencia',
    },
    {
      indicador: '% Descubrimiento (No Seguidores)',
      abril: '33,0%',
      mayo: '34,6% (+64% vistas)',
      junio: '32,8%',
      julio: '44,0% (Mayor en Reels)',
      agosto: '49,0% 🏆 (Récord)',
      diagnostico: 'Casi 1 de cada 2 impactos (49%) provino de personas que aún no seguían la cuenta, marcando récord histórico de descubrimiento.',
      categoria: 'Descubrimiento',
    },
    {
      indicador: 'Interacciones Totales Registradas',
      abril: '742',
      mayo: '909 (Reels 50,5%)',
      junio: '919 (Feed 81,9%)',
      julio: '193 (Likes Reels 66,8%)',
      agosto: '216 (Montacargas 88)',
      diagnostico: 'En Agosto se registraron 216 acciones, con 88 likes y 14 compartidos concentrados en el reel de montacargas y 27 en el post de cultura.',
      categoria: 'Engagement',
    },
    {
      indicador: 'Visitas al Perfil Comercial',
      abril: '1.335',
      mayo: '1.730 (+29,6%)',
      junio: '1.363',
      julio: '919',
      agosto: '942 (+2,5%)',
      diagnostico: '942 decisores entraron a investigar la biografía en Agosto, ratificando una enorme atracción comercial directa.',
      categoria: 'Conversión',
    },
    {
      indicador: 'Tasa Conversión a Perfil (Visitas / Reach)',
      abril: '27,18%',
      mayo: '37,86%',
      junio: '46,55%',
      julio: '53,49% 🏆 (Récord)',
      agosto: '48,23% (Sobresaliente)',
      diagnostico: 'Casi 1 de cada 2 personas alcanzadas (48,2%) visitó el perfil corporativo de Davimar en Agosto.',
      categoria: 'Conversión',
    },
    {
      indicador: 'Crecimiento de Seguidores Netos',
      abril: '+107',
      mayo: '+111',
      junio: '+72 (+2,9%)',
      julio: '+28 (+4,6%)',
      agosto: '+57 (+103% vs Jul)',
      diagnostico: 'Se duplicó la captación neta de Julio (+57 seguidores netos), elevando la base a ~2.471 seguidores.',
      categoria: 'Comunidad',
    },
    {
      indicador: 'Base Total de Seguidores',
      abril: '~2.040',
      mayo: '~2.151',
      junio: '2.414',
      julio: '2.414 (Meseta)',
      agosto: '2.471 (Cierre Agosto)',
      diagnostico: 'La base superó los 2.470 decisores B2B (79,7% entre 25 y 54 años), requiriendo pauta Always-On para acelerar en Q4.',
      categoria: 'Comunidad',
    },
    {
      indicador: 'Piezas de Contenido Publicadas',
      abril: '13 (11 post, 2 reels)',
      mayo: '14 (11 post, 3 reels, 44 hist)',
      junio: '12 (7 post, 2 reels, 3 hist)',
      julio: '8 (3 post, 3 reels, 12 hist)',
      agosto: '5 (1 post, 3 reels, 1 hist)',
      diagnostico: 'Disminución a 5 piezas en Agosto que activó la alerta algorítmica de Meta, obligando a reactivar el cronograma a 7 reels y 4 carruseles en septiembre.',
      categoria: 'Contenido',
    },
  ].filter(
    (row) =>
      row.indicador.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.diagnostico.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="comparative-analysis-section" className="space-y-6">
      {/* Header & Main Tabs */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Módulo 1 · Auditoría Histórica
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E0F2FE] text-[#0369A1]">
                Abril · Mayo · Junio · Julio · Agosto 2026
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Análisis Objetivo Mes a Mes & Comparativa de 5 Meses
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Auditoría técnica de visualizaciones, embudo de conversión a perfil, rendimiento por formato y diagnóstico de estancamiento.
            </p>
          </div>

          {/* Main Subnav Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#F1F5F9] rounded-xl border border-slate-200 text-xs font-semibold shrink-0 overflow-x-auto">
            <button
              onClick={() => setActiveMainTab('evolucion_4_meses')}
              className={`px-3.5 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer ${
                activeMainTab === 'evolucion_4_meses'
                  ? 'bg-white text-[#0369A1] font-bold shadow-xs border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              1. Evolución de 5 Meses
            </button>
            <button
              onClick={() => setActiveMainTab('desglose_individual')}
              className={`px-3.5 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer ${
                activeMainTab === 'desglose_individual'
                  ? 'bg-white text-[#0369A1] font-bold shadow-xs border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              2. Desglose Mes por Mes
            </button>
            <button
              onClick={() => setActiveMainTab('matriz_funnel')}
              className={`px-3.5 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer ${
                activeMainTab === 'matriz_funnel'
                  ? 'bg-white text-[#0369A1] font-bold shadow-xs border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              3. Matriz Técnica & Funnel
            </button>
          </div>
        </div>
      </div>

      {/* VIEW 1: EVOLUCIÓN DE 4 MESES (CHARTS + INFORMATIVE CLOUDS) */}
      {activeMainTab === 'evolucion_4_meses' && (
        <div className="space-y-6">
          {/* Chart Controls Bar */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-700">Seleccionar Gráfica de Tendencia:</span>
              <InformativeCloud data={NUBES_INFORMATIVAS.vistas_descubrimiento} label="Guía de Lectura" />
            </div>

            <div className="flex items-center gap-1.5 p-1 bg-[#F8FAFC] rounded-xl border border-slate-200 text-xs font-semibold overflow-x-auto">
              <button
                onClick={() => setActiveChartTab('vistas')}
                className={`px-3 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer ${
                  activeChartTab === 'vistas'
                    ? 'bg-[#1E293B] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Visualizaciones & Descubrimiento
              </button>
              <button
                onClick={() => setActiveChartTab('conversion_perfil')}
                className={`px-3 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer ${
                  activeChartTab === 'conversion_perfil'
                    ? 'bg-[#1E293B] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Alcance vs. Visitas al Perfil (Funnel)
              </button>
              <button
                onClick={() => setActiveChartTab('crecimiento')}
                className={`px-3 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer ${
                  activeChartTab === 'crecimiento'
                    ? 'bg-[#1E293B] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Comunidad & Meseta de Seguidores
              </button>
              <button
                onClick={() => setActiveChartTab('formatos')}
                className={`px-3 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer ${
                  activeChartTab === 'formatos'
                    ? 'bg-[#1E293B] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Formatos & Interacciones
              </button>
            </div>
          </div>

          {/* Active Chart Display */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            {/* Chart 1: Visualizaciones */}
            {activeChartTab === 'vistas' && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Evolución de Visualizaciones Totales & Desglose de Audiencia (4 Meses)
                    </h3>
                    <p className="text-xs text-slate-500">
                      Comparativa de impacto bruto vs. contenido estructurado (Feed + Reels) y ratio Seguidores vs. No Seguidores.
                    </p>
                  </div>
                  <InformativeCloud data={NUBES_INFORMATIVAS.vistas_descubrimiento} />
                </div>

                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={chartDataVistas} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                      <XAxis dataKey="mes" tick={{ fill: '#64748B', fontSize: 12 }} />
                      <YAxis tick={{ fill: '#64748B', fontSize: 11 }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1E293B',
                          borderRadius: '12px',
                          border: 'none',
                          color: '#fff',
                          fontSize: '12px',
                        }}
                      />
                      <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                      <Bar dataKey="Seguidores" fill="#93C5FD" radius={[6, 6, 0, 0]} />
                      <Bar dataKey="No Seguidores (Descubrimiento)" fill="#0369A1" radius={[6, 6, 0, 0]} />
                      <Line type="monotone" dataKey="Vistas Totales" stroke="#F59E0B" strokeWidth={3} dot={{ r: 5 }} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs bg-[#F8FAFC] p-3.5 rounded-xl border border-slate-100">
                  <div>
                    <strong className="text-slate-900 block mb-0.5">🏆 Pico en Mayo (35.142 vistas):</strong>
                    <span className="text-slate-600">Impulsado por 44 historias (45,3% del total) y reels de Trade con Alimentos Mary.</span>
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-0.5">📈 Tasa de Descubrimiento Estable:</strong>
                    <span className="text-slate-600">~33% a 44% de los impactos provino de personas que no conocían la empresa.</span>
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-0.5">🎯 Criterio Ads Q4:</strong>
                    <span className="text-[#0369A1] font-medium">La campaña Always-On elevará este descubrimiento al 80% sostenido.</span>
                  </div>
                </div>
              </div>
            )}

            {/* Chart 2: Conversión a Perfil */}
            {activeChartTab === 'conversion_perfil' && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Embudo B2B: Cuentas Alcanzadas vs. Visitas al Perfil y Tasa de Conversión (%)
                    </h3>
                    <p className="text-xs text-slate-500">
                      Demuestra cómo la tasa de intención comercial creció de 27,18% (Abril) a un récord de 53,49% (Julio).
                    </p>
                  </div>
                  <InformativeCloud data={NUBES_INFORMATIVAS.visitas_perfil_conversion} />
                </div>

                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={chartDataConversion} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                      <XAxis dataKey="mes" tick={{ fill: '#64748B', fontSize: 12 }} />
                      <YAxis yAxisId="left" tick={{ fill: '#64748B', fontSize: 11 }} />
                      <YAxis yAxisId="right" orientation="right" tick={{ fill: '#15803D', fontSize: 11 }} unit="%" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1E293B',
                          borderRadius: '12px',
                          border: 'none',
                          color: '#fff',
                          fontSize: '12px',
                        }}
                      />
                      <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                      <Bar yAxisId="left" dataKey="Cuentas Alcanzadas" fill="#CBD5E1" radius={[6, 6, 0, 0]} />
                      <Bar yAxisId="left" dataKey="Visitas al Perfil" fill="#0369A1" radius={[6, 6, 0, 0]} />
                      <Line yAxisId="right" type="monotone" dataKey="Tasa Conversión a Perfil (%)" stroke="#16A34A" strokeWidth={3} dot={{ r: 5 }} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs bg-[#F0FDF4] p-3.5 rounded-xl border border-emerald-100">
                  <div>
                    <strong className="text-emerald-950 block mb-0.5">Récord en Julio (53,49%):</strong>
                    <span className="text-emerald-800">1 de cada 2 usuarios que vio un post entró directamente a revisar el perfil de Davimar.</span>
                  </div>
                  <div>
                    <strong className="text-emerald-950 block mb-0.5">Validación Pre-Ads:</strong>
                    <span className="text-emerald-800">El perfil genera altísimo interés y curiosidad antes de encender pauta paga.</span>
                  </div>
                  <div>
                    <strong className="text-emerald-950 block mb-0.5">Acción Recomendada:</strong>
                    <span className="text-emerald-800 font-bold">Optimizar el enlace en bio con catálogo WhatsApp para cerrar estas visitas.</span>
                  </div>
                </div>
              </div>
            )}

            {/* Chart 3: Crecimiento y Meseta */}
            {activeChartTab === 'crecimiento' && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Curva de Crecimiento de Comunidad & Diagnóstico de la Meseta (2.421 Seguidores)
                    </h3>
                    <p className="text-xs text-slate-500">
                      Expansión de 2.000 a 2.414 en el cuatrimestre y explicación técnica del estancamiento reciente.
                    </p>
                  </div>
                  <InformativeCloud data={NUBES_INFORMATIVAS.estancamiento_seguidores} />
                </div>

                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={chartDataCrecimiento} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                      <XAxis dataKey="mes" tick={{ fill: '#64748B', fontSize: 12 }} />
                      <YAxis yAxisId="left" tick={{ fill: '#64748B', fontSize: 11 }} />
                      <YAxis yAxisId="right" orientation="right" tick={{ fill: '#0369A1', fontSize: 11 }} domain={[1900, 2600]} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1E293B',
                          borderRadius: '12px',
                          border: 'none',
                          color: '#fff',
                          fontSize: '12px',
                        }}
                      />
                      <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                      <Bar yAxisId="left" dataKey="Seguidores Netos" fill="#86EFAC" radius={[6, 6, 0, 0]} />
                      <Line yAxisId="right" type="monotone" dataKey="Base Acumulada" stroke="#0369A1" strokeWidth={3} dot={{ r: 5 }} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs bg-[#FFF7ED] p-3.5 rounded-xl border border-amber-200">
                  <div>
                    <strong className="text-amber-950 block mb-0.5">Meses de Mayor Captación:</strong>
                    <span className="text-amber-800">Abril (+107) y Mayo (+111) impulsados por Semana Santa y Día de las Madres.</span>
                  </div>
                  <div>
                    <strong className="text-amber-950 block mb-0.5">Causa del Estancamiento:</strong>
                    <span className="text-amber-800">Menor frecuencia de historias en Junio/Julio + techo de alcance orgánico de Instagram.</span>
                  </div>
                  <div>
                    <strong className="text-amber-950 block mb-0.5">Solución Q4 (Meta Ads):</strong>
                    <span className="text-amber-800 font-bold">Campaña Always-On para proyectar +300 seguidores B2B/mes.</span>
                  </div>
                </div>
              </div>
            )}

            {/* Chart 4: Formatos */}
            {activeChartTab === 'formatos' && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Distribución de Formatos Publicados vs. Interacciones Generadas
                    </h3>
                    <p className="text-xs text-slate-500">
                      Balance entre Carruseles educativos, Reels de logística e Historias operativas.
                    </p>
                  </div>
                  <InformativeCloud data={NUBES_INFORMATIVAS.retencion_video_hook} />
                </div>

                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartDataFormatos} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                      <XAxis dataKey="mes" tick={{ fill: '#64748B', fontSize: 12 }} />
                      <YAxis tick={{ fill: '#64748B', fontSize: 11 }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1E293B',
                          borderRadius: '12px',
                          border: 'none',
                          color: '#fff',
                          fontSize: '12px',
                        }}
                      />
                      <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                      <Bar dataKey="Carruseles / Posts" fill="#60A5FA" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="Reels (Video Corto)" fill="#A78BFA" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="Historias" fill="#FBBF24" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs bg-[#FAF5FF] p-3.5 rounded-xl border border-purple-100">
                  <div>
                    <strong className="text-purple-950 block mb-0.5">Reels: Motor de Reacciones</strong>
                    <span className="text-purple-800">Generan el 66,8% de los Me gusta y mayor descubrimiento de cuentas nuevas.</span>
                  </div>
                  <div>
                    <strong className="text-purple-950 block mb-0.5">Carruseles: Motor Educativo</strong>
                    <span className="text-purple-800">Generan el 81,9% de las interacciones en Junio y mayor volumen de guardados.</span>
                  </div>
                  <div>
                    <strong className="text-purple-950 block mb-0.5">Historias: Motor de Volumen</strong>
                    <span className="text-purple-800 font-bold">Fijar un ritmo de 2 a 3 historias diarias de almacén y rutas.</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* VIEW 2: DESGLOSE MES POR MES (INDIVIDUAL MONTH DOSSIER) */}
      {activeMainTab === 'desglose_individual' && (
        <div className="space-y-6">
          {/* Month Selector Pills */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between gap-2 overflow-x-auto">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 shrink-0">
              Seleccionar Mes para Auditoría:
            </span>
            <div className="flex items-center gap-2">
              {metricas.map((m) => (
                <button
                  key={m.mesId}
                  onClick={() => setSelectedMonthId(m.mesId)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedMonthId === m.mesId
                      ? 'bg-[#1E293B] text-white shadow-sm scale-102'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/60'
                  }`}
                >
                  {m.mes}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Month Dossier Header */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0369A1] text-white">
                    Auditoría Detallada
                  </span>
                  <span className="text-xs font-bold text-slate-700">{selectedMetric.mes}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Rendimiento Integral de {selectedMetric.mes}
                </h3>
              </div>
              <InformativeCloud data={NUBES_INFORMATIVAS.visitas_perfil_conversion} label="Criterios del Mes" />
            </div>

            {/* Quick KPI Stat Grid for Selected Month */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-4">
              <div className="p-3 bg-[#F8FAFC] rounded-xl border border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Vistas Totales</span>
                <span className="text-lg font-bold text-slate-900">{selectedMetric.vistasTotales.toLocaleString('es-CO')}</span>
                <span className="text-[10px] text-slate-500 block mt-0.5">Feed+Reels: {selectedMetric.vistasFeedReels.toLocaleString('es-CO')}</span>
              </div>

              <div className="p-3 bg-[#F0F9FF] rounded-xl border border-sky-100">
                <span className="text-[10px] text-[#0369A1] font-bold uppercase block">Alcance (Reach)</span>
                <span className="text-lg font-bold text-slate-900">{selectedMetric.alcanceCuentas.toLocaleString('es-CO')}</span>
                <span className="text-[10px] text-sky-700 block mt-0.5">{selectedMetric.pctNoSeguidores}% No Seg.</span>
              </div>

              <div className="p-3 bg-[#F0FDF4] rounded-xl border border-emerald-100">
                <span className="text-[10px] text-[#15803D] font-bold uppercase block">Visitas Perfil</span>
                <span className="text-lg font-bold text-slate-900">{selectedMetric.visitasPerfil.toLocaleString('es-CO')}</span>
                <span className="text-[10px] text-[#15803D] font-bold block mt-0.5">{selectedMetric.tasaConversionPerfil.toFixed(1)}% conv.</span>
              </div>

              <div className="p-3 bg-[#FFF7ED] rounded-xl border border-amber-100">
                <span className="text-[10px] text-[#EA580C] font-bold uppercase block">Interacciones</span>
                <span className="text-lg font-bold text-slate-900">{selectedMetric.interacciones}</span>
                <span className="text-[10px] text-amber-700 block mt-0.5">ER: {selectedMetric.engagementRate}%</span>
              </div>

              <div className="p-3 bg-[#FAF5FF] rounded-xl border border-purple-100">
                <span className="text-[10px] text-[#9333EA] font-bold uppercase block">Seguidores Netos</span>
                <span className="text-lg font-bold text-slate-900">+{selectedMetric.crecimientoSeguidoresNeto}</span>
                <span className="text-[10px] text-purple-700 block mt-0.5">Base: ~{selectedMetric.baseAcumulada}</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Piezas Publicadas</span>
                <span className="text-lg font-bold text-slate-900">{selectedMetric.piezasContenido.total}</span>
                <span className="text-[10px] text-slate-500 block mt-0.5">{selectedMetric.piezasContenido.reels} Reels / {selectedMetric.piezasContenido.feedCarruseles} Post</span>
              </div>
            </div>

            {/* Selected Month Diagnosis Banner */}
            <div className="mt-4 p-4 bg-[#F8FAFC] rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed">
              <strong className="text-slate-900 block mb-1">Diagnóstico Ejecutivo de {selectedMetric.mes}:</strong>
              {selectedMetric.diagnosticoMes}
            </div>
          </div>

          {/* Top Performers Ranking for Selected Month */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                <h3 className="text-base font-bold text-slate-900">
                  Publicaciones Destacadas (Top Performers) en {selectedMetric.mes}
                </h3>
              </div>
              <span className="text-xs text-slate-400">Análisis cualitativo & Neuromarketing</span>
            </div>

            <div className="space-y-3">
              {selectedMetric.topPerformersList && selectedMetric.topPerformersList.length > 0 ? (
                selectedMetric.topPerformersList.map((post, idx) => (
                  <div key={idx} className="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1 max-w-2xl">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#1E293B] text-white flex items-center justify-center text-[10px] font-bold">
                          #{post.posicion}
                        </span>
                        <span className="px-2 py-0.5 bg-[#E0F2FE] text-[#0369A1] rounded text-[10px] font-bold">
                          {post.formato}
                        </span>
                        <h4 className="text-xs font-bold text-slate-900">{post.titulo}</h4>
                      </div>
                      <p className="text-[11px] text-slate-600">
                        <strong className="text-slate-800">Neuromarketing:</strong> {post.neuromarketing}
                      </p>
                      <p className="text-[11px] text-[#0369A1]">
                        <strong className="text-slate-800">Lectura Técnica:</strong> {post.diagnostico}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-700 shrink-0 bg-white px-3 py-2 rounded-xl border border-slate-200">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-normal">Impactos</span>
                        <span>{post.vistas.toLocaleString('es-CO')} vistas</span>
                      </div>
                      <div className="h-6 w-px bg-slate-200"></div>
                      <div>
                        <span className="text-[10px] text-emerald-600 block font-normal">Conversión</span>
                        <span className="text-emerald-700 font-bold">+{post.seguidoresDirectos} seg. directos</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200 text-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-[#E0F2FE] text-[#0369A1] rounded text-[10px] font-bold">
                      {selectedMetric.topPost.formato}
                    </span>
                    <h4 className="font-bold text-slate-900">{selectedMetric.topPost.titulo}</h4>
                  </div>
                  <p className="text-slate-600 mb-1">{selectedMetric.topPost.neuromarketing}</p>
                  <p className="text-[#0369A1] font-medium">{selectedMetric.topPost.diagnostico}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: MATRIZ TÉCNICA & FUNNEL CONSOLIDADO */}
      {activeMainTab === 'matriz_funnel' && (
        <div className="space-y-6">
          {/* Funnel B2B Structural Diagram */}
          <div className="bg-[#1E293B] text-white p-6 rounded-2xl shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#7DD3FC]">
                  Embudo de Rendimiento Consolidado
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Comportamiento del Funnel B2B de @davimargroup (Abril - Julio)
                </h3>
              </div>
              <InformativeCloud data={NUBES_INFORMATIVAS.visitas_perfil_conversion} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1.5">
                <span className="text-[10px] font-bold uppercase text-[#7DD3FC] block">1. Descubrimiento (TOFU)</span>
                <p className="text-white font-bold text-sm">32,8% – 44,0% No Seg.</p>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  ~1.700 a 4.900 personas alcanzadas por mes de forma 100% orgánica.
                </p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1.5">
                <span className="text-[10px] font-bold uppercase text-[#86EFAC] block">2. Retención & Gancho (MOFU)</span>
                <p className="text-white font-bold text-sm">Reels & Carruseles</p>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Reels concentraron el 66,8% de reacciones y carruseles el 81,9% de interacciones técnicas.
                </p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1.5">
                <span className="text-[10px] font-bold uppercase text-[#FDBA74] block">3. Conversión al Perfil</span>
                <p className="text-white font-bold text-sm">27,2% → 53,5% 🏆</p>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  En Julio, más de la mitad de los usuarios alcanzados exploró la biografía institucional.
                </p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1.5">
                <span className="text-[10px] font-bold uppercase text-[#C084FC] block">4. Base Acumulada</span>
                <p className="text-white font-bold text-sm">+374 netos (2.421)</p>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Comunidad de alta pureza B2B: 79,7% en rango de decisión de 25 a 54 años.
                </p>
              </div>
            </div>
          </div>

          {/* Searchable Technical Matrix */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Matriz Comparativa Cuatrimestral Consolidada
                </h3>
                <p className="text-xs text-slate-500">
                  Todos los indicadores clave de Abril, Mayo, Junio y Julio frente a frente.
                </p>
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filtrar métrica o diagnóstico..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 bg-[#F8FAFC] rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0369A1]"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-[#F8FAFC] text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                    <th className="py-3 px-3">Indicador Clave</th>
                    <th className="py-3 px-2">Abril 2026</th>
                    <th className="py-3 px-2">Mayo 2026</th>
                    <th className="py-3 px-2">Junio 2026</th>
                    <th className="py-3 px-2">Julio 2026</th>
                    <th className="py-3 px-2 text-[#EA580C]">Agosto 2026</th>
                    <th className="py-3 px-3">Diagnóstico Técnico & Lectura</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {matrixRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-3 font-semibold text-slate-900 whitespace-nowrap">
                        <span className="block">{row.indicador}</span>
                        <span className="text-[10px] text-slate-400 font-normal">{row.categoria}</span>
                      </td>
                      <td className="py-3 px-2 text-slate-700 font-medium whitespace-nowrap">{row.abril}</td>
                      <td className="py-3 px-2 text-[#0369A1] font-bold whitespace-nowrap">{row.mayo}</td>
                      <td className="py-3 px-2 text-slate-700 font-medium whitespace-nowrap">{row.junio}</td>
                      <td className="py-3 px-2 text-[#15803D] font-bold whitespace-nowrap">{row.julio}</td>
                      <td className="py-3 px-2 text-[#EA580C] font-bold whitespace-nowrap bg-orange-50/40">{row.agosto}</td>
                      <td className="py-3 px-3 text-slate-600 text-[11px] leading-relaxed min-w-[280px]">
                        {row.diagnostico}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
