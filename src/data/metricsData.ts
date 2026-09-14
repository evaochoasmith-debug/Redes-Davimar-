import {
  MonthlyMetric,
  DemographicData,
  VideoRetentionPoint,
  MetricDefinition,
  CampaignTier,
  HeatmapCell,
  InformativeCloudData,
  StrategicToolItem,
  ImprovementOpportunity,
} from '../types';

export const METRICAS_MENSUALES: MonthlyMetric[] = [
  {
    mes: 'Abril 2026',
    mesId: 'abril',
    periodo: 'Abril-Mayo',
    vistasTotales: 13412,
    vistasFeedReels: 13000,
    vistasSeguidores: 8986, // 67%
    vistasNoSeguidores: 4426, // 33%
    pctSeguidores: 67.0,
    pctNoSeguidores: 33.0,
    alcanceCuentas: 4912,
    interacciones: 742,
    engagementRate: 5.53,
    engagementRateReach: 15.1,
    visitasPerfil: 1335,
    tasaConversionPerfil: 27.18, // (1335 / 4912) * 100
    crecimientoSeguidoresNeto: 107,
    baseAcumulada: 2040,
    piezasContenido: {
      total: 13,
      feedCarruseles: 11,
      reels: 2,
      historias: 38,
    },
    retencionPromedioSegundos: 7.8,
    topPost: {
      posicion: 1,
      titulo: '¿Qué pasa cuando una marca tiene impulso en PDV?',
      formato: 'Carrusel Educativo B2B',
      vistas: 1993,
      meGusta: 112,
      seguidoresDirectos: 4,
      compartidos: 28,
      guardados: 47,
      neuromarketing:
        'Atracción por dolor comercial: Resolver la incertidumbre sobre qué ocurre cuando un producto no rota en el anaquel captó de inmediato el interés de directores comerciales.',
      diagnostico:
        'Mejor pieza del mes en atracción directa de nuevos perfiles. El tema de impulso en Punto de Venta conectó con dueños de marcas y distribuidores.',
    },
    topPerformersList: [
      {
        posicion: 1,
        titulo: '¿Qué pasa cuando una marca tiene impulso en PDV?',
        formato: 'Carrusel Educativo',
        vistas: 1993,
        seguidoresDirectos: 4,
        neuromarketing: 'Identificación de dolor en canal retail y necesidad de supervisión de góndola.',
        diagnostico: 'Pilar ganador para anuncios de consideración B2B.',
      },
      {
        posicion: 2,
        titulo: 'Campaña Semana Santa y Abastecimiento de Pescados/Enlatados',
        formato: 'Post de Oportunidad Comercial',
        vistas: 1640,
        seguidoresDirectos: 3,
        neuromarketing: 'Oportunidad estacional de alta rotación en supermercados.',
        diagnostico: 'Demostró agilidad logística y disponibilidad de stock.',
      },
    ],
    diagnosticoMes:
      'Abril demostró una tracción inicial sólida: 1 de cada 3 impactos provino de cuentas no seguidoras (33%). El alto volumen de publicaciones en feed aprovechó la temporada de Semana Santa para consolidar los 2.000 seguidores.',
    puntosClave: [
      'Alcance de descubrimiento: 33% no seguidores.',
      'Crecimiento neto de +107 seguidores comerciales.',
      'Conversión inicial a perfil del 27,2% sobre cuentas alcanzadas.',
    ],
  },
  {
    mes: 'Mayo 2026',
    mesId: 'mayo',
    periodo: 'Abril-Mayo',
    vistasTotales: 35142, // Pico histórico
    vistasFeedReels: 20000, // +55% vs abril
    vistasSeguidores: 22982, // 65.4%
    vistasNoSeguidores: 12160, // 34.6% (+64% de aumento en este segmento)
    pctSeguidores: 65.4,
    pctNoSeguidores: 34.6,
    alcanceCuentas: 4569, // -7% vs abril
    interacciones: 909,
    engagementRate: 2.59,
    engagementRateReach: 19.89,
    visitasPerfil: 1730, // +29.6% vs abril
    tasaConversionPerfil: 37.86, // (1730 / 4569) * 100
    clicsEnlaceBio: 96, // +31.5% vs abril
    meGusta: 488,
    comentarios: 28,
    compartidos: 29,
    guardados: 17,
    crecimientoSeguidoresNeto: 111,
    baseAcumulada: 2151,
    piezasContenido: {
      total: 14,
      feedCarruseles: 11,
      reels: 3,
      historias: 44, // 45.3% del volumen total de vistas del mes
    },
    retencionPromedioSegundos: 8.6,
    topPost: {
      posicion: 1,
      titulo: '3 errores comunes de inventario y exhibición en canal tradicional',
      formato: 'Reel Demostrativo en PDV',
      vistas: 2844,
      meGusta: 142,
      seguidoresDirectos: 6,
      compartidos: 35,
      guardados: 62,
      neuromarketing:
        'Autoridad técnica y prevención de pérdidas: Los decisores de compras prestan máxima atención a contenidos que evitan quiebres de stock y merma.',
      diagnostico:
        'El incremento en formato video corto (Reels) y la alta frecuencia de Historias (45,3% de las vistas) impulsaron el mes con mayor volumen del cuatrimestre (35.142 vistas).',
    },
    topPerformersList: [
      {
        posicion: 1,
        titulo: 'Reel Alimentos Mary en calle & Trade Marketing',
        formato: 'Reel Demostrativo',
        vistas: 2844,
        seguidoresDirectos: 6,
        neuromarketing: 'Prueba social con marcas líderes de consumo masivo.',
        diagnostico: 'Mayor impacto visual y validación de solvencia en anaqueles.',
      },
      {
        posicion: 2,
        titulo: 'Campaña Especial Día de las Madres en Puntos de Venta',
        formato: 'Carrusel de Activación',
        vistas: 2150,
        seguidoresDirectos: 4,
        neuromarketing: 'Conexión emocional y dinamismo comercial en piso de venta.',
        diagnostico: 'Generó 96 clics directos al enlace de la biografía (+31,5%).',
      },
    ],
    diagnosticoMes:
      'Mayo representó el pico máximo de exposición (35.142 visualizaciones), con un crecimiento del +64% en vistas de no seguidores (12.160). Las Historias aportaron el 45,3% de la visibilidad y las visitas al perfil alcanzaron un récord de 1.730.',
    puntosClave: [
      'Pico de visualizaciones totales: 35.142 impactos.',
      'Explosión de Historias: 45,3% de las vistas del mes.',
      '1.730 visitas al perfil y 96 clics en el enlace de la bio (+31,5%).',
    ],
  },
  {
    mes: 'Junio 2026',
    mesId: 'junio',
    periodo: 'Junio-Julio',
    vistasTotales: 22920, // 22.240 - 23.600
    vistasFeedReels: 18900,
    vistasSeguidores: 15402, // 67.2%
    vistasNoSeguidores: 7518, // 32.8%
    pctSeguidores: 67.2,
    pctNoSeguidores: 32.8,
    alcanceCuentas: 2928,
    interacciones: 919, // Lideradas por Publicaciones (753 acciones, 81.9%)
    engagementRate: 4.13, // sobre vistas
    engagementRateReach: 31.39, // sobre alcance (Extraordinario en B2B)
    visitasPerfil: 1363, // 46.5% de las cuentas alcanzadas
    tasaConversionPerfil: 46.55,
    clicsEnlaceBio: 82,
    meGusta: 412,
    comentarios: 34,
    compartidos: 48,
    guardados: 75,
    crecimientoSeguidoresNeto: 72, // +68 a +75 netos
    baseAcumulada: 2414,
    piezasContenido: {
      total: 12,
      feedCarruseles: 7,
      reels: 2,
      historias: 3, // Drástica reducción de historias
    },
    retencionPromedioSegundos: 10.4,
    topPost: {
      posicion: 1,
      titulo: '5 Fortalezas de José (Equipo & Cultura Davimar)',
      formato: 'Carrusel de Rostro Humano / Equipo',
      vistas: 2200,
      meGusta: 168,
      seguidoresDirectos: 9,
      compartidos: 42,
      guardados: 56,
      neuromarketing:
        'Humanización y Neurona Espejo: Conectar el éxito logístico con las personas ("La fuerza detrás de los anaqueles") activó empatía inmediata y fue el post #1 en conversión de seguidores del mes (+9 netos).',
      diagnostico:
        'El contenido humano superó al netamente comercial en engagement. La reducción de historias (solo 3 en el mes) evidenció una caída del alcance total frente a Mayo.',
    },
    topPerformersList: [
      {
        posicion: 1,
        titulo: '5 Fortalezas de José (Equipo / Cultura)',
        formato: 'Carrusel Institucional',
        vistas: 2200,
        seguidoresDirectos: 9,
        neuromarketing: 'Humanización y empatía: mayor captación de seguidores directos.',
        diagnostico: 'Pilar obligatorio para pautas de conexión de marca.',
      },
      {
        posicion: 2,
        titulo: 'Activación en PDV / Alimentos Mary',
        formato: 'Reel de Trade Marketing',
        vistas: 2100,
        seguidoresDirectos: 5,
        neuromarketing: 'Demostración de presencia en calle y trabajo con grandes marcas.',
        diagnostico: 'Generó consultas por WhatsApp de comerciantes minoristas.',
      },
      {
        posicion: 3,
        titulo: 'Institucional: Raíces Davimar (60 años de trayectoria)',
        formato: 'Carrusel Histórico',
        vistas: 1900,
        seguidoresDirectos: 4,
        neuromarketing: 'Solidez, tradición y seguridad patrimonial B2B.',
        diagnostico: 'Refuerza la confianza de proveedores e importadores.',
      },
    ],
    diagnosticoMes:
      'Junio demostró un engagement récord sobre cuentas alcanzadas (31,39%), liderado por publicaciones estáticas y carruseles (81,9% de interacciones). El post de José probó que humanizar la logística convierte decisores en seguidores.',
    puntosClave: [
      'Tasa de interacción s/Alcance: 31,39% (Benchmark B2B: 1,5% - 2,5%).',
      '46,5% de las cuentas alcanzadas entraron al perfil a investigar a la empresa.',
      'Post de José generó +9 seguidores directos (Top performer del mes).',
    ],
  },
  {
    mes: 'Julio 2026',
    mesId: 'julio',
    periodo: 'Junio-Julio',
    vistasTotales: 8600, // Menor volumen por espaciamiento de posteo
    vistasFeedReels: 6400,
    vistasSeguidores: 4816, // 56.0%
    vistasNoSeguidores: 3784, // 44.0% (Mayor peso relativo de no seguidores en Reels)
    pctSeguidores: 56.0,
    pctNoSeguidores: 44.0,
    alcanceCuentas: 1718,
    interacciones: 193, // Filtro Likes registrados
    engagementRate: 2.24, // sobre vistas
    engagementRateReach: 11.23, // sobre alcance
    visitasPerfil: 919, // 53.5% de los espectadores visitaron el perfil (Récord de conversión)
    tasaConversionPerfil: 53.49,
    clicsEnlaceBio: 64,
    meGusta: 193,
    comentarios: 18,
    compartidos: 26,
    guardados: 41,
    crecimientoSeguidoresNeto: 28, // +4.6% acumulado
    baseAcumulada: 2414,
    piezasContenido: {
      total: 8,
      feedCarruseles: 3,
      reels: 3,
      historias: 12,
    },
    retencionPromedioSegundos: 12.1,
    topPost: {
      posicion: 1,
      titulo: 'Llegada de contenedores / Descarga con montacargas en patio',
      formato: 'Reel de Infraestructura & Operaciones',
      vistas: 1900,
      meGusta: 89,
      seguidoresDirectos: 7,
      compartidos: 24,
      guardados: 38,
      neuromarketing:
        'Credibilidad de infraestructura física: Ver la descarga de mercancía pesada y montacargas en patio elimina cualquier duda sobre la capacidad operativa de Davimar.',
      diagnostico:
        'Los Reels pasaron a liderar el 66,8% de las reacciones del mes. El 53,5% de las personas alcanzadas visitó el perfil, marcando la mayor intención de compra del cuatrimestre.',
    },
    topPerformersList: [
      {
        posicion: 1,
        titulo: 'Llegada de contenedores / Descarga montacargas',
        formato: 'Reel Operativo',
        vistas: 1900,
        seguidoresDirectos: 7,
        neuromarketing: 'Músculo logístico y solvencia operativa tangible.',
        diagnostico: 'Activo #1 para pauta de alcance (TOFU) en Meta Ads.',
      },
      {
        posicion: 2,
        titulo: 'Reel "Lo que hace Davimar a las 5:00 AM" (Flota en ruta)',
        formato: 'Reel Behind-the-Scenes',
        vistas: 1300,
        seguidoresDirectos: 5,
        neuromarketing: 'Disciplina, puntualidad en entregas y compromiso.',
        diagnostico: 'Conecta con gerentes de supply chain y logística.',
      },
      {
        posicion: 3,
        titulo: 'Publicación In Memoriam Axel David',
        formato: 'Post Conmemorativo',
        vistas: 1150,
        seguidoresDirectos: 10,
        neuromarketing: 'Solidaridad institucional, duelo y valores familiares.',
        diagnostico: 'Pico máximo de nuevos seguidores orgánicos en un solo post (+10).',
      },
      {
        posicion: 4,
        titulo: 'Video "En Davimar la Constancia"',
        formato: 'Reel Institucional',
        vistas: 980,
        seguidoresDirectos: 7,
        neuromarketing: 'Resiliencia comercial y trayectoria.',
        diagnostico: 'Excelente retención de inicio a fin.',
      },
    ],
    diagnosticoMes:
      'Julio evidenció la mayor tasa de conversión a perfil de la historia de la cuenta (53,5% de las cuentas alcanzadas entraron a la biografía). Aunque el volumen bajó por menor frecuencia de posteo, la calidad de los prospectos y el impacto de los Reels de montacargas fue sobresaliente.',
    puntosClave: [
      '53,5% de conversión a visitas de perfil (919 visitas de 1.718 alcanzadas).',
      '66,8% de todas las reacciones provino directamente del formato Reels.',
      'Contenedores y montacargas demostraron ser el contenido de mayor autoridad B2B.',
    ],
  },
  {
    mes: 'Agosto 2026',
    mesId: 'agosto',
    periodo: 'Agosto',
    vistasTotales: 8675, // Auditado: 8.675 - 8.800
    vistasFeedReels: 7375, // Reels + Post (Historias: 1.300 = 15,0%)
    vistasSeguidores: 4424, // 51.0%
    vistasNoSeguidores: 4251, // 49.0% (48,0% - 49,2% no seguidores en panel)
    pctSeguidores: 51.0,
    pctNoSeguidores: 49.0,
    alcanceCuentas: 1953, // 1.953 espectadores únicos
    interacciones: 216, // Registradas en panel consolidado
    engagementRate: 2.49, // sobre vistas (Benchmark B2B: 1.5% - 2.0%)
    engagementRateReach: 11.06, // sobre alcance
    visitasPerfil: 942, // 48,2% de los espectadores visitaron el perfil
    tasaConversionPerfil: 48.23, // (942 / 1953) * 100
    clicsEnlaceBio: 71,
    meGusta: 185,
    comentarios: 12,
    compartidos: 22,
    guardados: 19,
    crecimientoSeguidoresNeto: 57, // +56 a +58 netos
    baseAcumulada: 2471, // Cierre acumulado: ~2.470 - 2.478 seguidores
    piezasContenido: {
      total: 5,
      feedCarruseles: 1, // 1 post
      reels: 3, // 3 reels
      historias: 1, // 1 historia oficial registrada en panel consolidado
    },
    retencionPromedioSegundos: 11.8,
    topPost: {
      posicion: 1,
      titulo: 'Descarga con montacargas en patio / Músculo logístico',
      formato: 'Reel de Operaciones & Almacén',
      vistas: 2400,
      meGusta: 88,
      seguidoresDirectos: 5,
      compartidos: 14,
      guardados: 9,
      neuromarketing:
        'Credibilidad de infraestructura real y solvencia operativa: Ver las maniobras en patio y la descarga pesada elimina objeciones sobre capacidad de abastecimiento ante clientes mayoristas.',
      diagnostico:
        'Contenido #1 indiscutible de agosto con 2.400 visualizaciones, 88 likes, 14 compartidos y 5 nuevos seguidores directos ganados.',
    },
    topPerformersList: [
      {
        posicion: 1,
        titulo: 'Descarga con montacargas en patio',
        formato: 'Reel Operativo',
        vistas: 2400,
        meGusta: 88,
        compartidos: 14,
        guardados: 9,
        seguidoresDirectos: 5,
        neuromarketing: 'Músculo logístico y solvencia operativa palpable (+2.4k vistas y +5 seguidores directos).',
        diagnostico: 'Pilar estrella #1: Valida mantener al menos 40% de la parrilla en operaciones y almacén.',
      },
      {
        posicion: 2,
        titulo: 'Sumando herramientas / "Atiende Bonito" (Cultura & Formación)',
        formato: 'Post de Cultura Institucional',
        vistas: 1600,
        meGusta: 27,
        compartidos: 1,
        guardados: 7,
        seguidoresDirectos: 3,
        neuromarketing: 'Humanización, atención al cliente y valores: genera empatía y calidez corporativa.',
        diagnostico: 'Segunda pieza más vista con 1.600 impactos, ratificando el interés por el equipo humano.',
      },
      {
        posicion: 3,
        titulo: 'Davimar a las 5:00 AM / Logística en marcha',
        formato: 'Reel Behind-the-Scenes',
        vistas: 1300,
        meGusta: 27,
        compartidos: 3,
        guardados: 4,
        seguidoresDirectos: 2,
        neuromarketing: 'Disciplina, puntualidad y trabajo incansable desde la madrugada.',
        diagnostico: 'Consolida la reputación de cumplimiento en rutas de distribución.',
      },
      {
        posicion: 4,
        titulo: 'Supervisión con nuestros mercaderistas en PDV',
        formato: 'Reel de Trade Marketing',
        vistas: 977,
        meGusta: 34,
        compartidos: 2,
        guardados: 5,
        seguidoresDirectos: 2,
        neuromarketing: 'Presencia impecable y rotación de producto en anaqueles de retail.',
        diagnostico: 'Demuestra a las marcas aliadas que su producto está cuidado en punto de venta.',
      },
      {
        posicion: 5,
        titulo: 'Operativa de Almacén Central',
        formato: 'Post / Video Operativo',
        vistas: 814,
        meGusta: 12,
        compartidos: 1,
        guardados: 3,
        seguidoresDirectos: 1,
        neuromarketing: 'Capacidad de acopio, pulcritud y orden en almacenamiento de abarrotes.',
        diagnostico: 'Aporta solvencia y tranquilidad a compradores institucionales.',
      },
    ],
    diagnosticoMes:
      'En agosto la actividad disminuyó considerablemente (3 reels, 1 post y 1 historia en el panel consolidado), lo que provocó una advertencia directa del algoritmo de Meta sobre la pérdida de ritmo. Sin embargo, la audiencia respondió con una extraordinaria tasa de conversión a perfil del 48,2% (942 visitas de 1.953 cuentas únicas) y el Reel de montacargas demostró el enorme poder del músculo logístico con 2.400 vistas.',
    puntosClave: [
      'Tasa de conversión a perfil de 48,2% (942 visitas de 1.953 espectadores únicos).',
      'Reel de montacargas en patio fue el contenido #1 con 2.400 vistas y 88 likes.',
      'Días pico de actividad: Lunes, Jueves y Domingo entre 6:00 PM y 9:00 PM.',
      'Alerta algorítmica de Meta por caída de frecuencia: necesidad de activar 7 reels + 4 carruseles en septiembre.',
    ],
  },
];

