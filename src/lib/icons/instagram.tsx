import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const Instagram: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGSVGElement>(null);
  const dotRef = useRef<SVGLineElement>(null);

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

    dotRef.current?.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: "translate(-2px, 0)" },
        { transform: "translate(0, 0)" },
        { transform: "translate(-2px, 0)" },
        { transform: "translate(0, 0)" },
      ],
      {
        duration: 600,
        iterations: 1,
        fill: "forwards",
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" ref={dotRef} />
    </svg>
  );
};
