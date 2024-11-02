import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const UnfoldVertical: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGSVGElement>(null);
  const arrowLeftRef = useRef<SVGPathElement>(null);
  const arrowRightRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!hovered) return;

    baseRef.current?.animate(
      [{ transform: "translateX(-100%)" }, { transform: "translateX(0)" }],
      {
        duration: 600,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );

    arrowLeftRef.current?.animate(
      [
        { transform: "translateY(5px)", opacity: 0 },
        { transform: "translateY(-2px)", opacity: 1 },
        { transform: "translateY(0)" },
      ],
      {
        duration: 600,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );

    arrowRightRef.current?.animate(
      [
        { transform: "translateY(-5px)", opacity: 0 },
        { transform: "translateY(2px)", opacity: 1 },
        { transform: "translateY(0)" },
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
      <g ref={baseRef}>
        <path d="M4 12H2" />
        <path d="M10 12H8" />
        <path d="M16 12h-2" />
        <path d="M22 12h-2" />
      </g>
      <g ref={arrowLeftRef}>
        <path d="M12 8V2" />
        <path d="m15 5-3-3-3 3" />
      </g>
      <g ref={arrowRightRef}>
        <path d="M12 22v-6" />
        <path d="m15 19-3 3-3-3" />
      </g>
    </svg>
  );
};