export const OPORTUNIDADES_MEJORA_SEPTIEMBRE: ImprovementOpportunity[] = [
  {
    id: 1,
    numero: '01',
    titulo: 'Recuperar la Frecuencia y Regularidad de Publicación',
    diagnostico:
      'En agosto la actividad disminuyó considerablemente (3 reels, 1 post y 1 historia en el panel consolidado), lo que provocó una advertencia directa del algoritmo de Meta sobre la pérdida de ritmo de publicación.',
    oportunidadMejora:
      'Activar de inmediato el cronograma previsto para septiembre (7 reels y 4 carruseles), asegurando un ritmo de 2 publicaciones en feed + 2 reels semanales. La constancia reactivará la distribución algorítmica previa a la temporada alta de Q4.',
    metricasRespaldo: 'Agosto: 5 piezas totales vs. Mayo: 14 piezas y 35.1k vistas (caída de alcance del 57%).',
    planAccion: [
      'Meta fija mensual: 7 Reels de alto dinamismo + 4 Carruseles técnicos.',
      'Ritmo semanal estricto: 2 publicaciones en feed + 2 reels semanales.',
      'Planificación anticipada con loteo de grabación en patio y almacén 1 vez cada 15 días.',
    ],
    kpisObjetivo: 'Recuperar >25.000 visualizaciones y levantar la advertencia de ritmo de Meta.',
    categoria: 'Frecuencia',
    accentColor: 'text-[#0369A1]',
    badge: 'Urgente / Reactivación Algorítmica',
  },
  {
    id: 2,
    numero: '02',
    titulo: 'Explotar el Formato Historias Diarias (Canal Prácticamente Apagado)',
    diagnostico:
      'En mayo, las Historias generaron el 45,3% de las visualizaciones de la cuenta. En agosto, solo se registró 1 historia oficial en el panel (1.300 vistas pasivas y 11 interacciones), perdiendo el canal de contacto diario con la comunidad.',
    oportunidadMejora:
      'Establecer un estándar de 2 a 3 historias diarias aprovechando la presencia en oficina y almacén, reactivando la relación cotidiana con decisores y compradores.',
    metricasRespaldo: 'Mayo generó 44 historias (15.9k vistas solo en historias) vs. 1 sola historia en Agosto.',
    planAccion: [
      'Tomas rápidas de andenes, montacargas y camiones saliendo a ruta en la mañana (07:30 - 09:00 AM).',
      'Encuestas y cajas de preguntas sobre abastecimiento, rotación y stock para clientes comerciales.',
      'Stickers de enlace directo a catálogos digitales interactivos (Flipbooks) y botón de atención por WhatsApp.',
    ],
    kpisObjetivo: 'Generar al menos 2.000 vistas diarias acumuladas en historias y 50 interacciones semanales.',
    categoria: 'Historias',
    accentColor: 'text-[#EA580C]',
    badge: 'Canal de Alta Rentabilidad',
  },
  {
    id: 3,
    numero: '03',
    titulo: 'Monetizar el Tráfico al Perfil (Tasa de Conversión de 48,2%)',
    diagnostico:
      'En agosto se registraron 942 visitas al perfil con una base de 1.953 espectadores únicos. Casi 1 de cada 2 personas que vio un contenido fue a inspeccionar la biografía de @davimargroup, demostrando un interés comercial altísimo que hoy se fuga sin cerrar.',
    oportunidadMejora:
      'Optimizar el enlace principal de la biografía con llamadas a la acción (CTAs) claras y enlaces directos a canales de venta, capturando a los prospectos calificados en el momento de mayor interés.',
    metricasRespaldo: '48,2% de conversión a visitas de perfil en Agosto (942 visitas de 1.953 cuentas).',
    planAccion: [
      'Enlace 1 en bio: Catálogo Mayorista Actualizado de Temporada Q4 (Flipbook interactivo).',
      'Enlace 2 en bio: Línea Directa de Pedidos B2B (WhatsApp Comercial con mensaje precargado).',
      'Enlace 3 en bio: Formulario de Codificación Rápida para Puntos de Venta y Supermercados.',
      'Copywriting: Incluir siempre en el copy de los reels más vistos un llamado explícito: "Revisa el enlace de nuestra bio para cotizar en 1 clic".',
    ],
    kpisObjetivo: 'Alcanzar >150 clics mensuales en el enlace de la bio y +30 consultas comerciales.',
    categoria: 'Conversión Bio',
    accentColor: 'text-[#16A34A]',
    badge: 'Monetización Inmediata',
  },
  {
    id: 4,
    numero: '04',
    titulo: 'Ajustar los Días y Horarios de Programación según la Data Real',
    diagnostico:
      'Las estadísticas de agosto revelan que los picos de mayor actividad de la audiencia se concentran en Días pico: Lunes, Jueves y Domingo, con una Franja horaria estelar de 6:00 PM a 9:00 PM.',
    oportunidadMejora:
      'Programar las piezas clave (Reels de logística y carruseles comerciales) para salir entre 5:30 PM y 6:30 PM de esos tres días específicos, capturando la curva de mayor atención cuando los decisores comerciales y clientes revisan sus teléfonos al finalizar la jornada laboral.',
    metricasRespaldo: 'Lunes, Jueves y Domingos concentran picos superiores a 94/100 en actividad entre 18h y 21h.',
    planAccion: [
      'Slot Lunes 18:00h: Lanzamiento de Reel Logístico / Flota (arranque de semana comercial).',
      'Slot Jueves 18:00h: Carrusel de Trade Marketing / Góndola y Abastecimiento de fin de semana.',
      'Slot Domingo 18:30h: Reel de Cultura / Visión de equipo preparatorio para pedidos de la semana.',
      'Programación con 48h de antelación usando Meta Business Suite Planner.',
    ],
    kpisObjetivo: 'Maximizar el Thumbstop Rate y asegurar que el 70% de las vistas ocurran en las primeras 6 horas.',
    categoria: 'Horarios',
    accentColor: 'text-[#9333EA]',
    badge: 'Sincronización Algorítmica',
  },
  {
    id: 5,
    numero: '05',
    titulo: 'Apalancar el Pilar Ganador: Músculo Logístico y Rostro Operativo',
    diagnostico:
      'El Reel de descarga con montacargas fue el contenido #1 de agosto (2.400 vistas, 88 likes, 14 compartidos y 5 seguidores directos), mientras que el post de cultura/formación (Atiende Bonito) alcanzó 1.600 vistas. Ver el patio y el personal con equipo de seguridad genera confianza biológica inmediata.',
    oportunidadMejora:
      'Mantener una fórmula balanceada y probada en la parrilla de septiembre: 40% Operaciones/Almacén (contenedores, montacargas, flota), 30% Trade/Punto de Venta (mercaderistas en acción, anaqueles llenos) y 30% Cultura & Portafolio de Temporada (panes de jamón, charcutería y quesos).',
    metricasRespaldo: 'El Reel de montacargas representó el 27,6% de todas las vistas del mes y lideró captación de seguidores.',
    planAccion: [
      '40% Operaciones & Almacén: Descarga de contenedores, maniobras de montacargas, flota 5 AM y andenes.',
      '30% Trade & Punto de Venta: Mercaderistas en acción, anaqueles impecables, frenteo y rotación en retail.',
      '30% Cultura & Portafolio Q4: Especial de temporada (panes de jamón, quesos madurados, charcutería y capacitaciones como "Atiende Bonito").',
      'Estándar visual: Mostrar al personal operativo siempre uniformado y con equipo de protección personal (EPP).',
    ],
    kpisObjetivo: 'Garantizar que al menos 2 reels superen 2.500 visualizaciones orgánicas al mes.',
    categoria: 'Pilar Logístico',
    accentColor: 'text-[#0284C7]',
    badge: 'Pilar Estrella B2B',
  },
];

