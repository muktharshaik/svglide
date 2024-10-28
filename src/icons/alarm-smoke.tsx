import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const AlarmSmoke: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGPathElement>(null);
  const smokeRef = useRef<SVGPathElement>(null);

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

    smokeRef.current?.animate(
      [
        { transform: "translateY(-10px)", opacity: "0%" },
        { transform: "translateY(0px)", opacity: "100%" },
      ],
      {
        duration: 400,
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
      <g ref={smokeRef}>
        <path d="M11 21c0-2.5 2-2.5 2-5" />
        <path d="M16 21c0-2.5 2-2.5 2-5" />
        <path d="M6 21c0-2.5 2-2.5 2-5" />
      </g>
      <g ref={baseRef}>
        <path d="m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8" />
        <path d="M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z" />
      </g>
    </svg>
  );
};
