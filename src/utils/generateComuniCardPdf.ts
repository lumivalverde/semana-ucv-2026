import { jsPDF } from 'jspdf';

export interface ComuniCardData {
  names: string;
  surnames: string;
  email: string;
  dniOrCode: string;
  cycle: string;
  campus?: string;
  credentialId?: string;
}

/**
 * Generates an ultra high-resolution ComuniCard PDF with exact website color palette:
 * Navy: #050B18, Card: #0A152E, BlueCard: #111F42, Border: #1E3266, Red: #D91B24
 */
export async function generateComuniCardPdf(data: ComuniCardData): Promise<void> {
  const width = 800;
  const height = 1240;

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('No se pudo inicializar el contexto gráfico');
  }

  const fullName = `${data.names} ${data.surnames}`.trim() || 'Valeria Mendoza';
  const cycleText = data.cycle ? `Ciclo ${data.cycle}` : 'Ciclo I';
  const dniText = data.dniOrCode || '70123456';
  const emailText = data.email || 'correo@ucvvirtual.edu.pe';
  const credId = data.credentialId || `UCV-2026-${Math.floor(1000 + Math.random() * 9000)}`;

  // 1. Background Fill: Deep UCV Navy
  ctx.fillStyle = '#050B18';
  ctx.fillRect(0, 0, width, height);

  // 2. Ambient Decorative Glow (Top and Bottom Right)
  const topGlow = ctx.createRadialGradient(width / 2, 0, 10, width / 2, 0, 450);
  topGlow.addColorStop(0, 'rgba(217, 27, 36, 0.25)');
  topGlow.addColorStop(1, 'rgba(5, 11, 24, 0)');
  ctx.fillStyle = topGlow;
  ctx.fillRect(0, 0, width, 500);

  const bottomGlow = ctx.createRadialGradient(width - 50, height - 50, 20, width - 50, height - 50, 400);
  bottomGlow.addColorStop(0, 'rgba(30, 50, 102, 0.4)');
  bottomGlow.addColorStop(1, 'rgba(5, 11, 24, 0)');
  ctx.fillStyle = bottomGlow;
  ctx.fillRect(0, height - 500, width, 500);

  // 3. Card Outer Border & Container
  const margin = 28;
  const cardW = width - margin * 2;
  const cardH = height - margin * 2;
  const radius = 28;

  // Outer glow border
  ctx.strokeStyle = '#1E3266';
  ctx.lineWidth = 3;
  drawRoundedRect(ctx, margin, margin, cardW, cardH, radius);
  ctx.stroke();

  // Inner card background
  ctx.fillStyle = '#0A152E';
  drawRoundedRect(ctx, margin + 4, margin + 4, cardW - 8, cardH - 8, radius - 4);
  ctx.fill();

  // 4. Lanyard Hole Simulation
  ctx.fillStyle = '#050B18';
  ctx.strokeStyle = '#1E3266';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(width / 2, margin + 26, 45, 10, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // 5. Header Banner Box
  const headerY = margin + 54;
  const headerH = 150;
  const headerGrad = ctx.createLinearGradient(margin + 4, headerY, width - margin - 4, headerY + headerH);
  headerGrad.addColorStop(0, '#111F42');
  headerGrad.addColorStop(1, '#0A152E');
  ctx.fillStyle = headerGrad;
  drawRoundedRect(ctx, margin + 12, headerY, cardW - 24, headerH, 18);
  ctx.fill();

  ctx.strokeStyle = '#D91B24';
  ctx.lineWidth = 2;
  drawRoundedRect(ctx, margin + 12, headerY, cardW - 24, headerH, 18);
  ctx.stroke();

  // UCV Logo Box
  const logoX = margin + 30;
  const logoY = headerY + 28;
  const logoGrad = ctx.createLinearGradient(logoX, logoY, logoX + 85, logoY + 85);
  logoGrad.addColorStop(0, '#D91B24');
  logoGrad.addColorStop(1, '#990008');
  ctx.fillStyle = logoGrad;
  drawRoundedRect(ctx, logoX, logoY, 85, 85, 16);
  ctx.fill();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 36px "Outfit", "Inter", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('UCV', logoX + 42.5, logoY + 44);

  // Header Texts
  ctx.textAlign = 'left';
  ctx.fillStyle = '#94A3B8';
  ctx.font = 'bold 15px "Inter", sans-serif';
  ctx.letterSpacing = '3px';
  ctx.fillText('UNIVERSIDAD CÉSAR VALLEJO', logoX + 105, headerY + 44);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = '900 24px "Outfit", "Inter", sans-serif';
  ctx.letterSpacing = '1px';
  ctx.fillText('SEMANA DE COMUNICADORES', logoX + 105, headerY + 76);

  ctx.fillStyle = '#D91B24';
  ctx.font = 'bold 16px "Inter", sans-serif';
  ctx.fillText('CONGRESO ACADÉMICO 2026', logoX + 105, headerY + 104);

  // Edition Badge
  ctx.fillStyle = 'rgba(217, 27, 36, 0.2)';
  drawRoundedRect(ctx, cardW - 55, headerY + 20, 65, 30, 8);
  ctx.fill();
  ctx.fillStyle = '#D91B24';
  ctx.font = 'bold 14px "Inter", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('2026', cardW - 22, headerY + 36);

  // 6. Sub-header Ribbon "COMUNICARD"
  const ribbonY = headerY + headerH + 24;
  ctx.fillStyle = '#111F42';
  drawRoundedRect(ctx, margin + 12, ribbonY, cardW - 24, 46, 12);
  ctx.fill();
  ctx.strokeStyle = '#1E3266';
  ctx.lineWidth = 1.5;
  drawRoundedRect(ctx, margin + 12, ribbonY, cardW - 24, 46, 12);
  ctx.stroke();

  ctx.fillStyle = '#D91B24';
  ctx.font = '900 16px "Outfit", "Inter", sans-serif';
  ctx.textAlign = 'center';
  ctx.letterSpacing = '2px';
  ctx.fillText('✦ COMUNICARD | CREDENCIAL OFICIAL DE ASISTENTE ✦', width / 2, ribbonY + 24);

  // 7. Attendee Avatar Graphic
  const avatarCenterY = ribbonY + 140;
  // Glowing outer ring
  const avatarRing = ctx.createRadialGradient(width / 2, avatarCenterY, 55, width / 2, avatarCenterY, 80);
  avatarRing.addColorStop(0, 'rgba(217, 27, 36, 0.5)');
  avatarRing.addColorStop(1, 'rgba(10, 21, 46, 0)');
  ctx.fillStyle = avatarRing;
  ctx.beginPath();
  ctx.arc(width / 2, avatarCenterY, 80, 0, Math.PI * 2);
  ctx.fill();

  // Avatar base circle
  const avatarGrad = ctx.createLinearGradient(width / 2 - 60, avatarCenterY - 60, width / 2 + 60, avatarCenterY + 60);
  avatarGrad.addColorStop(0, '#D91B24');
  avatarGrad.addColorStop(1, '#1E3266');
  ctx.fillStyle = avatarGrad;
  ctx.beginPath();
  ctx.arc(width / 2, avatarCenterY, 62, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#050B18';
  ctx.beginPath();
  ctx.arc(width / 2, avatarCenterY, 58, 0, Math.PI * 2);
  ctx.fill();

  // Stylized silhouette / Icon in avatar
  ctx.fillStyle = '#D91B24';
  ctx.beginPath();
  ctx.arc(width / 2, avatarCenterY - 14, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(width / 2, avatarCenterY + 36, 38, 22, 0, Math.PI, Math.PI * 2);
  ctx.fill();

  // 8. Attendee Name (Prominent & Clean)
  const nameY = avatarCenterY + 95;
  ctx.textAlign = 'center';
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '900 32px "Outfit", "Inter", sans-serif';
  ctx.letterSpacing = '0.5px';
  // Wrap or fit name if too long
  if (fullName.length > 26) {
    ctx.font = '900 26px "Outfit", "Inter", sans-serif';
  }
  ctx.fillText(fullName, width / 2, nameY);

  // 9. Pill Badges: Role & Ciclo
  const pillsY = nameY + 28;
  const pillHeight = 36;

  // Role Pill
  ctx.fillStyle = 'rgba(217, 27, 36, 0.18)';
  drawRoundedRect(ctx, width / 2 - 195, pillsY, 190, pillHeight, 18);
  ctx.fill();
  ctx.strokeStyle = '#D91B24';
  ctx.lineWidth = 1.5;
  drawRoundedRect(ctx, width / 2 - 195, pillsY, 190, pillHeight, 18);
  ctx.stroke();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 14px "Inter", sans-serif';
  ctx.fillText('Estudiante de Comunicación', width / 2 - 100, pillsY + 19);

  // Cycle Pill
  ctx.fillStyle = '#111F42';
  drawRoundedRect(ctx, width / 2 + 10, pillsY, 185, pillHeight, 18);
  ctx.fill();
  ctx.strokeStyle = '#1E3266';
  ctx.lineWidth = 1.5;
  drawRoundedRect(ctx, width / 2 + 10, pillsY, 185, pillHeight, 18);
  ctx.stroke();

  ctx.fillStyle = '#D91B24';
  ctx.font = '900 15px "Outfit", "Inter", sans-serif';
  ctx.fillText(`✦ ${cycleText.toUpperCase()} ✦`, width / 2 + 102, pillsY + 19);

  // 10. Information Grid Container
  const infoBoxY = pillsY + 60;
  const infoBoxH = 175;
  ctx.fillStyle = '#050B18';
  drawRoundedRect(ctx, margin + 18, infoBoxY, cardW - 36, infoBoxH, 18);
  ctx.fill();
  ctx.strokeStyle = '#1E3266';
  ctx.lineWidth = 2;
  drawRoundedRect(ctx, margin + 18, infoBoxY, cardW - 36, infoBoxH, 18);
  ctx.stroke();

  // Draw Grid Lines inside
  const col1X = margin + 40;
  const col2X = width / 2 + 20;

  // Row 1: DNI / Código & Modalidad
  const row1Y = infoBoxY + 36;
  ctx.textAlign = 'left';
  ctx.fillStyle = '#94A3B8';
  ctx.font = 'bold 12px "Inter", sans-serif';
  ctx.fillText('CÓDIGO UCV / DNI', col1X, row1Y);
  ctx.fillText('FECHAS DEL CONGRESO', col2X, row1Y);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 18px "Outfit", "Inter", sans-serif';
  ctx.fillText(dniText, col1X, row1Y + 24);
  ctx.fillText('19 - 23 de Octubre, 2026', col2X, row1Y + 24);

  // Divider inside info box
  ctx.strokeStyle = 'rgba(30, 50, 102, 0.6)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(col1X, row1Y + 45);
  ctx.lineTo(width - margin - 40, row1Y + 45);
  ctx.stroke();

  // Row 2: Correo & Sede
  const row2Y = row1Y + 68;
  ctx.fillStyle = '#94A3B8';
  ctx.font = 'bold 12px "Inter", sans-serif';
  ctx.fillText('CORREO ELECTRÓNICO REGISTRADO', col1X, row2Y);
  ctx.fillText('SEDE & MODALIDAD', col2X, row2Y);

  ctx.fillStyle = '#E2E8F0';
  ctx.font = '15px "Inter", sans-serif';
  const displayEmail = emailText.length > 28 ? emailText.substring(0, 25) + '...' : emailText;
  ctx.fillText(displayEmail, col1X, row2Y + 24);
  ctx.fillText('Campus UCV & Streaming Live HD', col2X, row2Y + 24);

  // 11. Security & QR Code Section
  const qrSectionY = infoBoxY + infoBoxH + 24;
  const qrBoxW = 140;
  const qrBoxH = 140;
  const qrX = width - margin - 24 - qrBoxW;
  const qrY = qrSectionY;

  // Draw QR White Box
  ctx.fillStyle = '#FFFFFF';
  drawRoundedRect(ctx, qrX, qrY, qrBoxW, qrBoxH, 14);
  ctx.fill();

  // Draw Procedural Stylized QR Code Matrix inside
  drawStylizedQRCode(ctx, qrX + 12, qrY + 12, qrBoxW - 24, qrBoxH - 24, credId);

  // Left side of QR: Credential ID, Barcode, & Security Guarantee
  const securityX = margin + 24;
  ctx.textAlign = 'left';
  ctx.fillStyle = '#94A3B8';
  ctx.font = 'bold 12px "Inter", sans-serif';
  ctx.fillText('CÓDIGO ÚNICO DE ACREDITACIÓN', securityX, qrY + 22);

  ctx.fillStyle = '#D91B24';
  ctx.font = '900 24px "Outfit", monospace';
  ctx.fillText(credId, securityX, qrY + 54);

  // Barcode visualization simulation
  drawBarcode(ctx, securityX, qrY + 70, 360, 32);

  ctx.fillStyle = '#64748B';
  ctx.font = '11px "Inter", sans-serif';
  ctx.fillText('AUTENTICACIÓN DIGITAL VALLEJIANA · ESCUELA DE COMUNICACIONES', securityX, qrY + 124);

  // 12. Bottom Security Hologram Ribbon
  const bottomBarY = height - margin - 60;
  ctx.fillStyle = '#111F42';
  drawRoundedRect(ctx, margin + 12, bottomBarY, cardW - 24, 46, 12);
  ctx.fill();

  ctx.strokeStyle = '#1E3266';
  ctx.lineWidth = 1;
  drawRoundedRect(ctx, margin + 12, bottomBarY, cardW - 24, 46, 12);
  ctx.stroke();

  ctx.textAlign = 'center';
  ctx.fillStyle = '#94A3B8';
  ctx.font = 'bold 11px "Inter", sans-serif';
  ctx.fillText(
    'VÁLIDO PARA INGRESO AL CAMPUS, AULAS MAGNAS, PANELES Y TALLERES PRÁCTICOS · UCV 2026',
    width / 2,
    bottomBarY + 26
  );

  // 13. Convert Canvas to PDF via jsPDF
  const imgData = canvas.toDataURL('image/png', 1.0);

  // Badge Document format: 105mm x 162mm (standard credential badge)
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: [105, 162],
  });

  pdf.addImage(imgData, 'PNG', 0, 0, 105, 162, undefined, 'FAST');
  
  // Clean filename with student's name
  const safeName = (data.names || 'asistente').toLowerCase().replace(/[^a-z0-9]/g, '_');
  pdf.save(`ComuniCard_UCV_2026_${safeName}.pdf`);
}

