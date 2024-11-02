import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

const SCALES = [1.5, 0.4, 1.75, 0.75];

export const ChartGantt: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGPathElement>(null);
  const line1Ref = useRef<SVGPathElement>(null);
  const line2Ref = useRef<SVGPathElement>(null);
  const line3Ref = useRef<SVGPathElement>(null);

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
      {...props}
    >
      <path d="M10 6h8" ref={line1Ref} />
      <path d="M12 16h6" ref={line2Ref} />
      <path d="M8 11h7" ref={line3Ref} />
      <path d="M3 3v16a2 2 0 0 0 2 2h16" ref={baseRef} />
    </svg>
  );
};
