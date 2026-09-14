export interface TargetCountry {
  id: string;
  nombre: string;
  bandera: string;
  region: 'Latam' | 'Europa';
  idiomaPrincipal: string;
  sectoresClaveExportacion: string[];
  perfilMarcasObjetivo: string;
  dolorPrincipalMarca: string;
  propuestaValorDavimar: string;
  canalesPublicitariosRecomendados: string[];
  cpmEstimadoUSD: number;
  cplEstimadoUSD: number;
  probabilidadExito: 'Muy Alta' | 'Alta' | 'Media-Alta';
  probabilidadExitoPct: number;
  ganchoAnuncio: string;
  copyAnuncio: string;
  camarasComercioAliadas: string[];
}

export interface InternationalBuyerPersona {
  id: string;
  cargo: string;
  nivelDecision: 'Decisor Final' | 'Evaluador Técnico' | 'Recomendador Clave';
  dondeEncontrarlo: string[];
  objetivosPrincipales: string[];
  miedosYObjeciones: string[];
  mensajeClaveDeAtraccion: string;
  formatoContenidoPreferido: string;
  llamadoAccionEfectivo: string;
}

export interface TrustContentPillar {
  id: string;
  titulo: string;
  subtitulo: string;
  iconoNombre: string;
  porQueGeneraConfianza: string;
  ejemplosContenido: string[];
  nivelImpacto: 'Crítico (Sin esto no responden)' | 'Muy Alto (Acelera la reunión)' | 'Diferenciador Competitivo';
  comoProducirlo: string;
}

export interface WhatBrandsLookFor {
  id: string;
  pilar: string;
  descripcion: string;
  preguntaQueSeHaceLaMarca: string;
  respuestaYRespaldoDavimar: string;
  requisitoIndispensable: string;
}

