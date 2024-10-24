import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const Info: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGSVGElement>(null);
  const questionMarkRef = useRef<SVGPathElement>(null);

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

    questionMarkRef.current?.animate(
      [
        { transform: "translateY(0)" },
        { transform: "translateY(-0.2em)" },
        { transform: "translateY(0)" },
      ],
      {
        duration: 500,
        iterations: 2,
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
      <circle cx="12" cy="12" r="10" />
      <g ref={questionMarkRef}>
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </g>
    </svg>
  );
};
