"use client";
import { autoRentColors } from "../../../../tailwind.config";

export const Colors: React.FC = () => (
  <div className="flex flex-wrap justify-center" dir="ltr" lang="en">
    {Object.entries(autoRentColors).map(([groupName, colors]) =>
      Object.entries(colors).map(([name, color]) => (
        <ColorBox
          key={`${groupName}-${name}`}
          name={`${groupName}.${name}`}
          color={color}
        />
      ))
    )}
  </div>
);

const ColorBox: React.FC<{ name: string; color: string }> = ({
  name,
  color,
}) => (
  <p
    className="w-96 h-60 flex flex-col items-center justify-center text-center font-[600] uppercase"
    style={{ backgroundColor: color }}
  >
    <span>{name}</span>
    <span>{color}</span>
  </p>
);
