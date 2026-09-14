import React, { useState, useRef, DragEvent, ChangeEvent } from 'react';
import { useDavimarLogo, processImageFile } from '../utils/logoStorage';
import { DavimarLogo } from './DavimarLogo';
import {
  UploadCloud,
  Check,
  X,
  RotateCcw,
  Image as ImageIcon,
  AlertCircle,
  FileCheck,
  ShieldCheck,
  Eye,
} from 'lucide-react';

interface LogoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogoUploadModal: React.FC<LogoUploadModalProps> = ({ isOpen, onClose }) => {
  const { customLogo, metadata, isCustom, saveLogo, clearLogo } = useDavimarLogo();

  const [dragOver, setDragOver] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [tempMeta, setTempMeta] = useState<{
    fileName: string;
    fileSize: number;
    width: number;
    height: number;
  } | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFile = async (file: File) => {
    setErrorMessage(null);
    setIsProcessing(true);
    setSaveSuccess(false);

    try {
      const processed = await processImageFile(file);
      setSelectedImage(processed.dataUrl);
      setTempMeta({
        fileName: processed.fileName,
        fileSize: processed.fileSize,
        width: processed.width,
        height: processed.height,
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error al procesar el archivo.';
      setErrorMessage(msg);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      handleFile(file);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  };

  const handleSave = () => {
    if (!selectedImage) return;
    try {
      saveLogo(selectedImage, tempMeta || undefined);
      setSaveSuccess(true);
      setTimeout(() => {
        setSaveSuccess(false);
        onClose();
      }, 1200);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Error al guardar el logo.';
      setErrorMessage(msg);
    }
  };

  const handleResetToDefault = () => {
    clearLogo();
    setSelectedImage(null);
    setTempMeta(null);
    setErrorMessage(null);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 1000);
  };

  const currentPreview = selectedImage || customLogo;

  return (
    <div
      id="modal-logo-upload-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="modal-logo-upload-container"
        className="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
              <UploadCloud className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Personalizar Logo de Davimar</h2>
              <p className="text-xs text-slate-500">
                Se guardará localmente y se aplicará al panel y a las exportaciones en PDF.
              </p>
            </div>
          </div>
          <button
            id="btn-close-logo-modal"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/60 transition-colors cursor-pointer"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          {/* Status Badge */}
          <div className="flex items-center justify-between text-xs px-3.5 py-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700">
            <span className="flex items-center gap-2">
              <span className="font-semibold">Estado actual:</span>
              {isCustom ? (
                <span className="inline-flex items-center gap-1 font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  <Check className="w-3.5 h-3.5" /> Logo personalizado activo
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 font-medium text-slate-600 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-600" /> Logo oficial vectorial activo
                </span>
              )}
            </span>
            {metadata && isCustom && (
              <span className="text-slate-500 hidden sm:inline truncate max-w-[180px]">
                {metadata.fileName} ({Math.round(metadata.fileSize / 1024)} KB)
              </span>
            )}
          </div>

          {/* Drag and Drop Zone */}
          <div
            id="dropzone-logo-upload"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
              dragOver
                ? 'border-sky-500 bg-sky-50/70 scale-[0.99]'
                : 'border-slate-300 hover:border-sky-400 hover:bg-slate-50/80'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png, image/jpeg, image/jpg, image/webp, image/svg+xml"
              className="hidden"
              onChange={handleFileInputChange}
            />

            <div className="flex flex-col items-center justify-center gap-2">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  dragOver ? 'bg-sky-500 text-white' : 'bg-slate-100 text-slate-500'
                }`}
              >
                <UploadCloud className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-800">
                  <span className="text-sky-600 underline">Haz clic para buscar</span> o arrastra tu archivo aquí
                </p>
                <p className="text-xs text-slate-500">
                  PNG transparente recomendado, JPG, SVG o WebP (máximo 5 MB)
                </p>
              </div>
            </div>
          </div>

          {/* Processing or Error Alert */}
          {isProcessing && (
            <div className="text-xs text-sky-700 bg-sky-50 p-3 rounded-lg border border-sky-200 flex items-center gap-2 animate-pulse">
              <UploadCloud className="w-4 h-4 shrink-0" />
              <span>Procesando y optimizando el logo...</span>
            </div>
          )}

          {errorMessage && (
            <div className="text-xs text-rose-700 bg-rose-50 p-3 rounded-lg border border-rose-200 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {saveSuccess && (
            <div className="text-xs text-emerald-800 bg-emerald-50 p-3 rounded-lg border border-emerald-200 flex items-center gap-2">
              <Check className="w-4 h-4 shrink-0" />
              <span className="font-semibold">¡Logo actualizado y guardado correctamente!</span>
            </div>
          )}

          {/* Live Dual Preview: Light and Dark Surface */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-sky-600" />
                Vista previa del logo:
              </span>
              {selectedImage && (
                <span className="text-sky-700 font-normal">
                  (Nuevo archivo seleccionado listo para guardar)
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Card 1: Over Light Background (Like in Header and Web Page) */}
              <div className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-2xs flex flex-col items-center justify-center text-center">
                <span className="text-[11px] font-medium text-slate-400 mb-2 uppercase tracking-wider">
                  Fondo Blanco / Interfaz Web
                </span>
                <div className="h-14 w-full flex items-center justify-center p-1 bg-slate-50/50 rounded-lg border border-slate-100">
                  {currentPreview ? (
                    <img
                      src={currentPreview}
                      alt="Vista previa fondo blanco"
                      className="max-h-12 max-w-full object-contain"
                    />
                  ) : (
                    <DavimarLogo className="h-9 w-auto" />
                  )}
                </div>
              </div>

              {/* Card 2: Over Dark Background (Like in PDF Header Bar) */}
              <div className="p-3.5 rounded-xl border border-slate-700 bg-[#1E293B] shadow-2xs flex flex-col items-center justify-center text-center">
                <span className="text-[11px] font-medium text-slate-300 mb-2 uppercase tracking-wider">
                  Fondo Encabezado PDF (Slate #1E293B)
                </span>
                <div className="h-14 w-full flex items-center justify-center p-1 bg-white rounded-lg border border-slate-300">
                  {currentPreview ? (
                    <img
                      src={currentPreview}
                      alt="Vista previa fondo oscuro"
                      className="max-h-12 max-w-full object-contain"
                    />
                  ) : (
                    <DavimarLogo className="h-9 w-auto" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            {isCustom && (
              <button
                id="btn-reset-default-logo"
                type="button"
                onClick={handleResetToDefault}
                className="text-xs font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Restablecer logo oficial
              </button>
            )}
          </div>

          <div className="flex items-center justify-end gap-2.5">
            <button
              id="btn-cancel-logo-modal"
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Cancelar
            </button>
            <button
              id="btn-save-custom-logo"
              type="button"
              disabled={!selectedImage || isProcessing}
              onClick={handleSave}
              className={`px-4 py-2 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all shadow-xs cursor-pointer ${
                selectedImage && !isProcessing
                  ? 'bg-[#0369A1] hover:bg-[#0284C7] text-white shadow-sky-500/20'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <Check className="w-3.5 h-3.5" />
              Guardar Logo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
