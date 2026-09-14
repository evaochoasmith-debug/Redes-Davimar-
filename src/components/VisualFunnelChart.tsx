import React, { useState } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  CartesianGrid,
  Line,
  ComposedChart,
  Area,
} from 'recharts';
import { CampaignTier } from '../types';
import {
  Filter,
  Users,
  Eye,
  MessageCircle,
  TrendingUp,
  CheckCircle2,
  HelpCircle,
  Sliders,
  DollarSign,
  ArrowDown,
  Layers,
  Sparkles,
  BarChart3,
  Flame,
  Zap,
  Target,
} from 'lucide-react';

interface VisualFunnelChartProps {
  onSelectTier?: (index: number) => void;
  selectedTierIndex?: number;
  onOpenModal?: (tier: CampaignTier) => void;
  campaignTiers: CampaignTier[];
}

export const VisualFunnelChart: React.FC<VisualFunnelChartProps> = ({
  onSelectTier,
  selectedTierIndex = 0,
  onOpenModal,
  campaignTiers,
}) => {
  const [budgetMonthly, setBudgetMonthly] = useState<number>(600);
  const [funnelViewMode, setFunnelViewMode] = useState<'trapezoide' | 'grafica_barras' | 'metricas_unitarias'>('trapezoide');

  // Dynamic calculations based on monthly budget
  const factor = budgetMonthly / 600;

  const funnelStages = [
    {
      id: 'tofu',
      tierIndex: 0,
      siglas: 'TOFU',
      nombre: '1. Alcance & Reconocimiento (Top of Funnel)',
      subtitulo: 'Impacto en frío a tomadores de decisión retail y directores de compras',
      volumen: Math.round(52000 * factor),
      unidad: 'Impresiones Meta Ads',
      tasaPaso: '100%',
      tasaConversionSiguiente: '13.1% pasan a interactuar / visitar perfil',
      costoUnitario: `$${(2.90).toFixed(2)} CPM`,
      audienciaClave: 'Comerciantes, Retail, Jefes de Compra y Export Managers',
      colorBg: 'from-sky-700 to-sky-600',
      colorBadge: 'bg-sky-100 text-sky-800 border-sky-200',
      colorBorder: 'border-sky-500',
      barColor: '#0284C7',
      porcentajePresupuesto: 40,
      presupuestoMonto: Math.round(budgetMonthly * 0.4),
      formatoPrincipal: 'Reels cinemáticos de montacargas, flota y bodegas',
    },
    {
      id: 'conexion',
      tierIndex: 0,
      siglas: 'CONEXIÓN',
      nombre: '2. Curiosidad & Visita al Perfil @davimargroup',
      subtitulo: 'Prospectos que entran al perfil a investigar solidez y trayectoria',
      volumen: Math.round(6800 * factor),
      unidad: 'Visitas al Perfil & Interacciones',
      tasaPaso: '13.1%',
      tasaConversionSiguiente: '27.9% consumen contenido educativo de valor',
      costoUnitario: `$${(0.06).toFixed(2)} por Visita`,
      audienciaClave: 'Usuarios con alta tasa de navegación comercial (53.5% histórico)',
      colorBg: 'from-sky-600 to-teal-600',
      colorBadge: 'bg-teal-100 text-teal-800 border-teal-200',
      colorBorder: 'border-teal-500',
      barColor: '#0D9488',
      porcentajePresupuesto: 0, // Orgánico alimentado por TOFU
      presupuestoMonto: 0,
      formatoPrincipal: 'Bio optimizada, historias destacadas y feed corporativo',
    },
    {
      id: 'mofu',
      tierIndex: 1,
      siglas: 'MOFU',
      nombre: '3. Consideración & Solución en PDV (Middle of Funnel)',
      subtitulo: 'Educación con casos de éxito (Alimentos Mary +34%) y checklists',
      volumen: Math.round(1900 * factor),
      unidad: 'Interacciones de Alto Valor / Descargas',
      tasaPaso: '27.9%',
      tasaConversionSiguiente: '14.7% solicitan cotización comercial',
      costoUnitario: `$${(0.25).toFixed(2)} por Interacción`,
      audienciaClave: 'Visitantes de perfil últimos 90 días + Video Viewers 50%+',
      colorBg: 'from-teal-600 to-emerald-600',
      colorBadge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      colorBorder: 'border-emerald-500',
      barColor: '#059669',
      porcentajePresupuesto: 20,
      presupuestoMonto: Math.round(budgetMonthly * 0.2),
      formatoPrincipal: 'Carruseles de rotación de anaquel y checklists de supervisión',
    },
    {
      id: 'bofu',
      tierIndex: 2,
      siglas: 'BOFU',
      nombre: '4. Conversión & Clics a WhatsApp (Bottom of Funnel)',
      subtitulo: 'Prospectos calientes listos para cotizar distribución o impulso en PDV',
      volumen: Math.round(280 * factor),
      unidad: 'Leads Calificados / Chats Iniciados',
      tasaPaso: '14.7%',
      tasaConversionSiguiente: '21.4% avanzan a cotización formal',
      costoUnitario: `$${(8.50).toFixed(2)} CPL (Costo por Lead)`,
      audienciaClave: 'Retargeting de alta intención + Lookalike 1% de compradores',
      colorBg: 'from-emerald-600 to-amber-600',
      colorBadge: 'bg-amber-100 text-amber-800 border-amber-200',
      colorBorder: 'border-amber-500',
      barColor: '#D97706',
      porcentajePresupuesto: 40,
      presupuestoMonto: Math.round(budgetMonthly * 0.4),
      formatoPrincipal: 'Anuncios Click-to-WhatsApp con oferta mayorista y auditoría',
    },
    {
      id: 'cierre',
      tierIndex: 2,
      siglas: 'CIERRE',
      nombre: '5. Negociación & Nuevos Clientes / Contratos',
      subtitulo: 'Marcas y proveedores que firman servicio de impulso o distribución',
      volumen: Math.max(1, Math.round(14 * factor)),
      unidad: 'Nuevos Clientes / Contratos Anuales',
      tasaPaso: '5.0%',
      tasaConversionSiguiente: 'Cierre de ciclo de ventas B2B',
      costoUnitario: `$${(Math.round(budgetMonthly / Math.max(1, 14 * factor))).toFixed(0)} CAC (Costo Adquisición)`,
      audienciaClave: 'Empresas con necesidad de rotación inmediata en supermercados',
      colorBg: 'from-amber-600 to-rose-700',
      colorBadge: 'bg-rose-100 text-rose-800 border-rose-200',
      colorBorder: 'border-rose-500',
      barColor: '#E11D48',
      porcentajePresupuesto: 0,
      presupuestoMonto: 0,
      formatoPrincipal: 'Reunión ejecutiva + Propuesta comercial formal',
    },
  ];

  const chartData = funnelStages.map((stage) => ({
    etapa: stage.siglas,
    nombreCompleto: stage.nombre,
    volumen: stage.volumen,
    unidad: stage.unidad,
    costo: stage.costoUnitario,
    tasa: stage.tasaPaso,
  }));

  const handleStageClick = (tierIndex: number) => {
    if (onSelectTier) {
      onSelectTier(tierIndex);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm space-y-5">
      {/* Top Title & Controls Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#0369A1] text-white flex items-center gap-1 shadow-2xs">
              <Filter className="w-3 h-3" />
              Gráfica Visual del Embudo de Ventas B2B
            </span>
            <span className="text-xs text-slate-400 font-medium">· Proyección de Flujo Comercial</span>
          </div>
          <h4 className="text-base font-bold text-slate-900 tracking-tight">
            Embudo de Conversión Meta Ads: Desde el Impacto Frío hasta el Cierre por WhatsApp
          </h4>
          <p className="text-xs text-slate-500 mt-0.5">
            Observa cómo cada nivel de campaña filtra y califica a los prospectos para generar leads B2B de alta intención.
          </p>
        </div>

        {/* View Switcher Pills */}
        <div className="flex items-center gap-1.5 self-start lg:self-auto bg-[#F8FAFC] p-1 rounded-xl border border-slate-200 text-xs">
          <button
            onClick={() => setFunnelViewMode('trapezoide')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              funnelViewMode === 'trapezoide'
                ? 'bg-[#1E293B] text-white shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Diagrama Trapezoidal</span>
          </button>

          <button
            onClick={() => setFunnelViewMode('grafica_barras')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              funnelViewMode === 'grafica_barras'
                ? 'bg-[#1E293B] text-white shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5 text-[#86EFAC]" />
            <span>Gráfica de Caída (Drop-off)</span>
          </button>

          <button
            onClick={() => setFunnelViewMode('metricas_unitarias')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              funnelViewMode === 'metricas_unitarias'
                ? 'bg-[#1E293B] text-white shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5 text-[#FDBA74]" />
            <span>Costos Unitarios</span>
          </button>
        </div>
      </div>

      {/* Interactive Budget Simulator Bar */}
      <div className="bg-[#F0F9FF] p-4 rounded-xl border border-sky-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white rounded-xl border border-sky-200 shadow-2xs text-[#0369A1]">
            <Sliders className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-slate-900 block">
              Simular Presupuesto Mensual de Pauta: <strong className="text-[#0369A1] font-extrabold text-sm">${budgetMonthly} USD</strong>
            </span>
            <span className="text-slate-500 text-[11px]">
              Ajusta para recalcular el volumen de impresiones, visitas, leads y clientes proyectados.
            </span>
          </div>
        </div>

        {/* Quick Budget Presets */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <button
            onClick={() => setBudgetMonthly(300)}
            className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all cursor-pointer ${
              budgetMonthly === 300
                ? 'bg-[#0369A1] text-white shadow-2xs'
                : 'bg-white text-slate-700 hover:bg-sky-50 border border-sky-200'
            }`}
          >
            $300 (Piloto)
          </button>
          <button
            onClick={() => setBudgetMonthly(600)}
            className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all cursor-pointer ${
              budgetMonthly === 600
                ? 'bg-[#0369A1] text-white shadow-2xs'
                : 'bg-white text-slate-700 hover:bg-sky-50 border border-sky-200'
            }`}
          >
            $600 (Recomendado Q4)
          </button>
          <button
            onClick={() => setBudgetMonthly(1200)}
            className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all cursor-pointer ${
              budgetMonthly === 1200
                ? 'bg-[#0369A1] text-white shadow-2xs'
                : 'bg-white text-slate-700 hover:bg-sky-50 border border-sky-200'
            }`}
          >
            $1,200 (Escala B2B)
          </button>
        </div>
      </div>

      {/* VIEW 1: TRAPEZOIDAL VISUAL FUNNEL */}
      {funnelViewMode === 'trapezoide' && (
        <div className="space-y-3 pt-1">
          <div className="space-y-2.5">
            {funnelStages.map((stage, sIdx) => {
              const isSelected = selectedTierIndex === stage.tierIndex;
              // Calculate custom widths for the funnel feel
              const widths = ['w-full', 'w-[84%]', 'w-[68%]', 'w-[52%]', 'w-[38%]'];
              const customWidth = widths[sIdx] || 'w-full';

              return (
                <div key={stage.id} className="flex flex-col items-center">
                  <div
                    onClick={() => handleStageClick(stage.tierIndex)}
                    className={`${customWidth} transition-all duration-300 cursor-pointer group`}
                  >
                    <div
                      className={`p-3.5 sm:p-4 rounded-2xl border transition-all ${
                        isSelected
                          ? 'bg-[#1E293B] text-white border-slate-900 shadow-md ring-2 ring-[#7DD3FC]'
                          : 'bg-white hover:bg-[#F8FAFC] border-slate-200/90 text-slate-800 shadow-2xs'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        {/* Left Side: Badge & Title */}
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`text-[10px] font-extrabold px-2.5 py-1 rounded-lg border ${
                              isSelected
                                ? 'bg-white/15 text-[#7DD3FC] border-white/20'
                                : stage.colorBadge
                            }`}
                          >
                            {stage.siglas}
                          </span>
                          <div>
                            <h5 className={`font-bold text-xs sm:text-sm ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                              {stage.nombre}
                            </h5>
                            <p className={`text-[11px] ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                              {stage.subtitulo}
                            </p>
                          </div>
                        </div>

                        {/* Right Side: Volume & Unit Cost */}
                        <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
                          <div className="text-right">
                            <strong className={`text-base font-black ${isSelected ? 'text-[#86EFAC]' : 'text-[#0369A1]'}`}>
                              {stage.volumen.toLocaleString()}
                            </strong>
                            <span className={`text-[10px] block ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                              {stage.unidad}
                            </span>
                          </div>

                          {/* Quick Help Modal Button */}
                          {stage.tierIndex < campaignTiers.length && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (onOpenModal) {
                                  onOpenModal(campaignTiers[stage.tierIndex]);
                                }
                              }}
                              className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#0369A1] text-white hover:bg-[#0284C7] border-sky-400'
                                  : 'bg-[#F0F9FF] text-[#0369A1] hover:bg-[#BAE6FD] border-sky-200'
                              }`}
                              title={`Ver explicación pedagógica de ${stage.siglas}`}
                            >
                              <HelpCircle className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Sub-bar with metrics */}
                      <div className={`mt-2.5 pt-2 border-t flex flex-wrap items-center justify-between gap-2 text-[10px] ${
                        isSelected ? 'border-slate-800 text-slate-300' : 'border-slate-100 text-slate-500'
                      }`}>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">Costo Est: <strong className={isSelected ? 'text-white' : 'text-slate-800'}>{stage.costoUnitario}</strong></span>
                          <span>•</span>
                          <span>Formato: <strong className={isSelected ? 'text-[#7DD3FC]' : 'text-slate-700'}>{stage.formatoPrincipal}</strong></span>
                        </div>
                        {stage.porcentajePresupuesto > 0 && (
                          <span className={`font-bold px-2 py-0.5 rounded-md ${
                            isSelected ? 'bg-white/10 text-[#86EFAC]' : 'bg-[#F0FDF4] text-[#15803D] border border-emerald-200'
                          }`}>
                            {stage.porcentajePresupuesto}% Presupuesto (${stage.presupuestoMonto} USD)
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Funnel Down Arrow and Conversion Indicator */}
                  {sIdx < funnelStages.length - 1 && (
                    <div className="flex items-center gap-1.5 my-1 text-[10px] font-bold text-slate-400">
                      <ArrowDown className="w-3.5 h-3.5 text-[#0369A1] animate-bounce" />
                      <span className="bg-[#F8FAFC] px-2 py-0.5 rounded-full border border-slate-200 text-slate-600">
                        {stage.tasaConversionSiguiente}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW 2: RECHARTS BAR / DROP-OFF CHART */}
      {funnelViewMode === 'grafica_barras' && (
        <div className="space-y-4 pt-1">
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-slate-200 text-xs">
            <span className="font-bold text-slate-800 flex items-center gap-1.5 mb-1">
              <BarChart3 className="w-4 h-4 text-[#0369A1]" />
              Gráfico de Caída & Rendimiento Proyectado del Embudo
            </span>
            <p className="text-slate-600 text-[11px]">
              Visualiza el volumen decreciente pero de valor exponencial a medida que los prospectos bajan por el embudo hacia la conversación en WhatsApp.
            </p>
          </div>

          <div className="h-64 sm:h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 20, left: 10, bottom: 25 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis
                  dataKey="etapa"
                  tick={{ fontSize: 11, fill: '#475569', fontWeight: 600 }}
                  axisLine={{ stroke: '#CBD5E1' }}
                />
                <YAxis
                  scale="log"
                  domain={['auto', 'auto']}
                  tick={{ fontSize: 10, fill: '#64748B' }}
                  axisLine={{ stroke: '#CBD5E1' }}
                  tickFormatter={(v) => (v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v)}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-[#1E293B] text-white p-3 rounded-xl shadow-xl text-xs border border-slate-700 space-y-1">
                          <strong className="text-[#7DD3FC] block text-xs font-bold">{data.nombreCompleto}</strong>
                          <p className="text-white font-bold text-sm">
                            {data.volumen.toLocaleString()} <span className="text-xs font-normal text-slate-300">{data.unidad}</span>
                          </p>
                          <div className="text-[10px] text-slate-300 pt-1 border-t border-slate-700">
                            <span>Costo Unitario: </span>
                            <strong className="text-[#86EFAC]">{data.costo}</strong>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="volumen" radius={[8, 8, 0, 0]}>
                  {chartData.map((entry, index) => {
                    const colors = ['#0284C7', '#0D9488', '#059669', '#D97706', '#E11D48'];
                    return <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />;
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* VIEW 3: UNIT COSTS & ROI METRICS */}
      {funnelViewMode === 'metricas_unitarias' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1 text-xs">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              1. Costo por Mil Impresiones (CPM)
            </span>
            <div className="flex items-baseline gap-1.5">
              <strong className="text-xl font-bold text-[#0369A1]">$2.90 USD</strong>
              <span className="text-slate-500 text-[11px]">por cada 1.000 vistas</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Permite impactar a más de 50.000 dueños de negocios y jefes de compras con videos de montacargas y flota.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              2. Costo por Lead B2B (CPL)
            </span>
            <div className="flex items-baseline gap-1.5">
              <strong className="text-xl font-bold text-[#D97706]">$8.50 USD</strong>
              <span className="text-slate-500 text-[11px]">por chat de WhatsApp</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Prospectos con intención comercial real que solicitan cotizaciones de impulso o listas de precios mayoristas.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              3. Costo de Adquisición (CAC B2B)
            </span>
            <div className="flex items-baseline gap-1.5">
              <strong className="text-xl font-bold text-[#15803D]">
                ${(Math.round(budgetMonthly / Math.max(1, 14 * factor))).toFixed(0)} USD
              </strong>
              <span className="text-slate-500 text-[11px]">por nuevo contrato</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Un nuevo cliente de impulso genera un retorno promedio de <strong>15x a 30x</strong> sobre su costo de adquisición.
            </p>
          </div>
        </div>
      )}

      {/* Bottom Educational Summary Footer */}
      <div className="p-3.5 bg-[#F8FAFC] rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-[#0369A1] shrink-0" />
          <span>
            Haz clic en cualquier fase del embudo o en los botones <strong>¿Qué es TOFU / MOFU / BOFU?</strong> para ver la guía pedagógica completa.
          </span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="font-semibold text-slate-800">Fórmula de Éxito:</span>
          <span className="bg-white px-2 py-0.5 rounded-md border border-slate-200 text-[#0369A1] font-bold text-[11px]">
            40% TOFU + 20% MOFU + 40% BOFU
          </span>
        </div>
      </div>
    </div>
  );
};
