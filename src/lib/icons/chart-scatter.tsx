import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

const POSITIONS = [1.5, 0.4, 1.5, -2, -3, -1.5];

export const ChartScatter: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGPathElement>(null);
  const circle1Ref = useRef<SVGCircleElement>(null);
  const circle2Ref = useRef<SVGCircleElement>(null);
  const circle3Ref = useRef<SVGCircleElement>(null);
  const circle4Ref = useRef<SVGCircleElement>(null);
  const circle5Ref = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (!hovered) return;

    [baseRef].forEach((ref) => {
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

    [circle1Ref, circle2Ref, circle3Ref, circle4Ref, circle5Ref].forEach(
      (ref, idx) => {
        if (!ref.current) return;

        ref.current.animate(
          [
            { transform: "translate(0, 0)" },
            {
              transform: `translate(${POSITIONS[idx]}px, ${
                -1 * POSITIONS[idx]
              }px)`,
            },
            { transform: "translate(0, 0)" },
          ],
          {
            delay: idx * 50,
            duration: 400,
          }
        );
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
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" ref={circle1Ref} />
      <circle cx="18.5" cy="5.5" r=".5" fill="currentColor" ref={circle2Ref} />
      <circle cx="11.5" cy="11.5" r=".5" fill="currentColor" ref={circle3Ref} />
      <circle cx="7.5" cy="16.5" r=".5" fill="currentColor" ref={circle4Ref} />
      <circle cx="17.5" cy="14.5" r=".5" fill="currentColor" ref={circle5Ref} />
      <path d="M3 3v16a2 2 0 0 0 2 2h16" ref={baseRef} />
    </svg>
  );
};
