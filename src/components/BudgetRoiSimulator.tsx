import React, { useState } from 'react';
import {
  Calculator,
  DollarSign,
  TrendingUp,
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  RefreshCw,
} from 'lucide-react';

export const BudgetRoiSimulator: React.FC = () => {
  // Inputs
  const [presupuestoMensual, setPresupuestoMensual] = useState<number>(500); // USD
  const [cplEstimado, setCplEstimado] = useState<number>(9.5); // USD per lead
  const [tasaCierrePct, setTasaCierrePct] = useState<number>(10); // % of leads closed
  const [ticketPromedioContrato, setTicketPromedioContrato] = useState<number>(2400); // USD per B2B contract

  // Calculations
  const cpmEstimado = 3.4; // $3.40 USD CPM
  const ctrEstimado = 2.2; // 2.2% CTR
  const impresionesEstimadas = Math.round((presupuestoMensual / cpmEstimado) * 1000);
  const clicsEstimados = Math.round(impresionesEstimadas * (ctrEstimado / 100));
  const leadsGenerados = Math.round(presupuestoMensual / cplEstimado);
  const contratosCerrados = Math.max(1, Math.round(leadsGenerados * (tasaCierrePct / 100)));
  const facturacionProyectada = contratosCerrados * ticketPromedioContrato;
  const retornoRoasPct = Math.round((facturacionProyectada / presupuestoMensual) * 100);
  const roasMultiplicador = (facturacionProyectada / presupuestoMensual).toFixed(1);
  const retornoNeto = facturacionProyectada - presupuestoMensual;

  const aplicarPreset = (presupuesto: number, cpl: number, tasa: number, ticket: number) => {
    setPresupuestoMensual(presupuesto);
    setCplEstimado(cpl);
    setTasaCierrePct(tasa);
    setTicketPromedioContrato(ticket);
  };

  return (
    <section id="budget-roi-simulator-section" className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
            Módulo 7 · Proyección Financiera & Retorno
          </h2>
          <h3 className="text-lg font-bold text-slate-900 tracking-tight">
            Simulador Interactivo de Presupuesto & Retorno de Inversión (ROI B2B)
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Proyecta cuántos leads calificados, contratos de impulso en PDV y retorno financiero generará tu inversión publicitaria.
          </p>
        </div>

        {/* Quick Presets */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-400 text-[11px] font-medium mr-1">Escenarios:</span>
          <button
            onClick={() => aplicarPreset(300, 10, 8, 2000)}
            className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
              presupuestoMensual === 300
                ? 'bg-[#1E293B] text-white border-slate-900 shadow-xs'
                : 'bg-[#F8FAFC] text-slate-700 border-slate-200 hover:bg-white'
            }`}
          >
            Piloto ($300)
          </button>
          <button
            onClick={() => aplicarPreset(600, 9, 10, 2500)}
            className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
              presupuestoMensual === 600
                ? 'bg-[#1E293B] text-white border-slate-900 shadow-xs'
                : 'bg-[#F8FAFC] text-slate-700 border-slate-200 hover:bg-white'
            }`}
          >
            Crecimiento ($600)
          </button>
          <button
            onClick={() => aplicarPreset(1200, 8.5, 12, 3000)}
            className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
              presupuestoMensual === 1200
                ? 'bg-[#1E293B] text-white border-slate-900 shadow-xs'
                : 'bg-[#F8FAFC] text-slate-700 border-slate-200 hover:bg-white'
            }`}
          >
            Escala B2B ($1.200)
          </button>
        </div>
      </div>

      {/* Simulator Layout: Controls on Left, Results on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls Column (5 cols) */}
        <div className="lg:col-span-5 space-y-4 bg-[#F8FAFC] p-5 rounded-2xl border border-slate-200/80">
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
            Variables de Pauta & Conversión
          </span>

          {/* Slider 1: Presupuesto Mensual */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-slate-700">Presupuesto Mensual Meta Ads:</span>
              <strong className="text-slate-900 font-bold">${presupuestoMensual} USD</strong>
            </div>
            <input
              type="range"
              min="150"
              max="2500"
              step="50"
              value={presupuestoMensual}
              onChange={(e) => setPresupuestoMensual(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0369A1]"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>$150 USD</span>
              <span>$1.000 USD</span>
              <span>$2.500 USD</span>
            </div>
          </div>

          {/* Slider 2: CPL Estimado */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-slate-700">Costo por Lead B2B (CPL Objetivo):</span>
              <strong className="text-slate-900 font-bold">${cplEstimado.toFixed(1)} USD</strong>
            </div>
            <input
              type="range"
              min="5"
              max="20"
              step="0.5"
              value={cplEstimado}
              onChange={(e) => setCplEstimado(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#38BDF8]"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>$5.0 (Óptimo)</span>
              <span>$12.5 (Promedio B2B)</span>
              <span>$20.0 (Alto)</span>
            </div>
          </div>

          {/* Slider 3: Tasa de Cierre Comercial */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-slate-700">Tasa de Cierre Comercial Davimar:</span>
              <strong className="text-slate-900 font-bold">{tasaCierrePct}% de Leads</strong>
            </div>
            <input
              type="range"
              min="4"
              max="25"
              step="1"
              value={tasaCierrePct}
              onChange={(e) => setTasaCierrePct(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#16A34A]"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>4% (Conservador)</span>
              <span>10% (Estándar B2B)</span>
              <span>25% (Alta conversión)</span>
            </div>
          </div>

          {/* Slider 4: Ticket Promedio B2B */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-slate-700">Valor Promedio por Contrato B2B:</span>
              <strong className="text-slate-900 font-bold">${ticketPromedioContrato.toLocaleString('es-CO')} USD</strong>
            </div>
            <input
              type="range"
              min="800"
              max="10000"
              step="200"
              value={ticketPromedioContrato}
              onChange={(e) => setTicketPromedioContrato(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#9333EA]"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>$800 USD (Puntos puntuales)</span>
              <span>$5.000 USD (Cadena Retail)</span>
              <span>$10.000 USD</span>
            </div>
          </div>
        </div>

        {/* Dynamic Results Column (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Main Financial KPI Banner */}
          <div className="p-5 bg-[#F0FDF4] rounded-2xl border border-[#86EFAC]/70 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold text-[#15803D] uppercase tracking-wider block mb-1">
                Retorno Proyectado en Pipeline Comercial
              </span>
              <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
                ${facturacionProyectada.toLocaleString('es-CO')}{' '}
                <span className="text-sm font-semibold text-slate-500">USD</span>
              </div>
              <p className="text-xs text-[#15803D] font-semibold mt-1 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" />
                Retorno Neto Estimado: <strong>+${retornoNeto.toLocaleString('es-CO')} USD</strong>
              </p>
            </div>

            {/* ROAS Badge */}
            <div className="bg-white px-5 py-3.5 rounded-2xl border border-emerald-200 shadow-2xs text-center min-w-[140px]">
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">ROAS Estimado</span>
              <div className="text-2xl font-black text-[#15803D]">
                {roasMultiplicador}x
              </div>
              <span className="text-[11px] font-semibold text-slate-600">{retornoRoasPct}% Retorno</span>
            </div>
          </div>

          {/* Funnel Output Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {/* Metric 1 */}
            <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
              <span className="text-[10px] font-medium text-slate-500 block mb-1">Impresiones B2B</span>
              <div className="text-base font-bold text-slate-900">
                ~{impresionesEstimadas.toLocaleString('es-CO')}
              </div>
              <span className="text-[10px] text-slate-400">a ${cpmEstimado} CPM</span>
            </div>

            {/* Metric 2 */}
            <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
              <span className="text-[10px] font-medium text-slate-500 block mb-1">Clics Salientes</span>
              <div className="text-base font-bold text-[#0369A1]">
                {clicsEstimados}
              </div>
              <span className="text-[10px] text-slate-400">CTR {ctrEstimado}%</span>
            </div>

            {/* Metric 3 */}
            <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
              <span className="text-[10px] font-medium text-slate-500 block mb-1">Leads B2B</span>
              <div className="text-base font-bold text-[#0284C7]">
                {leadsGenerados}
              </div>
              <span className="text-[10px] text-slate-400">${cplEstimado}/lead</span>
            </div>

            {/* Metric 4 */}
            <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
              <span className="text-[10px] font-medium text-slate-500 block mb-1">Contratos Cerrados</span>
              <div className="text-base font-bold text-[#16A34A]">
                {contratosCerrados}
              </div>
              <span className="text-[10px] text-slate-400">{tasaCierrePct}% cierre</span>
            </div>
          </div>

          {/* Business Analyst Reality Check */}
          <div className="bg-[#1E293B] text-white p-5 rounded-2xl shadow-md text-xs flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#86EFAC] shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="leading-relaxed text-slate-300">
              <strong className="text-white">Lectura de Eficiencia para @davimargroup:</strong> Debido a que el ticket comercial en servicios de mercaderismo, impulso en PDV y distribución supera fácilmente los $1.500+ USD, cerrar tan solo <strong>1 solo contrato nuevo al mes</strong> financia la totalidad de la inversión publicitaria y genera margen operativo positivo.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
