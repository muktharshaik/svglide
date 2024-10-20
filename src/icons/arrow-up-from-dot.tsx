import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const ArrowUpFromDot: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const arrowRef = useRef<SVGSVGElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);

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

    circleRef.current?.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: "translate(0, 2px)" },
        { transform: "translate(0, 0)" },
        { transform: "translate(0, -2px)" },
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
      ref={arrowRef}
      {...props}
    >
      <g ref={arrowRef}>
        <path d="m5 9 7-7 7 7" />
        <path d="M12 16V2" />
      </g>
      <circle cx="12" cy="21" r="1" ref={circleRef} />
    </svg>
  );
};
