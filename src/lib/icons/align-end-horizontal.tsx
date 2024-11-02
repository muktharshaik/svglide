import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const AlignEndHorizontal: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseLineRef = useRef<SVGPathElement>(null);
  const chart1Ref = useRef<SVGRectElement>(null);
  const chart2Ref = useRef<SVGRectElement>(null);

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

    [chart1Ref, chart2Ref].forEach((ref, idx) => {
      ref.current?.animate(
        [
          { transform: "scaleY(1)" },
          { transform: `scaleY(${idx === 0 ? 1.5 : 0.5})` },
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
      <rect width="6" height="16" x="4" y="2" rx="2" ref={chart1Ref} />
      <rect width="6" height="9" x="14" y="9" rx="2" ref={chart2Ref} />
      <path d="M22 22H2" ref={baseLineRef} />
    </svg>
  );
};