export const PAISES_OBJETIVO_INTERNACIONAL: TargetCountry[] = [
  {
    id: 'colombia',
    nombre: 'Colombia',
    bandera: '🇨🇴',
    region: 'Latam',
    idiomaPrincipal: 'Español',
    sectoresClaveExportacion: ['Alimentos & Snacks', 'Confitería', 'Bebidas & Lácteos', 'Cuidado del Hogar', 'Cosméticos & Aseo'],
    perfilMarcasObjetivo: 'Fabricantes medianos y grandes del Valle del Cauca, Antioquia, Cundinamarca y Santander con saturación en el mercado local y necesidad de expansión fronteriza.',
    dolorPrincipalMarca: 'Temor a la logística transfronteriza, incertidumbre sobre la rotación real en el PDV venezolano y desconfianza en la cobranza en divisas.',
    propuestaValorDavimar: 'Canal de distribución terrestre directo, presencia en cadenas de supermercados venezolanas, reporte de sell-out en tiempo real y solidez en liquidación cambiaria.',
    canalesPublicitariosRecomendados: ['Meta Ads (Bogotá, Medellín, Cali, Bucaramanga)', 'LinkedIn InMail B2B (Export Managers)'],
    cpmEstimadoUSD: 3.40,
    cplEstimadoUSD: 16.50,
    probabilidadExito: 'Muy Alta',
    probabilidadExitoPct: 88,
    ganchoAnuncio: '¿Fabricas alimentos o productos de consumo en Colombia y quieres colocar tu marca en los principales supermercados de Venezuela?',
    copyAnuncio: 'Davimar Group es tu socio operador en Venezuela: almacenaje de alta densidad, flota propia y un equipo de mercaderistas dedicados que garantizan que tu producto rote desde el día uno en góndola. Hablemos de distribución segura.',
    camarasComercioAliadas: ['Cámara Colombo Venezolana', 'ProColombia', 'ANDI (Asociación Nacional de Industriales)'],
  },
  {
    id: 'espana',
    nombre: 'España',
    bandera: '🇪🇸',
    region: 'Europa',
    idiomaPrincipal: 'Español',
    sectoresClaveExportacion: ['Aceites de Oliva & Gourmet', 'Vinos & Licores', 'Conservas & Embutidos', 'Dermocosmética', 'Nutrición Infantil'],
    perfilMarcasObjetivo: 'Empresas agroalimentarias y bodegas de Madrid, Cataluña, Andalucía, Galicia y Valencia que buscan abrir canales de exportación a mercados hispanohablantes con alto consumo per cápita.',
    dolorPrincipalMarca: 'Desconocimiento del marco regulatorio venezolano, trámites aduaneros complejos y miedo a que su marca pierda prestigio por mala manipulación.',
    propuestaValorDavimar: 'Gestión integral de importación, cadena de frío y almacenamiento controlado, colocación en bodegones premium y cadenas de retail con supervisión visual estricta de planograma.',
    canalesPublicitariosRecomendados: ['LinkedIn Ads (Madrid, Barcelona, Valencia, Sevilla)', 'Meta Ads B2B (Directores Comerciales de Alimentación)'],
    cpmEstimadoUSD: 6.20,
    cplEstimadoUSD: 28.00,
    probabilidadExito: 'Alta',
    probabilidadExitoPct: 82,
    ganchoAnuncio: 'Lleva tus productos gourmet y de consumo español al mercado venezolano con un distribuidor certificado y con 60 años de respaldo.',
    copyAnuncio: 'En Davimar Group cuidamos el posicionamiento de tu marca española como si fuera nuestra. Garantizamos despacho puntual, impulso en tienda y trazabilidad total desde el puerto hasta el anaquel.',
    camarasComercioAliadas: ['Cámara Venezolano Española de Industria y Comercio (CAVENVE)', 'ICEX España', 'FIAB'],
  },
  {
    id: 'mexico',
    nombre: 'México',
    bandera: '🇲🇽',
    region: 'Latam',
    idiomaPrincipal: 'Español',
    sectoresClaveExportacion: ['Salsas, Sazonadores & Enlatados', 'Snacks & Golosinas', 'Bebidas No Alcohólicas', 'Cuidado Personal', 'Plásticos & Empaques'],
    perfilMarcasObjetivo: 'Grupos industriales de Monterrey, Guadalajara, CDMX y Puebla con alta capacidad fabril que buscan diversificar sus exportaciones hacia el Caribe y el norte de Suramérica.',
    dolorPrincipalMarca: 'Barreras logísticas marítimas, falta de socios locales con suficiente solvencia de compra y ausencia de fuerza de ventas profesional en góndola.',
    propuestaValorDavimar: 'Recepción portuaria directa en La Guaira y Puerto Cabello, almacenes centrales con montacargas de alta velocidad y acuerdos comerciales activos con cadenas retail.',
    canalesPublicitariosRecomendados: ['Meta Ads (Nuevo León, Jalisco, CDMX, Edo. Mex)', 'LinkedIn Ads (Export & Trade Latam)'],
    cpmEstimadoUSD: 4.10,
    cplEstimadoUSD: 21.00,
    probabilidadExito: 'Muy Alta',
    probabilidadExitoPct: 85,
    ganchoAnuncio: 'Marcas líderes de México: expandan su distribución a Venezuela con logística de clase mundial y mercaderismo profesional.',
    copyAnuncio: 'Davimar Group ofrece el músculo operativo que tu empresa necesita: descarga eficiente de contenedores, custodia impecable de inventario y ejecución de trade marketing en puntos de venta estratégicos.',
    camarasComercioAliadas: ['Cámara de Comercio México-Venezuela', 'Consejo Empresarial Mexicano de Comercio Exterior (COMCE)'],
  },
  {
    id: 'chile',
    nombre: 'Chile',
    bandera: '🇨🇱',
    region: 'Latam',
    idiomaPrincipal: 'Español',
    sectoresClaveExportacion: ['Vinos & Espumantes', 'Frutos Secos & Deshidratados', 'Conservas de Mariscos & Pescados', 'Lácteos Especializados'],
    perfilMarcasObjetivo: 'Exportadoras vitivinícolas y agroindustriales de Santiago, Valle Central y Biobío que buscan socios comerciales de largo plazo con excelente reputación.',
    dolorPrincipalMarca: 'Protección de la cadena de temperatura en productos delicados (vinos/aceites) y cumplimiento de fechas de vencimiento en tránsito marítimo.',
    propuestaValorDavimar: 'Almacenamiento protegido, estricto sistema FEFO (First Expired, First Out) y distribución enfocada en supermercados y canal HoReCa de alta categoría.',
    canalesPublicitariosRecomendados: ['LinkedIn Ads B2B (Export Managers Viñas & Alimentos)', 'Meta Ads segmentado por Directores de Negocios Internacionales'],
    cpmEstimadoUSD: 4.80,
    cplEstimadoUSD: 24.50,
    probabilidadExito: 'Alta',
    probabilidadExitoPct: 78,
    ganchoAnuncio: '¿Tu bodega o empresa de alimentos en Chile busca distribución confiable y posicionamiento premium en Venezuela?',
    copyAnuncio: 'Davimar Group combina 60 años de tradición empresarial con tecnología logística de vanguardia. Cuidamos cada botella y cada empaque hasta las mejores góndolas del país.',
    camarasComercioAliadas: ['ProChile', 'Cámara Chileno Venezolana de Comercio'],
  },
  {
    id: 'italia',
    nombre: 'Italia',
    bandera: '🇮🇹',
    region: 'Europa',
    idiomaPrincipal: 'Italiano / Inglés / Español',
    sectoresClaveExportacion: ['Pastas, Salsas & Pesto', 'Café & Máquinas Espresso', 'Quesos Madurados & Embutidos', 'Vinos Italianos (Prosecco, Chianti)', 'Panettone & Dulcería Navideña'],
    perfilMarcasObjetivo: 'Productores del norte y sur de Italia (Lombardía, Véneto, Emilia-Romaña, Campania) atraídos por la histórica y masiva comunidad italo-venezolana con alta lealtad a productos "Made in Italy".',
    dolorPrincipalMarca: 'Miedo a la burocracia aduanera, barrera idiomática y necesidad de un distribuidor que entienda el valor del patrimonio gastronómico italiano.',
    propuestaValorDavimar: 'Vínculo cultural histórico, interlocución bilingüe, almacenamiento óptimo y colocación directa en la amplia red de bodegones, panaderías italianas y supermercados líderes.',
    canalesPublicitariosRecomendados: ['LinkedIn Ads (Milano, Bologna, Napoli, Roma)', 'Meta Ads B2B Internacional en Italiano e Inglés'],
    cpmEstimadoUSD: 6.80,
    cplEstimadoUSD: 32.00,
    probabilidadExito: 'Muy Alta',
    probabilidadExitoPct: 86,
    ganchoAnuncio: 'Porta l’eccellenza del "Made in Italy" nel mercato venezuelano con un partner logistico solido e affidabile.',
    copyAnuncio: 'Davimar Group è il tuo distributore strategico in Venezuela: magazzini moderni, gestione doganale, posizionamento premium nei supermercati e rispetto assoluto della qualità italiana. Richiedi una call di presentazione aziendale.',
    camarasComercioAliadas: ['Cámara de Comercio Venezolano-Italiana (CAVENIT)', 'Italian Trade Agency (ICE)'],
  },
  {
    id: 'portugal',
    nombre: 'Portugal',
    bandera: '🇵🇹',
    region: 'Europa',
    idiomaPrincipal: 'Portugués / Español',
    sectoresClaveExportacion: ['Conservas de Pescado (Sardinas/Atún)', 'Aceite de Oliva & Vinos de Oporto', 'Galletas & Panadería Tradicional', 'Higiene & Cuidado Personal'],
    perfilMarcasObjetivo: 'Empresas de Lisboa, Porto, Leiria y Madeira que se benefician del profundo lazo de la comunidad luso-venezolana, dueña de gran parte de la red de supermercados y panaderías del país.',
    dolorPrincipalMarca: 'Buscar un distribuidor formal con infraestructura suficiente para abastecer a la gran red de comerciantes portugueses en Venezuela.',
    propuestaValorDavimar: 'Acceso directo a las principales cadenas y centrales de compra independientes con una fuerza de ventas que conoce el canal al detalle.',
    canalesPublicitariosRecomendados: ['LinkedIn B2B (Directores de Exportación Portugal)', 'Meta Ads en Portugués/Español'],
    cpmEstimadoUSD: 5.90,
    cplEstimadoUSD: 26.00,
    probabilidadExito: 'Muy Alta',
    probabilidadExitoPct: 90,
    ganchoAnuncio: 'Expanda seus produtos portugueses na Venezuela através do distribuidor mais sólido do mercado.',
    copyAnuncio: 'O Davimar Group garante capilaridade nacional, armazenagem de alto padrão e promotores em loja para que seus produtos liderem nas gôndolas venezuelanas. Agende uma reunião com nossa diretoria comercial.',
    camarasComercioAliadas: ['Cámara Venezolano Portuguesa de Comercio (CAVENPORT)', 'AICEP Portugal Global'],
  },
  {
    id: 'brasil',
    nombre: 'Brasil',
    bandera: '🇧🇷',
    region: 'Latam',
    idiomaPrincipal: 'Portugués',
    sectoresClaveExportacion: ['Proteínas, Embutidos & Aves', 'Chocolates & Confitería', 'Higiene Bucal & Cuidado Personal', 'Insumos de Limpieza', 'Café & Bebidas Instantáneas'],
    perfilMarcasObjetivo: 'Agroindustrias y multinacionales de São Paulo, Paraná, Rio Grande do Sul y Amazonas con ventaja logística por cercanía terrestre y marítima.',
    dolorPrincipalMarca: 'Tiempos de internación aduanera y falta de un socio con capacidad de almacenamiento masivo y volumen de transporte.',
    propuestaValorDavimar: 'Capacidad de absorción de altos volúmenes de carga, bodegas de gran tonelaje, patios de maniobra para camiones pesados y rapidez de distribución.',
    canalesPublicitariosRecomendados: ['LinkedIn Ads B2B (Gerentes de Exportação / Latam Business)', 'Meta Ads B2B en Portugués'],
    cpmEstimadoUSD: 4.40,
    cplEstimadoUSD: 22.00,
    probabilidadExito: 'Alta',
    probabilidadExitoPct: 83,
    ganchoAnuncio: 'Seus produtos brasileiros nas maiores redes de varejo da Venezuela com o Davimar Group.',
    copyAnuncio: 'Operação logística robusta, frota própria, armazenagem de alta densidade e equipe de trade marketing no ponto de venda. Conecte sua indústria ao mercado venezuelano com segurança financeira.',
    camarasComercioAliadas: ['Câmara de Comércio e Indústria Brasil-Venezuela (CBRAN)', 'Apex-Brasil'],
  },
  {
    id: 'argentina',
    nombre: 'Argentina',
    bandera: '🇦🇷',
    region: 'Latam',
    idiomaPrincipal: 'Español',
    sectoresClaveExportacion: ['Harinas & Derivados de Trigo', 'Vinos de Cuyo (Malbec/Cabernet)', 'Golosinas & Galletitas', 'Aceites Comestibles', 'Lácteos & Quesos Duros'],
    perfilMarcasObjetivo: 'Empresas de alimentos de Buenos Aires, Córdoba, Mendoza y Santa Fe que necesitan colocar excedentes exportables en economías dolarizadas de la región.',
    dolorPrincipalMarca: 'Inseguridad respecto a los plazos de pago internacional y desconocimiento del comportamiento del consumidor en el punto de venta.',
    propuestaValorDavimar: 'Negociación formal con respaldo bancario, reportes continuos de rotación por PDV y promotoras de ventas dedicadas en piso.',
    canalesPublicitariosRecomendados: ['LinkedIn Ads (Gerentes de Comercio Exterior)', 'Meta Ads B2B en Argentina'],
    cpmEstimadoUSD: 3.60,
    cplEstimadoUSD: 17.50,
    probabilidadExito: 'Media-Alta',
    probabilidadExitoPct: 77,
    ganchoAnuncio: 'Potenciá las exportaciones de tu empresa argentina al mercado venezolano con un socio logístico y comercial de primera línea.',
    copyAnuncio: 'Davimar Group te ofrece representación comercial, almacenamiento estratégico y posicionamiento en supermercados. Cuidamos tu marca y garantizamos rotación en anaquel.',
    camarasComercioAliadas: ['Cámara de Comercio Venezolano Argentina (CAVENARG)', 'Agencia Argentina de Inversiones y Comercio Internacional'],
  },
];

