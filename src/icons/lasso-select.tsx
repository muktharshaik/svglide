import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const LassoSelect: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGSVGElement>(null);
  const cursorRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!hovered) return;

    baseRef.current?.animate(
      [{ strokeDasharray: "0, 100" }, { strokeDasharray: "100, 0" }],
      {
        duration: 600,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );

    cursorRef.current?.animate(
      [
        { transform: "translate(2px, 2px)" },
        { transform: "translate(0px, -2px)" },
        { transform: "translate(-2px, 0px)" },
        { transform: "translate(0px, 0px)" },
      ],
      {
        duration: 600,
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
      <path d="M7 22a5 5 0 0 1-2-4" />
      <path d="M7 16.93c.96.43 1.96.74 2.99.91" />
      <path d="M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2" />
      <path d="M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      <path
        d="M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z"
        ref={cursorRef}
      />
    </svg>
  );
};
