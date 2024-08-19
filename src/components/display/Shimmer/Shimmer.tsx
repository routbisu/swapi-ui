import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

type ShimmerProps = {
  height?: number;
  width?: number | string;
  color?: "primary" | "secondary";
};

export const Shimmer: React.FC<ShimmerProps> = ({
  height = 16,
  width,
  color = "primary",
}) => {
  const theme = useTheme();

  const shimmerWrapper = css`
    border-radius: 4px;
    height: ${height}px;
    width: ${width}${typeof width === "number" ? "px" : ""};
    background: ${theme.color.text[color]};
    animation: shimmer 2000ms infinite normal forwards;

    @keyframes shimmer {
      0% {
        opacity: 0.05;
      }
      50% {
        opacity: 0.2;
      }
      100% {
        opacity: 0.05;
      }
    }
  `;

  return <div className={shimmerWrapper} />;
};
