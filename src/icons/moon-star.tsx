import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const MoonStar: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!hovered) return;

    baseRef.current?.animate(
      [{ strokeDasharray: "0, 100" }, { strokeDasharray: "100, 0" }],
      {
        duration: 600,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );

    pathRef.current?.animate(
      [
        { transform: "rotate(0deg)" },
        { transform: "rotate(10deg)" },
        { transform: "rotate(0deg)" },
      ],
      {
        duration: 500,
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
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" />
      <g ref={pathRef}>
        <path d="M20 3v4" />
        <path d="M22 5h-4" />
      </g>
    </svg>
  );
};
