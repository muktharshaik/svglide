import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

const SCALES = [0.3, 1.5, 1.75, 0.9];

export const ChartNoAxesCombined: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const line1Ref = useRef<SVGLineElement>(null);
  const line2Ref = useRef<SVGLineElement>(null);
  const line3Ref = useRef<SVGLineElement>(null);
  const line4Ref = useRef<SVGLineElement>(null);
  const line5Ref = useRef<SVGLineElement>(null);

  const baseLineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    if (!hovered) return;

    baseLineRef.current?.animate(
      [{ strokeDasharray: "0, 100" }, { strokeDasharray: "100, 0" }],
      {
        duration: 600,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );

    [line1Ref, line2Ref, line3Ref, line4Ref, line5Ref].forEach((ref, idx) => {
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
      {...props}
    >
      <path d="M12 16v5" ref={line1Ref} />
      <path d="M16 14v7" ref={line2Ref} />
      <path d="M20 10v11" ref={line3Ref} />
      <path d="M4 18v3" ref={line4Ref} />
      <path d="M8 14v7" ref={line5Ref} />
      <path
        d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"
        ref={baseLineRef}
      />
    </svg>
  );
};
