import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const Router: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGSVGElement>(null);
  const wave1Ref = useRef<SVGPathElement>(null);
  const wave2Ref = useRef<SVGPathElement>(null);

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

    [wave1Ref, wave2Ref].forEach((ref, idx) => {
      ref.current?.animate(
        [
          { transform: "translate(0, 0)" },
          { transform: "translate(0,-3px)" },
          { transform: "translate(0, 3px)" },
          { transform: "translate(0, 0)" },
        ],
        {
          duration: 1200,
          iterations: 1,
          fill: "forwards",
          easing: "ease-in-out",
          delay: 100 * idx + 1,
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
      ref={baseRef}
      {...props}
    >
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6.01 18H6" />
      <path d="M10.01 18H10" />
      <path d="M15 10v4" />
      <path d="M17.84 7.17a4 4 0 0 0-5.66 0" ref={wave1Ref} />
      <path d="M20.66 4.34a8 8 0 0 0-11.31 0" ref={wave2Ref} />
    </svg>
  );
};
