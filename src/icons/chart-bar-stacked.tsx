import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

const SCALES = [1.5, 0.4, 1.75, 0.75];

export const ChartBarStacked: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGPathElement>(null);
  const rect1Ref = useRef<SVGSVGElement>(null);
  const rect2Ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!hovered) return;

    [baseRef].forEach((ref) => {
      ref.current?.animate(
        [{ strokeDasharray: "0, 100" }, { strokeDasharray: "100, 0" }],
        {
          duration: 600,
          iterations: 1,
          fill: "forwards",
          easing: "ease-in-out",
        }
      );
    });

    [rect1Ref, rect2Ref].forEach((ref, idx) => {
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
      {...props}
    >
      <g ref={rect1Ref}>
        <path d="M15 5v4" />
        <rect x="7" y="5" width="12" height="4" rx="1" />
      </g>
      <path d="M3 3v16a2 2 0 0 0 2 2h16" ref={baseRef} />
      <g ref={rect2Ref}>
        <rect x="7" y="13" width="9" height="4" rx="1" />
        <path d="M11 13v4" />
      </g>
    </svg>
  );
};
