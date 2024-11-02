import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const AlertCircle: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const circleRef = useRef<SVGCircleElement>(null);
  const line1Ref = useRef<SVGLineElement>(null);
  const line2Ref = useRef<SVGLineElement>(null);

  useEffect(() => {
    if (!hovered) return;

    circleRef.current?.animate(
      [{ strokeDasharray: "0, 100" }, { strokeDasharray: "100, 0" }],
      {
        duration: 600,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );

    [line1Ref, line2Ref].forEach((ref) => {
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
      <circle cx="12" cy="12" r="10" ref={circleRef} />
      <line x1="12" x2="12" y1="8" y2="12" ref={line1Ref} />
      <line x1="12" x2="12.01" y1="16" y2="16" ref={line2Ref} />
    </svg>
  );
};
