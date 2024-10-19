import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const AArowUp: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const arrowRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!hovered) return;

    arrowRef.current?.animate(
      [
        { transform: "translateY(4px)" },
        { transform: "translateY(-4px)" },
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
      <path d="M3.5 13h6" />
      <path d="m2 16 4.5-9 4.5 9" />
      <g ref={arrowRef}>
        <path d="M18 16V7" />
        <path d="m14 11 4-4 4 4" />
      </g>
    </svg>
  );
};
