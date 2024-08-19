import { css } from "@emotion/css";
import { CSSObject, useTheme } from "@emotion/react";
import { Icon, IconProps } from "@phosphor-icons/react";
import React, { ReactNode } from "react";
import { Stack } from "../../layout/Stack";

type ButtonProps = {
  children?: ReactNode;
  startIcon?: Icon;
  startIconProps?: IconProps;
  endIcon?: Icon;
  endIconProps?: IconProps;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  startIcon,
  startIconProps,
  endIcon,
  endIconProps,
  disabled,
  onClick,
}) => {
  const theme = useTheme();
  const StartIcon = startIcon;
  const EndIcon = endIcon;

  const activeStyles: CSSObject = disabled
    ? {}
    : {
        transition: "0.3s",
        borderColor: theme.color.border.buttonActive,
        background: theme.color.background.buttonActive,
      };

  const wrapper = css`
    border: 1px solid
      ${disabled
        ? theme.color.background.buttonDisabled
        : theme.color.background.button};
    border-radius: 4px;
    padding: 8px 12px;
    background: ${disabled
      ? theme.color.background.buttonDisabled
      : theme.color.background.button};
    cursor: ${disabled ? "normal" : "pointer"};
    ${theme.typography.body1}
    font-weight: 600;
    color: ${theme.color.text.secondary};

    &:hover,
    &:focus {
      ${activeStyles}
    }
  `;

  return (
    <button className={wrapper} disabled={disabled} onClick={onClick}>
      <Stack align="center" gap={6}>
        {StartIcon ? <StartIcon {...startIconProps} /> : null}
        {children}
        {EndIcon ? <EndIcon {...endIconProps} /> : null}
      </Stack>
    </button>
  );
};
