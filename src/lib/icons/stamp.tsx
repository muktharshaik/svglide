import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const Stamp: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const stampRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!hovered) return;

    stampRef.current?.animate(
      [
        { transform: "translate(0px, 0px) " },
        { transform: "translate(0px, 5px)" },
        { transform: "translate(0px, 0px) " },
      ],
      {
        duration: 300,
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
      <path d="M5 22h14" />
      <g ref={stampRef}>
        <path d="M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z" />
        <path d="M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13" />
      </g>
    </svg>
  );
};
