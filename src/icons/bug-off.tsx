import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const BugOff: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!hovered) return;

    baseRef.current?.animate(
      [
        { transform: "scale(0.5)" },
        { transform: "scale(1.1)" },
        { transform: "scale(1.2)" },
        { transform: "scale(1)" },
      ],
      {
        duration: 800,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );
  }, [hovered]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      ref={baseRef}
      {...props}
    >
      <path d="M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2" />
      <path d="M14.12 3.88 16 2" />
      <path d="M22 13h-4v-2a4 4 0 0 0-4-4h-1.3" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="m2 2 20 20" />
      <path d="M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13" />
      <path d="M12 20v-8" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
    </svg>
  );
};
