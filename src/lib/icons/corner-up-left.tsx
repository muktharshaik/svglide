import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const CornerUpLeft: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const lineRef = useRef<SVGPolylineElement>(null);
  const arrowRef = useRef<SVGRectElement>(null);
  const baseRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!hovered) return;

    baseRef.current?.animate(
      [
        { transform: "translateY(10px)", opacity: 0 },
        { transform: "translateY(0)", opacity: 1 },
      ],
      {
        duration: 400,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );

    [lineRef, arrowRef].forEach((ref, idx) => {
      ref.current?.animate(
        [{ strokeDasharray: "0, 100" }, { strokeDasharray: "100, 0" }],
        {
          delay: idx * 50,
          duration: 600,
          iterations: 1,
          fill: "forwards",
          easing: "ease-in-out",
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
      <polyline points="9 14 4 9 9 4" ref={lineRef} />
      <path d="M20 20v-7a4 4 0 0 0-4-4H4" ref={arrowRef} />
    </svg>
  );
};
