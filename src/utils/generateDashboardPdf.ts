import { jsPDF } from 'jspdf';
import { METRICAS_MENSUALES, OPORTUNIDADES_MEJORA_SEPTIEMBRE } from '../data/metricsData';
import { getDavimarLogoDataUrl } from './davimarLogoAsset';
import { getEffectiveLogoForPdf } from './logoStorage';

export interface GeneratePdfOptions {
  periodoNombre?: string;
  autor?: string;
  customLogoDataUrl?: string;
}

export async function generateDashboardPdf(options: GeneratePdfOptions = {}): Promise<void> {
  // Preload Davimar logo: either user-uploaded custom logo or official vector brand logo
  let logoDataUrl = options.customLogoDataUrl;
  if (!logoDataUrl) {
    try {
      logoDataUrl = await getEffectiveLogoForPdf();
    } catch {
      logoDataUrl = await getDavimarLogoDataUrl(800, 300);
    }
  }

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  // Global typography comfort: set line height factor to 1.35 to prevent squished text
  doc.setLineHeightFactor(1.35);

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 14;
  const contentWidth = pageWidth - margin * 2; // 182mm

  // Professional corporate color palette
  const colorPrimary = [30, 41, 59]; // #1E293B (Dark Navy/Slate)
  const colorAccent = [3, 105, 161]; // #0369A1 (Deep Sky Blue)
  const colorEmerald = [21, 128, 61]; // #15803D (Forest Green)
  const colorOrange = [234, 88, 12]; // #EA580C (Vibrant Orange)
  const colorTextDark = [15, 23, 42]; // #0F172A (Off-black body)
  const colorTextMuted = [100, 116, 139]; // #64748B (Slate grey)
  const colorCardBg = [248, 250, 252]; // #F8FAFC
  const colorBorder = [226, 232, 240]; // #E2E8F0

  const totalPages = 4;

  // Standard Page Footer with precise spacing
  const drawPageFooter = (pageNum: number) => {
    doc.setDrawColor(colorBorder[0], colorBorder[1], colorBorder[2]);
    doc.setLineWidth(0.3);
    doc.line(margin, 283, pageWidth - margin, 283);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(colorTextMuted[0], colorTextMuted[1], colorTextMuted[2]);
    doc.text(
      'Davimar Group (@davimargroup) · Auditoría Ejecutiva & Estrategia Meta Ads · Documento Confidencial',
      margin,
      288
    );
    doc.setFont('helvetica', 'bold');
    doc.text(`Página ${pageNum} de ${totalPages}`, pageWidth - margin, 288, { align: 'right' });
  };

  // Standard Header with real Davimar brand logo and non-overlapping layout
  const drawHeader = (title: string, subtitle: string, tagRight = 'AUDITORÍA EJECUTIVA') => {
    // Header background bar
    doc.setFillColor(colorPrimary[0], colorPrimary[1], colorPrimary[2]);
    doc.roundedRect(margin, margin, contentWidth, 22, 2.5, 2.5, 'F');

    // Real Davimar Logo Container (Crisp White Card)
    const logoCardW = 28;
    const logoCardH = 16.5;
    const logoCardX = margin + 3.5;
    const logoCardY = margin + 2.8;

    doc.setFillColor(255, 255, 255);
    doc.roundedRect(logoCardX, logoCardY, logoCardW, logoCardH, 2, 2, 'F');
    doc.setDrawColor(203, 213, 225);
    doc.setLineWidth(0.2);
    doc.roundedRect(logoCardX, logoCardY, logoCardW, logoCardH, 2, 2, 'S');

    if (logoDataUrl) {
      try {
        const imgProps = doc.getImageProperties(logoDataUrl);
        const maxW = logoCardW - 2.4;
        const maxH = logoCardH - 2.0;
        const ratio = Math.min(maxW / (imgProps.width || 1), maxH / (imgProps.height || 1));
        const finalW = (imgProps.width || 1) * ratio;
        const finalH = (imgProps.height || 1) * ratio;
        const finalX = logoCardX + (logoCardW - finalW) / 2;
        const finalY = logoCardY + (logoCardH - finalH) / 2;

        doc.addImage(
          logoDataUrl,
          'PNG',
          finalX,
          finalY,
          finalW,
          finalH
        );
      } catch {
        doc.addImage(
          logoDataUrl,
          'PNG',
          logoCardX + 1.2,
          logoCardY + 1.0,
          logoCardW - 2.4,
          logoCardH - 2.0
        );
      }
    } else {
      // Fallback vector reproduction: Official 3-waves + Davimar styling
      doc.setFillColor(230, 74, 25); // Red-Orange Wave
      doc.roundedRect(logoCardX + 6, logoCardY + 2.5, 12, 1.8, 0.9, 0.9, 'F');
      doc.setFillColor(251, 168, 25); // Amber Wave
      doc.roundedRect(logoCardX + 4.5, logoCardY + 4.6, 15, 1.8, 0.9, 0.9, 'F');
      doc.setFillColor(0, 166, 81); // Green Wave
      doc.roundedRect(logoCardX + 3, logoCardY + 6.7, 13, 1.8, 0.9, 0.9, 'F');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.2);
      doc.setTextColor(2, 119, 189);
      doc.text('Davimar', logoCardX + logoCardW / 2, logoCardY + 13.5, { align: 'center' });
    }

    // Right Badge width and position
    const badgeW = 38;
    const badgeX = pageWidth - margin - badgeW - 2;

    // Available width between logo area and right badge
    const headerTextX = margin + 34.5;
    const maxHeaderTextW = badgeX - headerTextX - 3; // ~104mm

    // Main Header Title (Truncated or constrained to fit cleanly before the badge)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.2);
    doc.setTextColor(255, 255, 255);
    const splitTitle = doc.splitTextToSize(title, maxHeaderTextW);
    doc.text(splitTitle[0] || '', headerTextX, margin + 9.2);

    // Subtitle (Constrained to available width to never collide with the right badge)
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.8);
    doc.setTextColor(186, 230, 253);
    const splitSub = doc.splitTextToSize(subtitle, maxHeaderTextW);
    doc.text(splitSub[0] || '', headerTextX, margin + 15.5);

    // Right Badge (Crisp white pill, perfectly anchored on the right)
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(badgeX, margin + 4.5, badgeW, 13, 2, 2, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.8);
    doc.setTextColor(colorAccent[0], colorAccent[1], colorAccent[2]);
    doc.text(tagRight, badgeX + badgeW / 2, margin + 9.2, { align: 'center' });
    doc.setFontSize(5.8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(colorTextMuted[0], colorTextMuted[1], colorTextMuted[2]);
    doc.text('ABR - AGO 2026', badgeX + badgeW / 2, margin + 13.8, { align: 'center' });
  };

  // ==========================================
  // PÁGINA 1: RESUMEN GLOBAL & MATRIZ HISTÓRICA
  // ==========================================
  drawHeader(
    'DAVIMAR GROUP · DASHBOARD EJECUTIVO META ADS',
    'Auditoría Histórica Consolidada (Abril - Agosto 2026) | Canal B2B & PDV',
    'AUDITORÍA OFICIAL'
  );

  let yPos = margin + 26;

  // Metadata Sub-bar (Mathematically spaced columns so no text collides)
  doc.setFillColor(colorCardBg[0], colorCardBg[1], colorCardBg[2]);
  doc.roundedRect(margin, yPos, contentWidth, 9, 2, 2, 'F');
  doc.setDrawColor(colorBorder[0], colorBorder[1], colorBorder[2]);
  doc.setLineWidth(0.2);
  doc.roundedRect(margin, yPos, contentWidth, 9, 2, 2, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.0);
  doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
  doc.text('Cuenta: @davimargroup', margin + 4, yPos + 6);
  doc.text('Sector: Distribución & Trade Mktg', margin + 45, yPos + 6);
  doc.text('Audiencia: 2.471 Decisores B2B', margin + 106, yPos + 6);

  const fechaHoy = new Date().toLocaleDateString('es-CO', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(colorTextMuted[0], colorTextMuted[1], colorTextMuted[2]);
  doc.text(`Fecha: ${fechaHoy}`, pageWidth - margin - 4, yPos + 6, { align: 'right' });

  yPos += 13;

  // SECTION 1: 6 MÉTRICAS GLOBALES DESTACADAS
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
  doc.text('1. MÉTRICAS GLOBALES DESTACADAS (CONSOLIDADO HISTÓRICO DE 5 MESES)', margin, yPos);
  yPos += 4;

  const cardW = (contentWidth - 8) / 3; // 58mm
  const cardH = 21;

  const metricsCards = [
    {
      titulo: 'VISITAS AL PERFIL (AGOSTO)',
      valor: '48,2%',
      sub: '942 visitas de 1.953 espectadores únicos',
      tag: 'Curiosidad Comercial Récord',
      color: colorAccent,
    },
    {
      titulo: 'COMUNIDAD CUALIFICADA',
      valor: '2.471',
      sub: '+57 ganados en agosto · 79,7% en 25-54 años',
      tag: 'Compradores & Decisores',
      color: colorEmerald,
    },
    {
      titulo: 'IMPACTOS ACUMULADOS',
      valor: '82.261',
      sub: 'Visualizaciones orgánicas en 5 meses',
      tag: 'Tracción de Marca Acumulada',
      color: colorPrimary,
    },
    {
      titulo: 'REEL ESTRELLA DE AGOSTO',
      valor: '2.400 vistas',
      sub: 'Montacargas en patio (88 likes, 14 shares)',
      tag: 'Músculo Logístico Validado',
      color: colorOrange,
    },
    {
      titulo: 'DÍAS Y HORAS PICO',
      valor: 'Lun, Jue, Dom',
      sub: 'Ventana Dorada: 6:00 PM a 9:00 PM',
      tag: 'Máxima Atención B2B',
      color: colorAccent,
    },
    {
      titulo: 'RETENCIÓN DE VIDEO (HOOK)',
      valor: '68% (3 seg)',
      sub: 'Hold Rate: 36% a 15s (Benchmark B2B: 24%)',
      tag: 'Audiencia Altamente Calificada',
      color: colorEmerald,
    },
  ];

  metricsCards.forEach((c, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = margin + col * (cardW + 4);
    const y = yPos + row * (cardH + 3);

    doc.setFillColor(colorCardBg[0], colorCardBg[1], colorCardBg[2]);
    doc.roundedRect(x, y, cardW, cardH, 2, 2, 'F');
    doc.setDrawColor(colorBorder[0], colorBorder[1], colorBorder[2]);
    doc.roundedRect(x, y, cardW, cardH, 2, 2, 'S');

    // Accent line on top
    doc.setFillColor(c.color[0], c.color[1], c.color[2]);
    doc.roundedRect(x, y, cardW, 1.8, 1, 1, 'F');

    // Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.5);
    doc.setTextColor(colorTextMuted[0], colorTextMuted[1], colorTextMuted[2]);
    doc.text(c.titulo, x + 3.5, y + 5.8);

    // Value
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(c.color[0], c.color[1], c.color[2]);
    doc.text(c.valor, x + 3.5, y + 11.5);

    // Subtitle
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6);
    doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
    doc.text(c.sub, x + 3.5, y + 15.8);

    // Tag Pill
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.5);
    doc.setTextColor(c.color[0], c.color[1], c.color[2]);
    doc.text(c.tag, x + 3.5, y + 19.3);
  });

  yPos += cardH * 2 + 8;

  // SECTION 2: MATRIZ HISTÓRICA COMPARATIVA (5 MESES)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
  doc.text('2. MATRIZ HISTÓRICA COMPARATIVA (ABRIL A AGOSTO 2026)', margin, yPos);
  yPos += 4;

  // Columns definition: Total width = 182mm
  const cols = [
    { name: 'Métrica Clave', w: 36, align: 'left' as const },
    { name: 'Abril', w: 16, align: 'center' as const },
    { name: 'Mayo (Pico)', w: 18, align: 'center' as const },
    { name: 'Junio', w: 16, align: 'center' as const },
    { name: 'Julio', w: 16, align: 'center' as const },
    { name: 'Agosto', w: 18, align: 'center' as const },
    { name: 'Diagnóstico Técnico & Lectura B2B', w: 62, align: 'left' as const },
  ];

  // Header Row
  doc.setFillColor(colorPrimary[0], colorPrimary[1], colorPrimary[2]);
  doc.rect(margin, yPos, contentWidth, 6.5, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.8);
  doc.setTextColor(255, 255, 255);

  let curX = margin;
  cols.forEach((col) => {
    if (col.align === 'center') {
      doc.text(col.name, curX + col.w / 2, yPos + 4.5, { align: 'center' });
    } else {
      doc.text(col.name, curX + 2, yPos + 4.5);
    }
    curX += col.w;
  });

  yPos += 6.5;

  // Table Data Rows
  const tableRows = [
    {
      metrica: 'Visualizaciones',
      abril: '13.412',
      mayo: '35.120',
      junio: '16.504',
      julio: '8.550',
      agosto: '8.675',
      diagnostico: 'Mayo impulsado por 38 historias. Agosto estabiliza con 3 reels clave.',
    },
    {
      metrica: 'Alcance Único',
      abril: '4.912',
      mayo: '10.840',
      junio: '6.210',
      julio: '1.842',
      agosto: '1.953',
      diagnostico: 'Techo orgánico en ~1.9k. Se requiere pauta Always-On para romperlo.',
    },
    {
      metrica: 'Visitas al Perfil',
      abril: '1.335',
      mayo: '3.820',
      junio: '2.140',
      julio: '985',
      agosto: '942',
      diagnostico: 'Intensidad de inspección muy alta: los decisores investigan la empresa.',
    },
    {
      metrica: 'Conversión a Perfil',
      abril: '27,2%',
      mayo: '35,2%',
      junio: '34,5%',
      julio: '53,5%',
      agosto: '48,2%',
      diagnostico: 'Récord del sector B2B: casi 1 de cada 2 espectadores visita la biografía.',
    },
    {
      metrica: 'Piezas Publicadas',
      abril: '13 piezas',
      mayo: '14 piezas',
      junio: '11 piezas',
      julio: '9 piezas',
      agosto: '5 piezas',
      diagnostico: 'Meta emitió aviso por desaceleración. Meta: 11 piezas en septiembre.',
    },
    {
      metrica: 'Seguidores Netos',
      abril: '+107',
      mayo: '+188',
      junio: '+92',
      julio: '+64',
      agosto: '+57',
      diagnostico: 'Base sólida en 2.471 seguidores (79,7% en edad de compra de 25-54 años).',
    },
    {
      metrica: 'Pilar Destacado',
      abril: 'Impulso PDV',
      mayo: 'Historias',
      junio: 'Checklist',
      julio: 'Montacargas',
      agosto: 'Montacargas',
      diagnostico: 'El Reel de patio fue #1 con 2.400 vistas, revalidando el pilar logístico.',
    },
  ];

  tableRows.forEach((row, idx) => {
    const isEven = idx % 2 === 0;
    const rowH = 9;

    doc.setFillColor(isEven ? 255 : 248, isEven ? 255 : 250, isEven ? 255 : 252);
    doc.rect(margin, yPos, contentWidth, rowH, 'F');
    doc.setDrawColor(colorBorder[0], colorBorder[1], colorBorder[2]);
    doc.line(margin, yPos + rowH, margin + contentWidth, yPos + rowH);

    curX = margin;

    // Col 0: Métrica
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.8);
    doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
    doc.text(row.metrica, curX + 2, yPos + 5.8);
    curX += cols[0].w;

    // Col 1: Abril
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.8);
    doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
    doc.text(row.abril, curX + cols[1].w / 2, yPos + 5.8, { align: 'center' });
    curX += cols[1].w;

    // Col 2: Mayo
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(colorAccent[0], colorAccent[1], colorAccent[2]);
    doc.text(row.mayo, curX + cols[2].w / 2, yPos + 5.8, { align: 'center' });
    curX += cols[2].w;

    // Col 3: Junio
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
    doc.text(row.junio, curX + cols[3].w / 2, yPos + 5.8, { align: 'center' });
    curX += cols[3].w;

    // Col 4: Julio
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(colorEmerald[0], colorEmerald[1], colorEmerald[2]);
    doc.text(row.julio, curX + cols[4].w / 2, yPos + 5.8, { align: 'center' });
    curX += cols[4].w;

    // Col 5: Agosto (Highlighted with orange tint)
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(colorOrange[0], colorOrange[1], colorOrange[2]);
    doc.text(row.agosto, curX + cols[5].w / 2, yPos + 5.8, { align: 'center' });
    curX += cols[5].w;

    // Col 6: Diagnóstico Técnico (Ample width of 62mm ensures no overlapping)
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.0);
    doc.setTextColor(colorTextMuted[0], colorTextMuted[1], colorTextMuted[2]);
    const splitDiag = doc.splitTextToSize(row.diagnostico, cols[6].w - 4);
    doc.text(splitDiag, curX + 1.5, yPos + 3.8);

    yPos += rowH;
  });

  // Callout Box: Diagnóstico Crítico de Agosto
  yPos += 5;
  const alertBoxH = 22.5;
  doc.setFillColor(254, 242, 242);
  doc.roundedRect(margin, yPos, contentWidth, alertBoxH, 2, 2, 'F');
  doc.setDrawColor(254, 202, 202);
  doc.roundedRect(margin, yPos, contentWidth, alertBoxH, 2, 2, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(185, 28, 28);
  doc.text('DIAGNÓSTICO CRÍTICO DE AGOSTO & ADVERTENCIA ALGORÍTMICA DE META:', margin + 4.5, yPos + 5.2);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(5.9);
  doc.setTextColor(127, 29, 29);
  const alertLines = [
    '• En agosto la actividad disminuyó a solo 5 piezas consolidadas (3 reels, 1 post y 1 historia), activando advertencia de Meta.',
    '• Oportunidad clave: Pese a la desaceleración, la tasa de conversión a perfil fue del 48,2% y el Reel de patio generó 2.400 vistas.',
    '• Conclusión: La audiencia B2B reacciona con alta credibilidad al músculo operativo en patio, requiriendo reactivar frecuencia en septiembre.',
  ];
  alertLines.forEach((l, idx) => {
    const splitLine = doc.splitTextToSize(l, contentWidth - 10);
    doc.text(splitLine[0] || '', margin + 4.5, yPos + 9.8 + idx * 4.0);
  });

  // 3 Strategic Key Takeaways
  yPos += alertBoxH + 4.5;
  const takeColW = (contentWidth - 6) / 3;
  const takeH = 16.5;

  const takeaways = [
    {
      label: 'CONVERSIÓN COMERCIAL',
      val: '48,2% Visita Bio',
      desc: '1 de cada 2 decisores revisa el perfil. Se requiere enlace de venta.',
      color: colorAccent,
    },
    {
      label: 'NÚCLEO DECISOR B2B',
      val: '79,7% en 25-54 años',
      desc: 'Comunidad calificada: gerentes de compras y dueños de retail.',
      color: colorEmerald,
    },
    {
      label: 'CONTENIDO LÍDER',
      val: 'Patio & Montacargas',
      desc: '2.400 vistas orgánicas: pilar indispensable para la pauta Q4.',
      color: colorOrange,
    },
  ];

  takeaways.forEach((t, i) => {
    const x = margin + i * (takeColW + 3);
    doc.setFillColor(colorCardBg[0], colorCardBg[1], colorCardBg[2]);
    doc.roundedRect(x, yPos, takeColW, takeH, 1.5, 1.5, 'F');
    doc.setDrawColor(colorBorder[0], colorBorder[1], colorBorder[2]);
    doc.roundedRect(x, yPos, takeColW, takeH, 1.5, 1.5, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.8);
    doc.setTextColor(colorTextMuted[0], colorTextMuted[1], colorTextMuted[2]);
    doc.text(t.label, x + 3.5, yPos + 4.5);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.2);
    doc.setTextColor(t.color[0], t.color[1], t.color[2]);
    doc.text(t.val, x + 3.5, yPos + 8.8);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(5.5);
    doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
    const splitDesc = doc.splitTextToSize(t.desc, takeColW - 7);
    doc.text(splitDesc, x + 3.5, yPos + 12.8);
  });

  drawPageFooter(1);

  // =========================================================================
  // PÁGINA 2: ANÁLISIS GRÁFICO COMPARATIVO MES A MES (ABRIL - AGOSTO 2026)
  // =========================================================================
  doc.addPage();
  drawHeader(
    'ANÁLISIS GRÁFICO COMPARATIVO MES A MES',
    'Evolución Mes a Mes: Alcance, Vistas, Conversión Bio y Mix de Formatos',
    'ANÁLISIS VISUAL'
  );

  yPos = margin + 25;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.8);
  doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
  doc.text('3. EVOLUCIÓN GRÁFICA COMPARATIVA MES A MES (ABRIL - AGOSTO 2026)', margin, yPos);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.0);
  doc.setTextColor(colorTextMuted[0], colorTextMuted[1], colorTextMuted[2]);
  doc.text('Trayectoria orgánica consolidada (5 meses)', pageWidth - margin, yPos, { align: 'right' });

  const monthLabels = ['ABR', 'MAY', 'JUN', 'JUL', 'AGO'];

  // Dimensions for 2x2 Chart Grid
  const chartW = (contentWidth - 6) / 2; // 88mm
  const chartH = 97; // 97mm height
  const chartY1 = yPos + 4.5; // 43.5mm -> ends at 140.5mm
  const chartY2 = chartY1 + chartH + 3.5; // 144mm -> ends at 241mm
  const chartXLeft = margin; // 14mm
  const chartXRight = margin + chartW + 6; // 108mm

  // -------------------------------------------------------------
  // GRÁFICA 3.1: VISTAS TOTALES VS. ALCANCE ÚNICO (Top Left)
  // -------------------------------------------------------------
  {
    const x = chartXLeft;
    const y = chartY1;
    doc.setFillColor(colorCardBg[0], colorCardBg[1], colorCardBg[2]);
    doc.roundedRect(x, y, chartW, chartH, 2, 2, 'F');
    doc.setDrawColor(colorBorder[0], colorBorder[1], colorBorder[2]);
    doc.roundedRect(x, y, chartW, chartH, 2, 2, 'S');

    // Accent line at top of card
    doc.setFillColor(colorAccent[0], colorAccent[1], colorAccent[2]);
    doc.roundedRect(x, y, chartW, 1.8, 1, 1, 'F');

    // Title (Row 1: strictly on top line)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.8);
    doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
    doc.text('3.1 VISTAS TOTALES VS. ALCANCE ÚNICO', x + 3.5, y + 5.5);

    // Row 2: Subtitle on Left
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(4.9);
    doc.setTextColor(colorTextMuted[0], colorTextMuted[1], colorTextMuted[2]);
    doc.text('Impresiones vs. cuentas únicas', x + 3.5, y + 9.2);

    // Row 2: Legend on Right (Cleanly separated from title and subtitle)
    const legY = y + 7.4;
    doc.setFillColor(colorAccent[0], colorAccent[1], colorAccent[2]);
    doc.roundedRect(x + 55, legY, 3.0, 2.5, 0.5, 0.5, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(4.8);
    doc.setTextColor(colorAccent[0], colorAccent[1], colorAccent[2]);
    doc.text('Vistas', x + 59.5, legY + 2.0);

    doc.setFillColor(colorEmerald[0], colorEmerald[1], colorEmerald[2]);
    doc.roundedRect(x + 71, legY, 3.0, 2.5, 0.5, 0.5, 'F');
    doc.setTextColor(colorEmerald[0], colorEmerald[1], colorEmerald[2]);
    doc.text('Alcance', x + 75.5, legY + 2.0);

    // Plot parameters
    const plotX = x + 11;
    const plotY = y + 15;
    const plotW = 72;
    const plotH = 54;
    const maxVal = 40000;

    // Background Grid lines & Y labels (0k, 10k, 20k, 30k, 40k)
    const gridLevels = [0, 10000, 20000, 30000, 40000];
    gridLevels.forEach((lvl) => {
      const lineY = plotY + plotH - (lvl / maxVal) * plotH;
      doc.setDrawColor(230, 235, 242);
      doc.setLineWidth(0.2);
      doc.line(plotX, lineY, plotX + plotW, lineY);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(5.0);
      doc.setTextColor(colorTextMuted[0], colorTextMuted[1], colorTextMuted[2]);
      const labelText = lvl === 0 ? '0' : `${lvl / 1000}k`;
      doc.text(labelText, plotX - 2, lineY + 1.5, { align: 'right' });
    });

    // Baseline axis
    doc.setDrawColor(colorBorder[0], colorBorder[1], colorBorder[2]);
    doc.setLineWidth(0.4);
    doc.line(plotX, plotY + plotH, plotX + plotW, plotY + plotH);

    // Data points
    const vistasData = [13412, 35142, 22920, 8600, 8675];
    const alcanceData = [4912, 10840, 2928, 1718, 1953];
    const colStep = plotW / 5; // 14.4mm

    vistasData.forEach((vistas, idx) => {
      const alcance = alcanceData[idx];
      const colCenter = plotX + idx * colStep + colStep / 2;

      // Bar 1: Vistas
      const barW = 4.4;
      const barX1 = colCenter - 4.8;
      const barH1 = (vistas / maxVal) * plotH;
      const barY1 = plotY + plotH - barH1;

      doc.setFillColor(colorAccent[0], colorAccent[1], colorAccent[2]);
      doc.roundedRect(barX1, barY1, barW, barH1, 0.8, 0.8, 'F');

      // Value label for Vistas
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(4.8);
      doc.setTextColor(colorAccent[0], colorAccent[1], colorAccent[2]);
      const vistasText = `${(vistas / 1000).toFixed(1)}k`;
      doc.text(vistasText, barX1 + barW / 2, barY1 - 1.2, { align: 'center' });

      // Bar 2: Alcance
      const barX2 = colCenter + 0.4;
      const barH2 = (alcance / maxVal) * plotH;
      const barY2 = plotY + plotH - barH2;

      doc.setFillColor(colorEmerald[0], colorEmerald[1], colorEmerald[2]);
      doc.roundedRect(barX2, barY2, barW, barH2, 0.8, 0.8, 'F');

      // Value label for Alcance
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(4.8);
      doc.setTextColor(colorEmerald[0], colorEmerald[1], colorEmerald[2]);
      const alcanceText = `${(alcance / 1000).toFixed(1)}k`;
      doc.text(alcanceText, barX2 + barW / 2, barY2 - 1.2, { align: 'center' });

      // Month label below axis
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(5.8);
      doc.setTextColor(idx === 4 ? colorOrange[0] : colorTextDark[0], idx === 4 ? colorOrange[1] : colorTextDark[1], idx === 4 ? colorOrange[2] : colorTextDark[2]);
      doc.text(monthLabels[idx], colCenter, plotY + plotH + 4.2, { align: 'center' });
    });

    // Chart Footer Pill
    const pillY = y + 76;
    const pillH = 17.5;
    doc.setFillColor(240, 249, 255);
    doc.roundedRect(x + 3.5, pillY, chartW - 7, pillH, 1.5, 1.5, 'F');
    doc.setDrawColor(186, 230, 253);
    doc.roundedRect(x + 3.5, pillY, chartW - 7, pillH, 1.5, 1.5, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.8);
    doc.setTextColor(colorAccent[0], colorAccent[1], colorAccent[2]);
    doc.text('Patrón Visual: Pico en Mayo (35.1k) vs. Estabilidad en Agosto (8.7k)', x + 5.5, pillY + 4.2);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(5.2);
    doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
    doc.text('• Mayo alcanzó el récord histórico por el empuje de 44 historias (45,3% del total).', x + 5.5, pillY + 8.2);
    doc.text('• Agosto sostuvo 8.675 vistas con solo 5 piezas gracias al impacto de los Reels.', x + 5.5, pillY + 12.0);
    doc.text('• Se evidencia un techo orgánico en ~2k espectadores que exige pauta publicitaria.', x + 5.5, pillY + 15.5);
  }

  // -------------------------------------------------------------
  // GRÁFICA 3.2: VISITAS AL PERFIL & TASA DE CONVERSIÓN (%) (Top Right)
  // -------------------------------------------------------------
  {
    const x = chartXRight;
    const y = chartY1;
    doc.setFillColor(colorCardBg[0], colorCardBg[1], colorCardBg[2]);
    doc.roundedRect(x, y, chartW, chartH, 2, 2, 'F');
    doc.setDrawColor(colorBorder[0], colorBorder[1], colorBorder[2]);
    doc.roundedRect(x, y, chartW, chartH, 2, 2, 'S');

    // Accent line at top of card
    doc.setFillColor(colorOrange[0], colorOrange[1], colorOrange[2]);
    doc.roundedRect(x, y, chartW, 1.8, 1, 1, 'F');

    // Title (Row 1: strictly on top line)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.8);
    doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
    doc.text('3.2 VISITAS AL PERFIL & TASA DE CONVERSIÓN', x + 3.5, y + 5.5);

    // Row 2: Subtitle on Left
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(4.9);
    doc.setTextColor(colorTextMuted[0], colorTextMuted[1], colorTextMuted[2]);
    doc.text('Visitas a bio vs. % sobre alcance', x + 3.5, y + 9.2);

    // Row 2: Legend on Right (Cleanly separated from title and subtitle)
    const legY2 = y + 7.4;
    doc.setFillColor(14, 116, 144);
    doc.roundedRect(x + 52, legY2, 3.0, 2.5, 0.5, 0.5, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(4.8);
    doc.setTextColor(14, 116, 144);
    doc.text('Visitas', x + 56.5, legY2 + 2.0);

    doc.setFillColor(colorOrange[0], colorOrange[1], colorOrange[2]);
    doc.circle(x + 72, legY2 + 1.25, 1.3, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(4.8);
    doc.setTextColor(colorOrange[0], colorOrange[1], colorOrange[2]);
    doc.text('% Conv.', x + 75.0, legY2 + 2.0);

    // Plot parameters
    const plotX = x + 12;
    const plotY = y + 15;
    const plotW = 68;
    const plotH = 54;
    const maxVisitas = 2500;
    const maxRate = 60; // 60%

    // Grid lines & labels (Left axis for Visitas: 0, 500, 1000, 1500, 2000, 2500)
    const gridVisitas = [0, 500, 1000, 1500, 2000, 2500];
    gridVisitas.forEach((val) => {
      const lineY = plotY + plotH - (val / maxVisitas) * plotH;
      doc.setDrawColor(230, 235, 242);
      doc.setLineWidth(0.2);
      doc.line(plotX, lineY, plotX + plotW, lineY);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(4.8);
      doc.setTextColor(colorTextMuted[0], colorTextMuted[1], colorTextMuted[2]);
      const leftLabel = val === 0 ? '0' : `${val}`;
      doc.text(leftLabel, plotX - 2, lineY + 1.5, { align: 'right' });

      // Right axis (%): 0%, 12%, 24%, 36%, 48%, 60%
      const rateEquiv = Math.round((val / maxVisitas) * maxRate);
      doc.text(`${rateEquiv}%`, plotX + plotW + 2, lineY + 1.5);
    });

    // Baseline axis
    doc.setDrawColor(colorBorder[0], colorBorder[1], colorBorder[2]);
    doc.setLineWidth(0.4);
    doc.line(plotX, plotY + plotH, plotX + plotW, plotY + plotH);

    const visitasData = [1335, 1730, 1363, 919, 942];
    const tasaData = [27.18, 37.86, 46.55, 53.49, 48.23];
    const colStep = plotW / 5;

    // Draw Bars for Visitas
    visitasData.forEach((visitas, idx) => {
      const colCenter = plotX + idx * colStep + colStep / 2;
      const barW = 6.2;
      const barX = colCenter - barW / 2;
      const barH = (visitas / maxVisitas) * plotH;
      const barY = plotY + plotH - barH;

      doc.setFillColor(14, 116, 144);
      doc.roundedRect(barX, barY, barW, barH, 0.8, 0.8, 'F');

      // Value label for Visitas: inside the bar if tall enough (barH >= 8mm), else above
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(4.6);
      if (barH >= 8) {
        doc.setTextColor(255, 255, 255);
        doc.text(visitas.toLocaleString('es-CO'), colCenter, barY + 3.4, { align: 'center' });
      } else {
        doc.setTextColor(14, 116, 144);
        doc.text(visitas.toLocaleString('es-CO'), colCenter, barY - 1.2, { align: 'center' });
      }

      // Month label below axis
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(5.8);
      doc.setTextColor(idx === 4 ? colorOrange[0] : colorTextDark[0], idx === 4 ? colorOrange[1] : colorTextDark[1], idx === 4 ? colorOrange[2] : colorTextDark[2]);
      doc.text(monthLabels[idx], colCenter, plotY + plotH + 4.2, { align: 'center' });
    });

    // Draw Line & Points for Tasa %
    const points: { x: number; y: number; val: number }[] = [];
    tasaData.forEach((tasa, idx) => {
      const colCenter = plotX + idx * colStep + colStep / 2;
      const ptY = plotY + plotH - (tasa / maxRate) * plotH;
      points.push({ x: colCenter, y: ptY, val: tasa });
    });

    // Connecting line
    doc.setDrawColor(colorOrange[0], colorOrange[1], colorOrange[2]);
    doc.setLineWidth(0.8);
    for (let i = 0; i < points.length - 1; i++) {
      doc.line(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
    }

    // Points & Labels
    points.forEach((pt, idx) => {
      // Circle
      doc.setFillColor(255, 255, 255);
      doc.circle(pt.x, pt.y, 2.0, 'F');
      doc.setDrawColor(colorOrange[0], colorOrange[1], colorOrange[2]);
      doc.setLineWidth(0.6);
      doc.circle(pt.x, pt.y, 2.0, 'S');

      // Highlight badge for July and August
      const isHigh = idx >= 3;
      if (isHigh) {
        doc.setFillColor(255, 247, 237);
        doc.roundedRect(pt.x - 5.5, pt.y - 6.5, 11, 4.2, 0.8, 0.8, 'F');
        doc.setDrawColor(colorOrange[0], colorOrange[1], colorOrange[2]);
        doc.setLineWidth(0.3);
        doc.roundedRect(pt.x - 5.5, pt.y - 6.5, 11, 4.2, 0.8, 0.8, 'S');
      }

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(5.0);
      doc.setTextColor(colorOrange[0], colorOrange[1], colorOrange[2]);
      doc.text(`${pt.val.toFixed(1)}%`, pt.x, pt.y - (isHigh ? 3.5 : 2.8), { align: 'center' });
    });

    // Chart Footer Pill
    const pillY = y + 76;
    const pillH = 17.5;
    doc.setFillColor(255, 247, 237);
    doc.roundedRect(x + 3.5, pillY, chartW - 7, pillH, 1.5, 1.5, 'F');
    doc.setDrawColor(254, 215, 170);
    doc.roundedRect(x + 3.5, pillY, chartW - 7, pillH, 1.5, 1.5, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.8);
    doc.setTextColor(colorOrange[0], colorOrange[1], colorOrange[2]);
    doc.text('Patrón Visual: Explosión de Intención Comercial en Julio y Agosto', x + 5.5, pillY + 4.2);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(5.2);
    doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
    doc.text('• La tasa de conversión a perfil se duplicó: pasó de 27,2% en abril a 48,2% en agosto.', x + 5.5, pillY + 8.2);
    doc.text('• Récord histórico en Julio con 53,5% de conversión (1 de cada 2 entró a la bio).', x + 5.5, pillY + 12.0);
    doc.text('• Urgencia comercial: Enlazar Catálogo mayorista y WhatsApp en el perfil de inmediato.', x + 5.5, pillY + 15.5);
  }

  // -------------------------------------------------------------
  // GRÁFICA 3.3: CRECIMIENTO DE SEGUIDORES & BASE ACUMULADA (Bottom Left)
  // -------------------------------------------------------------
  {
    const x = chartXLeft;
    const y = chartY2;
    doc.setFillColor(colorCardBg[0], colorCardBg[1], colorCardBg[2]);
    doc.roundedRect(x, y, chartW, chartH, 2, 2, 'F');
    doc.setDrawColor(colorBorder[0], colorBorder[1], colorBorder[2]);
    doc.roundedRect(x, y, chartW, chartH, 2, 2, 'S');

    // Accent line
    doc.setFillColor(colorEmerald[0], colorEmerald[1], colorEmerald[2]);
    doc.roundedRect(x, y, chartW, 1.8, 1, 1, 'F');

    // Title (Row 1: strictly on top line)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.8);
    doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
    doc.text('3.3 CRECIMIENTO DE AUDIENCIA B2B & BASE', x + 3.5, y + 5.5);

    // Row 2: Subtitle on Left
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(4.9);
    doc.setTextColor(colorTextMuted[0], colorTextMuted[1], colorTextMuted[2]);
    doc.text('Netos/mes vs. base acumulada', x + 3.5, y + 9.2);

    // Row 2: Legend on Right (Cleanly separated from title and subtitle)
    const legY3 = y + 7.4;
    doc.setFillColor(colorEmerald[0], colorEmerald[1], colorEmerald[2]);
    doc.roundedRect(x + 53, legY3, 3.0, 2.5, 0.5, 0.5, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(4.8);
    doc.setTextColor(colorEmerald[0], colorEmerald[1], colorEmerald[2]);
    doc.text('Netos', x + 57.5, legY3 + 2.0);

    doc.setFillColor(colorPrimary[0], colorPrimary[1], colorPrimary[2]);
    doc.circle(x + 72, legY3 + 1.25, 1.3, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(4.8);
    doc.setTextColor(colorPrimary[0], colorPrimary[1], colorPrimary[2]);
    doc.text('Base', x + 75.0, legY3 + 2.0);

    // Plot parameters
    const plotX = x + 12;
    const plotY = y + 15;
    const plotW = 68;
    const plotH = 54;
    const maxNeto = 200; // Left axis: 0, 50, 100, 150, 200
    const minBase = 1900;
    const maxBase = 2600; // Right axis: 1900 to 2600

    // Grid lines & labels
    const gridNetos = [0, 50, 100, 150, 200];
    gridNetos.forEach((val) => {
      const lineY = plotY + plotH - (val / maxNeto) * plotH;
      doc.setDrawColor(230, 235, 242);
      doc.setLineWidth(0.2);
      doc.line(plotX, lineY, plotX + plotW, lineY);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(4.8);
      doc.setTextColor(colorTextMuted[0], colorTextMuted[1], colorTextMuted[2]);
      doc.text(`+${val}`, plotX - 2, lineY + 1.5, { align: 'right' });

      // Right axis for Base Acumulada
      const baseEquiv = Math.round(minBase + (val / maxNeto) * (maxBase - minBase));
      doc.text(`${baseEquiv}`, plotX + plotW + 2, lineY + 1.5);
    });

    // Baseline axis
    doc.setDrawColor(colorBorder[0], colorBorder[1], colorBorder[2]);
    doc.setLineWidth(0.4);
    doc.line(plotX, plotY + plotH, plotX + plotW, plotY + plotH);

    const netosData = [107, 188, 92, 64, 57];
    const baseData = [2040, 2228, 2320, 2384, 2471];
    const colStep = plotW / 5;

    // Bars for net followers
    netosData.forEach((neto, idx) => {
      const colCenter = plotX + idx * colStep + colStep / 2;
      const barW = 6.0;
      const barX = colCenter - barW / 2;
      const barH = (neto / maxNeto) * plotH;
      const barY = plotY + plotH - barH;

      doc.setFillColor(colorEmerald[0], colorEmerald[1], colorEmerald[2]);
      doc.roundedRect(barX, barY, barW, barH, 0.8, 0.8, 'F');

      // Value label
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(4.8);
      doc.setTextColor(colorEmerald[0], colorEmerald[1], colorEmerald[2]);
      doc.text(`+${neto}`, colCenter, barY - 1.2, { align: 'center' });

      // Month label below axis
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(5.8);
      doc.setTextColor(idx === 4 ? colorOrange[0] : colorTextDark[0], idx === 4 ? colorOrange[1] : colorTextDark[1], idx === 4 ? colorOrange[2] : colorTextDark[2]);
      doc.text(monthLabels[idx], colCenter, plotY + plotH + 4.2, { align: 'center' });
    });

    // Stepped line for Base Acumulada
    const basePoints: { x: number; y: number; val: number }[] = [];
    baseData.forEach((base, idx) => {
      const colCenter = plotX + idx * colStep + colStep / 2;
      const ptY = plotY + plotH - ((base - minBase) / (maxBase - minBase)) * plotH;
      basePoints.push({ x: colCenter, y: ptY, val: base });
    });

    // Line
    doc.setDrawColor(colorPrimary[0], colorPrimary[1], colorPrimary[2]);
    doc.setLineWidth(0.8);
    for (let i = 0; i < basePoints.length - 1; i++) {
      doc.line(basePoints[i].x, basePoints[i].y, basePoints[i + 1].x, basePoints[i + 1].y);
    }

    // Points & Labels
    basePoints.forEach((pt, idx) => {
      doc.setFillColor(255, 255, 255);
      doc.circle(pt.x, pt.y, 2.0, 'F');
      doc.setDrawColor(colorPrimary[0], colorPrimary[1], colorPrimary[2]);
      doc.setLineWidth(0.6);
      doc.circle(pt.x, pt.y, 2.0, 'S');

      // Callout badge for August final base
      if (idx === 4) {
        doc.setFillColor(colorPrimary[0], colorPrimary[1], colorPrimary[2]);
        doc.roundedRect(pt.x - 7.5, pt.y - 7.2, 15, 4.5, 1, 1, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(5.2);
        doc.setTextColor(255, 255, 255);
        doc.text('2.471 Base', pt.x, pt.y - 4.0, { align: 'center' });
      } else {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(4.6);
        doc.setTextColor(colorPrimary[0], colorPrimary[1], colorPrimary[2]);
        doc.text(pt.val.toLocaleString('es-CO'), pt.x, pt.y - 2.8, { align: 'center' });
      }
    });

    // Chart Footer Pill
    const pillY = y + 76;
    const pillH = 17.5;
    doc.setFillColor(240, 253, 244);
    doc.roundedRect(x + 3.5, pillY, chartW - 7, pillH, 1.5, 1.5, 'F');
    doc.setDrawColor(187, 247, 208);
    doc.roundedRect(x + 3.5, pillY, chartW - 7, pillH, 1.5, 1.5, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.8);
    doc.setTextColor(colorEmerald[0], colorEmerald[1], colorEmerald[2]);
    doc.text('Patrón Visual: Consolidación Continua sin Pérdida de Seguidores', x + 5.5, pillY + 4.2);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(5.2);
    doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
    doc.text('• Se ganaron +508 seguidores netos a lo largo del periodo auditado.', x + 5.5, pillY + 8.2);
    doc.text('• Base consolidada en 2.471 decisores (79,7% en rango de compra de 25 a 54 años).', x + 5.5, pillY + 12.0);
    doc.text('• Base semilla ideal para generar audiencias similares (Lookalike 1%) en Meta Ads.', x + 5.5, pillY + 15.5);
  }

  // -------------------------------------------------------------
  // GRÁFICA 3.4: MIX DE FORMATOS & FRECUENCIA PUBLICADA (Bottom Right)
  // -------------------------------------------------------------
  {
    const x = chartXRight;
    const y = chartY2;
    doc.setFillColor(colorCardBg[0], colorCardBg[1], colorCardBg[2]);
    doc.roundedRect(x, y, chartW, chartH, 2, 2, 'F');
    doc.setDrawColor(colorBorder[0], colorBorder[1], colorBorder[2]);
    doc.roundedRect(x, y, chartW, chartH, 2, 2, 'S');

    // Accent line
    doc.setFillColor(109, 40, 217); // Purple
    doc.roundedRect(x, y, chartW, 1.8, 1, 1, 'F');

    // Title (Row 1: strictly on top line)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.8);
    doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
    doc.text('3.4 MIX DE FORMATOS & FRECUENCIA', x + 3.5, y + 5.5);

    // Row 2: Subtitle on Left
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(4.9);
    doc.setTextColor(colorTextMuted[0], colorTextMuted[1], colorTextMuted[2]);
    doc.text('Piezas publicadas por tipo', x + 3.5, y + 9.2);

    // Row 2: Legend on Right (Cleanly separated from title and subtitle)
    const legY4 = y + 7.4;
    doc.setFillColor(colorPrimary[0], colorPrimary[1], colorPrimary[2]);
    doc.roundedRect(x + 44, legY4, 2.6, 2.4, 0.5, 0.5, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(4.5);
    doc.setTextColor(colorPrimary[0], colorPrimary[1], colorPrimary[2]);
    doc.text('Posts', x + 47.8, legY4 + 1.9);

    doc.setFillColor(colorOrange[0], colorOrange[1], colorOrange[2]);
    doc.roundedRect(x + 58, legY4, 2.6, 2.4, 0.5, 0.5, 'F');
    doc.setTextColor(colorOrange[0], colorOrange[1], colorOrange[2]);
    doc.text('Reels', x + 61.8, legY4 + 1.9);

    doc.setFillColor(13, 148, 136); // Teal
    doc.roundedRect(x + 72, legY4, 2.6, 2.4, 0.5, 0.5, 'F');
    doc.setTextColor(13, 148, 136);
    doc.text('Historias', x + 75.8, legY4 + 1.9);

    // Plot parameters
    const plotX = x + 11;
    const plotY = y + 15;
    const plotW = 72;
    const plotH = 54;
    const maxPieces = 50;

    // Grid lines & labels (0, 10, 20, 30, 40, 50 piezas)
    const gridPieces = [0, 10, 20, 30, 40, 50];
    gridPieces.forEach((val) => {
      const lineY = plotY + plotH - (val / maxPieces) * plotH;
      doc.setDrawColor(230, 235, 242);
      doc.setLineWidth(0.2);
      doc.line(plotX, lineY, plotX + plotW, lineY);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(4.8);
      doc.setTextColor(colorTextMuted[0], colorTextMuted[1], colorTextMuted[2]);
      doc.text(`${val}`, plotX - 2, lineY + 1.5, { align: 'right' });
    });

    // Baseline axis
    doc.setDrawColor(colorBorder[0], colorBorder[1], colorBorder[2]);
    doc.setLineWidth(0.4);
    doc.line(plotX, plotY + plotH, plotX + plotW, plotY + plotH);

    const postsData = [11, 11, 7, 3, 1];
    const reelsData = [2, 3, 2, 3, 3];
    const historiasData = [38, 44, 3, 12, 1];
    const colStep = plotW / 5;

    // Render 3 clustered bars per month
    postsData.forEach((posts, idx) => {
      const reels = reelsData[idx];
      const historias = historiasData[idx];
      const colCenter = plotX + idx * colStep + colStep / 2;

      const subBarW = 3.6;

      // Posts Bar (Navy)
      const x1 = colCenter - 5.6;
      const h1 = (posts / maxPieces) * plotH;
      const y1 = plotY + plotH - h1;
      doc.setFillColor(colorPrimary[0], colorPrimary[1], colorPrimary[2]);
      doc.roundedRect(x1, y1, subBarW, h1, 0.6, 0.6, 'F');

      // Reels Bar (Orange)
      const x2 = colCenter - 1.8;
      const h2 = (reels / maxPieces) * plotH;
      const y2 = plotY + plotH - h2;
      doc.setFillColor(colorOrange[0], colorOrange[1], colorOrange[2]);
      doc.roundedRect(x2, y2, subBarW, h2, 0.6, 0.6, 'F');

      // Historias Bar (Teal)
      const x3 = colCenter + 2.0;
      const h3 = (historias / maxPieces) * plotH;
      const y3 = plotY + plotH - h3;
      doc.setFillColor(13, 148, 136);
      doc.roundedRect(x3, y3, subBarW, h3, 0.6, 0.6, 'F');

      // Values above bars with careful vertical separation
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(4.1);
      doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
      if (posts > 0) doc.text(`${posts}`, x1 + subBarW / 2, y1 - 0.8, { align: 'center' });
      if (reels > 0) doc.text(`${reels}`, x2 + subBarW / 2, y2 - 0.8, { align: 'center' });
      if (historias > 0) doc.text(`${historias}`, x3 + subBarW / 2, y3 - 0.8, { align: 'center' });

      // August Alert Marker
      if (idx === 4) {
        doc.setFillColor(254, 242, 242);
        doc.roundedRect(colCenter - 6.5, plotY + 1.5, 13, 4.2, 0.8, 0.8, 'F');
        doc.setDrawColor(239, 68, 68);
        doc.setLineWidth(0.3);
        doc.roundedRect(colCenter - 6.5, plotY + 1.5, 13, 4.2, 0.8, 0.8, 'S');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(4.5);
        doc.setTextColor(185, 28, 28);
        doc.text('ALERTA META', colCenter, plotY + 4.5, { align: 'center' });
      }

      // Month label below axis
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(5.8);
      doc.setTextColor(idx === 4 ? 185 : colorTextDark[0], idx === 4 ? 28 : colorTextDark[1], idx === 4 ? 28 : colorTextDark[2]);
      doc.text(monthLabels[idx], colCenter, plotY + plotH + 4.2, { align: 'center' });
    });

    // Chart Footer Pill
    const pillY = y + 76;
    const pillH = 17.5;
    doc.setFillColor(254, 242, 242);
    doc.roundedRect(x + 3.5, pillY, chartW - 7, pillH, 1.5, 1.5, 'F');
    doc.setDrawColor(254, 202, 202);
    doc.roundedRect(x + 3.5, pillY, chartW - 7, pillH, 1.5, 1.5, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.8);
    doc.setTextColor(185, 28, 28);
    doc.text('Patrón Visual: Causa Raíz de la Advertencia Algorítmica de Meta', x + 5.5, pillY + 4.2);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(5.2);
    doc.setTextColor(127, 29, 29);
    doc.text('• La gráfica evidencia el desplome en historias (de 44 en mayo a 1 en agosto).', x + 5.5, pillY + 8.2);
    doc.text('• El feed se redujo a 4 piezas totales, disparando la notificación por inactividad.', x + 5.5, pillY + 12.0);
    doc.text('• La solución para septiembre: 11 piezas (7 reels + 4 carruseles) y 2 historias/día.', x + 5.5, pillY + 15.5);
  }

  // -------------------------------------------------------------
  // ROW 3: SÍNTESIS ANALÍTICA DE LAS GRÁFICAS (y = 244 to 278)
  // -------------------------------------------------------------
  {
    const yInsights = chartY2 + chartH + 3.0; // 144 + 97 + 3 = 244mm
    const insightH = 34.0;
    const insColW = (contentWidth - 6) / 3; // 58.6mm

    const findings = [
      {
        tag: 'HALLAZGO 1 · ALCANCE',
        title: 'Apalancamiento en Historias',
        text: 'La gráfica 3.1 demuestra que Mayo cuadruplicó el volumen orgánico (35.142 vistas) gracias a 44 historias activas (45,3% del total). Reactivar la presencia diaria en historias es la clave para multiplicar el alcance sin costo.',
        color: colorAccent,
        bg: [240, 249, 255],
        border: [186, 230, 253],
      },
      {
        tag: 'HALLAZGO 2 · CONVERSIÓN',
        title: 'Tráfico Altamente Calificado',
        text: 'La gráfica 3.2 muestra que la tasa de visita al perfil se disparó del 27,2% al 48,2% (pico de 53,5%). Quienes ven el contenido investigan la biografía; habilitar catálogo y WhatsApp monetizará este tráfico de inmediato.',
        color: colorOrange,
        bg: [255, 247, 237],
        border: [254, 215, 170],
      },
      {
        tag: 'HALLAZGO 3 · CONTENIDO',
        title: 'Reels: Activo Comercial Estrella',
        text: 'La gráfica 3.4 y los datos de agosto prueban que los 3 reels concentraron el 85% de las interacciones. Los videos operativos en patio (montacargas y andenes) son el motor indiscutible para liderar las campañas de pauta en Q4.',
        color: colorEmerald,
        bg: [240, 253, 244],
        border: [187, 247, 208],
      },
    ];

    findings.forEach((f, idx) => {
      const cardX = margin + idx * (insColW + 3);

      doc.setFillColor(f.bg[0], f.bg[1], f.bg[2]);
      doc.roundedRect(cardX, yInsights, insColW, insightH, 1.8, 1.8, 'F');
      doc.setDrawColor(f.border[0], f.border[1], f.border[2]);
      doc.roundedRect(cardX, yInsights, insColW, insightH, 1.8, 1.8, 'S');

      // Top colored bar
      doc.setFillColor(f.color[0], f.color[1], f.color[2]);
      doc.roundedRect(cardX, yInsights, insColW, 1.4, 0.8, 0.8, 'F');

      // Tag
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(5.2);
      doc.setTextColor(f.color[0], f.color[1], f.color[2]);
      doc.text(f.tag, cardX + 3.0, yInsights + 4.8);

      // Title
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(6.6);
      doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
      doc.text(f.title, cardX + 3.0, yInsights + 9.0);

      // Paragraph
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(5.3);
      doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
      const splitFinding = doc.splitTextToSize(f.text, insColW - 6);
      doc.text(splitFinding.slice(0, 5), cardX + 3.0, yInsights + 13.0);
    });
  }

  drawPageFooter(2);

  // ==========================================
  // PÁGINA 3: 5 OPORTUNIDADES DE MEJORA (SEPTIEMBRE)
  // ==========================================
  doc.addPage();
  drawHeader(
    'PLAN DE MEJORA OPERATIVA PARA SEPTIEMBRE',
    '5 Oportunidades Prioritarias Derivadas de la Auditoría de Agosto | Hoja de Ruta B2B',
    'PLAN DE ACCIÓN'
  );

  yPos = margin + 25;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
  doc.text('4. LAS 5 DIRECTRICES PRIORITARIAS PARA REACTIVAR EL ALGORITMO', margin, yPos);
  yPos += 4.5;

  // Render 5 Opportunity Cards with mathematically separated rows inside each card
  const oppCardH = 44.5; // 44.5mm per card
  const oppGap = 2.0;

  OPORTUNIDADES_MEJORA_SEPTIEMBRE.forEach((opp, i) => {
    const cardY = yPos + i * (oppCardH + oppGap);

    // Card background & border
    doc.setFillColor(colorCardBg[0], colorCardBg[1], colorCardBg[2]);
    doc.roundedRect(margin, cardY, contentWidth, oppCardH, 2, 2, 'F');
    doc.setDrawColor(colorBorder[0], colorBorder[1], colorBorder[2]);
    doc.roundedRect(margin, cardY, contentWidth, oppCardH, 2, 2, 'S');

    // Left vertical accent stripe
    const stripeColor =
      i === 0
        ? colorAccent
        : i === 1
        ? colorOrange
        : i === 2
        ? colorEmerald
        : i === 3
        ? [147, 51, 234]
        : colorAccent;
    doc.setFillColor(stripeColor[0], stripeColor[1], stripeColor[2]);
    doc.roundedRect(margin, cardY, 2.5, oppCardH, 1, 1, 'F');

    // Row 1: Header of card (Number + Category Pill + Full Title)
    // Number pill
    doc.setFillColor(colorPrimary[0], colorPrimary[1], colorPrimary[2]);
    doc.roundedRect(margin + 5, cardY + 2.8, 5.5, 5.2, 1.0, 1.0, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.5);
    doc.setTextColor(255, 255, 255);
    doc.text(opp.numero, margin + 7.75, cardY + 6.4, { align: 'center' });

    // Category badge
    doc.setFillColor(224, 242, 254);
    doc.roundedRect(margin + 12, cardY + 2.8, 24, 5.2, 1.0, 1.0, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.8);
    doc.setTextColor(colorAccent[0], colorAccent[1], colorAccent[2]);
    doc.text(opp.categoria.toUpperCase(), margin + 24, cardY + 6.4, { align: 'center' });

    // Full Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.6);
    doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
    doc.text(opp.titulo, margin + 38.5, cardY + 6.6);

    // Row 2: Two Comparative Columns (Diagnóstico vs. Oportunidad)
    const subColW = (contentWidth - 14) / 2; // 84mm
    const subColH = 14.5;
    const subY = cardY + 9.5;

    // Left Sub-box: Diagnóstico de Agosto
    doc.setFillColor(254, 242, 242);
    doc.roundedRect(margin + 4.5, subY, subColW, subColH, 1.5, 1.5, 'F');
    doc.setDrawColor(254, 202, 202);
    doc.roundedRect(margin + 4.5, subY, subColW, subColH, 1.5, 1.5, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.0);
    doc.setTextColor(185, 28, 28);
    doc.text('Diagnóstico de Agosto (Causa Raíz):', margin + 6.5, subY + 3.8);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(5.5);
    doc.setTextColor(127, 29, 29);
    const splitDiag = doc.splitTextToSize(opp.diagnostico, subColW - 5);
    doc.text(splitDiag.slice(0, 2), margin + 6.5, subY + 7.2);

    // Right Sub-box: Oportunidad de Mejora Septiembre
    const rightSubX = margin + 4.5 + subColW + 5;
    doc.setFillColor(240, 253, 244);
    doc.roundedRect(rightSubX, subY, subColW, subColH, 1.5, 1.5, 'F');
    doc.setDrawColor(187, 247, 208);
    doc.roundedRect(rightSubX, subY, subColW, subColH, 1.5, 1.5, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.0);
    doc.setTextColor(21, 128, 61);
    doc.text('Oportunidad de Mejora para Septiembre:', rightSubX + 2.5, subY + 3.8);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(5.5);
    doc.setTextColor(20, 83, 45);
    const splitOpp = doc.splitTextToSize(opp.oportunidadMejora, subColW - 5);
    doc.text(splitOpp.slice(0, 2), rightSubX + 2.5, subY + 7.2);

    // Row 3: Implementation Checklist & Target KPI
    // Subtle separator line
    doc.setDrawColor(230, 235, 242);
    doc.setLineWidth(0.2);
    doc.line(margin + 5, cardY + 25.5, margin + contentWidth - 5, cardY + 25.5);

    // Header of Row 3
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.2);
    doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
    doc.text('Plan de Acción Prioritario:', margin + 5, cardY + 29.2);

    // KPI Badge on right (Pill container)
    const kpiText = `Meta Clave: ${opp.kpisObjetivo}`;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.6);
    const kpiW = doc.getTextWidth(kpiText) + 5;
    const kpiX = pageWidth - margin - 5 - kpiW;
    doc.setFillColor(240, 253, 244);
    doc.roundedRect(kpiX, cardY + 26.4, kpiW, 4.0, 1, 1, 'F');
    doc.setDrawColor(187, 247, 208);
    doc.roundedRect(kpiX, cardY + 26.4, kpiW, 4.0, 1, 1, 'S');
    doc.setTextColor(21, 128, 61);
    doc.text(kpiText, kpiX + kpiW / 2, cardY + 29.3, { align: 'center' });

    // Action items rendered with crisp vector bullet dots (Each on its own line)
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(5.5);
    doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);

    const actions = opp.planAccion.filter(Boolean);
    const actionYOffsets = [cardY + 33.0, cardY + 36.6, cardY + 40.2];

    actions.forEach((act, aIdx) => {
      if (aIdx < 3) {
        const aY = actionYOffsets[aIdx];
        // Emerald vector dot bullet
        doc.setFillColor(colorEmerald[0], colorEmerald[1], colorEmerald[2]);
        doc.circle(margin + 7, aY - 0.7, 0.75, 'F');

        // Text (Guaranteed full card width so it never wraps prematurely or collides)
        const splitAct = doc.splitTextToSize(act, contentWidth - 16);
        doc.text(splitAct[0] || '', margin + 9.5, aY);
      }
    });
  });

  drawPageFooter(3);

  // ==========================================
  // PÁGINA 4: BLUEPRINT ADS Q4 & MARCO FINANCIERO
  // ==========================================
  doc.addPage();
  drawHeader(
    'BLUEPRINT DE CAMPAÑAS META ADS & INVERSIÓN Q4',
    'Estructura Full-Funnel, KPIs de Retorno (ROAS), Presupuesto & Dayparting',
    'ESTRATEGIA Q4'
  );

  yPos = margin + 25;

  // SECTION 5: ARQUITECTURA DE CAMPAÑAS FULL-FUNNEL
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
  doc.text('5. ARQUITECTURA DE CAMPAÑAS FULL-FUNNEL PARA META ADS', margin, yPos);
  yPos += 4.5;

  const campaignBoxes = [
    {
      etapa: 'TOFU · Descubrimiento & Reconocimiento (40% Presupuesto)',
      objetivo: 'Alcance B2B & Reproducciones de Video (ThruPlay)',
      audiencia:
        'Gran Caracas y La Guaira. Intereses: Retail, Supermercados, Compras B2B. Lookalike 1% de seguidores.',
      formato: 'Reels dinámicos (15-30s): Montacargas en patio, flota saliendo a las 5:00 AM y andenes.',
      kpis: 'CPM < $3.00 USD | Hook Rate (3s) > 60% | Visitas continuas al perfil comercial',
      color: colorAccent,
    },
    {
      etapa: 'MOFU · Consideración & Solución en PDV (35% Presupuesto)',
      objetivo: 'Tráfico Cualificado al Catálogo & Generación de Prospectos',
      audiencia:
        'Retargeting a quienes vieron > 50% de videos TOFU y visitaron el perfil en los últimos 90 días.',
      formato:
        'Carruseles de Casos de Éxito: Caso Alimentos Mary, Checklist de supervisión en retail y rotación en anaquel.',
      kpis: 'CTR Saliente > 1.8% | Costo por Clic < $0.25 USD | Descargas de dossier mayorista',
      color: colorEmerald,
    },
    {
      etapa: 'BOFU · Conversión & Cierre Comercial (25% Presupuesto)',
      objetivo: 'Clics directos a WhatsApp Business & Formularios Instantáneos',
      audiencia:
        'Tomadores de decisión hiper-cualificados: Gerentes de compras, directores comerciales y dueños de tiendas.',
      formato:
        'Anuncios de temporada: "Planifica el abastecimiento de fin de año con Davimar Group (Panes de jamón, quesos y embutidos)".',
      kpis: 'CPL (Costo por Lead) $6.00 - $12.00 USD | Tasa de contacto WhatsApp > 80%',
      color: colorOrange,
    },
  ];

  const boxH = 25.5;
  campaignBoxes.forEach((c) => {
    doc.setFillColor(colorCardBg[0], colorCardBg[1], colorCardBg[2]);
    doc.roundedRect(margin, yPos, contentWidth, boxH, 2, 2, 'F');
    doc.setDrawColor(colorBorder[0], colorBorder[1], colorBorder[2]);
    doc.roundedRect(margin, yPos, contentWidth, boxH, 2, 2, 'S');

    // Left accent bar
    doc.setFillColor(c.color[0], c.color[1], c.color[2]);
    doc.roundedRect(margin, yPos, 2.5, boxH, 1, 1, 'F');

    // Row 1: Stage Title (Left) + Objective (Right)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.0);
    doc.setTextColor(c.color[0], c.color[1], c.color[2]);
    doc.text(c.etapa, margin + 5, yPos + 4.8);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.8);
    doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
    const objText = `Obj: ${c.objetivo}`;
    const splitObj = doc.splitTextToSize(objText, 82);
    doc.text(splitObj[0] || '', pageWidth - margin - 4, yPos + 4.8, { align: 'right' });

    // Row 2: Audiencia (Comfortable vertical rhythm)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.0);
    doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
    doc.text('Audiencia Objetivo:', margin + 5, yPos + 9.8);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(5.8);
    doc.setTextColor(colorTextMuted[0], colorTextMuted[1], colorTextMuted[2]);
    const splitAud = doc.splitTextToSize(c.audiencia, contentWidth - 36);
    doc.text(splitAud.slice(0, 1), margin + 30, yPos + 9.8);

    // Row 3: Formato
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.0);
    doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
    doc.text('Formatos Creativos:', margin + 5, yPos + 14.8);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(5.8);
    doc.setTextColor(colorTextMuted[0], colorTextMuted[1], colorTextMuted[2]);
    const splitFor = doc.splitTextToSize(c.formato, contentWidth - 36);
    doc.text(splitFor.slice(0, 1), margin + 30, yPos + 14.8);

    // Row 4: KPIs
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.0);
    doc.setTextColor(colorEmerald[0], colorEmerald[1], colorEmerald[2]);
    doc.text('KPIs de Control & Retorno:', margin + 5, yPos + 19.8);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(5.8);
    doc.setTextColor(colorEmerald[0], colorEmerald[1], colorEmerald[2]);
    doc.text(c.kpis, margin + 38, yPos + 19.8);

    yPos += boxH + 2.5;
  });

  yPos += 2.0;

  // SECTION 6: MARCO FINANCIERO & SIMULADOR DE INVERSIÓN
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
  doc.text('6. MARCO FINANCIERO & SIMULADOR DE INVERSIÓN MENSUAL', margin, yPos);
  yPos += 4.5;

  const simColW = (contentWidth - 8) / 3;
  const simH = 35.5;

  const scenarios = [
    {
      titulo: 'ESCENARIO 1: ENTRADA & TEST',
      presupuesto: '$350 USD / mes',
      daily: '($11.6 USD / día)',
      dist: 'TOFU: $140 | MOFU: $120 | BOFU: $90',
      leads: '25 a 45 Prospectos B2B / mes',
      cpl: 'CPL Estimado: $7.80 - $11.00 USD',
      roas: 'Cierre esperado: 1 a 2 contratos ($2k - $4k USD). ROAS: 5x a 10x.',
      color: colorAccent,
    },
    {
      titulo: 'ESCENARIO 2: RECOMENDADO',
      presupuesto: '$500 USD / mes',
      daily: '($16.6 USD / día)',
      dist: 'TOFU: $200 | MOFU: $175 | BOFU: $125',
      leads: '45 a 70 Prospectos B2B / mes',
      cpl: 'CPL Estimado: $7.10 - $9.50 USD',
      roas: 'Cierre esperado: 2 a 4 contratos ($4k - $8k USD). ROAS: 8x a 16x.',
      color: colorEmerald,
    },
    {
      titulo: 'ESCENARIO 3: TEMPORADA ALTA Q4',
      presupuesto: '$650 USD / mes',
      daily: '($21.6 USD / día)',
      dist: 'TOFU: $260 | MOFU: $230 | BOFU: $160',
      leads: '70 a 100+ Prospectos B2B / mes',
      cpl: 'CPL Estimado: $6.50 - $8.80 USD',
      roas: 'Cierre esperado: 3 a 6 contratos mayoristas. ROAS: 10x a 20x.',
      color: colorOrange,
    },
  ];

  scenarios.forEach((s, i) => {
    const x = margin + i * (simColW + 4);

    doc.setFillColor(colorCardBg[0], colorCardBg[1], colorCardBg[2]);
    doc.roundedRect(x, yPos, simColW, simH, 2, 2, 'F');
    doc.setDrawColor(colorBorder[0], colorBorder[1], colorBorder[2]);
    doc.roundedRect(x, yPos, simColW, simH, 2, 2, 'S');

    // Accent line
    doc.setFillColor(s.color[0], s.color[1], s.color[2]);
    doc.roundedRect(x, yPos, simColW, 1.8, 1, 1, 'F');

    // Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.2);
    doc.setTextColor(colorTextMuted[0], colorTextMuted[1], colorTextMuted[2]);
    doc.text(s.titulo, x + 3.5, yPos + 5.5);

    // Budget
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.0);
    doc.setTextColor(s.color[0], s.color[1], s.color[2]);
    doc.text(s.presupuesto, x + 3.5, yPos + 10.5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(5.8);
    doc.setTextColor(colorTextMuted[0], colorTextMuted[1], colorTextMuted[2]);
    doc.text(s.daily, x + 3.5, yPos + 14.2);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(5.8);
    doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
    doc.text(s.dist, x + 3.5, yPos + 18.2);
    doc.text(s.leads, x + 3.5, yPos + 22.0);
    doc.text(s.cpl, x + 3.5, yPos + 25.8);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.5);
    doc.setTextColor(colorEmerald[0], colorEmerald[1], colorEmerald[2]);
    const splitRoas = doc.splitTextToSize(s.roas, simColW - 6);
    doc.text(splitRoas, x + 3.5, yPos + 29.8);
  });

  yPos += simH + 5.0;

  // SECTION 7: HORARIOS PICO & REGLAS DE PUJA
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
  doc.text('7. DÍAS Y HORARIOS PICO DE AUDIENCIA & MEJORES PRÁCTICAS', margin, yPos);
  yPos += 4.5;

  const hoursBoxH = 22.5;
  doc.setFillColor(colorCardBg[0], colorCardBg[1], colorCardBg[2]);
  doc.roundedRect(margin, yPos, contentWidth, hoursBoxH, 2, 2, 'F');
  doc.setDrawColor(colorBorder[0], colorBorder[1], colorBorder[2]);
  doc.roundedRect(margin, yPos, contentWidth, hoursBoxH, 2, 2, 'S');

  const tips = [
    {
      title: 'Ventana Dorada B2B:',
      text: 'Lunes, Jueves y Domingo 6:00 PM a 9:00 PM. Programar reels y carruseles entre 5:30 PM y 6:30 PM.',
    },
    {
      title: 'Franja de Almuerzo:',
      text: '12:00 PM a 2:00 PM. Ideal para carruseles de supervisión de góndola, trade marketing y stocks.',
    },
    {
      title: 'Regla de Oro Meta Ads:',
      text: 'Configurar campañas desde Ads Manager (Business Suite) y EVITAR el botón "Promocionar publicación".',
    },
  ];

  tips.forEach((t, idx) => {
    const tipY = yPos + 5.0 + idx * 5.6;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.2);
    doc.setTextColor(colorAccent[0], colorAccent[1], colorAccent[2]);
    doc.text(t.title, margin + 4.5, tipY);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(5.7);
    doc.setTextColor(colorTextDark[0], colorTextDark[1], colorTextDark[2]);
    const splitTip = doc.splitTextToSize(t.text, contentWidth - 44);
    doc.text(splitTip[0] || '', margin + 40, tipY);
  });

  yPos += hoursBoxH + 4.5;

  // SECTION 8: DICTAMEN EJECUTIVO DE AUDITORÍA
  const dictamenH = 27.0;
  doc.setFillColor(colorPrimary[0], colorPrimary[1], colorPrimary[2]);
  doc.roundedRect(margin, yPos, contentWidth, dictamenH, 2, 2, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(255, 255, 255);
  doc.text('8. DICTAMEN EJECUTIVO DE AUDITORÍA Y HOJA DE RUTA:', margin + 5, yPos + 5.2);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.2);
  doc.setTextColor(186, 230, 253);
  doc.text('ESTRATEGIA VALIDADA PARA ACTIVACIÓN', pageWidth - margin - 5, yPos + 5.2, {
    align: 'right',
  });

  // Divider line
  doc.setDrawColor(30, 58, 138);
  doc.setLineWidth(0.2);
  doc.line(margin + 5, yPos + 7.2, pageWidth - margin - 5, yPos + 7.2);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(5.6);
  doc.setTextColor(241, 245, 249);
  const dictamenText =
    'La cuenta @davimargroup presenta una solidez comercial sobresaliente con 2.471 seguidores de alta decisión de compra (79,7% en edades de 25 a 54 años) y una tasa de conversión a perfil récord del 48,2%. La aplicación del plan de septiembre (7 reels y 4 carruseles) levantará la alerta algorítmica de Meta, reactivará el alcance diario y creará los públicos semilla personalizados necesarios para maximizar el retorno de inversión comercial (ROAS de 4x a 12x) en Q4.';
  const splitDictamen = doc.splitTextToSize(dictamenText, contentWidth - 10);
  doc.text(splitDictamen.slice(0, 4), margin + 5, yPos + 10.5);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(5.4);
  doc.setTextColor(148, 163, 184);
  doc.text(
    'Davimar Group (@davimargroup) · Departamento de Estrategia Digital y Trade Marketing · Septiembre 2026',
    margin + 5,
    yPos + 23.8
  );

  drawPageFooter(4);

  // Trigger browser download with clean timestamped filename
  const filename = `Davimar_Group_Auditoria_Estrategica_Meta_Ads_${fechaHoy.replace(/\s+/g, '_')}.pdf`;
  doc.save(filename);
}

