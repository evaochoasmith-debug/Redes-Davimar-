export type ComparisonPeriod = 'abril_mayo' | 'junio_julio' | 'agosto' | 'comparativa_completa';

export interface TopPerformerItem {
  posicion: number;
  titulo: string;
  formato: string;
  vistas: number;
  meGusta?: number;
  seguidoresDirectos: number;
  compartidos?: number;
  guardados?: number;
  neuromarketing: string;
  diagnostico: string;
}

export interface MonthlyMetric {
  mes: string;
  mesId: 'abril' | 'mayo' | 'junio' | 'julio' | 'agosto';
  periodo: 'Abril-Mayo' | 'Junio-Julio' | 'Agosto' | 'Julio-Agosto';
  vistasTotales: number;
  vistasFeedReels: number;
  vistasSeguidores: number;
  vistasNoSeguidores: number;
  pctSeguidores: number;
  pctNoSeguidores: number;
  alcanceCuentas: number;
  interacciones: number;
  engagementRate: number; // % sobre vistas
  engagementRateReach: number; // % sobre alcance
  visitasPerfil: number;
  tasaConversionPerfil: number; // (visitas / alcance) * 100
  clicsEnlaceBio?: number;
  meGusta?: number;
  comentarios?: number;
  compartidos?: number;
  guardados?: number;
  crecimientoSeguidoresNeto: number;
  baseAcumulada: number;
  piezasContenido: {
    total: number;
    feedCarruseles: number;
    reels: number;
    historias: number;
  };
  retencionPromedioSegundos: number;
  topPost: TopPerformerItem;
  topPerformersList?: TopPerformerItem[];
  diagnosticoMes: string;
  puntosClave: string[];
}

export interface ImprovementOpportunity {
  id: number;
  numero: string;
  titulo: string;
  diagnostico: string;
  oportunidadMejora: string;
  metricasRespaldo: string;
  planAccion: string[];
  kpisObjetivo: string;
  categoria: 'Frecuencia' | 'Historias' | 'Conversión Bio' | 'Horarios' | 'Pilar Logístico';
  accentColor: string;
  badge: string;
}

export interface InformativeCloudData {
  id: string;
  titulo: string;
  queEs: string;
  porQueImporta: string;
  antesDePagarAds: string;
  despuesDeActivarAds: string;
  metaRecomendada: string;
}

export interface DemographicData {
  edades: { rango: string; porcentaje: number; descripcion: string; color: string }[];
  generos: { tipo: string; porcentaje: number; descripcion: string; color: string }[];
  ciudades: { ciudad: string; porcentaje: number; sector: string; relevanciaAds: string }[];
  cargosB2B: { cargo: string; porcentaje: number; nivelDecision: string }[];
}

export interface VideoRetentionPoint {
  segundo: number;
  etiqueta: string;
  retencionDavimar: number; // % de espectadores retenidos
  benchmarkB2B: number; // % promedio del mercado B2B
  faseVideo: 'Hook (0-3s)' | 'Problema PDV (3-10s)' | 'Solución / Metodología (10-25s)' | 'Prueba / CTA B2B (25-45s)';
  explicacion: string;
  recomendacionAds: string;
}

export interface MetricDefinition {
  codigo: string;
  nombre: string;
  porQueImporta: string;
  impactoPresupuesto: string;
  formula: string;
  rangoEsperadoB2B: string;
  colorPastel: string;
  criterioPreAds: string;
  criterioPostAds: string;
}

export interface CampaignTier {
  etapa: 'TOFU - Descubrimiento B2B' | 'MOFU - Consideración & Solución PDV' | 'BOFU - Conversión & WhatsApp B2B';
  siglas: string;
  nombreFase: string;
  significadoSiglas: string;
  queEs: string;
  paraQueSirve: string;
  queQueremosLograr: string;
  tipoCampana: 'Always-On (Reconocimiento Continuo)' | 'Conversión & Clientes Potenciales' | 'Retargeting de Alta Intención';
  objetivoMeta: string;
  audiencias: string[];
  formatoCreativo: string;
  presupuestoSugeridoPct: number;
  kpisClave: string[];
  ejemploCopy: string;
  ganchoVisual: string;
  recomendacionEspecial: string;
}

export interface HeatmapCell {
  dia: string;
  hora: number; // 0-23
  actividad: number; // 1-100
  esOptimo: boolean;
  comentario: string;
}

export interface StrategicToolItem {
  nombre: string;
  categoria: 'Automatización' | 'Pauta Digital' | 'Comercial' | 'Edición y Gancho' | 'Analítica';
  descripcion: string;
  impactoB2B: string;
  recomendacionUso: string;
}

