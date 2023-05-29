import * as Icon from "./Icons";

export type IconOption = keyof typeof Icon;

export interface IconWrapperProps {
  width?: number;
  height?: number;
  rotate?: number;
  isButton?: boolean;
  onClick?: () => void;
}

export interface IconProps extends IconWrapperProps {
  icon: IconOption;
  color?: string;
}

export interface IconPropsWithSVGProps extends React.SVGProps<SVGElement> {
  color?: string;
}
