import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const ALargeSmall: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!hovered) return;

    // path1 scale 0.5 to 1, path2 scale 1.5 to 1
    path1Ref.current?.animate(
      [{ transform: "scaleY(0.5)" }, { transform: "scaleY(1)" }],
      {
        duration: 600,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );

    path2Ref.current?.animate(
      [{ transform: "scaleY(1.5)" }, { transform: "scaleY(1)" }],
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
      <g ref={path1Ref}>
        <path d="M21 14h-5" />
        <path d="M16 16v-3.5a2.5 2.5 0 0 1 5 0V16" />
      </g>
      <g ref={path2Ref}>
        <path d="M4.5 13h6" />
        <path d="m3 16 4.5-9 4.5 9" />
      </g>
    </svg>
  );
};