export const DEMOGRAFIA_B2B: DemographicData = {
  edades: [
    {
      rango: '35-44 años (Núcleo Gerencial)',
      porcentaje: 31.7,
      descripcion: 'Gerentes de compras, directores comerciales y dueños de supermercados con poder de firma.',
      color: '#0369A1',
    },
    {
      rango: '25-34 años (Compradores & Operaciones)',
      porcentaje: 27.9,
      descripcion: 'Jefes de trade marketing, coordinadores de supply chain y comerciantes emergentes.',
      color: '#38BDF8',
    },
    {
      rango: '45-54 años (Empresarios Consolidados)',
      porcentaje: 20.1,
      descripcion: 'Propietarios de cadenas mayoristas, distribuidores regionales y directivos.',
      color: '#16A34A',
    },
    {
      rango: '18-24 años (Personal Operativo)',
      porcentaje: 12.3,
      descripcion: 'Mercaderistas, estudiantes y personal de piso de ventas.',
      color: '#94A3B8',
    },
    {
      rango: '55+ años (Directorio / Asesores)',
      porcentaje: 8.0,
      descripcion: 'Socios fundadores y miembros de juntas directivas.',
      color: '#CBD5E1',
    },
  ],
  generos: [
    {
      tipo: 'Mujeres (63,3%)',
      porcentaje: 63.3,
      descripcion:
        'Decisión dual: lideran tanto la compra en el canal retail/hogar como las jefaturas de Trade Marketing, Compras y Categorías en supermercados.',
      color: '#EC4899',
    },
    {
      tipo: 'Hombres (36,7%)',
      porcentaje: 36.7,
      descripcion:
        'Concentración en roles de Dirección de Operaciones, Flota, Almacén, Distribución Mayorista y Propietarios de Negocios.',
      color: '#0284C7',
    },
  ],
  ciudades: [
    {
      ciudad: 'Gran Caracas (Distrito Capital & Miranda)',
      porcentaje: 30.0,
      sector: 'Sedes corporativas de supermercados, mayoristas y agencias de trade',
      relevanciaAds: 'Zona prioritaria #1 para pauta de generación de leads y cotizaciones B2B.',
    },
    {
      ciudad: 'Catia La Mar (La Guaira)',
      porcentaje: 17.3,
      sector: 'Puntos de venta clave, comercios locales y eje portuario',
      relevanciaAds: 'Alta familiaridad con la marca y cercanía a las operaciones de patio.',
    },
    {
      ciudad: 'Maiquetía (La Guaira)',
      porcentaje: 9.8,
      sector: 'Corredor comercial e infraestructura logística',
      relevanciaAds: 'Reconocimiento de la flota de distribución en calle.',
    },
    {
      ciudad: 'Caraballeda & La Guaira Centro',
      porcentaje: 12.0,
      sector: 'Canal tradicional, bodegones y autoservicios de playa/turismo',
      relevanciaAds: 'Demanda de productos de rotación rápida y temporada.',
    },
    {
      ciudad: 'Interior de Venezuela (Valencia, Maracay, Barquisimeto)',
      porcentaje: 26.7,
      sector: 'Distribuidores foráneos y cadenas regionales independientes',
      relevanciaAds: 'Expansión de codificación de marcas importadas.',
    },
    {
      ciudad: 'Internacional (España 1.5%, Colombia 0.6%, USA 0.5%)',
      porcentaje: 4.2,
      sector: 'Inversionistas, marcas aliadas y proveedores internacionales',
      relevanciaAds: 'Credibilidad institucional para alianzas de importación.',
    },
  ],
  cargosB2B: [
    { cargo: 'Gerentes de Compras / Jefes de Categoría Retail', porcentaje: 34, nivelDecision: 'Decisor Comercial' },
    { cargo: 'Directores de Trade Marketing & Mercadeo', porcentaje: 28, nivelDecision: 'Decisor Estratégico' },
    { cargo: 'Dueños de Supermercados, Bodegones & Autoservicios', porcentaje: 22, nivelDecision: 'Decisor Final' },
    { cargo: 'Supervisores de Almacén, Logística & Flota', porcentaje: 16, nivelDecision: 'Influenciador Operativo' },
  ],
};

