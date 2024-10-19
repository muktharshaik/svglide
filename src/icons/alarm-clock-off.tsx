import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const AlarmClockOff: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGCircleElement>(null);
  const crossRef = useRef<SVGPathElement>(null);
  const topLinesRef = useRef<SVGPathElement>(null);
  const footRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!hovered) return;

    [baseRef, footRef, crossRef].forEach((ref) => {
      ref.current?.animate(
        [{ strokeDasharray: "0, 100" }, { strokeDasharray: "100, 0" }],
        {
          duration: 600,
          iterations: 1,
          fill: "forwards",
          easing: "ease-in-out",
        }
      );
    });

    topLinesRef.current?.animate(
      [
        { transform: "rotate(0deg)" },
        { transform: "rotate(3deg)" },
        { transform: "rotate(-3deg)" },
        { transform: "rotate(0deg)" },
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
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <g ref={baseRef}>
        <path d="M6.87 6.87a8 8 0 1 0 11.26 11.26" />
        <path d="M19.9 14.25a8 8 0 0 0-9.15-9.15" />
      </g>
      <g ref={topLinesRef}>
        <path d="m22 6-3-3" />
        <path d="M4 4 2 6" />
      </g>
      <path d="M6.26 18.67 4 21" ref={footRef} />
      <path d="m2 2 20 20" ref={crossRef} />
    </svg>
  );
};
