import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const PawPrint: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGSVGElement>(null);

  const paw1Ref = useRef<SVGCircleElement>(null);
  const paw2Ref = useRef<SVGCircleElement>(null);
  const paw3Ref = useRef<SVGCircleElement>(null);

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

    [paw1Ref, paw2Ref, paw3Ref].forEach((ref) => {
      ref.current?.animate(
        [
          { transform: "scale(0.7)" },
          { transform: "scale(1.1)" },
          { transform: "scale(1)" },
        ],
        {
          duration: 800,
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
      ref={baseRef}
      {...props}
    >
      <circle cx="11" cy="4" r="2" ref={paw1Ref} />
      <circle cx="18" cy="8" r="2" ref={paw2Ref} />
      <circle cx="20" cy="16" r="2" ref={paw3Ref} />
      <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
    </svg>
  );
};
