import Svg, { Path } from "react-native-svg";

interface MuseIconProps {
  size?: number;
  color?: string;
}

export function MuseIcon({ size = 16, color = "currentColor" }: MuseIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2.5c2.9 0 5.3 1 7.2 2.9 1.8 1.8 2.8 4.1 2.8 6.8 0 2.9-1.1 5.4-3.1 7.2-1.9 1.7-4.2 2.6-6.9 2.6-2.7 0-5-1-6.9-2.8C3.1 17.3 2 14.9 2 12.2c0-2.7 1-5 2.8-6.8C6.7 3.5 9.1 2.5 12 2.5Zm0 3.2c-1.9 0-3.5.7-4.8 2-1.2 1.2-1.9 2.8-1.9 4.5 0 1.9.8 3.6 2.1 4.8 1.2 1.1 2.8 1.7 4.6 1.7 1.8 0 3.4-.6 4.6-1.7 1.3-1.2 2.1-2.9 2.1-4.8 0-1.7-.7-3.3-1.9-4.5-1.3-1.3-2.9-2-4.8-2Z"
        fill={color}
        fillRule="evenodd"
      />
      <Path
        d="M12 8.4c.9 0 1.7.4 2.3 1 .6.6 1 1.4 1 2.4 0 1-.4 1.9-1 2.5-.6.6-1.4 1-2.3 1-.9 0-1.7-.4-2.3-1-.6-.6-1-1.5-1-2.5 0-1 .4-1.8 1-2.4.6-.6 1.4-1 2.3-1Z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  );
}
