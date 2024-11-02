import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

const SCALES = [0.3, 1.5, 1.75, 0.75];

export const AlignJustify: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const line1Ref = useRef<SVGPathElement>(null);
  const line2Ref = useRef<SVGPolygonElement>(null);
  const line3Ref = useRef<SVGPolygonElement>(null);

  useEffect(() => {
    if (!hovered) return;

    [line1Ref, line2Ref, line3Ref].forEach((ref, idx) => {
      if (!ref.current) return;

      ref.current.animate(
        [
          { transform: "scaleX(1)" },
          { transform: `scaleX(${SCALES[idx]})` },
          { transform: "scaleX(1)" },
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
      <path d="M3 12h18" ref={line2Ref} />
      <path d="M3 18h18" ref={line3Ref} />
      <path d="M3 6h18" ref={line1Ref} />
    </svg>
  );
};
