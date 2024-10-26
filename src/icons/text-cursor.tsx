import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const TextCursor: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!hovered) return;

    baseRef.current?.animate([{ opacity: 1 }, { opacity: 0 }, { opacity: 1 }], {
      duration: 1000,
      iterations: 2,
      easing: "steps(2, start)",
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
      <path d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" />
      <path d="M7 22h1a4 4 0 0 0 4-4v-1" />
      <path d="M7 2h1a4 4 0 0 1 4 4v1" />
    </svg>
  );
};
