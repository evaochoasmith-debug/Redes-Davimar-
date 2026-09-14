import React, { useState } from 'react';
import { MonthlyMetric } from '../types';
import { generateDashboardPdf } from '../utils/generateDashboardPdf';
import { DavimarLogo } from './DavimarLogo';
import { LogoUploadModal } from './LogoUploadModal';
import { useDavimarLogo } from '../utils/logoStorage';
import confetti from 'canvas-confetti';
import {
  X,
  Printer,
  Copy,
  Check,
  Download,
  Building2,
  ShieldCheck,
  TrendingUp,
  FileText,
  Sparkles,
  AlertTriangle,
  Flame,
  Clock,
  Target,
  FileDown,
  CheckCircle2,
  ArrowRight,
  Zap,
  UploadCloud,
} from 'lucide-react';

interface ExportReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  metricas: MonthlyMetric[];
}

export const ExportReportModal: React.FC<ExportReportModalProps> = ({
  isOpen,
  onClose,
  metricas,
}) => {
  const [copied, setCopied] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [pdfDownloaded, setPdfDownloaded] = useState(false);
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
  const { isCustom } = useDavimarLogo();

  if (!isOpen) return null;

  const handleDownloadPdf = async () => {
    setIsGeneratingPdf(true);
    try {
      await generateDashboardPdf();
      setPdfDownloaded(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
      });
      setTimeout(() => {
        setPdfDownloaded(false);
      }, 4000);
    } catch (error) {
      console.error('Error generando PDF:', error);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const summaryText = `=====================================================
INFORME EJECUTIVO META ADS: @davimargroup (B2B TRADE & PDV)
Estudio Histórico de 5 Meses: Abril - Agosto 2026
Base Consolidada: 2.471 seguidores (+57 en Agosto)
=====================================================

1. RESUMEN GLOBAL DESTACADO (5 MESES):
- Visualizaciones Totales Acumuladas: 82.261 impactos orgánicos.
- Alcance Promedio: 5.1k cuentas únicas / mes (~1.9k en Agosto).
- Visitas al Perfil en Agosto: 942 visitas de 1.953 espectadores únicos.
- Tasa de Conversión a Perfil: 48,2% en Agosto (Récord en Julio: 53,5%).
- Contenido #1 de Agosto: Reel de montacargas en patio (2.400 vistas, 88 likes, 14 shares, +5 seguidores directos).
- Perfil del Comprador B2B: 79,7% concentrado entre 25 y 54 años (Gerentes de compras, directores de trade marketing y dueños de retail).

2. DIAGNÓSTICO CRÍTICO DE AGOSTO & ADVERTENCIA ALGORÍTMICA DE META:
- En agosto la actividad se contrajo a 5 piezas totales (3 reels, 1 post y 1 historia en el panel consolidado).
- Meta emitió un aviso preventivo por pérdida de ritmo de publicación.
- Oportunidad: El contenido operativo y logístico en patio revalida su capacidad de generar credibilidad patrimonial inmediata.

3. 5 OPORTUNIDADES DE MEJORA PRIORITARIAS PARA SEPTIEMBRE:
- Prioridad 1 (Frecuencia): Publicar 7 reels y 4 carruseles (ritmo de 2 posts + 2 reels semanales).
- Prioridad 2 (Historias Diarias): Activar 2 a 3 historias diarias de patio, almacén y encuestas de abastecimiento.
- Prioridad 3 (Monetización Perfil): Optimizar biografía con enlaces a Catálogo Q4, Línea WhatsApp de Pedidos y Codificación.
- Prioridad 4 (Horarios Pico): Programar en la Franja Dorada: Lunes, Jueves y Domingo entre 5:30 PM y 6:30 PM (Pico 18h-21h).
- Prioridad 5 (Pilar Logístico): Fórmula 40% Operaciones/Almacén + 30% Trade/Punto de Venta + 30% Cultura y Temporada Q4.

4. ARQUITECTURA DE CAMPAÑAS FULL-FUNNEL PARA Q4:
- TOFU (40% Presupuesto): Campaña Always-On de Reconocimiento y Video ThruPlay con Reels de montacargas y flota.
- MOFU (35% Presupuesto): Campaña de Consideración con Carruseles de Casos de Éxito en PDV y retargeting a video viewers.
- BOFU (25% Presupuesto): Conversión a WhatsApp Business y Formularios Instantáneos con el Catálogo de Temporada.

5. MARCO FINANCIERO & SIMULADOR DE INVERSIÓN:
- Presupuesto Recomendado: $350 a $650 USD / mes.
- CPM Objetivo: $2.00 - $3.80 USD.
- Hook Rate (3s) Objetivo: > 60%.
- CPL B2B Objetivo: $6.00 - $12.00 USD.
- ROAS Estimado en Pipeline: 4x a 12x (1 contrato cerrado al mes amortiza toda la inversión de pauta).

Emitido por: Auditoría de Analista Senior Meta Ads para Davimar Group.`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-4 sm:my-8 flex flex-col max-h-[92vh]">
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#1E293B] text-white">
          <div className="flex items-center gap-3">
            <div className="h-10 px-2 bg-white rounded-xl flex items-center justify-center shadow-xs shrink-0">
              <DavimarLogo className="h-7 w-auto" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-white">
                  Informe Ejecutivo Global de Auditoría & Estrategia Meta Ads
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#EA580C] text-white">
                  PDF Listo
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Cuenta auditada: @davimargroup · Consolidado Histórico Abril - Agosto 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* Download PDF Primary Button */}
            <button
              id="btn-download-pdf-modal"
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              className="px-4 py-2 rounded-xl bg-[#16A34A] hover:bg-[#15803D] active:scale-95 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md cursor-pointer disabled:opacity-50"
            >
              <FileDown className="w-4 h-4 text-white" />
              {isGeneratingPdf
                ? 'Generando PDF...'
                : pdfDownloaded
                ? '¡PDF Descargado!'
                : 'Descargar Informe PDF'}
            </button>

            {/* Copy Summary Button */}
            <button
              onClick={handleCopySummary}
              className="px-3 py-2 rounded-xl border border-slate-700 bg-white/10 hover:bg-white/20 text-xs font-semibold text-white flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#86EFAC]" /> Copiado
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-300" /> Copiar Resumen
                </>
              )}
            </button>

            {/* Print Fallback */}
            <button
              onClick={handlePrint}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer hidden sm:inline-flex"
            >
              <Printer className="w-3.5 h-3.5" /> Imprimir
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors ml-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Download Success Banner */}
        {pdfDownloaded && (
          <div className="bg-[#DCFCE7] border-b border-[#86EFAC] px-6 py-2.5 flex items-center justify-between text-xs text-[#15803D] font-bold animate-fadeIn">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
              ¡El archivo PDF ha sido generado y descargado exitosamente en tu navegador!
            </span>
            <span className="text-[11px] font-normal text-slate-600">
              Davimar_Group_Auditoria_Estrategica_Meta_Ads.pdf (4 Páginas · Incluye Gráficas Mes a Mes)
            </span>
          </div>
        )}

        {/* Printable & Interactive Report Preview */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-800 text-xs leading-relaxed print:p-0">
          {/* Document Header Banner */}
          <div className="border-b border-slate-200 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="mb-2.5 flex items-center gap-3 flex-wrap">
                <div className="h-10 px-2.5 bg-slate-50 border border-slate-200/80 rounded-xl flex items-center justify-center shadow-xs shrink-0">
                  <DavimarLogo className="h-8 w-auto max-w-[130px]" />
                </div>
                <button
                  id="btn-modal-custom-logo"
                  type="button"
                  onClick={() => setIsLogoModalOpen(true)}
                  className="text-xs text-sky-700 hover:text-sky-900 font-semibold flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200/80 transition-all cursor-pointer shadow-2xs"
                >
                  <UploadCloud className="w-3.5 h-3.5 text-sky-600" />
                  {isCustom ? 'Cambiar o actualizar logo' : 'Subir logo personalizado'}
                </button>
              </div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#15803D] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Auditoría Histórica 5 Meses
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#0369A1] bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
                  Blueprint Q4 & Plan Septiembre
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Informe Ejecutivo Global: Diagnóstico Histórico & Estrategia Meta Ads
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Cliente: <strong>Davimar Group (@davimargroup)</strong> • Sector:{' '}
                <strong>Impulso en PDV, Merchandising, Almacenaje & Distribución B2B</strong>
              </p>
            </div>
            <div className="text-left sm:text-right text-[11px] text-slate-500 bg-slate-50 sm:bg-transparent p-3 sm:p-0 rounded-xl border sm:border-0 border-slate-200 shrink-0">
              <div>
                <strong>Fecha de Auditoría:</strong>{' '}
                {new Date().toLocaleDateString('es-CO', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <div>
                <strong>Base Auditada:</strong> 2.471 seguidores (+57 en agosto)
              </div>
              <div>
                <strong>Estado:</strong> Estrategia Validada para Activación de Pauta
              </div>
            </div>
          </div>

          {/* Section 1: 6 Highlighted Global Metric Cards */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#0369A1]" /> 1. Métricas Globales Destacadas
                (Consolidado Histórico)
              </span>
              <span className="text-[11px] font-semibold text-[#0369A1]">
                Abril a Agosto 2026
              </span>
            </h4>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="p-3.5 bg-[#F0F9FF] rounded-xl border border-sky-100">
                <span className="text-[10px] uppercase font-bold text-[#0369A1] block mb-1">
                  Visitas al Perfil (Agosto)
                </span>
                <div className="text-xl font-bold text-[#0369A1]">48,2%</div>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  942 visitas de 1.953 espectadores únicos. Curiosidad comercial récord.
                </p>
              </div>

              <div className="p-3.5 bg-[#F0FDF4] rounded-xl border border-emerald-100">
                <span className="text-[10px] uppercase font-bold text-[#15803D] block mb-1">
                  Comunidad Cualificada
                </span>
                <div className="text-xl font-bold text-[#15803D]">2.471 Decisores</div>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  +57 ganados en agosto. 79,7% en edades de compra B2B (25-54 años).
                </p>
              </div>

              <div className="p-3.5 bg-[#F8FAFC] rounded-xl border border-slate-200">
                <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">
                  Impactos Acumulados
                </span>
                <div className="text-xl font-bold text-slate-900">82.261 Vistas</div>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Volumen orgánico en los 5 meses auditados (Abril a Agosto 2026).
                </p>
              </div>

              <div className="p-3.5 bg-[#FFF7ED] rounded-xl border border-orange-100">
                <span className="text-[10px] uppercase font-bold text-[#EA580C] block mb-1">
                  Reel Estrella de Agosto
                </span>
                <div className="text-xl font-bold text-[#EA580C]">2.400 Vistas</div>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Descarga con montacargas en patio: 88 likes, 14 compartidos y +5 seguidores directos.
                </p>
              </div>

              <div className="p-3.5 bg-[#FAF5FF] rounded-xl border border-purple-100">
                <span className="text-[10px] uppercase font-bold text-purple-700 block mb-1">
                  Días y Horarios Pico
                </span>
                <div className="text-xl font-bold text-purple-900">Lun, Jue, Dom</div>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Ventana dorada: 6:00 PM a 9:00 PM. Publicar entre 5:30 PM y 6:30 PM.
                </p>
              </div>

              <div className="p-3.5 bg-[#F0FDF4] rounded-xl border border-emerald-100">
                <span className="text-[10px] uppercase font-bold text-[#15803D] block mb-1">
                  Retención de Video (Hook)
                </span>
                <div className="text-xl font-bold text-[#15803D]">68% (3 seg)</div>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Hold rate de 36% a los 15s (Benchmark B2B: 24%). Audiencia calificada.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Historical Table of 5 Months */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-[#0369A1]" /> 2. Matriz Histórica Comparativa (Abril - Agosto 2026)
            </h4>

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#F8FAFC] border-b border-slate-200 text-[11px] font-bold text-slate-600">
                    <th className="py-2.5 px-3">Métrica</th>
                    <th className="py-2.5 px-2">Abril</th>
                    <th className="py-2.5 px-2">Mayo</th>
                    <th className="py-2.5 px-2">Junio</th>
                    <th className="py-2.5 px-2">Julio</th>
                    <th className="py-2.5 px-2 text-[#EA580C] bg-orange-50/50">Agosto</th>
                    <th className="py-2.5 px-3">Lectura Comercial</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-2 px-3 font-semibold text-slate-900">Visualizaciones Totales</td>
                    <td className="py-2 px-2 text-slate-600">13.412</td>
                    <td className="py-2 px-2 text-[#0369A1] font-bold">35.120</td>
                    <td className="py-2 px-2 text-slate-600">16.504</td>
                    <td className="py-2 px-2 text-slate-600">8.550</td>
                    <td className="py-2 px-2 text-[#EA580C] font-bold bg-orange-50/40">8.675</td>
                    <td className="py-2 px-3 text-slate-500 text-[11px]">Agosto estabiliza volumen impulsado por 3 reels clave.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-slate-900">Alcance Cuentas Únicas</td>
                    <td className="py-2 px-2 text-slate-600">4.912</td>
                    <td className="py-2 px-2 text-[#0369A1] font-bold">10.840</td>
                    <td className="py-2 px-2 text-slate-600">6.210</td>
                    <td className="py-2 px-2 text-slate-600">1.842</td>
                    <td className="py-2 px-2 text-[#EA580C] font-bold bg-orange-50/40">1.953</td>
                    <td className="py-2 px-3 text-slate-500 text-[11px]">Techo orgánico ~1.9k. Se requiere pauta Always-On para expandir.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-slate-900">Visitas al Perfil</td>
                    <td className="py-2 px-2 text-slate-600">1.335</td>
                    <td className="py-2 px-2 text-[#0369A1] font-bold">3.820</td>
                    <td className="py-2 px-2 text-slate-600">2.140</td>
                    <td className="py-2 px-2 text-slate-600">985</td>
                    <td className="py-2 px-2 text-[#EA580C] font-bold bg-orange-50/40">942</td>
                    <td className="py-2 px-3 text-slate-500 text-[11px]">Tráfico cualificado de decisores que revisan biografía.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-slate-900">Tasa Conversión Perfil</td>
                    <td className="py-2 px-2 text-slate-600">27,2%</td>
                    <td className="py-2 px-2 text-slate-600">35,2%</td>
                    <td className="py-2 px-2 text-slate-600">34,5%</td>
                    <td className="py-2 px-2 text-[#15803D] font-bold">53,5%</td>
                    <td className="py-2 px-2 text-[#EA580C] font-bold bg-orange-50/40">48,2%</td>
                    <td className="py-2 px-3 text-slate-500 text-[11px]">Récord B2B: casi 1 de cada 2 espectadores visita el perfil comercial.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-slate-900">Piezas Totales Publicadas</td>
                    <td className="py-2 px-2 text-slate-600">13 piezas</td>
                    <td className="py-2 px-2 text-[#0369A1] font-bold">14 piezas</td>
                    <td className="py-2 px-2 text-slate-600">11 piezas</td>
                    <td className="py-2 px-2 text-slate-600">9 piezas</td>
                    <td className="py-2 px-2 text-red-600 font-bold bg-orange-50/40">5 piezas</td>
                    <td className="py-2 px-3 text-red-700 text-[11px] font-medium">Alerta algorítmica: Meta advirtió caída de frecuencia en Agosto.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-slate-900">Seguidores Netos Ganados</td>
                    <td className="py-2 px-2 text-slate-600">+107</td>
                    <td className="py-2 px-2 text-[#0369A1] font-bold">+188</td>
                    <td className="py-2 px-2 text-slate-600">+92</td>
                    <td className="py-2 px-2 text-slate-600">+64</td>
                    <td className="py-2 px-2 text-[#EA580C] font-bold bg-orange-50/40">+57</td>
                    <td className="py-2 px-3 text-slate-500 text-[11px]">Comunidad consolidada en 2.471 seguidores de alta decisión.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Critical August Callout */}
          <div className="p-4 bg-[#FEF2F2] rounded-xl border border-red-200">
            <div className="flex items-center gap-2 text-red-800 font-bold text-xs mb-1">
              <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
              Diagnóstico Crítico de Agosto 2026 & Advertencia Algorítmica de Meta:
            </div>
            <p className="text-xs text-red-950 leading-relaxed">
              En agosto la actividad de publicaciones disminuyó a solo 5 piezas consolidadas (3 reels, 1 post y 1 historia), activando una advertencia directa del algoritmo de Meta por desaceleración en la entrega de contenidos. No obstante, la audiencia reaccionó con una conversión a perfil excepcional del 48,2% y el Reel de montacargas demostró que los contenidos de infraestructura física son el motor principal de atracción.
            </p>
          </div>

          {/* Section 3: 5 September Opportunities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-500" /> 3. Las 5 Oportunidades de Mejora Prioritarias para Septiembre
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5">
              <div className="p-3 bg-[#F8FAFC] rounded-xl border border-slate-200">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-[10px] flex items-center justify-center mb-1.5">
                  1
                </span>
                <strong className="text-slate-900 block text-[11px] mb-1">
                  Recuperar Frecuencia
                </strong>
                <p className="text-[11px] text-slate-600">
                  7 reels y 4 carruseles (2 posts + 2 reels semanales) para re-entrenar el algoritmo.
                </p>
              </div>

              <div className="p-3 bg-[#F8FAFC] rounded-xl border border-slate-200">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-[10px] flex items-center justify-center mb-1.5">
                  2
                </span>
                <strong className="text-slate-900 block text-[11px] mb-1">
                  Historias Diarias
                </strong>
                <p className="text-[11px] text-slate-600">
                  2 a 3 historias diarias de patio, montacargas, andenes y encuestas interactivas.
                </p>
              </div>

              <div className="p-3 bg-[#F8FAFC] rounded-xl border border-slate-200">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-[10px] flex items-center justify-center mb-1.5">
                  3
                </span>
                <strong className="text-slate-900 block text-[11px] mb-1">
                  Monetizar Perfil (48,2%)
                </strong>
                <p className="text-[11px] text-slate-600">
                  Optimizar biografía con enlace a Catálogo Q4, WhatsApp directo y Codificación.
                </p>
              </div>

              <div className="p-3 bg-[#F8FAFC] rounded-xl border border-slate-200">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-[10px] flex items-center justify-center mb-1.5">
                  4
                </span>
                <strong className="text-slate-900 block text-[11px] mb-1">
                  Horarios Pico
                </strong>
                <p className="text-[11px] text-slate-600">
                  Publicar Lunes, Jueves y Domingo entre 5:30 PM y 6:30 PM (Pico 18h-21h).
                </p>
              </div>

              <div className="p-3 bg-[#F8FAFC] rounded-xl border border-slate-200">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-[10px] flex items-center justify-center mb-1.5">
                  5
                </span>
                <strong className="text-slate-900 block text-[11px] mb-1">
                  Pilar Logístico
                </strong>
                <p className="text-[11px] text-slate-600">
                  40% Operaciones/Almacén + 30% Trade PDV + 30% Cultura y Temporada Q4.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Campaigns Blueprint & Budget Simulation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#15803D]" /> 4. Arquitectura de Campañas & Marco Financiero Q4
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 bg-[#F0F9FF] rounded-xl border border-sky-100">
                <strong className="text-[#0369A1] block mb-1">TOFU · Reconocimiento (40%)</strong>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Campaña Always-On continua con Reels de montacargas, andenes y flota a las 5:00 AM para alimentar el embudo con tomadores de decisión nuevos cada día.
                </p>
              </div>

              <div className="p-3.5 bg-[#F8FAFC] rounded-xl border border-slate-200">
                <strong className="text-slate-900 block mb-1">MOFU · Consideración (35%)</strong>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Carruseles de Casos de Éxito y retargeting a usuarios que vieron más del 50% de los videos. Descargas de dossier y checklist de góndola.
                </p>
              </div>

              <div className="p-3.5 bg-[#F0FDF4] rounded-xl border border-emerald-100">
                <strong className="text-[#15803D] block mb-1">BOFU · Conversión (25%)</strong>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Campañas directas a WhatsApp Business y Formularios Instantáneos con la oferta de temporada Q4 (panes de jamón, charcutería y abarrotes).
                </p>
              </div>
            </div>

            {/* Budget & ROAS Banner */}
            <div className="p-3.5 bg-[#1E293B] text-white rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-bold text-amber-300 block">
                  Presupuesto Recomendado: $350 - $650 USD / mes
                </span>
                <span className="text-slate-300 text-[11px]">
                  CPL Estimado: $6.00 - $12.00 USD | ROAS Proyectado: 4x a 12x (1 contrato B2B amortiza la inversión).
                </span>
              </div>
              <button
                onClick={handleDownloadPdf}
                className="px-3.5 py-1.5 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-lg font-bold text-xs flex items-center gap-1.5 shrink-0 transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" /> Descargar PDF Completo
              </button>
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 border-t border-slate-100 bg-[#F8FAFC] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-slate-500 text-center sm:text-left">
            Documento estratégico confidencial preparado para <strong>Davimar Group</strong>.
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPdf}
              className="px-4 py-2 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5" /> Descargar en Formato PDF (.pdf)
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl font-medium transition-colors cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>

      {/* Logo Upload & Customization Modal */}
      <LogoUploadModal
        isOpen={isLogoModalOpen}
        onClose={() => setIsLogoModalOpen(false)}
      />
    </div>
  );
};
