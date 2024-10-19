import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const Airplay: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPolygonElement>(null);

  useEffect(() => {
    if (!hovered) return;

    pathRef.current?.animate(
      [{ strokeDasharray: "0, 100" }, { strokeDasharray: "100, 0" }],
      {
        duration: 600,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );

    path2Ref.current?.animate(
      [{ strokeDasharray: "0, 100" }, { strokeDasharray: "100, 0" }],
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
      <path
        ref={pathRef}
        d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
      />
      <path ref={path2Ref} d="m12 15 5 6H7Z" />
    </svg>
  );
};
