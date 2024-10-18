import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const Activity: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const polylineRef = useRef<SVGPolylineElement>(null);

  useEffect(() => {
    if (!hovered) return;

    polylineRef.current?.animate(
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
      <polyline
        ref={polylineRef}
        points="22 12 18 12 15 21 9 3 6 12 2 12"
      ></polyline>
    </svg>
  );
};
