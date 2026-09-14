import React, { useState } from 'react';
import {
  ESTRUCTURA_CAMPANAS,
  HERRAMIENTAS_CRECIMIENTO_Q4,
  NUBES_INFORMATIVAS,
} from '../data/metricsData';
import { CampaignTier } from '../types';
import { InformativeCloud } from './InformativeCloud';
import { FunnelInfoModal } from './FunnelInfoModal';
import { generateDashboardPdf } from '../utils/generateDashboardPdf';
import {
  Rocket,
  ShieldCheck,
  Target,
  Layers,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Flame,
  Bot,
  Zap,
  Users2,
  MessageSquare,
  FileSpreadsheet,
  Cpu,
  Smartphone,
  ExternalLink,
  ChevronRight,
  HelpCircle,
  Info,
  FileDown,
} from 'lucide-react';

export const QuarterlyStrategyQ4: React.FC = () => {
  const [activeStrategyTab, setActiveStrategyTab] = useState<'estrategia_ads' | 'pilares_contenido' | 'estancamiento' | 'herramientas'>('estrategia_ads');
  const [selectedPillar, setSelectedPillar] = useState<number>(0);
  const [selectedFunnelModal, setSelectedFunnelModal] = useState<CampaignTier | null>(null);

  const pilaresContenido = [
    {
      id: 1,
      titulo: '1. Músculo Logístico & Infraestructura en Patio',
      subtitulo: 'Patio de Contenedores, Descarga con Montacargas & Flota 5:00 AM',
      formato: 'Reels Dinámicos (15-30s)',
      respaldoDatos: '2.400 vistas en Reel de montacargas en Agosto (#1 del mes, 88 likes, 14 compartidos, +5 seguidores directos) y 1.9k en Julio. Valida que el patio y el equipo con EPP generan confianza biológica inmediata.',
      neuromarketing: 'Credibilidad y Seguridad Patrimonial: Ver la infraestructura física real elimina el escepticismo de proveedores y compradores corporativos.',
      recomendacionAds: 'Ideal para la Campaña Always-On (TOFU) con objetivo de Reconocimiento y Reproducciones ThruPlay.',
      ejemploHook: '"¿Qué se necesita para mover más de 50 toneladas de mercancía sin fallar en el anaquel? En Davimar así arranca el día a las 5:00 AM."',
      tags: ['Always-On', 'Top of Funnel', 'Autoridad B2B', 'Reels'],
      color: 'border-sky-400 bg-[#F0F9FF]',
      accentColor: 'text-[#0369A1]',
    },
    {
      id: 2,
      titulo: '2. Trade Marketing & Activaciones con Marcas Aliadas',
      subtitulo: 'Casos Reales de Impulso en PDV, Supermercados y Alimentos Mary',
      formato: 'Reels + Carruseles Comparativos de Góndola',
      respaldoDatos: '2.844 vistas en Reel de Alimentos Mary y 1.993 vistas en carrusel de impulso PDV (+4 seguidores directos).',
      neuromarketing: 'Prueba Social y Rotación Comprobada: Demuestra a dueños de marcas que Davimar no solo despacha mercancía, sino que asegura su rotación final.',
      recomendacionAds: 'Activo estrella para Campaña de Conversión (MOFU) con enlace a solicitud de cotización comercial.',
      ejemploHook: '"¿Por qué tu producto se queda estancado en la última fila del anaquel? 3 claves de frenteo que aplicamos en cadenas de retail."',
      tags: ['Conversión', 'Middle Funnel', 'Trade Marketing', 'Supervisión PDV'],
      color: 'border-emerald-400 bg-[#F0FDF4]',
      accentColor: 'text-[#15803D]',
    },
    {
      id: 3,
      titulo: '3. Capital Humano, Cultura & Trayectoria (60 Años)',
      subtitulo: 'Historias de Equipo ("5 Fortalezas de José") y Valores Institucionales',
      formato: 'Carruseles de Rostro Humano & Video Entrevistas',
      respaldoDatos: 'Post de José fue el #1 en captación de seguidores directos (+9 netos) y 2.2k vistas. Post institucional generó +10 seguidores.',
      neuromarketing: 'Activación de la Neurona Espejo: Las empresas B2B son personas haciendo negocios con personas. Humanizar el equipo genera confianza y lealtad.',
      recomendacionAds: 'Excelente para campañas de Retargeting y construcción de comunidad orgánica y pagada.',
      ejemploHook: '"Detrás de cada entrega a tiempo hay personas como José. Conoce al equipo que hace posible la distribución en toda Venezuela."',
      tags: ['Retargeting', 'Cultura', 'Conversión a Seguidores', 'Confianza'],
      color: 'border-amber-400 bg-[#FFF7ED]',
      accentColor: 'text-[#C2410C]',
    },
  ];

  return (
    <section id="quarterly-strategy-q4-section" className="space-y-6">
      {/* Header Card */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#1E293B] text-white">
                Plan Estratégico Q3 / Q4
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E0F2FE] text-[#0369A1]">
                Septiembre · Octubre · Noviembre
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#DCFCE7] text-[#15803D]">
                Base Actual: 2.471 Seguidores (+57 en Agosto)
              </span>
              <InformativeCloud data={NUBES_INFORMATIVAS.estancamiento_seguidores} label="Nube: Diagnóstico Base" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Estrategia de Meta Ads & Crecimiento Acelerado para @davimargroup
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-4xl">
              Diagnóstico de la base consolidada en <strong>2.471 seguidores</strong>, pilares de contenido de alto rendimiento y arquitectura de campañas recomendadas:{' '}
              <strong className="text-slate-800">Always-On de Reconocimiento + Campaña Continua de Conversión B2B</strong>.
            </p>
          </div>

          <button
            onClick={() => generateDashboardPdf()}
            className="px-4 py-2 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-xl text-xs font-bold transition-all shadow-xs active:scale-95 cursor-pointer flex items-center gap-1.5 self-start lg:self-center shrink-0"
            title="Descargar auditoría completa y blueprint en PDF"
          >
            <FileDown className="w-4 h-4 text-white" />
            Descargar Informe PDF
          </button>
        </div>

        {/* Quick Subnav Tabs */}
        <div className="mt-5 flex items-center gap-1.5 p-1 bg-[#F1F5F9] rounded-xl border border-slate-200 overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setActiveStrategyTab('estrategia_ads')}
            className={`px-3 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer ${
              activeStrategyTab === 'estrategia_ads'
                ? 'bg-white text-[#0369A1] font-bold shadow-xs border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            1. Arquitectura de Campañas Ads
          </button>
          <button
            onClick={() => setActiveStrategyTab('pilares_contenido')}
            className={`px-3 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer ${
              activeStrategyTab === 'pilares_contenido'
                ? 'bg-white text-[#0369A1] font-bold shadow-xs border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            2. En qué Contenido Invertir
          </button>
          <button
            onClick={() => setActiveStrategyTab('estancamiento')}
            className={`px-3 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer ${
              activeStrategyTab === 'estancamiento'
                ? 'bg-white text-[#0369A1] font-bold shadow-xs border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            3. Desbloqueo Base 2.471
          </button>
          <button
            onClick={() => setActiveStrategyTab('herramientas')}
            className={`px-3 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer ${
              activeStrategyTab === 'herramientas'
                ? 'bg-white text-[#0369A1] font-bold shadow-xs border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            4. Herramientas & Tips Q4
          </button>
        </div>
      </div>

      {/* TAB 1: ARQUITECTURA DE CAMPAÑAS ADS (ALWAYS-ON + CONVERSIÓN) */}
      {activeStrategyTab === 'estrategia_ads' && (
        <div className="space-y-6">
          {/* Executive Validation Box */}
          <div className="bg-[#1E293B] text-white p-6 rounded-2xl shadow-xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0369A1] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-[#7DD3FC]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7DD3FC]">
                    Validación del Analista Senior Meta Ads
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Estrategia Dual Recomendada: «Always-On de Reconocimiento + Conversión Permanente»
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-[#86EFAC] border border-white/10">
                  ✓ Estructura 100% Validada
                </span>
                <InformativeCloud data={NUBES_INFORMATIVAS.vistas_descubrimiento} label="Criterios de Pauta" />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300 leading-relaxed">
              <p>
                <strong className="text-white">Tu planteamiento es exactamente el óptimo para B2B:</strong> En cuentas corporativas con nichos especializados, depender únicamente de campañas de conversión aísla la marca y eleva los costos por lead en el tiempo. La campaña Always-On de Reconocimiento alimenta de forma ininterrumpida el tope del embudo con ojos nuevos.
              </p>
              <p>
                Al mantener la campaña de <strong>Reconocimiento (Always-On)</strong> inyectando tráfico frío hacia los videos de montacargas y logística, la campaña de <strong>Conversión (MOFU/BOFU)</strong> puede hacer retargeting constante hacia WhatsApp y formularios de cotización con un costo por lead sustancialmente más bajo.
              </p>
            </div>
          </div>

          {/* Detailed Dual Campaign Tiers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Campaign 1: Always-On Reconocimiento */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-sky-200 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#0369A1] text-white px-4 py-1 rounded-bl-xl text-[10px] font-bold tracking-wider uppercase">
                Motor 1 · 40% del Presupuesto
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0369A1] animate-pulse"></span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0369A1]">
                    Campaña Always-On (Siempre Activa)
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                  1. Reconocimiento de Marca & Descubrimiento B2B
                </h4>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  Garantiza que todos los directores de compras, gerentes de supermercados y comerciantes del eje Gran Caracas y La Guaira vean a @davimargroup al menos 2 veces por semana.
                </p>

                <div className="space-y-3 text-xs">
                  <div className="bg-[#F8FAFC] p-3 rounded-xl border border-slate-100">
                    <span className="font-bold text-slate-900 block mb-1">🎯 Objetivo en Meta Ads Manager:</span>
                    <p className="text-slate-600">
                      <strong>Reconocimiento de Marca / Alcance & Reproducciones de Video (ThruPlay)</strong>. Optimizado para maximizar vistas continuas de 15 segundos.
                    </p>
                  </div>

                  <div className="bg-[#F0F9FF] p-3 rounded-xl border border-sky-100">
                    <span className="font-bold text-[#0369A1] block mb-1">🎬 Creativos Ganadores:</span>
                    <p className="text-slate-700">
                      Reels de <strong>Llegada de Contenedores y Montacargas</strong>, video <strong>«Davimar 5:00 AM»</strong> y activaciones de Trade con <strong>Alimentos Mary</strong>.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="font-bold text-slate-900 block mb-1">👥 Audiencias Configurada:</span>
                    <ul className="list-disc list-inside text-slate-600 space-y-0.5">
                      <li>Gran Caracas (30%) + La Guaira (Catia La Mar, Maiquetía, Caraballeda).</li>
                      <li>Intereses: Retail, Supermercados, Alimentos, Supply Chain, Dueños de Negocios.</li>
                      <li>Públicos Similares (Lookalike 1%-2%) de seguidores e interacciones.</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-[#E0F2FE]/50 rounded-xl border border-sky-200">
                    <span className="font-bold text-[#0369A1] block mb-1">📊 KPIs & Metas de Control:</span>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div>• CPM: <strong className="text-slate-900">&lt; $2.80 USD</strong></div>
                      <div>• Hook Rate 3s: <strong className="text-slate-900">&gt; 60%</strong></div>
                      <div>• Costo ThruPlay: <strong className="text-slate-900">&lt; $0.018 USD</strong></div>
                      <div>• Frecuencia: <strong className="text-slate-900">1.8 - 2.5 impactos/sem</strong></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Impacto en Seguidores:</span>
                <span className="font-bold text-[#0369A1]">+150 a +250 nuevos seguidores B2B/mes</span>
              </div>
            </div>

            {/* Campaign 2: Conversión & Leads B2B */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-emerald-200 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#15803D] text-white px-4 py-1 rounded-bl-xl text-[10px] font-bold tracking-wider uppercase">
                Motor 2 · 60% del Presupuesto
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#15803D] animate-pulse"></span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#15803D]">
                    Campaña de Conversión & Clientes Potenciales
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                  2. Lead Generation & Cierres por WhatsApp Directo
                </h4>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  Transforma el interés generado por la campaña Always-On en cotizaciones formales de impulso en punto de venta y compras de catálogo mayorista.
                </p>

                <div className="space-y-3 text-xs">
                  <div className="bg-[#F8FAFC] p-3 rounded-xl border border-slate-100">
                    <span className="font-bold text-slate-900 block mb-1">🎯 Objetivo en Meta Ads Manager:</span>
                    <p className="text-slate-600">
                      <strong>Clientes Potenciales (Lead Generation Forms) & Mensajes directos a WhatsApp Business</strong>.
                    </p>
                  </div>

                  <div className="bg-[#F0FDF4] p-3 rounded-xl border border-emerald-100">
                    <span className="font-bold text-[#15803D] block mb-1">🎬 Creativos Ganadores:</span>
                    <p className="text-slate-700">
                      Carruseles de <strong>Casos de Éxito de Rotación (+34%)</strong>, <strong>Checklist Descargable de Supervisión de Góndola</strong> y anuncios Click-to-WhatsApp directo con asesor comercial.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="font-bold text-slate-900 block mb-1">👥 Audiencias de Retargeting:</span>
                    <ul className="list-disc list-inside text-slate-600 space-y-0.5">
                      <li>Usuarios que vieron 50%+ de los videos de la campaña Always-On.</li>
                      <li>Visitantes del perfil de Instagram y usuarios que interactuaron en 90 días.</li>
                      <li>Base de datos de clientes inactivos (CRM Customer Match).</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-[#DCFCE7]/60 rounded-xl border border-emerald-200">
                    <span className="font-bold text-[#15803D] block mb-1">📊 KPIs & Metas de Control:</span>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div>• Costo por Lead (CPL): <strong className="text-slate-900">&lt; $10.00 USD</strong></div>
                      <div>• CTR Saliente Único: <strong className="text-slate-900">&gt; 2.0%</strong></div>
                      <div>• Conversaciones Iniciadas: <strong className="text-slate-900">&gt; 35 / mes</strong></div>
                      <div>• Tasa de Cierre Comercial: <strong className="text-slate-900">&gt; 12%</strong></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Retorno en Facturación:</span>
                <span className="font-bold text-[#15803D]">1 a 3 contratos B2B cerrados / mes</span>
              </div>
            </div>
          </div>

          {/* Workflow Diagram & TOFU / MOFU / BOFU Educational Hub */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#0369A1]" />
                  Flujo Continuo del Embudo B2B (TOFU · MOFU · BOFU)
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Haz clic en el icono de interrogación de cada fase para entender qué significa, para qué sirve y qué buscamos lograr.
                </p>
              </div>

              {/* Quick Funnel Pills */}
              <div className="flex items-center gap-2 flex-wrap">
                {ESTRUCTURA_CAMPANAS.map((tier, fIdx) => (
                  <button
                    key={fIdx}
                    onClick={() => setSelectedFunnelModal(tier)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#E0F2FE] hover:bg-[#BAE6FD] text-[#0369A1] border border-sky-200 transition-all cursor-pointer shadow-2xs active:scale-95"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>¿Qué es {tier.siglas}?</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
              <div className="p-3.5 bg-[#F8FAFC] rounded-xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[#0369A1] block">Paso 1 · Impacto Frío</span>
                    <button
                      onClick={() => setSelectedFunnelModal(ESTRUCTURA_CAMPANAS[0])}
                      className="text-[10px] font-bold text-[#0369A1] hover:underline flex items-center gap-0.5"
                      title="Ver qué significa TOFU"
                    >
                      <HelpCircle className="w-3 h-3" /> TOFU
                    </button>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-[11px]">
                    La pauta Always-On impacta a directores de compras en Caracas y La Guaira con videos de montacargas y flota.
                  </p>
                </div>
                <div className="mt-2 text-[10px] text-slate-400 font-medium">Fase: Descubrimiento Masivo</div>
              </div>

              <div className="p-3.5 bg-[#F0F9FF] rounded-xl border border-sky-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[#0369A1] block">Paso 2 · Visita al Perfil</span>
                    <button
                      onClick={() => setSelectedFunnelModal(ESTRUCTURA_CAMPANAS[0])}
                      className="text-[10px] font-bold text-[#0369A1] hover:underline flex items-center gap-0.5"
                      title="Ver qué significa TOFU"
                    >
                      <HelpCircle className="w-3 h-3" /> Conexión
                    </button>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-[11px]">
                    El usuario entra a investigar a @davimargroup (tasa histórica del 53,5%) y se suscribe o guarda contenido.
                  </p>
                </div>
                <div className="mt-2 text-[10px] text-sky-700 font-medium">Curiosidad Comercial</div>
              </div>

              <div className="p-3.5 bg-[#F0FDF4] rounded-xl border border-emerald-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[#15803D] block">Paso 3 · Retargeting de Oferta</span>
                    <button
                      onClick={() => setSelectedFunnelModal(ESTRUCTURA_CAMPANAS[1])}
                      className="text-[10px] font-bold text-[#15803D] hover:underline flex items-center gap-0.5"
                      title="Ver qué significa MOFU"
                    >
                      <HelpCircle className="w-3 h-3" /> MOFU
                    </button>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-[11px]">
                    La campaña de Conversión le muestra carruseles de casos de éxito y el catálogo mayorista de temporada.
                  </p>
                </div>
                <div className="mt-2 text-[10px] text-emerald-700 font-medium">Fase: Consideración B2B</div>
              </div>

              <div className="p-3.5 bg-[#1E293B] text-white rounded-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[#7DD3FC] block">Paso 4 · Conversación & Cierre</span>
                    <button
                      onClick={() => setSelectedFunnelModal(ESTRUCTURA_CAMPANAS[2])}
                      className="text-[10px] font-bold text-[#7DD3FC] hover:underline flex items-center gap-0.5"
                      title="Ver qué significa BOFU"
                    >
                      <HelpCircle className="w-3 h-3" /> BOFU
                    </button>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    El prospecto hace clic a WhatsApp para solicitar cotización de impulso o precios al por mayor.
                  </p>
                </div>
                <div className="mt-2 text-[10px] text-[#86EFAC] font-medium">Fase: Decisión y Cierre</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PILARES DE CONTENIDO EN LOS QUE INVERTIR */}
      {activeStrategyTab === 'pilares_contenido' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {pilaresContenido.map((pilar, idx) => (
              <div
                key={pilar.id}
                onClick={() => setSelectedPillar(idx)}
                className={`p-5 rounded-2xl border-2 transition-all cursor-pointer ${
                  selectedPillar === idx
                    ? `${pilar.color} shadow-md`
                    : 'bg-white border-slate-100 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${pilar.accentColor}`}>
                    Pilar Ganador #{pilar.id}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {pilar.tags.slice(0, 2).map((t, i) => (
                      <span key={i} className="px-2 py-0.5 bg-white/80 rounded-md text-[10px] font-medium text-slate-600 border border-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">{pilar.titulo}</h3>
                <p className="text-xs text-slate-500 mb-3">{pilar.subtitulo}</p>
                <div className="text-xs text-slate-700 bg-white/60 p-2.5 rounded-xl border border-slate-200/60 leading-relaxed">
                  <strong>Respaldo en Datos Reales:</strong> {pilar.respaldoDatos}
                </div>
              </div>
            ))}
          </div>

          {/* Selected Pillar Deep Dive Card */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0369A1]">
                  Guía de Producción y Pauta para Septiembre - Noviembre
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {pilaresContenido[selectedPillar].titulo}
                </h3>
              </div>
              <span className="px-3 py-1 bg-[#E0F2FE] text-[#0369A1] rounded-full text-xs font-bold">
                {pilaresContenido[selectedPillar].formato}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-[#F8FAFC] p-4 rounded-xl border border-slate-100 space-y-2">
                <span className="font-bold text-slate-900 flex items-center gap-1.5 text-xs">
                  <Sparkles className="w-4 h-4 text-[#0369A1]" />
                  Principio de Neuromarketing Aplicado:
                </span>
                <p className="text-slate-600 leading-relaxed">
                  {pilaresContenido[selectedPillar].neuromarketing}
                </p>
              </div>

              <div className="bg-[#F0FDF4] p-4 rounded-xl border border-emerald-100 space-y-2">
                <span className="font-bold text-[#15803D] flex items-center gap-1.5 text-xs">
                  <Target className="w-4 h-4 text-[#15803D]" />
                  Recomendación para Campañas de Pauta (Ads):
                </span>
                <p className="text-slate-700 leading-relaxed">
                  {pilaresContenido[selectedPillar].recomendacionAds}
                </p>
              </div>
            </div>

            <div className="bg-[#1E293B] text-white p-4 rounded-xl space-y-1 text-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#7DD3FC]">
                Guión / Gancho Sugerido para Anuncio de Meta Ads:
              </span>
              <p className="text-slate-200 font-medium italic">
                {pilaresContenido[selectedPillar].ejemploHook}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: DIAGNÓSTICO DEL ESTANCAMIENTO EN 2.421 SEGUIDORES */}
      {activeStrategyTab === 'estancamiento' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#EA580C]">
                  Diagnóstico Técnico y Auditoría
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  ¿Por qué la cuenta se desaceleró en 2.471 seguidores y cómo reactivar el crecimiento?
                </h3>
              </div>
              <span className="px-3 py-1 bg-[#FFF7ED] text-[#EA580C] rounded-full text-xs font-bold border border-[#FDBA74]">
                Base Actual: 2.471 Seguidores (+57 en Agosto)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs mb-6">
              {/* Factor 1 */}
              <div className="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold mb-2">
                  1
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Techo Orgánico del Algoritmo</h4>
                <p className="text-slate-600 leading-relaxed">
                  Meta limita la entrega orgánica de cuentas corporativas al 5%-10% de sus seguidores. Sin pauta publicitaria activa, el descubrimiento depende exclusivamente de la viralidad de Reels, que en B2B tiene un alcance natural acotado.
                </p>
              </div>

              {/* Factor 2 */}
              <div className="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold mb-2">
                  2
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Reducción en la Frecuencia</h4>
                <p className="text-slate-600 leading-relaxed">
                  En Mayo se publicaron 14 piezas y 44 historias (35.142 vistas). En Julio y Agosto bajó el volumen a 5 piezas consolidadas, activando una advertencia algorítmica de Meta sobre pérdida de ritmo de publicación.
                </p>
              </div>

              {/* Factor 3 */}
              <div className="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-[#0369A1] flex items-center justify-center font-bold mb-2">
                  3
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Fricción en la Conversión de la Bio</h4>
                <p className="text-slate-600 leading-relaxed">
                  A pesar de que el 48,2% de las personas alcanzadas en agosto visitó el perfil (942 visitas), no existía un incentivo interactivo inmediato (como un enlace a catálogo digital o línea directa de WhatsApp) para retener ese flujo.
                </p>
              </div>
            </div>

            {/* Strategic Value of 2.471 Followers */}
            <div className="bg-[#F0FDF4] p-5 rounded-2xl border border-emerald-200">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#15803D] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="space-y-2 text-xs">
                  <h4 className="font-bold text-[#15803D] text-sm">
                    La Gran Ventaja: 2.471 Seguidores de Alta Cualificación B2B
                  </h4>
                  <p className="text-slate-700 leading-relaxed">
                    No te desanimes por el número bruto: <strong>el 79,7% de tus seguidores tiene entre 25 y 54 años</strong>, y el 63,3% son mujeres con cargos en compras y retail. En el sector corporativo, una comunidad de 2.471 decisores vale más que 50.000 seguidores no comerciales.
                  </p>
                  <p className="text-slate-700 font-medium">
                    Al activar la pauta <strong>Always-On en Septiembre</strong>, este núcleo de 2.471 servirá como base semilla para crear Públicos Similares (Lookalike) de altísima precisión, permitiendo escalar hacia los <strong>3.500 - 5.000 seguidores comerciales</strong> en Q4.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: HERRAMIENTAS & TIPS DE CRECIMIENTO Q4 */}
      {activeStrategyTab === 'herramientas' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {HERRAMIENTAS_CRECIMIENTO_Q4.map((tool, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E0F2FE] text-[#0369A1]">
                      {tool.categoria}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold">Tip #{idx + 1}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{tool.nombre}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">{tool.descripcion}</p>
                </div>

                <div className="space-y-2 text-xs pt-3 border-t border-slate-100">
                  <div className="bg-[#F8FAFC] p-2 rounded-lg text-slate-700">
                    <strong className="text-slate-900 block text-[11px]">Impacto en el Negocio:</strong>
                    {tool.impactoB2B}
                  </div>
                  <div className="text-[11px] text-[#0369A1] font-medium">
                    👉 <strong>Cómo implementarlo:</strong> {tool.recomendacionUso}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Bio Optimization Blueprint */}
          <div className="bg-[#1E293B] text-white p-6 rounded-2xl shadow-xl space-y-4">
            <h4 className="text-sm font-bold text-[#7DD3FC] uppercase tracking-wider flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              Checklist de Optimización de la Biografía de Instagram para Q4
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="font-bold text-white block mb-1">1. Titular con Propuesta de Valor:</span>
                <p>«Soluciones Logísticas, Distribución & Impulso en PDV para el Retail Venezolano 🇻🇪 | 60 años de trayectoria»</p>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="font-bold text-white block mb-1">2. Menú Interactivo en el Enlace:</span>
                <p>1. 📦 Catálogo Mayorista Q4<br />2. 🤝 Codifica tu Marca con Davimar<br />3. 📲 WhatsApp Comercial Inmediato</p>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="font-bold text-white block mb-1">3. Historias Destacadas Clave:</span>
                <p>• 🏗️ Almacén & Flota<br />• 🛒 Trade & PDV<br />• 👥 Nuestro Equipo<br />• 📜 60 Años</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Funnel Explanatory Modal for Q4 */}
      {selectedFunnelModal && (
        <FunnelInfoModal
          tier={selectedFunnelModal}
          isOpen={!!selectedFunnelModal}
          onClose={() => setSelectedFunnelModal(null)}
        />
      )}
    </section>
  );
};
