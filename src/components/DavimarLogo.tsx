import React from 'react';
import { useDavimarLogo } from '../utils/logoStorage';

export interface DavimarLogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  width?: number | string;
  height?: number | string;
  variant?: 'full' | 'mark' | 'white' | 'mono';
  useCustomLogo?: boolean;
}

/**
 * Davimar Group brand identity component.
 * Displays user-uploaded custom logo if saved in storage,
 * or the official vector 3-wave swoosh & maritime wordmark as standard default.
 */
export const DavimarLogo: React.FC<DavimarLogoProps> = ({
  className = 'h-10 w-auto',
  width,
  height,
  variant = 'full',
  useCustomLogo = true,
  ...props
}) => {
  const { customLogo } = useDavimarLogo();

  // If a custom logo has been saved and not explicitly bypassed, render it
  if (useCustomLogo && customLogo && variant !== 'mono') {
    return (
      <img
        src={customLogo}
        alt="Davimar Group Logo"
        className={`${className} object-contain select-none`}
        style={{
          width: width !== undefined ? width : undefined,
          height: height !== undefined ? height : undefined,
        }}
      />
    );
  }

  const orangeColor = variant === 'white' ? '#FFFFFF' : '#E64A19';
  const yellowColor = variant === 'white' ? '#FDE047' : '#FBA819';
  const greenColor = variant === 'white' ? '#86EFAC' : '#00A651';
  const blueColor = variant === 'white' ? '#FFFFFF' : '#0277BD';

  return (
    <svg
      viewBox="0 0 760 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      aria-label="Davimar Group Logo"
      role="img"
      {...props}
    >
      <defs>
        {/* Subtle lighting filter for premium digital rendering */}
        <filter id="davimar-glow" x="-10%" y="-10%" width="120%" height="120%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#0F172A" floodOpacity="0.08" />
        </filter>
      </defs>

      <g id="davimar-swoosh" filter="url(#davimar-glow)">
        {/* Top Wave: Red-Orange Ribbon (#E64A19) */}
        <path
          d="M260 148 C 290 128, 335 98, 385 88 C 425 80, 460 88, 485 110 C 505 128, 518 135, 532 125 C 542 118, 548 102, 545 80 C 542 65, 538 52, 530 40 C 510 58, 480 82, 442 88 C 392 96, 335 122, 280 148 C 270 152, 264 150, 260 148 Z"
          fill={orangeColor}
        />

        {/* Middle Wave: Golden-Amber Ribbon (#FBA819) */}
        <path
          d="M205 152 C 248 142, 305 146, 360 160 C 420 175, 480 192, 530 185 C 560 180, 580 162, 588 132 C 585 155, 570 185, 540 198 C 485 220, 415 192, 345 174 C 285 158, 235 156, 205 152 Z"
          fill={yellowColor}
        />

        {/* Bottom Wave: Leaf Green Ribbon (#00A651) */}
        <path
          d="M138 190 C 180 155, 245 148, 310 168 C 365 185, 415 208, 475 208 C 500 208, 520 200, 535 190 C 510 210, 475 218, 440 216 C 375 212, 325 188, 270 172 C 215 158, 165 170, 138 190 Z"
          fill={greenColor}
        />
      </g>

      {/* Wordmark: Davimar (Rich Maritime Blue #0277BD) */}
      <g id="davimar-wordmark" fill={blueColor}>
        {/* Letter 'D' - Stylized open script display D with dynamic loop and curve */}
        <path
          d="M172 178 C 182 178, 195 185, 198 198 C 200 205, 198 215, 190 220 C 182 225, 175 222, 170 218 C 165 214, 162 208, 160 202 C 152 230, 142 265, 135 292 C 155 292, 185 294, 218 280 C 255 264, 280 232, 282 195 C 284 165, 268 142, 238 135 C 205 128, 175 142, 155 162 C 148 168, 142 178, 140 188 C 145 182, 158 178, 172 178 Z M 215 170 C 235 174, 246 190, 245 208 C 242 232, 222 255, 192 264 C 172 270, 155 270, 148 270 C 158 235, 172 188, 188 172 C 196 168, 205 168, 215 170 Z"
        />

        {/* Letter 'a' - Fluid, bold, rounded single-storey a */}
        <path
          d="M320 205 C 305 202, 285 208, 272 222 C 256 238, 252 260, 262 275 C 272 288, 292 292, 308 288 C 322 284, 332 274, 338 265 L 336 288 L 362 288 C 364 280, 368 250, 372 232 C 376 215, 368 205, 348 205 C 336 205, 328 208, 320 205 Z M 315 226 C 330 226, 338 238, 336 250 C 334 262, 322 272, 308 272 C 295 272, 286 264, 286 252 C 286 238, 298 226, 315 226 Z"
        />

        {/* Letter 'v' - Dynamic italicized rounded v */}
        <path
          d="M380 208 L 406 208 C 408 218, 418 248, 428 266 C 438 248, 448 224, 452 208 L 478 208 C 468 238, 446 288, 432 290 C 420 292, 408 278, 398 255 L 380 208 Z"
        />

        {/* Letter 'i' - Rounded stem with energetic dot */}
        <path
          d="M485 208 L 512 208 L 498 288 L 472 288 L 485 208 Z M 514 175 C 522 175, 528 181, 526 190 C 524 198, 516 204, 508 204 C 500 204, 494 198, 496 190 C 498 181, 506 175, 514 175 Z"
        />

        {/* Letter 'm' - Flowing double-arch cursive letter m */}
        <path
          d="M525 208 L 548 208 L 542 228 C 552 214, 568 205, 585 205 C 600 205, 612 214, 616 228 C 628 214, 645 205, 662 205 C 682 205, 695 218, 690 242 L 682 288 L 656 288 L 664 246 C 666 234, 660 226, 648 226 C 636 226, 626 235, 622 248 L 615 288 L 588 288 L 596 246 C 598 234, 592 226, 580 226 C 568 226, 558 235, 554 248 L 546 288 L 520 288 L 525 208 Z"
        />

        {/* Letter 'a' - Second 'a' matching the first */}
        <path
          d="M720 205 C 705 202, 685 208, 672 222 C 656 238, 652 260, 662 275 C 672 288, 692 292, 708 288 C 722 284, 732 274, 738 265 L 736 288 L 762 288 C 764 280, 768 250, 772 232 C 776 215, 768 205, 748 205 C 736 205, 728 208, 720 205 Z M 715 226 C 730 226, 738 238, 736 250 C 734 262, 722 272, 708 272 C 695 272, 686 264, 686 252 C 686 238, 698 226, 715 226 Z"
        />

        {/* Letter 'r' - Distinctive branch with smooth terminal */}
        <path
          d="M780 208 L 804 208 L 800 230 C 810 214, 826 205, 842 205 C 852 205, 860 208, 865 214 L 852 238 C 846 234, 840 232, 832 232 C 820 232, 810 242, 806 255 L 800 288 L 774 288 L 780 208 Z"
        />
      </g>
    </svg>
  );
};
