import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const UnfoldHorizontal: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGSVGElement>(null);
  const arrowLeftRef = useRef<SVGPathElement>(null);
  const arrowRightRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!hovered) return;

    baseRef.current?.animate(
      [{ transform: "translateY(-100%)" }, { transform: "translateY(0)" }],
      {
        duration: 600,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );

    arrowLeftRef.current?.animate(
      [
        { transform: "translateX(-5px)", opacity: 0 },
        { transform: "translateX(2px)", opacity: 1 },
        { transform: "translateX(0)" },
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
        { transform: "translateX(5px)", opacity: 0 },
        { transform: "translateX(-2px)", opacity: 1 },
        { transform: "translateX(0)" },
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
        <path d="M12 2v2" />
        <path d="M12 8v2" />
        <path d="M12 14v2" />
        <path d="M12 20v2" />
      </g>
      <g ref={arrowLeftRef}>
        <path d="M16 12h6" />
        <path d="m19 15 3-3-3-3" />
      </g>
      <g ref={arrowRightRef}>
        <path d="M8 12H2" />
        <path d="m5 9-3 3 3 3" />
      </g>
    </svg>
  );
};