export const BUYER_PERSONAS_INTERNACIONALES: InternationalBuyerPersona[] = [
  {
    id: 'export_manager',
    cargo: 'Director de Exportación / Export Manager',
    nivelDecision: 'Decisor Final',
    dondeEncontrarlo: ['LinkedIn (Export Manager / International Sales Director)', 'Ferias Internacionales (Anuga, SIAL, Alimentaria)', 'Cámaras de Comercio Binacionales'],
    objetivosPrincipales: [
      'Abrir un nuevo mercado rentable sin asumir costos fijos de nómina o alquiler en el país destino.',
      'Encontrar un distribuidor con solvencia financiera demostrable y capacidad de compra firme.',
      'Garantizar que el producto llegue fresco y en óptimas condiciones al consumidor final.',
    ],
    miedosYObjeciones: [
      '¿Me pagarán a tiempo y en moneda dura (USD/EUR)?',
      '¿Tienen la infraestructura para no dejar la mercancía varada en aduana?',
      '¿Van a empujar activamente mi marca o la dejarán olvidada en un rincón del almacén?',
    ],
    mensajeClaveDeAtraccion:
      'Davimar Group no es solo un distribuidor; somos tu operador de mercado integral: importación, almacenamiento de alta densidad, colocación en retail y fuerza de mercaderistas en punto de venta.',
    formatoContenidoPreferido: 'Videos de infraestructura (montacargas, flota, almacenes) + Fichas técnicas de cobertura y solvencia.',
    llamadoAccionEfectivo: 'Solicitar Reunión Virtual de Negocio (30 min) para evaluar viabilidad de distribución.',
  },
  {
    id: 'latam_expansion_director',
    cargo: 'Director de Expansión Internacional / Latam BD Manager',
    nivelDecision: 'Decisor Final',
    dondeEncontrarlo: ['LinkedIn (Head of Latam Expansion / Business Development Director)', 'Meta Ads segmentado por Intereses de Comercio Exterior'],
    objetivosPrincipales: [
      'Cumplir con las metas de volumen de exportación anual de la corporación.',
      'Reducir el Time-to-Market (tiempo desde la firma hasta que el producto está en el anaquel).',
      'Obtener datos confiables de cuota de mercado y precios de la competencia local.',
    ],
    miedosYObjeciones: [
      'Falta de transparencia en los datos de venta (Sell-out vs Sell-in).',
      'Riesgo reputacional si la marca se asocia con un distribuidor informal.',
      'Ineficiencias en la reposición que generen quiebres de stock en los supermercados.',
    ],
    mensajeClaveDeAtraccion:
      'Garantizamos velocidad de ejecución con relaciones comerciales consolidadas en las mayores cadenas de supermercados y reportes digitales periódicos.',
    formatoContenidoPreferido: 'Casos de éxito reales (ej. caso Alimentos Mary con +34% de rotación) y gráficos de crecimiento.',
    llamadoAccionEfectivo: 'Descargar Dossier Corporativo B2B y Plan de Cobertura Nacional.',
  },
  {
    id: 'trade_marketing_director',
    cargo: 'Gerente de Trade Marketing & Marca Global',
    nivelDecision: 'Evaluador Técnico',
    dondeEncontrarlo: ['LinkedIn (Global Brand Manager / Trade Marketing Lead)', 'Instagram B2B Reels'],
    objetivosPrincipales: [
      'Proteger la identidad visual y los planogramas de la marca en el punto de venta.',
      'Asegurar que las promotoras estén capacitadas y hablen con el tono adecuado de la marca.',
      'Ejecutar activaciones atractivas con material POP que llamen la atención del consumidor.',
    ],
    miedosYObjeciones: [
      'Que el producto quede mal ubicado o escondido en estantes inferiores.',
      'Deterioro del empaque o polvo en el punto de venta.',
      'Falta de supervisión de precios sugeridos al público.',
    ],
    mensajeClaveDeAtraccion:
      'Contamos con un equipo propio de mercaderistas y supervisores que auditan cada metro de góndola, asegurando limpieza, rotación FEFO y visibilidad preferencial.',
    formatoContenidoPreferido: 'Videos antes y después de góndolas organizadas, fotos de promotoras uniformadas y exhibiciones destacadas.',
    llamadoAccionEfectivo: 'Ver Video Demostrativo de Auditoría en Tienda.',
  },
  {
    id: 'supply_chain_director',
    cargo: 'Director de Cadena de Suministro / Supply Chain Lead',
    nivelDecision: 'Recomendador Clave',
    dondeEncontrarlo: ['LinkedIn (Supply Chain Director / Logistics Head)', 'Asociaciones de Logística Internacional'],
    objetivosPrincipales: [
      'Trazabilidad en tiempo real de los envíos marítimos y terrestres.',
      'Almacenes con certificaciones de higiene, control de plagas y seguridad.',
      'Capacidad de respuesta rápida ante contingencias de transporte.',
    ],
    miedosYObjeciones: [
      'Pérdidas de inventario por mala manipulación o roturas.',
      'Almacenes sin la altura o condiciones térmicas adecuadas.',
      'Retrasos en la desconsolidación de contenedores.',
    ],
    mensajeClaveDeAtraccion:
      'Patios de maniobra propios, montacargas modernos, racks de almacenaje antisísmicos y protocolos de control de calidad para cada lote recibido.',
    formatoContenidoPreferido: 'Tours virtuales por el centro de distribución y hojas de especificaciones técnicas del almacén.',
    llamadoAccionEfectivo: 'Solicitar Protocolo Logístico y Especificaciones del Almacén.',
  },
];

