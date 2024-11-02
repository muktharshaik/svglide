import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const SwatchBook: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGSVGElement>(null);
  const book1Ref = useRef<SVGPathElement>(null);
  const book2Ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!hovered) return;

    baseRef.current?.animate([{ opacity: "0" }, { opacity: "1" }], {
      duration: 600,
      iterations: 1,
      fill: "forwards",
      easing: "ease-in-out",
    });

    book1Ref.current?.animate(
      [{ transform: "rotate(-45deg)" }, { transform: "rotate(0deg)" }],
      {
        duration: 400,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );

    book2Ref.current?.animate(
      [{ transform: "rotate(-90deg)" }, { transform: "rotate(0deg)" }],
      {
        duration: 400,
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
      ref={baseRef}
      {...props}
    >
      <path d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z" />
      <path d="M 7 17h.01" />
      <path
        d="m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"
        ref={book1Ref}
      />
      <path d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7" ref={book2Ref} />
    </svg>
  );
};
