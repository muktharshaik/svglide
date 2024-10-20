import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const CircleArrowOutDownRight: React.FC<IconProps> = ({
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
        { transform: "translate(2px, 2px)" },
        { transform: "translate(0, 0)" },
        { transform: "translate(2px, 2px)" },
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
        { transform: "translateY(-2px)" },
        { transform: "translateY(2px)" },
        { transform: "translateY(-2px)" },
        { transform: "translateY(2px)" },
        { transform: "translateY(0px)" },
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
      <path d="M12 22a10 10 0 1 1 10-10" ref={circleRef} />

      <g ref={arrowRef}>
        <path d="M22 22 12 12" />
        <path d="M22 16v6h-6" />
      </g>
    </svg>
  );
};