export const PILARES_CONFIANZA_INTERNACIONAL: TrustContentPillar[] = [
  {
    id: 'infraestructura_musculo',
    titulo: 'Músculo Operativo & Centro de Distribución',
    subtitulo: 'Demuestra con hechos visuales la capacidad real de absorción y despacho.',
    iconoNombre: 'Warehouse',
    porQueGeneraConfianza:
      'Una marca extranjera no confía en promesas verbales; necesita ver montacargas en movimiento, estanterías industriales llenas, patios de maniobra y camiones propios para saber que no es una empresa de maletín.',
    ejemplosContenido: [
      'Video Cinematic 4K: Operación 6:00 AM con montacargas descargando contenedores de 40 pies.',
      'Foto aérea/panorámica de las bodegas centrales y estanterías de alta densidad.',
      'Demostración del software de gestión de inventarios y control de lotes.',
    ],
    nivelImpacto: 'Crítico (Sin esto no responden)',
    comoProducirlo: 'Reels dinámicos con tomas de drones interiores, timelapses de carga de flota y primeros planos de maquinaria pesada.',
  },
  {
    id: 'casos_exito_marcas',
    titulo: 'Marcas Líderes & Casos de Éxito Validados',
    subtitulo: 'La prueba social definitiva: si marcas gigantes confían en Davimar, ellos también pueden hacerlo.',
    iconoNombre: 'Award',
    porQueGeneraConfianza:
      'El riesgo percibido disminuye a cero cuando un Export Manager ve que marcas de primer nivel como Alimentos Mary o líderes de consumo ya son distribuidas exitosamente por Davimar con crecimientos de +34% en PDV.',
    ejemplosContenido: [
      'Mini Caso de Estudio: Cómo Davimar incrementó la presencia de producto en 120 supermercados.',
      'Entrevista breve con un gerente de marca aliado destacando la puntualidad de entrega.',
      'Gráficos de rotación de anaquel y testimonios comerciales.',
    ],
    nivelImpacto: 'Crítico (Sin esto no responden)',
    comoProducirlo: 'Carruseles ejecutivos en LinkedIn y Reels narrados con estructura: Desafío → Solución Davimar → Resultado en Ventas.',
  },
  {
    id: 'merchandising_pdv',
    titulo: 'Presencia & Dominio del Punto de Venta (PDV)',
    subtitulo: 'Muestra a las promotoras y mercaderistas ejecutando en los mejores supermercados.',
    iconoNombre: 'Store',
    porQueGeneraConfianza:
      'A una marca le aterroriza que su producto termine en una caja polvorienta en el suelo. Ver promotoras uniformadas, góndolas perfectas y cabeceras de pasillo impecables les asegura que su inversión está protegida.',
    ejemplosContenido: [
      'Antes y Después de una góndola desordenada transformada por el equipo de mercaderismo de Davimar.',
      'Activaciones de degustación con clientes finales interactuando con el producto.',
      'Auditorías de supervisores revisando planogramas con tablets en tiempo real.',
    ],
    nivelImpacto: 'Muy Alto (Acelera la reunión)',
    comoProducirlo: 'Videos cortos tipo "Un día con nuestro equipo de impulso en PDV" mostrando disciplina, uniforme y protocolo.',
  },
  {
    id: 'solidez_trayectoria',
    titulo: '60 Años de Historia, Tradición & Solvencia',
    subtitulo: 'Patrimonio y seriedad familiar que trasciende cualquier coyuntura económica.',
    iconoNombre: 'ShieldCheck',
    porQueGeneraConfianza:
      'En mercados emergentes, la estabilidad en el tiempo es el activo más escaso. Presentar 60 años de trayectoria impecable demuestra que Davimar no desaparecerá mañana y tiene solvencia patrimonial.',
    ejemplosContenido: [
      'Hitos históricos: De los fundadores a la moderna operación logística actual.',
      'Reconocimientos gremiales, afiliaciones a cámaras de comercio (Fedecámaras, cámaras binacionales).',
      'Valores corporativos de cumplimiento de palabra y ética comercial.',
    ],
    nivelImpacto: 'Muy Alto (Acelera la reunión)',
    comoProducirlo: 'Videos documentales institucionales de 60 segundos con música cinematográfica y voz en off corporativa.',
  },
  {
    id: 'trazabilidad_compliance',
    titulo: 'Transparencia Financiera, Legal & Aduanera',
    subtitulo: 'Cero sorpresas: procesos claros de importación, liquidación y reporte.',
    iconoNombre: 'FileCheck',
    porQueGeneraConfianza:
      'Despeja las dos grandes dudas del director financiero: "¿Cómo se nacionaliza el producto?" y "¿Cómo se liquida el dinero de las ventas de forma legal y segura?".',
    ejemplosContenido: [
      'Guía visual paso a paso: De la fábrica extranjera a la góndola en Venezuela en 5 pasos.',
      'Explicación del sistema de reportes semanales de ventas e inventarios.',
      'Certificados de cumplimiento sanitario y permisos de importación al día.',
    ],
    nivelImpacto: 'Diferenciador Competitivo',
    comoProducirlo: 'Infografías ejecutivas descargables en PDF y carruseles explicativos de arquitectura comercial.',
  },
];

