import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

const SCALES = [0.8, 1.2, 1.3, 0.75];

export const ArrowUpWideNarrow: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const arrowRef = useRef<SVGSVGElement>(null);
  const line1Ref = useRef<SVGPathElement>(null);
  const line2Ref = useRef<SVGPolygonElement>(null);
  const line3Ref = useRef<SVGPolygonElement>(null);

  useEffect(() => {
    if (!hovered) return;

    arrowRef.current?.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: "translate(0, -5px)" },
        { transform: "translate(0, 0)" },
        { transform: "translate(0, -5px)" },
        { transform: "translate(0, 0)" },
      ],
      {
        duration: 800,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );

    [line1Ref, line2Ref, line3Ref].forEach((ref, idx) => {
      if (!ref.current) return;

      ref.current.animate(
        [
          { transform: "scaleX(1)" },
          { transform: `scaleX(${SCALES[idx]})` },
          { transform: "scaleX(1)" },
        ],
        {
          delay: idx * 50,
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
      ref={arrowRef}
      {...props}
    >
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
      <g>
        <path d="M11 12h10" ref={line1Ref} />
        <path d="M11 16h7" ref={line2Ref} />
        <path d="M11 20h4" ref={line3Ref} />
      </g>
    </svg>
  );
};
