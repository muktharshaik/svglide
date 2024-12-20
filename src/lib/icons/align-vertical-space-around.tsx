import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const AlignVerticalSpaceAround: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const line1Ref = useRef<SVGPathElement>(null);
  const line2Ref = useRef<SVGPathElement>(null);

  const chart1Ref = useRef<SVGRectElement>(null);

  useEffect(() => {
    if (!hovered) return;

    [chart1Ref].forEach((ref, idx) => {
      ref.current?.animate(
        [{ transform: "translateY(-5px)" }, { transform: `translateY(0)` }],
        {
          delay: idx * 50,
          duration: 400,
        }
      );
    });

    [line1Ref, line2Ref].forEach((ref, idx) => {
      ref.current?.animate(
        [{ strokeDasharray: "0, 100" }, { strokeDasharray: "100, 0" }],
        {
          delay: idx * 50,
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
      <rect width="10" height="6" x="7" y="9" rx="2" ref={chart1Ref} />
      <path d="M22 20H2" ref={line1Ref} />
      <path d="M22 4H2" ref={line2Ref} />
    </svg>
  );
};
