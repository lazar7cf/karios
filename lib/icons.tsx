import type { SVGProps, ReactNode } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number; className?: string };

export function createIcon(children: ReactNode, viewBox = "0 0 24 24") {
  return ({ size = 20, className, ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = createIcon(
  <><path d="M5 12h14" /><path d="m15 18 6-6-6-6" /></>
);

export const Check = createIcon(
  <><path d="M20 6 9 17l-5-5" /></>
);

export const CheckCircle = createIcon(
  <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></>
);

export const Clock = createIcon(
  <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>
);

export const AlertCircle = createIcon(
  <><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></>
);

export const Bell = createIcon(
  <><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></>
);

export const X = createIcon(
  <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>
);

export const MagnifyingGlass = createIcon(
  <><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></>
);

export const Star = createIcon(
  <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></>
);

export const TrendUp = createIcon(
  <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>
);

export const TrendDown = createIcon(
  <><polyline points="23 18 13.5 8.5 8.5 13.5 1 6" /><polyline points="17 18 23 18 23 12" /></>
);

export const Minus = createIcon(
  <><line x1="5" y1="12" x2="19" y2="12" /></>
);

export const Pen = createIcon(
  <><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /></>
);

export const ChatCircle = createIcon(
  <><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" /></>
);

export const ShareNetwork = createIcon(
  <><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></>
);

export const GithubLogo = createIcon(
  <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></>
);

export const TwitterLogo = createIcon(
  <><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></>
);

export const LinkedinLogo = createIcon(
  <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></>
);

export const PaperPlaneTilt = createIcon(
  <><path d="M22 2 11 13" /><path d="m22 2-7 20-4-9-9-4Z" /></>
);

export const ChartLine = createIcon(
  <><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></>
);

export const Cube = createIcon(
  <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></>
);

export const DotsThree = createIcon(
  <><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></>
);

export const ChevronDown = createIcon(
  <><path d="m6 9 6 6 6-6" /></>
);

export const Activity = createIcon(
  <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></>
);
