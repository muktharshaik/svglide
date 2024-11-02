import type { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  "data-hovered"?: boolean;
  size?: number | string;
  strokeWidth?: number;
}

export * from "./icons/icons";

export const version = "1.0.0";
