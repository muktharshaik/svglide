import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const ShowerHead: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGSVGElement>(null);
  const waterRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!hovered) return;

    baseRef.current?.animate([{ opacity: "0" }, { opacity: "1" }], {
      duration: 600,
      iterations: 1,
      fill: "forwards",
      easing: "ease-in-out",
    });

    waterRef.current?.animate(
      [{ transform: "translate(-5px, -5px)" }, { transform: "translate(0,0)" }],
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
      ref={baseRef}
      {...props}
    >
      <path d="m4 4 2.5 2.5" />
      <path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" />
      <path d="M15 5 5 15" />
      <g ref={waterRef}>
        <path d="M14 17v.01" />
        <path d="M10 16v.01" />
        <path d="M13 13v.01" />
        <path d="M16 10v.01" />
        <path d="M11 20v.01" />
        <path d="M17 14v.01" />
        <path d="M20 11v.01" />
      </g>
    </svg>
  );
};
