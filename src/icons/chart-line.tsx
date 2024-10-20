import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const ChartLine: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGPathElement>(null);
  const lineRef = useRef<SVGPathElement>(null);

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

    lineRef.current?.animate(
      [
        { transform: "scaleX(1)" },
        { transform: "scaleX(1.4)" },
        { transform: "scaleX(1)" },
      ],
      {
        duration: 400,
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
      <path d="M3 3v16a2 2 0 0 0 2 2h16" ref={baseRef} />
      <path d="m19 9-5 5-4-4-3 3" ref={lineRef} />
    </svg>
  );
};