export const QUE_BUSCA_UNA_MARCA_EXTRANJERA: WhatBrandsLookFor[] = [
  {
    id: 'seguridad_financiera',
    pilar: '1. Seguridad Financiera & Cobranza Garantizada',
    descripcion: 'La marca necesita saber que no habrá impagos, que los términos de crédito se respetarán y que la liquidación se realiza en divisas estables (USD/EUR).',
    preguntaQueSeHaceLaMarca: '¿Me pagarán la factura en las fechas pactadas o tendré problemas para repatriar los fondos?',
    respuestaYRespaldoDavimar: 'Davimar opera con respaldo patrimonial de 60 años, compras en firme y cuentas bancarias internacionales habilitadas para transacciones comerciales sin fricción.',
    requisitoIndispensable: 'Historial crediticio intachable y referencias bancarias corporativas comprobables.',
  },
  {
    id: 'velocidad_retail',
    pilar: '2. Acceso Directo y Veloz a Cadenas de Supermercados',
    descripcion: 'Entrar a un nuevo país desde cero toma años de negociaciones con compradores. Un distribuidor debe tener los códigos de proveedor ya abiertos en el retail.',
    preguntaQueSeHaceLaMarca: '¿Cuánto tiempo tardará mi producto en estar colocado físicamente en las 50 principales tiendas del país?',
    respuestaYRespaldoDavimar: 'Tenemos acuerdos comerciales y códigos activos con las principales cadenas nacionales e independientes, lo que permite un "Time-to-Shelf" menor a 15 días tras la nacionalización.',
    requisitoIndispensable: 'Red de distribución activa y relaciones consolidadas con gerentes de compras de supermercados.',
  },
  {
    id: 'fuerza_pdv',
    pilar: '3. Músculo Propio de Mercaderismo e Impulso en PDV',
    descripcion: 'No basta con dejar cajas en el depósito del supermercado. Si nadie las saca al anaquel y las ordena, el producto muere. Se necesita equipo de impulso.',
    preguntaQueSeHaceLaMarca: '¿Quién vigilará que mi producto esté en el mejor estante y con el precio correcto?',
    respuestaYRespaldoDavimar: 'Contamos con una plantilla dedicada de mercaderistas que visitan diariamente los puntos de venta para reponer, limpiar, instalar material POP y activar degustaciones.',
    requisitoIndispensable: 'Equipo de campo contratado y supervisado directamente, no subcontratistas informales.',
  },
  {
    id: 'infraestructura_logistica',
    pilar: '4. Infraestructura de Almacenamiento & Flota Propia',
    descripcion: 'La marca exige que el producto no sufra daños por humedad, calor o mala manipulación durante el almacenaje o el transporte.',
    preguntaQueSeHaceLaMarca: '¿Tienen almacenes seguros, secos, con altura industrial y transporte propio?',
    respuestaYRespaldoDavimar: 'Disponemos de galpones industriales de alta capacidad, montacargas certificados, sistema de racks de alta resistencia y flota propia de camiones monitoreados por GPS.',
    requisitoIndispensable: 'Instalaciones físicas inspeccionables con protocolos de control de calidad y plagas.',
  },
  {
    id: 'reportes_data',
    pilar: '5. Transparencia en Reportes & Data en Tiempo Real',
    descripcion: 'La sede central de la marca necesita métricas continuas de sell-out, inventario remanente y precios de la competencia para tomar decisiones de producción.',
    preguntaQueSeHaceLaMarca: '¿Sabré cuántas unidades se vendieron esta semana o tendré que esperar 6 meses a ciegas?',
    respuestaYRespaldoDavimar: 'Proveemos dashboards ejecutivos periódicos con datos de rotación por sucursal, alertas tempranas de reabastecimiento y reportes fotográficos de presencia en góndola.',
    requisitoIndispensable: 'Digitalización de la fuerza de ventas con reportería estructurada.',
  },
  {
    id: 'comunicacion_agil',
    pilar: '6. Interlocución Ejecutiva & Respaldo Cultural',
    descripcion: 'La marca requiere un equipo directivo profesional, disponible para revisiones trimestrales de negocio (QBR) y con capacidad de comunicación bilingüe si aplica.',
    preguntaQueSeHaceLaMarca: '¿Hablaré con profesionales que entiendan la jerga de comercio exterior y respondan rápidamente?',
    respuestaYRespaldoDavimar: 'Dirección comercial con amplia experiencia en negocios internacionales, reuniones ejecutivas periódicas y atención dedicada a cada cuenta de importación.',
    requisitoIndispensable: 'Gerente de cuenta exclusivo asignado para la marca extranjera.',
  },
];

export const BENCHMARKS_EXPANSION_INTERNACIONAL = {
  tasaConversionReuniones: '18.4%',
  cplPromedioB2B: '$23.50 USD',
  tiempoCierrePromedioMeses: '2 a 4 meses',
  valorPromedioContratoDistribucionAnual: '$150,000 - $600,000+ USD',
  roiProyectadoCampana: '12x a 35x del presupuesto de pauta',
  volumenBusquedasDistribucionVenezuela: '+1,850 empresas manufactureras buscando expansión en la región norte de Suramérica',
};
