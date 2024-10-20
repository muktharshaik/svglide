import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const ArrowLeftRight: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const arrowLeftRef = useRef<SVGSVGElement>(null);
  const arrowRightRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!hovered) return;

    arrowRightRef.current?.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(5px)" },
        { transform: "translateX(0)" },
        { transform: "translateX(5px)" },
        { transform: "translateX(0)" },
      ],
      {
        duration: 800,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );

    arrowLeftRef.current?.animate(
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
      <g ref={arrowLeftRef}>
        <path d="M8 3 4 7l4 4" />
        <path d="M4 7h16" />
      </g>
      <g ref={arrowRightRef}>
        <path d="m16 21 4-4-4-4" />
        <path d="M20 17H4" />
      </g>
    </svg>
  );
};
