import React, { useState, useEffect } from 'react';
import { METRICAS_MENSUALES } from './data/metricsData';
import { ComparisonPeriod } from './types';
import { Header } from './components/Header';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { ComparativeAnalysis } from './components/ComparativeAnalysis';
import { QuarterlyStrategyQ4 } from './components/QuarterlyStrategyQ4';
import { DemographicsSection } from './components/DemographicsSection';
import { BestTimesHeatmap } from './components/BestTimesHeatmap';
import { VideoRetentionAnalysis } from './components/VideoRetentionAnalysis';
import { MeasurementFramework } from './components/MeasurementFramework';
import { CampaignStructure } from './components/CampaignStructure';
import { BudgetRoiSimulator } from './components/BudgetRoiSimulator';
import { InternationalExpansion } from './components/InternationalExpansion';
import { SeptemberImprovementPlan } from './components/SeptemberImprovementPlan';
import { MetaAnalystAI } from './components/MetaAnalystAI';
import { ExportReportModal } from './components/ExportReportModal';
import { LogoUploadModal } from './components/LogoUploadModal';
import {
  Sparkles,
  BarChart3,
  Users2,
  CalendarDays,
  Film,
  Scale,
  Layers,
  Calculator,
  Bot,
  Globe2,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Rocket,
  LayoutGrid,
  ArrowRight,
  ArrowLeft,
  BookOpen,
} from 'lucide-react';

