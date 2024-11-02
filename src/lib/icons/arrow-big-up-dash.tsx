import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const ArrowBigUpDash: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const arrowRef = useRef<SVGSVGElement>(null);

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
      <path d="M9 19h6" />
      <path d="M9 15v-3H5l7-7 7 7h-4v3H9z" />
    </svg>
  );
};
