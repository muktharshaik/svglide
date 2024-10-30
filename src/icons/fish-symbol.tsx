import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const FishSymbol: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!hovered) return;

    baseRef.current?.animate(
      [
        { strokeDasharray: "0, 100", rotate: "-10deg" },
        { strokeDasharray: "100, 0", rotate: "0deg" },
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
      ref={baseRef}
      {...props}
    >
      <path d="M2 16s9-15 20-4C11 23 2 8 2 8" />
    </svg>
  );
};