export const CURVA_RETENCION_VIDEO: VideoRetentionPoint[] = [
  {
    segundo: 0,
    etiqueta: 'Inicio (0s)',
    retencionDavimar: 100,
    benchmarkB2B: 100,
    faseVideo: 'Hook (0-3s)',
    explicacion: '100% de impresiones inician el video en el feed/reels.',
    recomendacionAds: 'El gancho debe mostrar el dolor del PDV en los primeros 1.5 segundos con texto en pantalla.',
  },
  {
    segundo: 3,
    etiqueta: 'Gancho (3s - Hook Rate)',
    retencionDavimar: 68,
    benchmarkB2B: 54,
    faseVideo: 'Hook (0-3s)',
    explicacion: '68% de las personas continúan viendo después del segundo 3 (excelente retención frente al benchmark de 54%).',
    recomendacionAds: 'Indica que los títulos directos sobre "¿Por qué tu producto no rota en góndola?" capturan de inmediato al decisor.',
  },
  {
    segundo: 6,
    etiqueta: 'Planteamiento (6s)',
    retencionDavimar: 53,
    benchmarkB2B: 41,
    faseVideo: 'Problema PDV (3-10s)',
    explicacion: 'Disminución natural donde el usuario decide si el tema comercial es relevante para su negocio.',
    recomendacionAds: 'Eliminar introducciones corporativas lentas o logotipos animados al inicio.',
  },
  {
    segundo: 10,
    etiqueta: 'Quiebre de Atención (10s)',
    retencionDavimar: 44,
    benchmarkB2B: 32,
    faseVideo: 'Problema PDV (3-10s)',
    explicacion: 'Punto crítico donde los decisores ocupados hacen scroll si el contenido se vuelve monótono.',
    recomendacionAds: 'Introducir cambios de plano, zoom, subtítulos dinámicos o datos duros de rotación cada 2-3 segundos.',
  },
  {
    segundo: 15,
    etiqueta: 'Hold Rate B2B (15s)',
    retencionDavimar: 36,
    benchmarkB2B: 24,
    faseVideo: 'Solución / Metodología (10-25s)',
    explicacion: '36% de retención en el segundo 15 representa una audiencia altamente calificada (Lead Caliente).',
    recomendacionAds: 'Crear audiencias personalizadas (Custom Audiences) con usuarios que vieron más del 50% o 15s de estos videos.',
  },
  {
    segundo: 20,
    etiqueta: 'Desarrollo Técnico (20s)',
    retencionDavimar: 29,
    benchmarkB2B: 18,
    faseVideo: 'Solución / Metodología (10-25s)',
    explicacion: 'Muestra de la metodología de impulso en PDV y supervisión de góndola de @davimargroup.',
    recomendacionAds: 'Formato ideal para pauta de consideración (MOFU) con casos prácticos.',
  },
  {
    segundo: 30,
    etiqueta: 'Cierre y Llamado a la Acción (30s)',
    retencionDavimar: 22,
    benchmarkB2B: 12,
    faseVideo: 'Prueba / CTA B2B (25-45s)',
    explicacion: '22% llega al llamado a la acción final, casi duplicando el estándar B2B de 12%.',
    recomendacionAds: 'Insertar llamado a WhatsApp comercial claro: "Escríbenos para diagnosticar tu canal de venta".',
  },
];

