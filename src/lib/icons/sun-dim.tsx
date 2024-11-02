import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const SunDim: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGSVGElement>(null);

  const dot1Ref = useRef<SVGPathElement>(null);
  const dot2Ref = useRef<SVGPathElement>(null);
  const dot3Ref = useRef<SVGPathElement>(null);
  const dot4Ref = useRef<SVGPathElement>(null);
  const dot5Ref = useRef<SVGPathElement>(null);
  const dot6Ref = useRef<SVGPathElement>(null);
  const dot7Ref = useRef<SVGPathElement>(null);
  const dot8Ref = useRef<SVGPathElement>(null);

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

    [
      dot1Ref,
      dot2Ref,
      dot3Ref,
      dot4Ref,
      dot5Ref,
      dot6Ref,
      dot7Ref,
      dot8Ref,
    ].forEach((dot, index) => {
      dot.current?.animate(
        [{ transform: "scale(0)" }, { transform: "scale(1)" }],
        {
          duration: 600,
          iterations: 1,
          fill: "forwards",
          easing: "ease-in-out",
          delay: 25 * index,
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 4h.01" ref={dot1Ref} />
      <path d="M20 12h.01" ref={dot2Ref} />
      <path d="M12 20h.01" ref={dot3Ref} />
      <path d="M4 12h.01" ref={dot4Ref} />
      <path d="M17.657 6.343h.01" ref={dot5Ref} />
      <path d="M17.657 17.657h.01" ref={dot6Ref} />
      <path d="M6.343 17.657h.01" ref={dot7Ref} />
      <path d="M6.343 6.343h.01" ref={dot8Ref} />
    </svg>
  );
};
