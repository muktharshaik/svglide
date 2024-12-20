import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const SquareArrowUp: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const arrowRef = useRef<SVGSVGElement>(null);
  const squareRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    if (!hovered) return;

    arrowRef.current?.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: "translate(0, -5px)" },
        { transform: "translate(0, 0)" },
        { transform: "translate(0, -5px)" },
        { transform: "translate(0, 0)" },
      ],
      {
        duration: 800,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );

    squareRef.current?.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.3) translate(-3px, -3px)" },
        { transform: "scale(1)" },
        { transform: "scale(1.3) translate(-3px, -3px)" },
        { transform: "scale(1)" },
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
      <rect width="18" height="18" x="3" y="3" rx="2" ref={squareRef} />
      <g ref={arrowRef}>
        <path d="m16 12-4-4-4 4" />
        <path d="M12 16V8" />
      </g>
    </svg>
  );
};
