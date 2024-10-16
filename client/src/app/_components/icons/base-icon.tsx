import { SVGAttributes } from "react";

const BaseIcon: React.FC<SVGAttributes<SVGElement>> = ({
  color = "primary",
  fill = "none",
  width = 24,
  height = 24,
  // strokeWidth = "1.5",
  viewBox = "0 0 24 24",
  children,
  ...res
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      // strokeWidth={strokeWidth}
      viewBox={viewBox}
      fill={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
      {...res}
    >
      {children}
    </svg>
  );
};

export default BaseIcon;
