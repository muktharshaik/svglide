import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const Trash: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGSVGElement>(null);
  const coverRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!hovered) return;

    baseRef.current?.animate(
      [
        { strokeDasharray: "0, 100", transform: "rotate(10deg)" },
        { strokeDasharray: "100, 0", transform: "rotate(-10deg)" },
        { strokeDasharray: "100, 0", transform: "rotate(0deg)" },
      ],
      {
        duration: 600,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );

    coverRef.current?.animate(
      [{ transform: "translateY(-50%)" }, { transform: "translateY(0%)" }],
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
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <g ref={coverRef}>
        <path d="M3 6h18" />
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      </g>
    </svg>
  );
};
