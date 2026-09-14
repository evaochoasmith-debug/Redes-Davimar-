import React from 'react';
import { ComparisonPeriod } from '../types';
import { DavimarLogo } from './DavimarLogo';
import { useDavimarLogo } from '../utils/logoStorage';
import {
  TrendingUp,
  FileSpreadsheet,
  Download,
  Calendar,
  Sparkles,
  ShieldCheck,
  Building2,
  Instagram,
  BarChart2,
  FileDown,
  UploadCloud,
} from 'lucide-react';

interface HeaderProps {
  periodoActivo: ComparisonPeriod;
  onSelectPeriodo: (p: ComparisonPeriod) => void;
  onOpenExportModal: () => void;
  onOpenAiAssistant: () => void;
  onOpenLogoModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  periodoActivo,
  onSelectPeriodo,
  onOpenExportModal,
  onOpenAiAssistant,
  onOpenLogoModal,
}) => {
  const { isCustom } = useDavimarLogo();

  return (
    <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-30 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Brand & Account Info */}
          <div className="flex items-center space-x-3.5">
            <div className="relative group">
              <button
                id="btn-header-change-logo"
                type="button"
                onClick={onOpenLogoModal}
                title="Hacer clic para subir o personalizar el logo de Davimar"
                className="h-11 px-2.5 bg-slate-50 border border-slate-200/80 rounded-xl flex items-center justify-center shadow-xs shrink-0 hover:bg-white hover:border-sky-400 hover:shadow-sm transition-all cursor-pointer relative"
              >
                <DavimarLogo className="h-8 w-auto max-w-[120px]" />
                <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-sky-600 hover:bg-sky-700 text-white rounded-full flex items-center justify-center shadow-xs text-[10px] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  <UploadCloud className="w-2.5 h-2.5" />
                </span>
              </button>
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl font-bold tracking-tight text-slate-900">
                  Meta Insights & Framework
                </h1>
                <span className="px-2.5 py-0.5 bg-[#E0F2FE] text-[#0369A1] rounded-full text-[11px] font-semibold">
                  Pre-Ad Phase
                </span>
                {isCustom && (
                  <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-[10px] font-medium hidden sm:inline-flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Logo personalizado
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 flex-wrap mt-0.5">
                <p className="text-xs text-slate-500 uppercase tracking-widest">
                  @davimargroup · B2B Audit & Pre-Ad Portfolio
                </p>
                <span className="text-slate-300">•</span>
                <button
                  id="btn-subir-logo-link"
                  type="button"
                  onClick={onOpenLogoModal}
                  className="text-xs text-sky-700 hover:text-sky-900 font-semibold inline-flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <UploadCloud className="w-3 h-3 text-sky-600" />
                  {isCustom ? 'Gestionar logo' : 'Subir logo'}
                </button>
              </div>
            </div>
          </div>

          {/* Period Filter & Actions */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Period Switcher */}
            <div className="inline-flex p-1 bg-[#F1F5F9] rounded-xl border border-slate-200 text-xs font-semibold">
              <button
                id="btn-period-abril-mayo"
                onClick={() => onSelectPeriodo('abril_mayo')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  periodoActivo === 'abril_mayo'
                    ? 'bg-white text-[#0369A1] font-bold shadow-xs border border-slate-200/80'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <Calendar className="w-3.5 h-3.5 text-[#0369A1]" />
                Abril - Mayo
              </button>
              <button
                id="btn-period-junio-julio"
                onClick={() => onSelectPeriodo('junio_julio')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  periodoActivo === 'junio_julio'
                    ? 'bg-white text-[#0369A1] font-bold shadow-xs border border-slate-200/80'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                Junio - Julio
              </button>
              <button
                id="btn-period-agosto"
                onClick={() => onSelectPeriodo('agosto')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  periodoActivo === 'agosto'
                    ? 'bg-white text-[#EA580C] font-bold shadow-xs border border-orange-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                Agosto 2026
              </button>
              <button
                id="btn-period-comparativa"
                onClick={() => onSelectPeriodo('comparativa_completa')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  periodoActivo === 'comparativa_completa'
                    ? 'bg-[#1E293B] text-white font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-[#7DD3FC]" />
                Histórico (5 Meses)
              </button>
            </div>

            {/* AI Analyst Trigger Button */}
            <button
              id="btn-open-ai-analyst"
              onClick={onOpenAiAssistant}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-[#1E40AF] hover:bg-[#1D4ED8] text-white shadow-xs transition-all active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#BFDBFE] animate-pulse" />
              Copiloto Meta AI
            </button>

            {/* Export / Download PDF Report Button */}
            <button
              id="btn-export-report-modal"
              onClick={onOpenExportModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#16A34A] hover:bg-[#15803D] text-white shadow-xs transition-all active:scale-95 cursor-pointer"
              title="Descargar informe ejecutivo en formato PDF"
            >
              <FileDown className="w-3.5 h-3.5 text-white" />
              Descargar PDF
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
