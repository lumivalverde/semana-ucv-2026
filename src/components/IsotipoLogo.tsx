import React from 'react';

interface IsotipoLogoProps {
  className?: string;
  size?: number | string;
}

export const IsotipoLogo: React.FC<IsotipoLogoProps> = ({ className = '', size = 260 }) => {
  return (
    <svg
      viewBox="0 0 540 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: size, height: 'auto', maxWidth: '100%' }}
      className={`inline-block drop-shadow-[0_15px_35px_rgba(113,53,245,0.45)] select-none ${className}`}
    >
      <defs>
        {/* Violet Gradient for main upper/left ribbon */}
        <linearGradient id="purpleGrad" x1="80" y1="50" x2="380" y2="300" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8F54FF" />
          <stop offset="35%" stopColor="#7135F5" />
          <stop offset="100%" stopColor="#4A16C2" />
        </linearGradient>

        {/* Purple side shadow/depth */}
        <linearGradient id="purpleShadow" x1="100" y1="200" x2="250" y2="350" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3B119C" />
          <stop offset="100%" stopColor="#25096B" />
        </linearGradient>

        {/* Lime Gradient for lower/right ribbon */}
        <linearGradient id="limeGrad" x1="180" y1="140" x2="440" y2="360" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D8FF33" />
          <stop offset="50%" stopColor="#C6FF00" />
          <stop offset="100%" stopColor="#9AD400" />
        </linearGradient>

        {/* Lime side depth shadow */}
        <linearGradient id="limeShadow" x1="280" y1="120" x2="400" y2="280" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#9AD400" />
          <stop offset="100%" stopColor="#72A100" />
        </linearGradient>

        {/* Inner White bubble drop shadow */}
        <filter id="bubbleDropShadow" x="-20%" y="-20%" width="150%" height="150%">
          <feDropShadow dx="-8" dy="12" stdDeviation="12" floodColor="#2B0C73" floodOpacity="0.5" />
        </filter>
        
        {/* Soft 3D bevel effect */}
        <linearGradient id="whiteGrad" x1="200" y1="150" x2="350" y2="280" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F1F4F9" />
        </linearGradient>
      </defs>

      {/* --- SOUND / BROADCAST DASHES (Top Right Lime Accents) --- */}
      {/* Upper dash */}
      <path
        d="M 390 128 L 435 60 C 442 50, 456 46, 465 52 C 475 58, 477 72, 469 82 L 424 150 C 418 158, 404 161, 396 153 C 388 146, 386 135, 390 128 Z"
        fill="url(#limeGrad)"
        filter="drop-shadow(0 4px 10px rgba(198,255,0,0.4))"
      />
      {/* Lower dash */}
      <path
        d="M 412 188 L 478 148 C 488 142, 501 146, 507 156 C 513 166, 509 180, 498 186 L 432 226 C 423 232, 409 228, 403 218 C 398 208, 402 194, 412 188 Z"
        fill="url(#limeGrad)"
        filter="drop-shadow(0 4px 10px rgba(198,255,0,0.35))"
      />

      {/* --- PURPLE 3D LOWER BEVEL / EXTENSION (Bottom Left Tail) --- */}
      <path
        d="M 120 338 C 95 348, 76 348, 80 342 C 86 333, 138 240, 168 190 L 195 240 C 160 295, 138 330, 120 338 Z"
        fill="url(#purpleShadow)"
      />

      {/* --- MAIN PURPLE UPPER & LEFT SWOOPING SPEECH BUBBLE RIBBON --- */}
      <path
        d="M 125 330 
           C 165 260, 205 210, 220 185
           C 170 150, 115 170, 92 230
           C 75 275, 88 320, 125 330 Z"
        fill="#551CC7"
      />
      <path
        d="M 195 72 
           C 270 50, 365 52, 376 96 
           C 382 122, 355 152, 305 160 
           C 255 168, 205 178, 172 208
           C 142 235, 118 290, 80 342
           C 95 320, 112 250, 95 185
           C 80 125, 128 85, 195 72 Z"
        fill="url(#purpleGrad)"
      />
      {/* Smooth 3D top-ridge highlight on purple curve */}
      <path
        d="M 195 72 
           C 260 55, 345 56, 376 96 
           C 360 82, 280 72, 205 84 
           C 150 94, 110 128, 102 175
           C 98 140, 135 88, 195 72 Z"
        fill="#A67BFF"
        opacity="0.65"
      />

      {/* --- GREEN LIME LOWER & RIGHT SWOOPING RIBBON --- */}
      {/* 3D Depth underneath green ribbon */}
      <path
        d="M 230 155 
           C 295 130, 375 145, 410 190 
           C 440 230, 435 285, 395 325 
           C 340 375, 230 380, 190 350
           C 240 340, 310 320, 335 270
           C 355 230, 330 185, 230 155 Z"
        fill="url(#limeShadow)"
      />
      {/* Main Lime Green body */}
      <path
        d="M 245 142 
           C 320 120, 395 140, 428 195 
           C 455 240, 442 305, 390 338 
           C 335 372, 245 365, 190 348
           C 250 335, 325 310, 350 255
           C 370 210, 340 168, 245 142 Z"
        fill="url(#limeGrad)"
      />

      {/* --- CENTRAL WHITE SPEECH BUBBLE WITH 3 DOTS --- */}
      {/* White rounded speech balloon container with bottom-left pointer */}
      <g filter="url(#bubbleDropShadow)">
        <path
          d="M 235 145
             C 300 145, 355 180, 355 228
             C 355 275, 305 312, 242 312
             C 225 312, 210 308, 198 302
             L 204 330
             L 225 304
             C 230 305, 236 305, 242 305
             C 185 305, 178 280, 178 228
             C 178 180, 200 145, 235 145 Z"
          fill="url(#whiteGrad)"
        />
        {/* Precise outline and bubble tail shape matching user's image */}
        <path
          d="M 245 148 
             C 308 148, 358 184, 358 232 
             C 358 280, 308 316, 245 316 
             C 228 316, 214 311, 202 304 
             L 205 334 
             L 225 308 
             C 232 310, 238 310, 245 310 
             C 185 310, 178 275, 178 232 
             C 178 184, 215 148, 245 148 Z"
          fill="#FFFFFF"
        />
      </g>

      {/* --- THREE PURPLE ELLIPSIS DOTS INSIDE BUBBLE --- */}
      <circle cx="230" cy="235" r="16" fill="#5821D4" />
      <circle cx="270" cy="235" r="16" fill="#5821D4" />
      <circle cx="310" cy="235" r="16" fill="#5821D4" />

      {/* Tiny subtle highlight inside each dot */}
      <circle cx="227" cy="231" r="5" fill="#7135F5" />
      <circle cx="267" cy="231" r="5" fill="#7135F5" />
      <circle cx="307" cy="231" r="5" fill="#7135F5" />
    </svg>
  );
};
