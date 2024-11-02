import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const ArchiveRestore: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGSVGElement>(null);
  const itemRef = useRef<SVGPathElement>(null);
  const arrowRef = useRef<SVGPathElement>(null);

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

    itemRef.current?.animate(
      [{ transform: "translateY(-50%)" }, { transform: "translateY(0)" }],
      {
        duration: 600,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );

    arrowRef.current?.animate(
      [{ transform: "translateY(10%)" }, { transform: "translateY(0)" }],
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
      <rect width="20" height="5" x="2" y="3" rx="1" />
      <g ref={itemRef}>
        <path d="M4 8v11a2 2 0 0 0 2 2h2" />
        <path d="M20 8v11a2 2 0 0 1-2 2h-2" />
      </g>
      <g ref={arrowRef}>
        <path d="m9 15 3-3 3 3" />
        <path d="M12 12v9" />
      </g>
    </svg>
  );
};