interface ModuleItem {
  id: string;
  number: string;
  name: string;
  shortName: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

const MODULES_LIST: ModuleItem[] = [
  {
    id: 'resumen',
    number: '0',
    name: 'Resumen Ejecutivo & Diagnóstico',
    shortName: 'Resumen Ejecutivo',
    description: 'Diagnóstico del crecimiento en 2.471 seguidores y KPIs acumulados de 5 meses.',
    icon: Sparkles,
    accentColor: 'text-[#0369A1]',
  },
  {
    id: 'septiembre_mejora',
    number: '⚡',
    name: 'Plan de Mejora Inmediata Septiembre (5 Oportunidades Prioritarias)',
    shortName: '5 Oportunidades Septiembre',
    description: 'Directrices basadas en agosto: Frecuencia (7 reels+4 carruseles), Historias diarias, Monetización bio (48,2%), Horarios y Músculo Logístico.',
    icon: Sparkles,
    accentColor: 'text-[#EA580C]',
  },
  {
    id: 'estrategia_q4',
    number: '★',
    name: 'Plan Estratégico Ads Q4 (Septiembre - Noviembre)',
    shortName: 'Plan Ads Q4',
    description: 'Hoja de ruta táctica, motor dual de pauta y metas de escalamiento comercial.',
    icon: Rocket,
    accentColor: 'text-[#0284C7]',
  },
  {
    id: 'comparativa',
    number: '1',
    name: 'Estudio Comparativo de 5 Meses (Abril - Agosto 2026)',
    shortName: '1. Estudio 5 Meses',
    description: 'Evolución mensual histórica, alcance orgánico vs pagado, tasa de conversión y matriz analítica.',
    icon: BarChart3,
    accentColor: 'text-[#0284C7]',
  },
  {
    id: 'demografia',
    number: '2',
    name: 'Demografía & Audiencia B2B',
    shortName: '2. Demografía B2B',
    description: 'Segmentación de decisores: 79,7% entre 25-54 años, 63,3% mujeres en compras y retail.',
    icon: Users2,
    accentColor: 'text-[#16A34A]',
  },
  {
    id: 'horarios',
    number: '3',
    name: 'Días y Horarios Pico de Decisores B2B',
    shortName: '3. Días & Horas Pico',
    description: 'Mapa de calor de actividad comercial: Lunes, Jueves y Domingo (6:00 PM a 9:00 PM).',
    icon: CalendarDays,
    accentColor: 'text-[#EA580C]',
  },
  {
    id: 'retencion',
    number: '4',
    name: 'Retención de Video y Análisis de Formatos',
    shortName: '4. Retención de Video',
    description: 'Tasa de retención por segundo, ganchos de 3s (Thumbstop Rate) y pilares de alto impacto.',
    icon: Film,
    accentColor: 'text-[#9333EA]',
  },
  {
    id: 'marco',
    number: '5',
    name: 'Marco de Medición & Transparencia',
    shortName: '5. Marco de Medición',
    description: 'Transición de métricas de vanidad a métricas comerciales B2B y cálculo de CPM/CPL.',
    icon: Scale,
    accentColor: 'text-[#0284C7]',
  },
  {
    id: 'campanas',
    number: '6',
    name: 'Estructura de Campañas Meta Ads',
    shortName: '6. Estructura Campañas',
    description: 'Arquitectura de 3 niveles: Always-On (40%), Conversión a WhatsApp (40%) y Retargeting (20%).',
    icon: Layers,
    accentColor: 'text-[#4F46E5]',
  },
  {
    id: 'simulador',
    number: '7',
    name: 'Simulador Financiero de Presupuesto & ROI',
    shortName: '7. Simulador ROI',
    description: 'Calculadora interactiva de inversión publicitaria, CPL estimado y pipeline proyectado.',
    icon: Calculator,
    accentColor: 'text-[#16A34A]',
  },
  {
    id: 'internacional',
    number: '8',
    name: 'Geolocalización & Expansión B2B Internacional',
    shortName: '8. Expansión Internacional',
    description: 'Atracción de marcas de Colombia, España, México, Chile, Italia, Portugal, Brasil y Argentina.',
    icon: Globe2,
    accentColor: 'text-[#0369A1]',
  },
  {
    id: 'asistente',
    number: '9',
    name: 'Copiloto de IA para Consultas Estratégicas',
    shortName: '9. Copiloto IA',
    description: 'Asistente inteligente con respuestas instantáneas sobre datos y tácticas de pauta.',
    icon: Bot,
    accentColor: 'text-[#0369A1]',
  },
];

export default function App() {
  const [periodoActivo, setPeriodoActivo] = useState<ComparisonPeriod>('comparativa_completa');
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
  const [activeNavTab, setActiveNavTab] = useState<string>('todos');

  // Filter metrics according to active period
  const metricasFiltradas = METRICAS_MENSUALES.filter((m) => {
    if (periodoActivo === 'abril_mayo') return m.periodo === 'Abril-Mayo';
    if (periodoActivo === 'junio_julio') return m.periodo === 'Junio-Julio';
    if (periodoActivo === 'agosto') return m.periodo === 'Agosto';
    return true; // comparativa_completa
  });

  // Current active module metadata
  const currentModuleIndex = MODULES_LIST.findIndex((m) => m.id === activeNavTab);
  const currentModule = currentModuleIndex !== -1 ? MODULES_LIST[currentModuleIndex] : null;

  const handleSelectTab = (tabId: string) => {
    setActiveNavTab(tabId);
    // Smooth scroll to top of content area
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevModule = () => {
    if (currentModuleIndex > 0) {
      handleSelectTab(MODULES_LIST[currentModuleIndex - 1].id);
    } else if (currentModuleIndex === 0) {
      handleSelectTab('todos');
    }
  };

  const handleNextModule = () => {
    if (currentModuleIndex < MODULES_LIST.length - 1) {
      handleSelectTab(MODULES_LIST[currentModuleIndex + 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans selection:bg-[#E0F2FE] selection:text-[#0369A1]">
      {/* Sticky Header with Period Controls */}
      <Header
        periodoActivo={periodoActivo}
        onSelectPeriodo={(p) => setPeriodoActivo(p)}
        onOpenExportModal={() => setIsExportModalOpen(true)}
        onOpenAiAssistant={() => setIsAiModalOpen(true)}
        onOpenLogoModal={() => setIsLogoModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Navigation Quick Filter Bar */}
        <div className="bg-white p-2 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 shrink-0">
              Módulos:
            </span>
            
            {/* View All Button */}
            <button
              id="tab-btn-todos"
              onClick={() => handleSelectTab('todos')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
                activeNavTab === 'todos'
                  ? 'bg-[#1E293B] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-[#F1F5F9]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              Vista Completa
            </button>

            {/* Dynamic Module Tabs */}
            {MODULES_LIST.map((mod) => {
              const Icon = mod.icon;
              const isSelected = activeNavTab === mod.id;
              const isSpecial = mod.id === 'estrategia_q4';

              return (
                <button
                  key={mod.id}
                  id={`tab-btn-${mod.id}`}
                  onClick={() => handleSelectTab(mod.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                    isSelected
                      ? isSpecial
                        ? 'bg-[#0369A1] text-white shadow-xs'
                        : 'bg-[#1E293B] text-white shadow-xs'
                      : isSpecial
                      ? 'bg-[#F0F9FF] text-[#0369A1] hover:bg-[#E0F2FE] border border-sky-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-[#F1F5F9]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : mod.accentColor}`} />
                  {mod.shortName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Module Banner (Shown when a specific module is selected) */}
        {currentModule && activeNavTab !== 'todos' && (
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F0F9FF] border border-sky-100 flex items-center justify-center shrink-0">
                <currentModule.icon className={`w-5 h-5 ${currentModule.accentColor}`} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#E0F2FE] text-[#0369A1]">
                    Módulo {currentModule.number}
                  </span>
                  <span className="text-xs text-slate-400">· Vista Individual</span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                  {currentModule.name}
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  {currentModule.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
              <button
                onClick={() => handleSelectTab('todos')}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#F8FAFC] hover:bg-slate-100 text-slate-600 border border-slate-200 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                Ver Todo el Reporte
              </button>
            </div>
          </div>
        )}

        {/* Module Content Rendering: Only render the corresponding component */}
        
        {/* Module 0: Executive Summary */}
        {(activeNavTab === 'todos' || activeNavTab === 'resumen') && (
          <ExecutiveSummary
            metricas={metricasFiltradas}
            periodoActivo={periodoActivo}
            onOpenExportModal={() => setIsExportModalOpen(true)}
          />
        )}

        {/* Priority Module: September Improvement Plan (5 Priorities based on August) */}
        {(activeNavTab === 'todos' || activeNavTab === 'septiembre_mejora') && (
          <SeptemberImprovementPlan />
        )}

        {/* Module Plan Q4: Strategic Plan */}
        {(activeNavTab === 'todos' || activeNavTab === 'estrategia_q4') && (
          <QuarterlyStrategyQ4 />
        )}

        {/* Module 1: Comparative Analysis */}
        {(activeNavTab === 'todos' || activeNavTab === 'comparativa') && (
          <ComparativeAnalysis metricas={metricasFiltradas} periodoActivo={periodoActivo} />
        )}

        {/* Module 2: Demographics B2B */}
        {(activeNavTab === 'todos' || activeNavTab === 'demografia') && (
          <DemographicsSection />
        )}

        {/* Module 3: Best Posting Times */}
        {(activeNavTab === 'todos' || activeNavTab === 'horarios') && (
          <BestTimesHeatmap />
        )}

        {/* Module 4: Video Retention Analysis */}
        {(activeNavTab === 'todos' || activeNavTab === 'retencion') && (
          <VideoRetentionAnalysis />
        )}

        {/* Module 5: Measurement Framework & Transparency */}
        {(activeNavTab === 'todos' || activeNavTab === 'marco') && (
          <MeasurementFramework />
        )}

        {/* Module 6: Campaign Structure Blueprint */}
        {(activeNavTab === 'todos' || activeNavTab === 'campanas') && (
          <CampaignStructure />
        )}

        {/* Module 7: Budget & ROI Simulator */}
        {(activeNavTab === 'todos' || activeNavTab === 'simulador') && (
          <BudgetRoiSimulator />
        )}

        {/* Module 8: International Expansion & Geolocation */}
        {(activeNavTab === 'todos' || activeNavTab === 'internacional') && (
          <InternationalExpansion />
        )}

        {/* Module 9: Embedded AI Copilot */}
        {(activeNavTab === 'todos' || activeNavTab === 'asistente') && (
          <div className="pt-2">
            <MetaAnalystAI />
          </div>
        )}

        {/* Module Bottom Pager (When a single module is open) */}
        {currentModule && activeNavTab !== 'todos' && (
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center justify-between text-xs">
            <button
              onClick={handlePrevModule}
              className="px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 font-semibold text-slate-700 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              {currentModuleIndex === 0 ? 'Ver Vista Completa' : `Módulo Anterior: ${MODULES_LIST[currentModuleIndex - 1].shortName}`}
            </button>

            <button
              onClick={() => handleSelectTab('todos')}
              className="hidden sm:inline-flex px-3 py-1.5 rounded-lg text-slate-500 hover:text-slate-800 font-medium"
            >
              Mostrar todos los módulos
            </button>

            {currentModuleIndex < MODULES_LIST.length - 1 ? (
              <button
                onClick={handleNextModule}
                className="px-3.5 py-2 rounded-xl bg-[#0369A1] hover:bg-[#0284C7] font-semibold text-white transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                {`Siguiente: ${MODULES_LIST[currentModuleIndex + 1].shortName}`}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={() => handleSelectTab('todos')}
                className="px-3.5 py-2 rounded-xl bg-[#1E293B] hover:bg-slate-900 font-semibold text-white transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                Volver a Vista Completa
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 mt-12 py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-[#1E293B] text-white flex items-center justify-center font-bold text-[10px]">
              DG
            </div>
            <span>
              <strong>Davimar Group</strong> • Plan Estratégico Meta Ads & Analítica B2B
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Enfoque: Punto de Venta (PDV), Retail & Distribución</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-[#15803D] font-medium">
              <ShieldCheck className="w-3.5 h-3.5" /> Marco de Inversión Transparente
            </span>
          </div>
        </div>
      </footer>

      {/* Export Report Modal */}
      <ExportReportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        metricas={metricasFiltradas}
      />

      {/* Floating AI Analyst Modal */}
      {isAiModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-2xl">
            <MetaAnalystAI onClose={() => setIsAiModalOpen(false)} isModal={true} />
          </div>
        </div>
      )}

      {/* Davimar Logo Upload & Customization Modal */}
      <LogoUploadModal
        isOpen={isLogoModalOpen}
        onClose={() => setIsLogoModalOpen(false)}
      />
    </div>
  );
}
