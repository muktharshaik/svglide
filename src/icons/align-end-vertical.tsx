import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const AlignEndVertical: React.FC<IconProps> = ({
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
        [{ transform: "translateX(5px)" }, { transform: `translateX(0)` }],
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
      <rect width="16" height="6" x="2" y="4" rx="2" ref={chart1Ref} />
      <rect width="9" height="6" x="9" y="14" rx="2" ref={chart2Ref} />
      <path d="M22 22V2" ref={baseLineRef} />
    </svg>
  );
};
