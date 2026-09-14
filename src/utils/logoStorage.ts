import { useState, useEffect } from 'react';
import { getDavimarLogoDataUrl } from './davimarLogoAsset';

export const STORAGE_KEY_CUSTOM_LOGO = 'davimar_custom_logo_data_url';
export const STORAGE_KEY_LOGO_META = 'davimar_custom_logo_meta';

export interface LogoMetadata {
  fileName: string;
  fileSize: number;
  width: number;
  height: number;
  updatedAt: string;
}

const EVENT_LOGO_CHANGE = 'davimar-logo-changed';

/**
 * Retrieves the stored custom logo Data URL from localStorage if present.
 */
export function getStoredCustomLogo(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(STORAGE_KEY_CUSTOM_LOGO);
  } catch (e) {
    console.warn('Unable to read logo from localStorage', e);
    return null;
  }
}

/**
 * Retrieves logo metadata if available.
 */
export function getStoredLogoMetadata(): LogoMetadata | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_LOGO_META);
    return raw ? (JSON.parse(raw) as LogoMetadata) : null;
  } catch {
    return null;
  }
}

/**
 * Saves a custom logo Data URL and metadata to localStorage,
 * and notifies all listeners across components.
 */
export function saveCustomLogo(dataUrl: string, meta?: Partial<LogoMetadata>): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY_CUSTOM_LOGO, dataUrl);
    if (meta) {
      const fullMeta: LogoMetadata = {
        fileName: meta.fileName || 'logo-davimar.png',
        fileSize: meta.fileSize || Math.round((dataUrl.length * 3) / 4),
        width: meta.width || 0,
        height: meta.height || 0,
        updatedAt: new Date().toISOString(),
      };
      localStorage.setItem(STORAGE_KEY_LOGO_META, JSON.stringify(fullMeta));
    }
    window.dispatchEvent(new CustomEvent(EVENT_LOGO_CHANGE, { detail: { dataUrl } }));
  } catch (e) {
    console.error('Error saving logo to localStorage:', e);
    throw new Error('No se pudo guardar el logo en el almacenamiento local. Comprueba el tamaño.');
  }
}

/**
 * Removes the custom logo, resetting to official Davimar brand vector.
 */
export function clearCustomLogo(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEY_CUSTOM_LOGO);
    localStorage.removeItem(STORAGE_KEY_LOGO_META);
    window.dispatchEvent(new CustomEvent(EVENT_LOGO_CHANGE, { detail: { dataUrl: null } }));
  } catch (e) {
    console.error('Error clearing logo from localStorage:', e);
  }
}

/**
 * Converts and optimizes an uploaded Image File (PNG, JPG, SVG, WebP)
 * into a clean Data URL scaled to max dimensions for optimal quality and storage size.
 */
export async function processImageFile(file: File, maxWidth = 1200, maxHeight = 600): Promise<{
  dataUrl: string;
  width: number;
  height: number;
  fileName: string;
  fileSize: number;
}> {
  const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/svg+xml'];
  if (!validTypes.includes(file.type)) {
    throw new Error('Formato no soportado. Por favor sube una imagen PNG, JPG, WebP o SVG.');
  }

  // Max 5MB raw
  if (file.size > 5 * 1024 * 1024) {
    throw new Error('El archivo excede los 5MB. Por favor sube un archivo más liviano.');
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (!result) {
        reject(new Error('No se pudo leer el archivo de imagen.'));
        return;
      }

      // If SVG, handle directly or render to canvas
      const img = new Image();
      img.onload = () => {
        try {
          let targetW = img.naturalWidth || img.width || 400;
          let targetH = img.naturalHeight || img.height || 200;

          // Scale down if exceeds max dimensions while preserving aspect ratio
          if (targetW > maxWidth || targetH > maxHeight) {
            const ratio = Math.min(maxWidth / targetW, maxHeight / targetH);
            targetW = Math.round(targetW * ratio);
            targetH = Math.round(targetH * ratio);
          }

          const canvas = document.createElement('canvas');
          canvas.width = targetW;
          canvas.height = targetH;
          const ctx = canvas.getContext('2d');

          if (!ctx) {
            // Fallback to raw result if canvas context fails
            resolve({
              dataUrl: result,
              width: targetW,
              height: targetH,
              fileName: file.name,
              fileSize: file.size,
            });
            return;
          }

          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.clearRect(0, 0, targetW, targetH);
          ctx.drawImage(img, 0, 0, targetW, targetH);

          // Use PNG format to maintain transparency
          const finalDataUrl = canvas.toDataURL('image/png', 0.95);

          resolve({
            dataUrl: finalDataUrl,
            width: targetW,
            height: targetH,
            fileName: file.name,
            fileSize: Math.round((finalDataUrl.length * 3) / 4),
          });
        } catch (err) {
          // In case of canvas security exception, resolve original
          resolve({
            dataUrl: result,
            width: img.width || 400,
            height: img.height || 200,
            fileName: file.name,
            fileSize: file.size,
          });
        }
      };

      img.onerror = () => {
        reject(new Error('No se pudo decodificar la imagen seleccionada.'));
      };

      img.src = result;
    };

    reader.onerror = () => {
      reject(new Error('Error al leer el archivo.'));
    };

    reader.readAsDataURL(file);
  });
}

/**
 * React hook that returns the active logo Data URL (either custom from localStorage, or null for default)
 * and stays synchronized whenever the logo is updated or reset anywhere in the app.
 */
export function useDavimarLogo() {
  const [customLogo, setCustomLogo] = useState<string | null>(() => getStoredCustomLogo());
  const [metadata, setMetadata] = useState<LogoMetadata | null>(() => getStoredLogoMetadata());

  useEffect(() => {
    const handleLogoChange = () => {
      setCustomLogo(getStoredCustomLogo());
      setMetadata(getStoredLogoMetadata());
    };

    window.addEventListener(EVENT_LOGO_CHANGE, handleLogoChange);
    window.addEventListener('storage', handleLogoChange);

    return () => {
      window.removeEventListener(EVENT_LOGO_CHANGE, handleLogoChange);
      window.removeEventListener('storage', handleLogoChange);
    };
  }, []);

  return {
    customLogo,
    metadata,
    isCustom: !!customLogo,
    saveLogo: saveCustomLogo,
    clearLogo: clearCustomLogo,
  };
}

/**
 * Returns either the custom saved logo or the official generated Davimar logo for PDF export.
 */
export async function getEffectiveLogoForPdf(): Promise<string> {
  const custom = getStoredCustomLogo();
  if (custom) {
    return custom;
  }
  return await getDavimarLogoDataUrl(800, 300);
}
