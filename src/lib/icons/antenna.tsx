import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const Antenna: React.FC<IconProps> = ({
    "data-hovered": hovered,
    ...props
}) => {
    const line1Ref = useRef<SVGPathElement>(null);
    const line2Ref = useRef<SVGPathElement>(null);
    const line3Ref = useRef<SVGPathElement>(null);
    const line4Ref = useRef<SVGPathElement>(null);
    const line5Ref = useRef<SVGPathElement>(null);
    const line6Ref = useRef<SVGPathElement>(null);

    useEffect(() => {
        if (!hovered) return;

        [line1Ref, line2Ref, line3Ref, line4Ref, line5Ref, line6Ref].forEach((ref, idx) => {
            ref.current?.animate(
                [{ strokeDasharray: "0, 100" }, { strokeDasharray: "100, 0" }],
                {
                    duration: 600,
                    iterations: 1,
                    fill: "forwards",
                    easing: "ease-in-out",
                    delay: idx * 50
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
            <path ref={line1Ref} d="M2 12 7 2" />
            <path ref={line2Ref} d="m7 12 5-10" />
            <path ref={line3Ref} d="m12 12 5-10" />
            <path ref={line4Ref} d="m17 12 5-10" />
            <path ref={line5Ref} d="M4.5 7h15" />
            <path ref={line6Ref} d="M12 16v6" />
        </svg>
    );
};
