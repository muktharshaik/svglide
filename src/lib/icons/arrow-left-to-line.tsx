import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const ArrowLeftToLine: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const arrowRef = useRef<SVGSVGElement>(null);
  const lineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!hovered) return;

    arrowRef.current?.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-5px)" },
        { transform: "translateX(0)" },
        { transform: "translateX(-5px)" },
        { transform: "translateX(0)" },
      ],
      {
        duration: 800,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );

    lineRef.current?.animate(
      [
        { transform: "translateY(0)" },
        { transform: "translateY(2px)" },
        { transform: "translateY(0)" },
      ],
      {
        duration: 600,
        iterations: 1,
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
      {...props}
    >
      <path d="M3 19V5" ref={lineRef} />
      <g ref={arrowRef}>
        <path d="m13 6-6 6 6 6" />
        <path d="M7 12h14" />
      </g>
    </svg>
  );
};