export const MARCO_MEDICION_DEFINICIONES: MetricDefinition[] = [
  {
    codigo: 'CPM',
    nombre: 'Costo por Mil Impresiones (CPM B2B)',
    porQueImporta:
      'Indica cuánto cuesta impactar a 1.000 profesionales o tomadores de decisión en el sector retail/supermercados.',
    impactoPresupuesto:
      'Permite evitar subastas costosas afinando la segmentación geográfica (Caracas, La Guaira) e intereses profesionales.',
    formula: '(Gasto Total / Impresiones Totales) × 1.000',
    rangoEsperadoB2B: '$2.00 - $3.80 USD',
    colorPastel: '#93C5FD',
    criterioPreAds: 'Validar qué piezas orgánicas tuvieron mayor alcance natural sin costo por cada 1.000 personas.',
    criterioPostAds: 'Monitorear que el CPM no supere $4.50 USD. Si sube, ampliar la audiencia o refrescar el creativo.',
  },
  {
    codigo: 'HOOK_RATE',
    nombre: 'Thumbstop / Hook Rate (Retención a los 3s)',
    porQueImporta:
      'Mide el porcentaje de personas que detuvieron su scroll y vieron los primeros 3 segundos de video.',
    impactoPresupuesto:
      'Si el Hook Rate es bajo (<45%), se pierde presupuesto antes de que el usuario entienda qué ofrece Davimar.',
    formula: '(Reproducciones de 3 segundos / Impresiones Totales) × 100',
    rangoEsperadoB2B: '58% - 72%',
    colorPastel: '#F472B6',
    criterioPreAds: 'Seleccionar únicamente los videos orgánicos con retención > 60% en los primeros 3 segundos.',
    criterioPostAds: 'Pausar creativos con Hook Rate menor al 50% durante las primeras 72 horas de pauta.',
  },
  {
    codigo: 'CTR_LINK',
    nombre: 'Click-Through Rate Saliente Único (CTR)',
    porQueImporta:
      'Mide el interés real de la persona en conocer los servicios de impulso en PDV, catálogo o contactar por WhatsApp.',
    impactoPresupuesto:
      'A mayor CTR, el algoritmo de Meta otorga mejor puntuación de relevancia, abaratando el costo por clic.',
    formula: '(Clics en Enlace Únicos / Impresiones) × 100',
    rangoEsperadoB2B: '1.40% - 2.80%',
    colorPastel: '#6EE7B7',
    criterioPreAds: 'Evaluar la tasa histórica de visitas al perfil (en Julio fue 53,5%) como prueba de curiosidad comercial.',
    criterioPostAds: 'Exigir CTR > 1.8% en anuncios de catálogo y > 2.2% en anuncios con botón de WhatsApp.',
  },
  {
    codigo: 'CPL_B2B',
    nombre: 'Costo por Lead / Cotización B2B (CPL)',
    porQueImporta:
      'Mide exactamente cuánto dinero cuesta conseguir los datos de contacto de un comprador o dueño de negocio listo para cotizar.',
    impactoPresupuesto:
      'Es la métrica reina del retorno comercial: permite saber con precisión cuántos leads se generan por cada $100 invertidos.',
    formula: 'Gasto Total en Campaña / Total de Leads Calificados Recibidos',
    rangoEsperadoB2B: '$6.00 - $12.00 USD',
    colorPastel: '#FCD34D',
    criterioPreAds: 'Tener preparado el catálogo de temporada y el guión de WhatsApp para no desperdiciar leads.',
    criterioPostAds: 'Mantener CPL por debajo de $12 USD. Un CPL mayor indica que la oferta o el formulario tienen demasiada fricción.',
  },
  {
    codigo: 'TASA_CONV_PERFIL',
    nombre: 'Tasa de Conversión a Perfil (Visitas / Alcance)',
    porQueImporta:
      'Indica la fuerza del gancho orgánico para llevar al usuario a auditar el perfil institucional de @davimargroup.',
    impactoPresupuesto:
      'Una tasa superior al 40% (en Julio fue 53,5%) confirma que el perfil está listo para convertir tráfico pago.',
    formula: '(Visitas al Perfil / Cuentas Alcanzadas) × 100',
    rangoEsperadoB2B: '35% - 55%',
    colorPastel: '#A78BFA',
    criterioPreAds: 'Revisar que la biografía tenga menú interactivo con enlaces a Catálogo, Codificación y WhatsApp.',
    criterioPostAds: 'Comprobar si las campañas de reconocimiento (TOFU) elevan las visitas diarias al perfil a más de 100.',
  },
  {
    codigo: 'ROAS_PIPELINE',
    nombre: 'Retorno en Pipeline B2B (ROAS / ROI)',
    porQueImporta:
      'En servicios B2B (impulso en PDV, logística, distribución), 1 solo contrato cerrado al mes amortiza toda la inversión publicitaria.',
    impactoPresupuesto:
      'Valida que la inversión en Meta Ads no es un gasto de redes, sino una máquina predecible de facturación corporativa.',
    formula: '(Valor Total de Contratos Cerrados / Inversión Publicitaria) × 100',
    rangoEsperadoB2B: '400% - 1200% (4x a 12x)',
    colorPastel: '#86EFAC',
    criterioPreAds: 'Calcular el ticket promedio de un contrato mensual ($1.500 - $3.000 USD).',
    criterioPostAds: 'Hacer seguimiento semanal del pipeline comercial: leads -> cotizaciones enviadas -> cierres de contrato.',
  },
];

