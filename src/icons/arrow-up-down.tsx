import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const ArrowUpDown: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const arrowUpRef = useRef<SVGSVGElement>(null);
  const arrowDownRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!hovered) return;

    arrowDownRef.current?.animate(
      [
        { transform: "translateY(0)" },
        { transform: "translateY(5px)" },
        { transform: "translateY(0)" },
        { transform: "translateY(5px)" },
        { transform: "translateY(0)" },
      ],
      {
        duration: 800,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );

    arrowUpRef.current?.animate(
      [
        { transform: "translateY(0)" },
        { transform: "translateY(-5px)" },
        { transform: "translateY(0)" },
        { transform: "translateY(-5px)" },
        { transform: "translateY(0)" },
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
      <g ref={arrowDownRef}>
        <path d="m21 16-4 4-4-4" />
        <path d="M17 20V4" />
      </g>
      <g ref={arrowUpRef}>
        <path d="m3 8 4-4 4 4" />
        <path d="M7 4v16" />
      </g>
    </svg>
  );
};
