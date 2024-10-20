import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const MoveDiagonal: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const arrowRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!hovered) return;

    arrowRef.current?.animate(
      [
        { transform: "rotate(0deg) scale(1)" },
        { transform: "rotate(5deg) scale(1.2)" },
        { transform: "rotate(0deg) scale(1)" },
        { transform: "rotate(5deg) scale(1.2)" },
        { transform: "rotate(0deg) scale(1)" },
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
      <path d="M11 19H5v-6" />
      <path d="M13 5h6v6" />
      <path d="M19 5 5 19" />
    </svg>
  );
};