// Campañas estructuradas con el enfoque Always-On Brand Awareness + Conversión
export const ESTRUCTURA_CAMPANAS: CampaignTier[] = [
  {
    etapa: 'TOFU - Descubrimiento B2B',
    siglas: 'TOFU',
    nombreFase: 'Tope del Embudo (Descubrimiento & Visibilidad)',
    significadoSiglas: 'Top of the Funnel (La parte superior o más ancha del embudo de ventas).',
    queEs:
      'Es la etapa de descubrimiento inicial. Aquí nos dirigimos a personas que aún no conocen a @davimargroup o que no nos siguen, mostrándoles la potencia, el tamaño y la capacidad operativa de la empresa.',
    paraQueSirve:
      'Sirve para romper el estancamiento de seguidores, captar la atención de directores de compras, jefes de retail y comerciantes que buscan proveedores serios, y "llenar el tanque" con público nuevo todos los días.',
    queQueremosLograr:
      'Generar reconocimiento de marca masivo, lograr que miles de personas vean los videos de montacargas y logística, y despertar curiosidad para que visiten nuestro perfil de Instagram.',
    tipoCampana: 'Always-On (Reconocimiento Continuo)',
    objetivoMeta: 'Alcance, Reconocimiento de Marca & Reproducciones de Video (ThruPlay)',
    audiencias: [
      'Segmentación Geográfica: Gran Caracas (30%), La Guaira (Catia La Mar, Maiquetía, Caraballeda) y principales corredores comerciales.',
      'Intereses B2B: Retail, Supermercados, Trade Marketing, Alimentos y Bebidas, Gestión de la Cadena de Suministro.',
      'Datos Demográficos: Hombres y Mujeres de 25 a 54 años (Núcleo decisor), Administradores de Páginas Comerciales.',
      'Públicos Similares (Lookalike 1% y 2%) basados en los 2.421 seguidores actuales y personas que interactuaron con el perfil.',
    ],
    formatoCreativo:
      'Reels de alto impacto operativo (15 a 30 seg): Descarga de contenedores con montacargas en patio, flota saliendo a las 5:00 AM y activaciones con marcas líderes (Alimentos Mary).',
    presupuestoSugeridoPct: 40,
    kpisClave: ['CPM < $3.00 USD', 'Hook Rate 3s > 60%', 'Costo por ThruPlay 15s < $0.02', 'Cuentas Nuevas Alcanzadas'],
    ejemploCopy:
      'En @davimargroup la logística no se detiene. Desde las 5:00 AM nuestro equipo y flota garantizan que tus productos estén siempre impecables y disponibles en góndola. 60 años impulsando el retail venezolano.',
    ganchoVisual:
      'Video dinámico con toma aérea o primer plano de montacargas levantando paleta y texto en pantalla: "¿Tu marca tiene el respaldo logístico que exige el mercado?"',
    recomendacionEspecial:
      'Mantener esta campaña ACTIVA DE FORMA CONTINUA (Always-On) los 365 días para romper la meseta de los 2.421 seguidores y alimentar constantemente el embudo.',
  },
  {
    etapa: 'MOFU - Consideración & Solución PDV',
    siglas: 'MOFU',
    nombreFase: 'Medio del Embudo (Consideración & Interés)',
    significadoSiglas: 'Middle of the Funnel (La parte media del embudo de ventas).',
    queEs:
      'Es la etapa donde el usuario ya sabe quién es Davimar Group y ahora evalúa cómo nuestros servicios pueden solucionar sus dolores comerciales en el punto de venta (rotación, inventario, presencia en anaquel).',
    paraQueSirve:
      'Sirve para educar a los gerentes de compras y dueños de marcas con casos de éxito reales, mostrándoles la diferencia entre tener un distribuidor común y contar con el respaldo de impulso y mercaderismo de Davimar.',
    queQueremosLograr:
      'Demostrar autoridad y generar confianza comercial para que el prospecto descargue el catálogo, revise el checklist de supervisión de góndolas o guarde el contacto para cotizar.',
    tipoCampana: 'Conversión & Clientes Potenciales',
    objetivoMeta: 'Tráfico Cualificado al Catálogo Digital & Clientes Potenciales (Formularios Instantáneos)',
    audiencias: [
      'Audiencia Personalizada de Video Viewers: Usuarios que vieron más del 50% de los videos de la campaña Always-On.',
      'Engaged Audience: Personas que visitaron el perfil de @davimargroup o interactuaron con publicaciones en los últimos 90 días.',
      'Visitantes de la web / Catálogo interactivo de temporada.',
    ],
    formatoCreativo:
      'Carruseles de Casos de Éxito y Soluciones B2B: "Caso Real: Cómo aumentamos la rotación en góndola un 34%", Checklist de supervisión de mercaderistas y "5 razones para tercerizar tu impulso en PDV con Davimar".',
    presupuestoSugeridoPct: 35,
    kpisClave: ['CTR Saliente Único > 1.8%', 'Costo por Clic Saliente (CPC < $0.25)', 'Descargas del Catálogo / Flipbook'],
    ejemploCopy:
      '¿Tus productos sufren por falta de rotación o quiebres de inventario en anaquel? Con el servicio de impulso y mercaderismo de Davimar, tu marca cuenta con supervisión en tiempo real y reporte fotográfico diario. Solicita hoy nuestro dossier comercial.',
    ganchoVisual:
      'Carrusel con comparativa de góndola desordenada vs. góndola frenteada y rotulada por mercaderistas de Davimar.',
    recomendacionEspecial:
      'Ideal para lanzar en Septiembre y Octubre preparando la temporada alta navideña de consumo masivo.',
  },
  {
    etapa: 'BOFU - Conversión & WhatsApp B2B',
    siglas: 'BOFU',
    nombreFase: 'Fondo del Embudo (Decisión & Cierre de Venta)',
    significadoSiglas: 'Bottom of the Funnel (La parte inferior o final del embudo donde se cierran los negocios).',
    queEs:
      'Es la etapa de cierre directo. Nos dirigimos a los prospectos más calientes: aquellos que ya vieron varios videos, visitaron el perfil, guardaron publicaciones o interactuaron recientemente.',
    paraQueSirve:
      'Sirve para transformar todo el interés acumulado en conversaciones comerciales reales por WhatsApp Business y cotizaciones listas para firma.',
    queQueremosLograr:
      'Hacer que el cliente potencial dé el paso final y escriba directamente a un asesor comercial de Davimar para solicitar precios mayoristas o contratar el servicio de impulso.',
    tipoCampana: 'Retargeting de Alta Intención',
    objetivoMeta: 'Mensajes Directos a WhatsApp Business & Formularios de Cotización Comercial',
    audiencias: [
      'Retargeting Caliente: Personas que guardaron publicaciones comerciales, abrieron formularios o hicieron clic en el enlace de la bio en los últimos 30 días.',
      'Lista de Clientes Potenciales y Contactos Comerciales Inactivos (Base de datos CRM importada a Meta).',
    ],
    formatoCreativo:
      'Anuncios Click-to-WhatsApp directo con oferta irresistible de valor: "Agenda un Diagnóstico Gratuito de tu Góndola en Caracas y La Guaira" o "Solicita Cotización Mayorista para Q4".',
    presupuestoSugeridoPct: 25,
    kpisClave: ['CPL Calificado < $10.00 USD', 'Conversaciones B2B Iniciadas en WhatsApp', 'Tasa de Cotización Comercial (>20%)'],
    ejemploCopy:
      '¿Listo para maximizar tus ventas en punto de venta este cierre de año? Habla directamente con uno de nuestros directores comerciales por WhatsApp y recibe una propuesta de impulso a la medida de tus rutas.',
    ganchoVisual:
      'Tarjeta limpia de WhatsApp con botón verde destacado y texto: "Chatea en 1 clic con nuestro asesor corporativo".',
    recomendacionEspecial:
      'Conectar este anuncio a un flujo de WhatsApp Business automatizado que responda en menos de 5 minutos.',
  },
];

