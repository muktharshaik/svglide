import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const Minimize2: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const arrowTopRightRef = useRef<SVGSVGElement>(null);
  const arrowBottomLeftRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!hovered) return;

    arrowTopRightRef.current?.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: "translate(5px, -5px)" },
        { transform: "translate(0, 0)" },
        { transform: "translate(5px, -5px)" },
        { transform: "translate(0, 0)" },
      ],
      {
        duration: 800,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );

    arrowBottomLeftRef.current?.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: "translate(-5px, 5px)" },
        { transform: "translate(0, 0)" },
        { transform: "translate(-5px, 5px)" },
        { transform: "translate(0, 0)" },
      ],
      {
        duration: 800,
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
      <g ref={arrowTopRightRef}>
        <line x1="3" x2="10" y1="21" y2="14" />
        <polyline points="4 14 10 14 10 20" />
      </g>
      <g ref={arrowBottomLeftRef}>
        <line x1="14" x2="21" y1="10" y2="3" />
        <polyline points="20 10 14 10 14 4" />
      </g>
    </svg>
  );
};
