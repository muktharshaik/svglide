import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const Landmark: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGSVGElement>(null);

  const line1Ref = useRef<SVGLineElement>(null);
  const line2Ref = useRef<SVGLineElement>(null);
  const line3Ref = useRef<SVGLineElement>(null);
  const line4Ref = useRef<SVGLineElement>(null);

  const triangleRef = useRef<SVGPolygonElement>(null);

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

    [line1Ref, line2Ref, line3Ref, line4Ref].forEach((ref, idx) => {
      if (!ref.current) return;

      ref.current.animate(
        [
          { transform: "scaleY(1)" },
          { transform: "scaleY(0)" },
          { transform: "scaleY(1)" },
        ],
        {
          delay: idx * 50 + 200,
          duration: 400,
        }
      );
    });

    triangleRef.current?.animate(
      [
        { transform: "translateY(0)" },
        { transform: "translateY(-3px)" },
        { transform: "translateY(0)" },
      ],
      {
        duration: 600,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
        delay: 200,
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
      ref={baseRef}
      {...props}
    >
      <line x1="3" x2="21" y1="22" y2="22" />
      <line x1="6" x2="6" y1="18" y2="11" ref={line1Ref} />
      <line x1="10" x2="10" y1="18" y2="11" ref={line2Ref} />
      <line x1="14" x2="14" y1="18" y2="11" ref={line3Ref} />
      <line x1="18" x2="18" y1="18" y2="11" ref={line4Ref} />
      <polygon points="12 2 20 7 4 7" ref={triangleRef} />
    </svg>
  );
};
