import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

const SCALES = [0.3, 0.4, 0.5, 0.75];

export const Blinds: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGSVGElement>(null);
  const handleRef = useRef<SVGPathElement>(null);

  const line1Ref = useRef<SVGPathElement>(null);
  const line2Ref = useRef<SVGPathElement>(null);
  const line3Ref = useRef<SVGPathElement>(null);
  const line4Ref = useRef<SVGPathElement>(null);

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
      [{ transform: "scaleY(0.5)" }, { transform: "scaleY(1)" }],
      {
        duration: 400,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );

    [line1Ref, line2Ref, line3Ref, line4Ref].forEach((ref, idx) => {
      if (!ref.current) return;

      ref.current.animate(
        [
          { transform: "scaleY(1)" },
          { transform: `scaleY(${SCALES[idx]})` },
          { transform: "scaleY(1)" },
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
      ref={baseRef}
      {...props}
    >
      <path d="M3 3h18" />
      <path d="M20 7H8" ref={line1Ref} />
      <path d="M20 11H8" ref={line2Ref} />
      <path d="M8 15h12" ref={line3Ref} />
      <path d="M10 19h10" ref={line4Ref} />
      <g ref={handleRef}>
        <path d="M4 3v14" />
        <circle cx="4" cy="19" r="2" />
      </g>
    </svg>
  );
};
