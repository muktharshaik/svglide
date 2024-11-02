import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

const SCALES = [0.3, 1.5, 1.75, 0.9];

export const ChartColumnBig: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGPathElement>(null);
  const rect1Ref = useRef<SVGRectElement>(null);
  const rec2Ref = useRef<SVGRectElement>(null);

  useEffect(() => {
    if (!hovered) return;

    [baseRef].forEach((ref) => {
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

    [rect1Ref, rec2Ref].forEach((ref, idx) => {
      if (!ref.current) return;

      ref.current.animate(
        [
          { transform: "scaleY(1)" },
          { transform: `scaleY(${SCALES[idx]})` },
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
      <path d="M3 3v16a2 2 0 0 0 2 2h16" ref={baseRef} />
      <rect x="15" y="5" width="4" height="12" rx="1" ref={rect1Ref} />
      <rect x="7" y="8" width="4" height="9" rx="1" ref={rec2Ref} />
    </svg>
  );
};
