import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const Trash2: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGSVGElement>(null);
  const coverRef = useRef<SVGSVGElement>(null);

  const line1Ref = useRef<SVGLineElement>(null);
  const line2Ref = useRef<SVGLineElement>(null);

  useEffect(() => {
    if (!hovered) return;

    baseRef.current?.animate(
      [
        { strokeDasharray: "0, 100", transform: "rotate(10deg)" },
        { strokeDasharray: "100, 0", transform: "rotate(-10deg)" },
        { strokeDasharray: "100, 0", transform: "rotate(0deg)" },
      ],
      {
        duration: 600,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );

    coverRef.current?.animate(
      [{ transform: "translateY(-50%)" }, { transform: "translateY(0%)" }],
      {
        duration: 600,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );

    [line1Ref, line2Ref].forEach((ref, idx) => {
      ref.current?.animate(
        [{ transform: "translateY(-20%)" }, { transform: "translateY(0%)" }],
        {
          duration: 600,
          iterations: 1,
          fill: "forwards",
          easing: "ease-in-out",
          delay: 100 * idx,
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
      <g ref={coverRef}>
        <path d="M3 6h18" />
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      </g>
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <line x1="10" x2="10" y1="11" y2="17" ref={line1Ref} />
      <line x1="14" x2="14" y1="11" y2="17" ref={line2Ref} />
    </svg>
  );
};
