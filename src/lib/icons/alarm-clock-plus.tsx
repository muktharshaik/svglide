import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const AlarmClockPlus: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGCircleElement>(null);
  const minusRef = useRef<SVGPathElement>(null);
  const topLinesRef = useRef<SVGPathElement>(null);
  const footRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!hovered) return;

    [baseRef, footRef, minusRef].forEach((ref) => {
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="13" r="8" ref={baseRef} />
      <g ref={topLinesRef}>
        <path d="M5 3 2 6" />
        <path d="m22 6-3-3" />
      </g>
      <g ref={footRef}>
        <path d="M6.38 18.7 4 21" />
        <path d="M17.64 18.67 20 21" />
      </g>
      <g ref={minusRef}>
        <path d="M12 10v6" />
        <path d="M9 13h6" />
      </g>
    </svg>
  );
};
