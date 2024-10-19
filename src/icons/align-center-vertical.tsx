import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const AlignCenterVertical: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseLineRef = useRef<SVGPathElement>(null);
  const chart1Ref = useRef<SVGPolygonElement>(null);
  const chart2Ref = useRef<SVGPolygonElement>(null);

  useEffect(() => {
    if (!hovered) return;

    baseLineRef.current?.animate(
      [{ strokeDasharray: "0, 100" }, { strokeDasharray: "100, 0" }],
      {
        duration: 600,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );

    [chart1Ref, chart2Ref].forEach((ref, idx) => {
      ref.current?.animate(
        [
          { transform: "scaleY(1)" },
          { transform: `scaleY(${idx === 0 ? 1.5 : 0.5})` },
          { transform: "scaleY(1)" },
        ],
        {
          delay: idx * 50,
          duration: 400,
        }
      );
    });
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
      <path d="M12 2v20" ref={baseLineRef} />
      <g ref={chart1Ref}>
        <path d="M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4" />
        <path d="M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" />
      </g>
      <g ref={chart2Ref}>
        <path d="M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1" />
        <path d="M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" />
      </g>
    </svg>
  );
};