/**
 * Utility to draw rounded rectangles
 */
function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/**
 * Procedural stylized QR code
 */
function drawStylizedQRCode(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  seed: string
) {
  const gridSize = 21;
  const cellSize = w / gridSize;

  // Clear inner QR area
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(x, y, w, h);

  ctx.fillStyle = '#050B18';

  // Corner Position Markers (Finder Patterns)
  drawFinderPattern(ctx, x, y, cellSize);
  drawFinderPattern(ctx, x + (gridSize - 7) * cellSize, y, cellSize);
  drawFinderPattern(ctx, x, y + (gridSize - 7) * cellSize, cellSize);

  // Timing Patterns
  for (let i = 8; i < gridSize - 8; i++) {
    if (i % 2 === 0) {
      ctx.fillRect(x + i * cellSize, y + 6 * cellSize, cellSize, cellSize);
      ctx.fillRect(x + 6 * cellSize, y + i * cellSize, cellSize, cellSize);
    }
  }

  // Data modules pseudorandom from seed
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      // Avoid finder patterns
      if (
        (row < 7 && col < 7) ||
        (row < 7 && col >= gridSize - 7) ||
        (row >= gridSize - 7 && col < 7) ||
        (row === 6 || col === 6)
      ) {
        continue;
      }
      const val = Math.abs(Math.sin((row * 17 + col * 31 + hash) * 0.4321));
      if (val > 0.48) {
        ctx.fillRect(x + col * cellSize, y + row * cellSize, cellSize - 0.4, cellSize - 0.4);
      }
    }
  }

  // Center accent dot
  ctx.fillStyle = '#D91B24';
  ctx.fillRect(x + 9 * cellSize, y + 9 * cellSize, cellSize * 3, cellSize * 3);
}

function drawFinderPattern(ctx: CanvasRenderingContext2D, x: number, y: number, cell: number) {
  // Outer 7x7 box
  ctx.fillStyle = '#050B18';
  ctx.fillRect(x, y, cell * 7, cell * 7);
  // Inner 5x5 white
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(x + cell, y + cell, cell * 5, cell * 5);
  // Center 3x3 black
  ctx.fillStyle = '#D91B24';
  ctx.fillRect(x + cell * 2, y + cell * 2, cell * 3, cell * 3);
}

/**
 * Barcode drawing helper
 */
function drawBarcode(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) {
  ctx.fillStyle = '#E2E8F0';
  let curX = x;
  let toggle = true;
  while (curX < x + w) {
    const barW = toggle ? Math.floor(2 + ((curX * 7) % 5)) : Math.floor(1 + ((curX * 3) % 4));
    if (toggle) {
      ctx.fillRect(curX, y, Math.min(barW, x + w - curX), h);
    }
    curX += barW;
    toggle = !toggle;
  }
}
