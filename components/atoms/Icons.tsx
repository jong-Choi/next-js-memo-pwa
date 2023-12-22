import { PropsWithChildren } from "react";
import { Clock, IconProps, Menu, Minus, Plus } from "react-feather";

const Icons = ({
  iconName,
  children,
  rotate,
  ...rest
}: PropsWithChildren<CustomIconsProps>) => {
  const Icon = IconsMap[iconName];

  rest.className += ` transform ${rotate}`;

  return <Icon {...rest}>{children}</Icon>;
};

export default Icons;

type TIconNames = keyof typeof IconsMap;

interface CustomIconsProps extends IconProps {
  iconName: TIconNames;
  rotate?: "rotate-45" | "rotate-90" | "rotate-180";
}

const IconsMap = {
  minus: Minus,
  plus: Plus,
  menu: Menu,
  clock: Clock,
} as const;
