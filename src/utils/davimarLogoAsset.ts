/**
 * Official Brand Assets for Davimar Group (@davimargroup)
 * Recreated with exact Pantone & Hex references:
 * - Red-Orange Ribbon: #E64A19 / #EA580C
 * - Amber-Gold Ribbon: #FBA819 / #F59E0B
 * - Leaf-Green Ribbon: #00A651 / #16A34A
 * - Ocean-Blue Wordmark: #0277BD / #0077C8
 */

export const DAVIMAR_LOGO_SVG = `<svg viewBox="100 20 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- 3-Wave Dynamic Swoosh Ribbons -->
  <g id="waves">
    <!-- Top Wave: Red-Orange -->
    <path d="M 260 148 C 295 125 340 92 390 85 C 430 78 465 88 490 110 C 510 128 522 134 534 124 C 544 116 548 100 545 78 C 542 62 538 50 530 38 C 510 56 480 80 442 86 C 392 94 335 122 280 148 C 270 152 264 150 260 148 Z" fill="#E64A19" />
    <!-- Middle Wave: Amber Gold -->
    <path d="M 205 152 C 250 140 310 145 365 160 C 425 175 485 192 535 185 C 565 180 584 160 590 130 C 586 155 570 185 540 198 C 485 220 415 192 345 174 C 285 158 235 156 205 152 Z" fill="#FBA819" />
    <!-- Bottom Wave: Vibrant Green -->
    <path d="M 138 190 C 182 155 248 148 312 168 C 368 185 418 208 478 208 C 502 208 522 200 538 190 C 512 210 478 218 442 216 C 378 212 328 188 272 172 C 218 158 168 170 138 190 Z" fill="#00A651" />
  </g>

  <!-- Wordmark "Davimar" -->
  <g id="wordmark" fill="#0277BD">
    <!-- Capital 'D' -->
    <path d="M 172 178 C 182 178 195 185 198 198 C 200 205 198 215 190 220 C 182 225 175 222 170 218 C 165 214 162 208 160 202 C 152 230 142 265 135 292 C 155 292 185 294 218 280 C 255 264 280 232 282 195 C 284 165 268 142 238 135 C 205 128 175 142 155 162 C 148 168 142 178 140 188 C 145 182 158 178 172 178 Z M 215 170 C 235 174 246 190 245 208 C 242 232 222 255 192 264 C 172 270 155 270 148 270 C 158 235 172 188 188 172 C 196 168 205 168 215 170 Z" />
    <!-- Letter 'a' -->
    <path d="M 320 205 C 305 202 285 208 272 222 C 256 238 252 260 262 275 C 272 288 292 292 308 288 C 322 284 332 274 338 265 L 336 288 L 362 288 C 364 280 368 250 372 232 C 376 215 368 205 348 205 C 336 205 328 208 320 205 Z M 315 226 C 330 226 338 238 336 250 C 334 262 322 272 308 272 C 295 272 286 264 286 252 C 286 238 298 226 315 226 Z" />
    <!-- Letter 'v' -->
    <path d="M 380 208 L 406 208 C 408 218 418 248 428 266 C 438 248 448 224 452 208 L 478 208 C 468 238 446 288 432 290 C 420 292 408 278 398 255 L 380 208 Z" />
    <!-- Letter 'i' -->
    <path d="M 485 208 L 512 208 L 498 288 L 472 288 L 485 208 Z M 514 175 C 522 175 528 181 526 190 C 524 198 516 204 508 204 C 500 204 494 198 496 190 C 498 181 506 175 514 175 Z" />
    <!-- Letter 'm' -->
    <path d="M 525 208 L 548 208 L 542 228 C 552 214 568 205 585 205 C 600 205 612 214 616 228 C 628 214 645 205 662 205 C 682 205 695 218 690 242 L 682 288 L 656 288 L 664 246 C 666 234 660 226 648 226 C 636 226 626 235 622 248 L 615 288 L 588 288 L 596 246 C 598 234 592 226 580 226 C 568 226 558 235 554 248 L 546 288 L 520 288 L 525 208 Z" />
    <!-- Letter 'a' -->
    <path d="M 720 205 C 705 202 685 208 672 222 C 656 238 652 260 662 275 C 672 288 692 292 708 288 C 722 284 732 274 738 265 L 736 288 L 762 288 C 764 280 768 250 772 232 C 776 215 768 205 748 205 C 736 205 728 208 720 205 Z M 715 226 C 730 226 738 238 736 250 C 734 262 722 272 708 272 C 695 272 686 264 686 252 C 686 238 698 226 715 226 Z" />
    <!-- Letter 'r' -->
    <path d="M 780 208 L 804 208 L 800 230 C 810 214 826 205 842 205 C 852 205 860 208 865 214 L 852 238 C 846 234 840 232 832 232 C 820 232 810 242 806 255 L 800 288 L 774 288 L 780 208 Z" />
  </g>
</svg>`;

let cachedLogoPngDataUrl: string | null = null;

/**
 * Converts the Davimar SVG vector into an ultra-high definition PNG Data URL
 * using browser offscreen canvas. Caches the result in memory for instant re-use.
 */
export async function getDavimarLogoDataUrl(width = 800, height = 300): Promise<string> {
  if (cachedLogoPngDataUrl) {
    return cachedLogoPngDataUrl;
  }

  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return '';
  }

  return new Promise((resolve) => {
    try {
      const img = new Image();
      const blob = new Blob([DAVIMAR_LOGO_SVG], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);

      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.clearRect(0, 0, width, height);
            ctx.drawImage(img, 0, 0, width, height);
            const dataUrl = canvas.toDataURL('image/png');
            cachedLogoPngDataUrl = dataUrl;
            URL.revokeObjectURL(url);
            resolve(dataUrl);
            return;
          }
        } catch {
          // Fallback if canvas tainted or error
        }
        URL.revokeObjectURL(url);
        resolve('');
      };

      img.onerror = () => {
        URL.revokeObjectURL(url);
        resolve('');
      };

      img.src = url;
    } catch {
      resolve('');
    }
  });
}