// Nubes informativas para cada sección del dashboard
export const NUBES_INFORMATIVAS: Record<string, InformativeCloudData> = {
  vistas_descubrimiento: {
    id: 'vistas_descubrimiento',
    titulo: 'Visualizaciones & Tasa de Descubrimiento (No Seguidores)',
    queEs:
      'Muestra el volumen total de impactos generados y cuántas de esas personas NO seguían a @davimargroup antes de ver el contenido.',
    porQueImporta:
      'Sin un porcentaje saludable de no seguidores (>30%), la cuenta se queda atrapada hablándole a las mismas personas y se estanca el crecimiento de la comunidad.',
    antesDePagarAds:
      'Evaluar que la cuenta tenga al menos un 30% de descubrimiento orgánico. En @davimargroup promedió 34% en el cuatrimestre, lo que valida que el contenido gusta a personas que no conocen la marca.',
    despuesDeActivarAds:
      'Con la campaña Always-On activa, la proporción de no seguidores debe subir al 75%-85%, rompiendo definitivamente el techo de los 2.421 seguidores.',
    metaRecomendada: 'Superar 60.000 visualizaciones mensuales combinando orgánico + pauta Always-On.',
  },
  visitas_perfil_conversion: {
    id: 'visitas_perfil_conversion',
    titulo: 'Visitas al Perfil & Tasa de Curiosidad Comercial',
    queEs:
      'Mide qué porcentaje de las cuentas alcanzadas decidieron hacer clic en el nombre de @davimargroup para explorar la biografía, el catálogo y las publicaciones.',
    porQueImporta:
      'Es el termómetro de la intención comercial: en B2B nadie visita un perfil si el contenido no despertó interés en contratar servicios o comprar productos.',
    antesDePagarAds:
      'En Julio, la tasa fue de un extraordinario 53,5% (919 visitas de 1.718 alcanzados). Esto demostró que el perfil tiene una capacidad de atracción magnética antes de pagar pauta.',
    despuesDeActivarAds:
      'Revisar semanalmente que las visitas al perfil se traduzcan en clics en el enlace de la bio y mensajes de WhatsApp. Si hay muchas visitas pero pocos mensajes, ajustar los enlaces de la biografía.',
    metaRecomendada: 'Mantener la tasa de visita al perfil por encima del 35% del alcance total.',
  },
  estancamiento_seguidores: {
    id: 'estancamiento_seguidores',
    titulo: 'Diagnóstico del Estancamiento en 2.421 Seguidores',
    queEs:
      'Análisis técnico de por qué la comunidad se frenó en 2.421 seguidores tras meses sin variación.',
    porQueImporta:
      'El algoritmo orgánico de Instagram solo muestra publicaciones al 5%-10% de los seguidores existentes. Sin un motor de pauta activa y con la caída de frecuencia de Julio/Agosto, el crecimiento orgánico llegó a su techo natural.',
    antesDePagarAds:
      'Entender que 2.421 seguidores B2B cualificados valen mucho más que 20.000 cuentas falsas o no decisoras. El 79,7% de esta base tiene entre 25 y 54 años con poder de compra.',
    despuesDeActivarAds:
      'La campaña Always-On de Reconocimiento inyectará tráfico frío diario cualificado, reactivando el crecimiento hacia los 3.500 - 5.000 seguidores en Q4.',
    metaRecomendada: 'Sumar +250 a +400 seguidores comerciales cualificados al mes con pauta activa.',
  },
  retencion_video_hook: {
    id: 'retencion_video_hook',
    titulo: 'Retención de Video, Hook Rate (3s) y Hold Rate',
    queEs:
      'Mide segundo a segundo qué porcentaje de personas permanecen viendo los Reels de logística y punto de venta.',
    porQueImporta:
      'Determina la eficiencia publicitaria: si un video pierde a la gente en el segundo 2, Meta cobrará caro el CPM y nadie escuchará la propuesta de valor.',
    antesDePagarAds:
      'Los Reels de @davimargroup registran un Hook Rate del 68% (vs 54% estándar B2B) y 36% en el segundo 15. Esto garantiza que no se quemará dinero al promocionarlos.',
    despuesDeActivarAds:
      'Monitorear en Meta Ads Manager que el Costo por ThruPlay (vista de 15s) sea inferior a $0.02 USD y que el Hook Rate no baje de 55%.',
    metaRecomendada: 'Hook Rate > 65% en anuncios de video y costo por ThruPlay < $0.018 USD.',
  },
  demografia_geografia_b2b: {
    id: 'demografia_geografia_b2b',
    titulo: 'Radiografía Demográfica & Geográfica de la Audiencia',
    queEs:
      'Distribución de género (63,3% mujeres), edad (79,7% entre 25-54 años) y ubicación (Gran Caracas 30%, La Guaira 39%).',
    porQueImporta:
      'Permite configurar los conjuntos de anuncios de Meta Ads con precisión quirúrgica, evitando gastar dinero en zonas donde Davimar no tiene rutas de entrega.',
    antesDePagarAds:
      'Validar que la audiencia actual coincide con los tomadores de decisión en supermercados, trade marketing y distribución.',
    despuesDeActivarAds:
      'Configurar exclusiones geográficas para concentrar el presupuesto 100% en el eje Gran Caracas - La Guaira y principales ciudades comerciales.',
    metaRecomendada: 'Concentrar el 80% del presupuesto de conversión en Gran Caracas y La Guaira.',
  },
  horarios_pico_pauta: {
    id: 'horarios_pico_pauta',
    titulo: 'Momentos Óptimos & Programación de Pauta (Dayparting)',
    queEs:
      'Identificación de los días (Lunes, Miércoles, Domingos) y horarios (6:00 PM a 9:00 PM) de mayor actividad y atención de los decisores.',
    porQueImporta:
      'Publicar o encender anuncios en horarios muertos desperdicia impresiones. Los gerentes y comerciantes revisan Instagram al cerrar turno o planificar la semana.',
    antesDePagarAds:
      'Sincronizar las publicaciones orgánicas de mayor peso comercial entre 5:30 PM y 6:30 PM para montarse en la ola ascendente de tráfico.',
    despuesDeActivarAds:
      'En campañas de conversión con presupuesto diario cerrado, activar la entrega programada para intensificar la puja entre las 12:00 PM y las 9:00 PM.',
    metaRecomendada: 'Alinear el equipo de ventas por WhatsApp para atender prospectos en horario pico.',
  },
};

