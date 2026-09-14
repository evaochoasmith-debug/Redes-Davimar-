import React from 'react';
import { DEMOGRAFIA_B2B, NUBES_INFORMATIVAS } from '../data/metricsData';
import { InformativeCloud } from './InformativeCloud';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from 'recharts';
import {
  Users2,
  Briefcase,
  MapPin,
  Building,
  Target,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

export const DemographicsSection: React.FC = () => {
  return (
    <section id="demographics-section" className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Módulo 2 · Audiencia & B2B Profiling
            </h2>
            <InformativeCloud data={NUBES_INFORMATIVAS.demografia_b2b} label="Nube Demográfica" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 tracking-tight">
            Estudio Demográfico Real & Perfil del Decisor de Compra B2B
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Caracterización del público de @davimargroup (2.421 seguidores) para afinar la segmentación y optimizar la inversión en Meta Ads.
          </p>
        </div>

        <span className="self-start sm:self-auto text-xs font-semibold px-3 py-1 bg-[#E0F2FE] text-[#0369A1] rounded-full flex items-center gap-1.5 border border-sky-200">
          <Target className="w-3.5 h-3.5 text-[#0369A1]" />
          79,7% Decisores en Rango Productivo (25 a 54 años)
        </span>
      </div>

      {/* Grid of Demographics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Rango de Edades */}
        <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/80 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Users2 className="w-3.5 h-3.5 text-[#0369A1]" /> Distribución por Edades
              </span>
              <span className="text-[10px] font-bold text-[#0369A1] bg-[#E0F2FE] px-2 py-0.5 rounded">
                79,7% Núcleo B2B
              </span>
            </div>
            <p className="text-[11px] text-slate-500 mb-3">
              Concentración en edades con capacidad de contratación, compras y supervisión comercial.
            </p>

            <div className="space-y-2">
              {DEMOGRAFIA_B2B.edades.map((e, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-700">
                    <span className="font-medium">{e.rango}</span>
                    <span className="font-semibold text-slate-900">{e.porcentaje}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="h-1.5 rounded-full"
                      style={{ width: `${e.porcentaje}%`, backgroundColor: e.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-slate-600">
            <strong>Segmentación Ads:</strong> Configurar público objetivo en <strong>25 - 54 años</strong> para no desperdiciar pauta en menores sin poder de compra.
          </div>
        </div>

        {/* Card 2: Cargos y Niveles de Decisión B2B */}
        <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/80 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5 mb-1">
              <Briefcase className="w-3.5 h-3.5 text-[#16A34A]" /> Cargos en Canal Retail & B2B
            </span>
            <p className="text-[11px] text-slate-500 mb-3">
              Composición estimada según interacción y solicitudes de catálogo recibidas.
            </p>

            <div className="space-y-2.5">
              {DEMOGRAFIA_B2B.cargosB2B.map((c, idx) => (
                <div key={idx} className="p-2.5 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="flex justify-between items-start gap-1">
                    <span className="text-xs font-semibold text-slate-800 leading-tight">
                      {c.cargo}
                    </span>
                    <span className="text-xs font-bold text-[#16A34A]">{c.porcentaje}%</span>
                  </div>
                  <span className="inline-block text-[10px] font-medium text-slate-500 mt-0.5">
                    • {c.nivelDecision}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-slate-600">
            <strong>Mensaje Clave:</strong> Hacer énfasis en retorno en góndola, inventario al día y reposición rápida.
          </div>
        </div>

        {/* Card 3: Distribución Geográfica */}
        <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/80 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5 mb-1">
              <MapPin className="w-3.5 h-3.5 text-[#EA580C]" /> Principales Polos Comerciales
            </span>
            <p className="text-[11px] text-slate-500 mb-3">
              Eje Gran Caracas y La Guaira concentra el <strong>69,1%</strong> de la audiencia activa.
            </p>

            <div className="space-y-2">
              {DEMOGRAFIA_B2B.ciudades.map((city, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 bg-white rounded-xl border border-slate-200/80">
                  <div>
                    <div className="text-xs font-semibold text-slate-900">{city.ciudad}</div>
                    <div className="text-[10px] text-slate-500 truncate max-w-[130px]">{city.sector}</div>
                  </div>
                  <span className="text-xs font-bold text-[#EA580C] bg-[#FFF7ED] px-2 py-0.5 rounded-lg border border-[#FDBA74]">
                    {city.porcentaje}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-slate-600">
            <strong>Estrategia Ads:</strong> Geocercas prioritarias en Gran Caracas, Catia La Mar y La Guaira.
          </div>
        </div>

        {/* Card 4: Distribución por Género & Comportamiento */}
        <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/80 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5 mb-1">
              <Building className="w-3.5 h-3.5 text-[#9333EA]" /> Distribución por Género
            </span>
            <p className="text-[11px] text-slate-500 mb-3">
              63,3% de la audiencia son mujeres profesionales en cargos de compras, mercadeo y trade marketing.
            </p>

            <div className="h-32 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={DEMOGRAFIA_B2B.generos}
                    dataKey="porcentaje"
                    nameKey="tipo"
                    cx="50%"
                    cy="50%"
                    innerRadius={28}
                    outerRadius={52}
                    paddingAngle={4}
                  >
                    {DEMOGRAFIA_B2B.generos.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: any) => [`${value}%`, 'Participación']}
                    contentStyle={{ fontSize: '11px', borderRadius: '10px', border: '1px solid #E2E8F0' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="flex justify-center gap-4 text-[11px] text-slate-600 mt-1">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F472B6]" />
                <span className="font-bold text-slate-800">Mujeres (63,3%)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#93C5FD]" />
                <span className="font-medium text-slate-700">Hombres (36,7%)</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-slate-600">
            <strong>Tono Creativo:</strong> Estructura profesional, directa, con datos de rendimiento y orden visual.
          </div>
        </div>
      </div>

      {/* Analyst Strategic Takeaway on B2B Audiences */}
      <div className="bg-[#1E293B] text-white rounded-2xl p-5 border border-slate-800 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#7DD3FC] shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="text-xs text-slate-300">
            <strong className="text-white">Por qué esto es vital para @davimargroup:</strong> Al hablarle al sector B2B, no buscamos viralidad vacía ni compras individuales por impulso. Cada interacción calificada es una oportunidad de contrato mayorista o servicio de impulso en PDV. La audiencia actual de 2.421 seguidores es el público semilla perfecto para Meta Ads.
          </div>
        </div>
      </div>
    </section>
  );
};
