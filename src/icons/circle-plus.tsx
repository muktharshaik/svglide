import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

const SCALES = [0.9, 1.1, 1.2, 0.75];

export const CirclePlus: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGSVGElement>(null);
  const plusRef = useRef<SVGPathElement>(null);
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!hovered) return;

    baseRef.current?.animate(
      [
        { strokeDasharray: "0, 100", scale: 0 },
        { strokeDasharray: "100, 0", scale: 1.2 },
        { strokeDasharray: "100, 0", scale: 1 },
      ],
      {
        duration: 600,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );

    plusRef.current?.animate(
      [
        { transform: "translateY(0)" },
        { transform: "translateY(-3px)" },
        { transform: "translateY(0)" },
      ],
      {
        duration: 600,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
        delay: 400,
      }
    );

    [path1Ref, path2Ref].forEach((ref, idx) => {
      if (!ref.current) return;

      ref.current.animate(
        [
          { transform: "scaleX(1)" },
          { transform: `scaleX(${SCALES[idx]})` },
          { transform: "scaleX(1)" },
        ],
        {
          delay: idx * 50 + 400,
          duration: 400,
        }
      );
    });
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
      <g ref={plusRef}>
        <path d="M8 12h8" />
        <path d="M12 8v8" />
      </g>
    </svg>
  );
};