// Herramientas y Tips recomendados para Septiembre, Octubre y Noviembre
export const HERRAMIENTAS_CRECIMIENTO_Q4: StrategicToolItem[] = [
  {
    nombre: 'Meta Ads Manager (Business Suite Profesional)',
    categoria: 'Pauta Digital',
    descripcion:
      'Herramienta oficial de pauta de Meta. Es fundamental EVITAR el botón azul "Promocionar publicación" de la app de Instagram, ya que no permite segmentar por cargos, ni crear públicos personalizados de video viewers, ni optimizar hacia formularios de leads.',
    impactoB2B: 'Permite reducir el costo por lead hasta en un 55% frente a la promoción básica.',
    recomendacionUso: 'Configurar todas las campañas desde el administrador comercial con píxel y eventos de conversión.',
  },
  {
    nombre: 'ManyChat (Automatización de DMs & Comentarios)',
    categoria: 'Automatización',
    descripcion:
      'Software oficial de automatización para Instagram. Permite que cuando un usuario comente en un Reel la palabra "CATÁLOGO" o "IMPULSO", el sistema le envíe de inmediato el PDF y enlace a WhatsApp por mensaje directo.',
    impactoB2B: 'Multiplica por 4 el engagement y captura prospectos calificados en menos de 2 segundos.',
    recomendacionUso: 'Activar en los Reels de Montacargas, Casos de Éxito de Alimentos Mary y Checklists de Góndola.',
  },
  {
    nombre: 'WhatsApp Business API + Catálogo de Temporada Q4',
    categoria: 'Comercial',
    descripcion:
      'Configuración de cuenta WhatsApp Business corporativa con mensaje de bienvenida segmentado, catálogo con fotos de alta resolución de productos importados y soluciones de impulso en PDV, más etiquetas de prospectos (Lead Nuevo, Cotización Enviada, Cliente Cerrado).',
    impactoB2B: 'Reduce el ciclo de cierre comercial de 14 días a menos de 72 horas.',
    recomendacionUso: 'Vincularlo como destino directo de los anuncios BOFU con mensaje predeterminado.',
  },
  {
    nombre: 'CapCut / Premiere con Subtítulos Dinámicos',
    categoria: 'Edición y Gancho',
    descripcion:
      'Herramienta de edición para insertar subtítulos animados de alto contraste, cortes de zoom cada 2.5 segundos y ganchos de texto en los primeros 1.5 segundos de cada video de logística.',
    impactoB2B: 'Eleva el Hook Rate por encima del 65%, capturando a decisores que ven videos sin audio en la oficina.',
    recomendacionUso: 'Aplicar a todas las tomas de montacargas, andenes y entrevistas de capital humano.',
  },
  {
    nombre: 'Metricool / Meta Planner (Programación Estratégica)',
    categoria: 'Analítica',
    descripcion:
      'Plataforma de monitoreo y programación para asegurar la frecuencia fija de 2 Reels semanales, 2 Carruseles técnicos y 3 Historias diarias en las ventanas horarias óptimas (Lunes, Miércoles y Domingos a las 6:00 PM).',
    impactoB2B: 'Elimina las lagunas de publicación que provocaron la caída de volumen en Julio/Agosto.',
    recomendacionUso: 'Programar la parrilla mensual con 1 semana de anticipación.',
  },
];

// Matriz de calor para días y horas
export const MAPA_CALOR_DIAS_HORAS: HeatmapCell[] = [];

const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

diasSemana.forEach((dia) => {
  for (let hora = 0; hora < 24; hora++) {
    let actividad = 10;
    let esOptimo = false;
    let comentario = 'Baja actividad';

    const esDiaLaboral = dia === 'Lunes' || dia === 'Martes' || dia === 'Miércoles' || dia === 'Jueves' || dia === 'Viernes';
    const esDiaEstrella = dia === 'Lunes' || dia === 'Jueves' || dia === 'Domingo' || dia === 'Miércoles';

    if (esDiaLaboral) {
      if (hora >= 7 && hora <= 9) {
        actividad = esDiaEstrella ? 85 : 70;
        esOptimo = true;
        comentario = 'Franja Matutina B2B: Revisión de agenda, rutas de despacho y planeación comercial.';
      } else if (hora >= 12 && hora <= 14) {
        actividad = esDiaEstrella ? 90 : 76;
        esOptimo = true;
        comentario = 'Franja Mediodía: Pausa de almuerzo y consulta de tendencias en retail y supermercados.';
      } else if (hora >= 18 && hora <= 21) {
        actividad = esDiaEstrella ? 98 : 82;
        esOptimo = true;
        comentario = 'Ventana Dorada B2B (Pico Confirmado en Agosto 18h-21h): Cierre de jornada, mayor atención y consumo de video en feed.';
      } else if (hora >= 22 && hora <= 23) {
        actividad = 45;
        comentario = 'Horario nocturno de consumo personal ligero.';
      } else if (hora >= 10 && hora <= 11) {
        actividad = 65;
        comentario = 'Reuniones de piso de ventas, supervisión de inventario y compras.';
      } else if (hora >= 15 && hora <= 17) {
        actividad = 60;
        comentario = 'Operaciones de almacén, picking y preparación de despachos.';
      } else {
        actividad = 15;
      }
    } else {
      // Fin de semana: Domingo pico
      if (dia === 'Domingo' && hora >= 18 && hora <= 22) {
        actividad = 94;
        esOptimo = true;
        comentario = 'Domingo Noche: Planificación de compras semanales de dueños de comercios y gerentes.';
      } else if (hora >= 11 && hora <= 14) {
        actividad = 38;
        comentario = 'Consumo personal/familiar de fin de semana.';
      } else {
        actividad = 12;
      }
    }

    MAPA_CALOR_DIAS_HORAS.push({
      dia,
      hora,
      actividad,
      esOptimo,
      comentario,
    });
  }
});
