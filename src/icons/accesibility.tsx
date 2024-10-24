import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const Accesibility: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const wheelRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (!hovered) return;

    svgRef.current?.animate(
      [{ strokeDasharray: "0, 100" }, { strokeDasharray: "100, 0" }],
      {
        duration: 1200,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );

    wheelRef.current?.animate(
      [{ transform: "translateX(10px)" }, { transform: "translateX(0px)" }],
      {
        duration: 400,
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
      ref={svgRef}
      {...props}
    >
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />

      <g ref={wheelRef}>
        <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
        <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
      </g>
    </svg>
  );
};
