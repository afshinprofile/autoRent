import { SVGAttributes } from "react";

const BaseIcon: React.FC<SVGAttributes<SVGElement>> = ({
  color = "#5C5F61",
  fill="currentColor",
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  children,
  ...res
}) => {
  return (
    <svg
      color={color}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...res}
    >
      {children}
    </svg>
  );
};

export default BaseIcon;
