import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const BellElectric: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGSVGElement>(null);
  const ringWaveRef = useRef<SVGCircleElement>(null);
  const handleRef = useRef<SVGPathElement>(null);

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

    handleRef.current?.animate(
      [
        { transform: "translate(0, 0) rotate(0deg)" },
        { transform: "translate(-2px, -6px) rotate(-10deg)" },
        { transform: "translate(0, 3px) rotate(0deg)" },
        { transform: "translate(0, 0) rotate(0deg)" },
      ],
      {
        duration: 600,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
        delay: 0,
      }
    );

    ringWaveRef.current?.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: "translate(-3px, 0)" },
        { transform: "translate(3px, 0)" },
        { transform: "translate(0, 0)" },
      ],
      {
        duration: 600,
        iterations: 2,
        fill: "forwards",
        easing: "ease-in-out",
        delay: 200,
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
      <path d="M18.8 4A6.3 8.7 0 0 1 20 9" ref={ringWaveRef} />
      <path d="M9 9h.01" />
      <circle cx="9" cy="9" r="7" />
      <rect width="10" height="6" x="4" y="16" rx="2" />
      <g ref={handleRef}>
        <path d="M14 19c3 0 4.6-1.6 4.6-1.6" />
        <circle cx="20" cy="16" r="2" />
      </g>
    </svg>
  );
};
