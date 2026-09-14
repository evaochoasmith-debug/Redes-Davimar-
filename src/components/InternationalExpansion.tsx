import React, { useState } from 'react';
import {
  PAISES_OBJETIVO_INTERNACIONAL,
  BUYER_PERSONAS_INTERNACIONALES,
  PILARES_CONFIANZA_INTERNACIONAL,
  QUE_BUSCA_UNA_MARCA_EXTRANJERA,
  BENCHMARKS_EXPANSION_INTERNACIONAL,
  TargetCountry,
} from '../data/internationalData';
import {
  Globe2,
  Target,
  ShieldCheck,
  Building2,
  Users2,
  TrendingUp,
  Award,
  Sparkles,
  Copy,
  Check,
  CheckCircle2,
  ArrowRight,
  Calculator,
  MessageCircle,
  Briefcase,
  Layers,
  HelpCircle,
  Lightbulb,
  ExternalLink,
  ChevronRight,
  Percent,
  Compass,
  FileCheck,
  Store,
  Warehouse,
  Zap,
} from 'lucide-react';

export const InternationalExpansion: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'paises' | 'buyer_personas' | 'confianza' | 'que_busca' | 'simulador'>('paises');
  const [selectedCountryId, setSelectedCountryId] = useState<string>('colombia');
  const [selectedRegionFilter, setSelectedRegionFilter] = useState<'todos' | 'Latam' | 'Europa'>('todos');
  const [selectedPersonaId, setSelectedPersonaId] = useState<string>('export_manager');
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  // Simulator State
  const [simBudget, setSimBudget] = useState<number>(500);
  const [simCountrySelection, setSimCountrySelection] = useState<string>('todos');

  const selectedCountry = PAISES_OBJETIVO_INTERNACIONAL.find((c) => c.id === selectedCountryId) || PAISES_OBJETIVO_INTERNACIONAL[0];
  const selectedPersona = BUYER_PERSONAS_INTERNACIONALES.find((p) => p.id === selectedPersonaId) || BUYER_PERSONAS_INTERNACIONALES[0];

  const filteredCountries = PAISES_OBJETIVO_INTERNACIONAL.filter((c) => {
    if (selectedRegionFilter === 'todos') return true;
    return c.region === selectedRegionFilter;
  });

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Simulator Calculations
  const averageCpl = simCountrySelection === 'todos'
    ? 23.50
    : (PAISES_OBJETIVO_INTERNACIONAL.find((c) => c.id === simCountrySelection)?.cplEstimadoUSD || 23.50);
  
  const estimatedLeads = Math.max(1, Math.round(simBudget / averageCpl));
  const estimatedMeetings = Math.max(1, Math.round(estimatedLeads * 0.22)); // 22% meeting booking rate
  const estimatedPipelineMin = estimatedMeetings * 150000;
  const estimatedPipelineMax = estimatedMeetings * 400000;

  return (
    <section id="international-expansion-section" className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#0369A1] text-white flex items-center gap-1 shadow-2xs">
              <Globe2 className="w-3 h-3" />
              Módulo 9 · Expansión & Geolocalización B2B Internacional
            </span>
            <span className="text-xs text-slate-400 font-medium">· Captación de Marcas Extranjeras</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">
            Estrategia de Atracción y Representación de Marcas Globales en Venezuela
          </h3>
          <p className="text-xs text-slate-500 mt-1 max-w-3xl leading-relaxed">
            Cómo captar directores de exportación de <strong className="text-slate-800">Colombia, España, México, Chile, Italia, Portugal, Brasil y Argentina</strong> para convertirlos en aliados de distribución exclusiva y servicios de impulso en punto de venta.
          </p>
        </div>

        {/* Top Highlight Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 shrink-0 text-xs">
          <div className="bg-[#F0F9FF] p-2.5 rounded-xl border border-sky-200">
            <span className="text-[10px] font-bold text-[#0369A1] block">CPL B2B Internacional</span>
            <strong className="text-sm font-bold text-slate-900">$16 - $32 USD</strong>
          </div>
          <div className="bg-[#F0FDF4] p-2.5 rounded-xl border border-emerald-200">
            <span className="text-[10px] font-bold text-[#15803D] block">Probabilidad Éxito</span>
            <strong className="text-sm font-bold text-slate-900">77% a 90%</strong>
          </div>
          <div className="col-span-2 sm:col-span-1 bg-[#FFF7ED] p-2.5 rounded-xl border border-amber-200">
            <span className="text-[10px] font-bold text-[#C2410C] block">Retorno Proyectado</span>
            <strong className="text-sm font-bold text-slate-900">12x - 35x ROI</strong>
          </div>
        </div>
      </div>

      {/* Sub-navigation Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 border-b border-slate-100 text-xs">
        <button
          onClick={() => setActiveTab('paises')}
          className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
            activeTab === 'paises'
              ? 'bg-[#1E293B] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Compass className="w-3.5 h-3.5 text-[#38BDF8]" />
          1. Geolocalización & 8 Países Objetivo
        </button>

        <button
          onClick={() => setActiveTab('buyer_personas')}
          className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
            activeTab === 'buyer_personas'
              ? 'bg-[#1E293B] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Users2 className="w-3.5 h-3.5 text-[#86EFAC]" />
          2. ¿A Quién Enviar el Mensaje? (Buyer Personas)
        </button>

        <button
          onClick={() => setActiveTab('confianza')}
          className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
            activeTab === 'confianza'
              ? 'bg-[#1E293B] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5 text-[#FDBA74]" />
          3. Contenidos que Generan Confianza
        </button>

        <button
          onClick={() => setActiveTab('que_busca')}
          className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
            activeTab === 'que_busca'
              ? 'bg-[#1E293B] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Award className="w-3.5 h-3.5 text-[#C084FC]" />
          4. ¿Qué Busca una Marca Extranjera?
        </button>

        <button
          onClick={() => setActiveTab('simulador')}
          className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
            activeTab === 'simulador'
              ? 'bg-[#0369A1] text-white shadow-xs'
              : 'bg-[#F0F9FF] text-[#0369A1] hover:bg-[#E0F2FE] border border-sky-200'
          }`}
        >
          <Calculator className="w-3.5 h-3.5 text-[#0369A1]" />
          5. Simulador de Leads Internacionales
        </button>
      </div>

      {/* TAB 1: GEOLOCALIZACIÓN Y 8 PAÍSES OBJETIVO */}
      {activeTab === 'paises' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Region Filter Bar */}
          <div className="flex items-center justify-between gap-3 flex-wrap bg-[#F8FAFC] p-3 rounded-xl border border-slate-200">
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <Globe2 className="w-4 h-4 text-[#0369A1]" />
              Selecciona un país para ver su estrategia, dolor principal, gancho publicitario y copy listo para pauta:
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setSelectedRegionFilter('todos')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedRegionFilter === 'todos' ? 'bg-[#1E293B] text-white shadow-2xs' : 'bg-white text-slate-600 hover:bg-slate-100'
                }`}
              >
                Todos (8)
              </button>
              <button
                onClick={() => setSelectedRegionFilter('Latam')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedRegionFilter === 'Latam' ? 'bg-[#1E293B] text-white shadow-2xs' : 'bg-white text-slate-600 hover:bg-slate-100'
                }`}
              >
                Latinoamérica (5)
              </button>
              <button
                onClick={() => setSelectedRegionFilter('Europa')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedRegionFilter === 'Europa' ? 'bg-[#1E293B] text-white shadow-2xs' : 'bg-white text-slate-600 hover:bg-slate-100'
                }`}
              >
                Europa / Iberia (3)
              </button>
            </div>
          </div>

          {/* Country Selection Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {filteredCountries.map((c) => {
              const isSelected = c.id === selectedCountryId;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedCountryId(c.id)}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-between ${
                    isSelected
                      ? 'bg-[#1E293B] text-white border-slate-900 shadow-md ring-2 ring-[#7DD3FC]'
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                  }`}
                >
                  <span className="text-2xl mb-1">{c.bandera}</span>
                  <span className="text-xs font-bold block">{c.nombre}</span>
                  <span className={`text-[10px] font-semibold mt-1 px-1.5 py-0.2 rounded-md ${
                    isSelected ? 'bg-white/20 text-[#86EFAC]' : 'bg-[#F0FDF4] text-[#15803D]'
                  }`}>
                    {c.probabilidadExitoPct}% Éxito
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Country Deep Dive */}
          {selectedCountry && (
            <div className="bg-[#F0F9FF] rounded-2xl p-6 border border-sky-200/80 shadow-2xs space-y-6">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-sky-200">
                <div className="flex items-center gap-3">
                  <span className="text-4xl p-2 bg-white rounded-2xl border border-sky-200 shadow-2xs">
                    {selectedCountry.bandera}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#0369A1] text-white">
                        {selectedCountry.region}
                      </span>
                      <span className="text-xs text-slate-500">Idioma: {selectedCountry.idiomaPrincipal}</span>
                      <span className="text-xs text-slate-400">•</span>
                      <span className="text-xs font-bold text-[#15803D]">
                        Probabilidad de Captación: {selectedCountry.probabilidadExito} ({selectedCountry.probabilidadExitoPct}%)
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                      Estrategia de Prospección B2B: {selectedCountry.nombre}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <div className="bg-white p-2.5 rounded-xl border border-sky-200 shadow-2xs">
                    <span className="text-[10px] text-slate-400 block font-semibold">CPM Estimado Ads</span>
                    <strong className="text-slate-900 font-bold">${selectedCountry.cpmEstimadoUSD.toFixed(2)} USD</strong>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-sky-200 shadow-2xs">
                    <span className="text-[10px] text-slate-400 block font-semibold">CPL Lead B2B</span>
                    <strong className="text-[#0369A1] font-bold">${selectedCountry.cplEstimadoUSD.toFixed(2)} USD</strong>
                  </div>
                </div>
              </div>

              {/* Sectors and Target Profile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* Sectors */}
                <div className="bg-white p-4.5 rounded-xl border border-sky-100 shadow-2xs space-y-2">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5 text-xs">
                    <Store className="w-4 h-4 text-[#0369A1]" /> Sectores Clave con Alta Demanda de Exportación:
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {selectedCountry.sectoresClaveExportacion.map((sec, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg font-semibold bg-[#F0F9FF] text-[#0369A1] border border-sky-200 text-[11px]"
                      >
                        {sec}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed pt-1.5 border-t border-slate-100">
                    <strong>Perfil de Empresa:</strong> {selectedCountry.perfilMarcasObjetivo}
                  </p>
                </div>

                {/* Pain vs Value Prop */}
                <div className="bg-white p-4.5 rounded-xl border border-sky-100 shadow-2xs space-y-2.5">
                  <div className="p-2.5 bg-[#FFF7ED] rounded-lg border border-amber-200/80">
                    <span className="font-bold text-[#C2410C] block text-[11px] mb-0.5">
                      ⚠️ Dolor o Temor Principal de la Marca en {selectedCountry.nombre}:
                    </span>
                    <p className="text-slate-700 text-[11px] leading-relaxed">
                      {selectedCountry.dolorPrincipalMarca}
                    </p>
                  </div>

                  <div className="p-2.5 bg-[#F0FDF4] rounded-lg border border-emerald-200/80">
                    <span className="font-bold text-[#15803D] block text-[11px] mb-0.5">
                      ✅ Propuesta de Valor & Respaldo de Davimar Group:
                    </span>
                    <p className="text-slate-700 text-[11px] leading-relaxed">
                      {selectedCountry.propuestaValorDavimar}
                    </p>
                  </div>
                </div>
              </div>

              {/* Ready-to-use Ad Creatives & Copy Engine */}
              <div className="bg-white p-5 rounded-2xl border border-sky-100 shadow-2xs space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#0369A1]" /> Plantilla de Anuncio B2B Adaptado para {selectedCountry.nombre} (Meta & LinkedIn Ads):
                  </span>
                  <button
                    onClick={() => handleCopy(selectedCountry.copyAnuncio, selectedCountry.id)}
                    className="inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1.5 rounded-lg bg-[#E0F2FE] hover:bg-[#BAE6FD] text-[#0369A1] border border-sky-200 transition-all cursor-pointer active:scale-95"
                  >
                    {copiedIndex === selectedCountry.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#15803D]" />
                        <span>Copiado al portapapeles</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar Copy del Anuncio</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  {/* Hook in Video */}
                  <div className="p-3.5 bg-[#F8FAFC] rounded-xl border border-slate-200">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Gancho Visual & Texto en Pantalla (0-3s)
                    </span>
                    <p className="text-slate-900 font-semibold text-xs leading-relaxed italic">
                      "{selectedCountry.ganchoAnuncio}"
                    </p>
                  </div>

                  {/* Body Copy */}
                  <div className="p-3.5 bg-[#F8FAFC] rounded-xl border border-slate-200">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Texto Principal del Anuncio (Primary Text)
                    </span>
                    <p className="text-slate-700 text-xs leading-relaxed font-sans">
                      {selectedCountry.copyAnuncio}
                    </p>
                  </div>
                </div>

                {/* Allied Chambers */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-slate-500 border-t border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#0369A1]" />
                    <span className="font-semibold text-slate-700">Cámaras y Canales Recomendados:</span>
                    <span>{selectedCountry.canalesPublicitariosRecomendados.join(' • ')}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-600">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#15803D]" />
                    <span>Aliados: {selectedCountry.camarasComercioAliadas.join(', ')}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: ¿A QUIÉN ENVIAR EL MENSAJE? (BUYER PERSONAS) */}
      {activeTab === 'buyer_personas' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-slate-200">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Users2 className="w-4 h-4 text-[#0369A1]" />
              Los 4 Cargos Clave que Toman la Decisión en una Marca Extranjera
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              En el comercio internacional B2B no le hablamos al consumidor final; le hablamos a los ejecutivos responsables de cuotas de exportación, rentabilidad y cuidado de marca.
            </p>
          </div>

          {/* Persona Selection Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {BUYER_PERSONAS_INTERNACIONALES.map((persona) => {
              const isSelected = persona.id === selectedPersonaId;
              return (
                <button
                  key={persona.id}
                  onClick={() => setSelectedPersonaId(persona.id)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#1E293B] text-white border-slate-900 shadow-md ring-2 ring-[#7DD3FC]'
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                  }`}
                >
                  <div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full inline-block mb-2 ${
                      isSelected ? 'bg-white/20 text-[#7DD3FC]' : 'bg-[#E0F2FE] text-[#0369A1]'
                    }`}>
                      {persona.nivelDecision}
                    </span>
                    <h5 className="font-bold text-xs leading-snug">{persona.cargo}</h5>
                  </div>
                  <span className={`text-[11px] font-semibold mt-3 flex items-center gap-1 ${
                    isSelected ? 'text-[#86EFAC]' : 'text-[#0369A1]'
                  }`}>
                    Ver perfil estratégico <ArrowRight className="w-3 h-3" />
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Persona Deep Breakdown */}
          {selectedPersona && (
            <div className="bg-[#F0F9FF] rounded-2xl p-6 border border-sky-200 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-sky-200">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0369A1]">
                    Ficha de Buyer Persona B2B Internacional
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mt-0.5">{selectedPersona.cargo}</h4>
                </div>
                <div className="text-xs bg-white px-3.5 py-1.5 rounded-xl border border-sky-200 shadow-2xs font-semibold text-[#0369A1]">
                  Nivel de Decisión: {selectedPersona.nivelDecision}
                </div>
              </div>

              {/* Grid with Goals, Fears and Channel */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                {/* Where to find them */}
                <div className="bg-white p-4.5 rounded-xl border border-sky-100 shadow-2xs space-y-2">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Target className="w-4 h-4 text-[#0369A1]" /> ¿Dónde encontrarlo y segmentarlo?
                  </span>
                  <ul className="space-y-1.5 pt-1 text-slate-600 text-[11px]">
                    {selectedPersona.dondeEncontrarlo.map((loc, lIdx) => (
                      <li key={lIdx} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0369A1] shrink-0 mt-1.5" />
                        <span>{loc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Goals */}
                <div className="bg-white p-4.5 rounded-xl border border-sky-100 shadow-2xs space-y-2">
                  <span className="font-bold text-[#15803D] flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-[#15803D]" /> ¿Cuáles son sus metas principales?
                  </span>
                  <ul className="space-y-1.5 pt-1 text-slate-600 text-[11px]">
                    {selectedPersona.objetivosPrincipales.map((obj, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] shrink-0 mt-1.5" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Fears & Objections */}
                <div className="bg-white p-4.5 rounded-xl border border-sky-100 shadow-2xs space-y-2">
                  <span className="font-bold text-[#C2410C] flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-[#C2410C]" /> Miedos y Objeciones que tiene:
                  </span>
                  <ul className="space-y-1.5 pt-1 text-slate-600 text-[11px]">
                    {selectedPersona.miedosYObjeciones.map((fear, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C2410C] shrink-0 mt-1.5" />
                        <span>{fear}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Key Attraction Angle */}
              <div className="bg-white p-5 rounded-xl border border-sky-100 shadow-2xs space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#0369A1]" />
                  <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                    Mensaje Clave de Atracción & Gancho Psicológico
                  </h5>
                </div>
                <p className="text-xs text-slate-800 leading-relaxed font-sans bg-[#F8FAFC] p-3.5 rounded-xl border border-slate-200">
                  "{selectedPersona.mensajeClaveDeAtraccion}"
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-[11px] text-slate-500 border-t border-slate-100">
                  <span><strong>Formato recomendado:</strong> {selectedPersona.formatoContenidoPreferido}</span>
                  <span className="font-bold text-[#0369A1] bg-[#E0F2FE] px-2.5 py-1 rounded-md">
                    CTA: {selectedPersona.llamadoAccionEfectivo}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: CONTENIDOS QUE GENERAN CONFIANZA */}
      {activeTab === 'confianza' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-slate-200">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#0369A1]" />
              Los 5 Pilares de Contenido que Derriban la Desconfianza del Comprador Extranjero
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Las marcas internacionales temen que su producto se pierda en aduana, no se venda o no se pague. Estos 5 formatos audiovisuales demuestran solvencia, orden y capacidad de ejecución sin necesidad de palabras huecas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PILARES_CONFIANZA_INTERNACIONAL.map((pilar, pIdx) => (
              <div
                key={pilar.id}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4 hover:border-sky-300 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#E0F2FE] text-[#0369A1]">
                      Pilar {pIdx + 1}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500">
                      {pilar.nivelImpacto}
                    </span>
                  </div>

                  <h5 className="font-bold text-sm text-slate-900 mb-1 leading-snug">
                    {pilar.titulo}
                  </h5>
                  <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                    {pilar.subtitulo}
                  </p>

                  <div className="p-3 bg-[#F8FAFC] rounded-xl border border-slate-100 text-xs space-y-2">
                    <span className="font-bold text-slate-800 text-[11px] block">
                      ¿Por qué genera confianza inmediata?
                    </span>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      {pilar.porQueGeneraConfianza}
                    </p>
                  </div>

                  <div className="mt-3 space-y-1.5 text-xs">
                    <span className="font-bold text-slate-800 text-[11px] block">
                      Ejemplos de Piezas a Publicar en Ads/Reels:
                    </span>
                    {pilar.ejemplosContenido.map((ej, eIdx) => (
                      <div key={eIdx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#15803D] shrink-0 mt-0.5" />
                        <span>{ej}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-[#0369A1] font-semibold">
                  <span>Cómo producirlo: </span>
                  <span className="text-slate-600 font-normal">{pilar.comoProducirlo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: ¿QUÉ BUSCA UNA MARCA EXTRANJERA? (SCORECARD) */}
      {activeTab === 'que_busca' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-slate-200">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#0369A1]" />
              Checklist de Selección: Los 6 Requisitos que Exige una Marca Global para Firmar Distribución
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Esta matriz compara la pregunta interna que se hace la junta directiva de una multinacional con la respuesta operativa y respaldo institucional que ofrece Davimar Group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {QUE_BUSCA_UNA_MARCA_EXTRANJERA.map((item, idx) => (
              <div
                key={item.id}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3.5"
              >
                <div className="flex items-center justify-between">
                  <h5 className="font-bold text-sm text-slate-900">
                    {item.pilar}
                  </h5>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#F0FDF4] text-[#15803D] border border-emerald-200">
                    Cumplido al 100%
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.descripcion}
                </p>

                <div className="p-3 bg-[#FFF7ED] rounded-xl border border-amber-200/80 text-xs">
                  <span className="font-bold text-[#C2410C] block text-[11px] mb-0.5">
                    ❓ La Gran Pregunta de la Marca:
                  </span>
                  <p className="text-slate-800 text-[11px] italic">
                    "{item.preguntaQueSeHaceLaMarca}"
                  </p>
                </div>

                <div className="p-3 bg-[#F0FDF4] rounded-xl border border-emerald-200/80 text-xs">
                  <span className="font-bold text-[#15803D] block text-[11px] mb-0.5">
                    🛡️ Respaldo Comprobado de Davimar Group:
                  </span>
                  <p className="text-slate-800 text-[11px]">
                    {item.respuestaYRespaldoDavimar}
                  </p>
                </div>

                <div className="pt-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-100">
                  <span>Requisito Indispensable:</span>
                  <strong className="text-slate-700 font-semibold">{item.requisitoIndispensable}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: SIMULADOR DE CAPTACIÓN DE LEADS INTERNACIONALES */}
      {activeTab === 'simulador' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-[#F0F9FF] p-5 rounded-2xl border border-sky-200 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0369A1]">
                  Calculadora Comercial B2B
                </span>
                <h4 className="text-base font-bold text-slate-900">
                  Simulador de Inversión en Pauta Internacional & Pipeline de Nuevas Marcas
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Ajusta el presupuesto publicitario mensual para proyectar el número de directores de exportación contactados y el valor de los contratos generados.
                </p>
              </div>

              <div className="text-xs bg-white px-3.5 py-2 rounded-xl border border-sky-200 shadow-2xs font-semibold text-[#0369A1]">
                CPL Promedio Internacional: <strong>${averageCpl.toFixed(2)} USD</strong>
              </div>
            </div>

            {/* Controls */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {/* Budget Slider */}
              <div className="bg-white p-4.5 rounded-xl border border-sky-100 shadow-2xs space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-800">
                    Presupuesto Mensual de Pauta Internacional:
                  </label>
                  <span className="text-sm font-bold text-[#0369A1]">${simBudget} USD / mes</span>
                </div>
                <input
                  type="range"
                  min={150}
                  max={2500}
                  step={50}
                  value={simBudget}
                  onChange={(e) => setSimBudget(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0369A1]"
                />
                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  <span>$150 USD (Piloto 1 País)</span>
                  <span>$1,000 USD (Multi-País)</span>
                  <span>$2,500 USD (Escalamiento Global)</span>
                </div>
              </div>

              {/* Country Targeting Selector */}
              <div className="bg-white p-4.5 rounded-xl border border-sky-100 shadow-2xs space-y-2">
                <label className="text-xs font-bold text-slate-800 block">
                  Filtrar Mercado Geográfico Específico:
                </label>
                <select
                  value={simCountrySelection}
                  onChange={(e) => setSimCountrySelection(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-white font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#0369A1]"
                >
                  <option value="todos">🌎 Todos los Países (Latam + Europa Promediado)</option>
                  {PAISES_OBJETIVO_INTERNACIONAL.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.bandera} {c.nombre} (CPL: ${c.cplEstimadoUSD.toFixed(2)} USD • Éxito: {c.probabilidadExitoPct}%)
                    </option>
                  ))}
                </select>
                <span className="text-[11px] text-slate-500 block">
                  Segmentación a través de Meta Ads Manager y campañas patrocinadas en LinkedIn InMail.
                </span>
              </div>
            </div>

            {/* Projected Outputs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white p-4 rounded-xl border border-sky-100 shadow-2xs text-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Leads Calificados B2B
                </span>
                <strong className="text-xl font-bold text-[#0369A1]">
                  {estimatedLeads}
                </strong>
                <span className="text-[10px] text-slate-500 block mt-0.5">Export Managers por mes</span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-sky-100 shadow-2xs text-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Reuniones Comerciales
                </span>
                <strong className="text-xl font-bold text-[#15803D]">
                  {estimatedMeetings}
                </strong>
                <span className="text-[10px] text-slate-500 block mt-0.5">Presentaciones Zoom / mes</span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-sky-100 shadow-2xs text-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Nuevos Contratos Est.
                </span>
                <strong className="text-xl font-bold text-[#C2410C]">
                  {Math.max(1, Math.round(estimatedMeetings * 0.35))} a {Math.max(1, Math.round(estimatedMeetings * 0.60))}
                </strong>
                <span className="text-[10px] text-slate-500 block mt-0.5">Marcas representadas / año</span>
              </div>

              <div className="bg-[#1E293B] text-white p-4 rounded-xl shadow-2xs text-center">
                <span className="text-[10px] font-bold text-[#7DD3FC] uppercase tracking-wider block mb-1">
                  Valor Pipeline Anual
                </span>
                <strong className="text-lg font-bold text-[#86EFAC]">
                  ${(estimatedPipelineMin / 1000).toFixed(0)}k - ${(estimatedPipelineMax / 1000).toFixed(0)}k USD
                </strong>
                <span className="text-[10px] text-slate-300 block mt-0.5">Facturación estimada</span>
              </div>
            </div>

            {/* Practical Advice Banner */}
            <div className="p-4 bg-white rounded-xl border border-sky-200 text-xs text-slate-700 leading-relaxed flex items-start gap-3">
              <div className="p-2 bg-[#E0F2FE] rounded-lg text-[#0369A1] shrink-0 mt-0.5">
                <Lightbulb className="w-4 h-4" />
              </div>
              <div>
                <strong className="font-bold text-slate-900 block mb-0.5">
                  Recomendación Táctica para el Primer Despliegue Internacional:
                </strong>
                Iniciar el mes 1 con un presupuesto piloto de <strong className="text-[#0369A1]">$300 - $500 USD</strong> enfocado en **Colombia** (por cercanía terrestre y afinidad de portafolio) y **España / Italia** (por el fuerte lazo cultural con cadenas de supermercados venezolanas).
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
