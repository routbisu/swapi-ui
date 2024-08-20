import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import React, { ReactNode } from "react";
import { Button, ButtonProps } from "../../inputs/Button";
import { Stack } from "../../layout/Stack";
import { Typography } from "../Typography";
import { X } from "@phosphor-icons/react";

type ModalProps = {
  heading: string;
  onClose: () => void;
  children?: ReactNode;
  submitButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
};

export const Modal: React.FC<ModalProps> = ({
  heading,
  onClose,
  children,
  submitButtonProps = { children: "Submit" },
  cancelButtonProps = { children: "Cancel", onClick: onClose },
}) => {
  const theme = useTheme();

  const container = css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${theme.color.background.button}F7;
    z-index: 1000;
  `;

  const content = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${theme.color.background.button};
    min-width: 380px;
    border: 1px solid ${theme.color.border.card};
  `;

  const header = css`
    padding: 12px;
    border-bottom: 1px solid ${theme.color.border.card};
  `;

  const body = css`
    padding: 12px;
    background: ${theme.color.background.buttonDisabled};
  `;

  const footer = css`
    padding: 12px;
    border-top: 1px solid ${theme.color.border.card};
    background: ${theme.color.background.buttonActive};
  `;

  return (
    <div className={container}>
      <div className={content}>
        <div className={header}>
          <Stack align="center" justify="space-between">
            <Typography variant="h2" color="secondary">
              {heading}
            </Typography>
            <X
              weight="bold"
              onClick={onClose}
              className={css`
                cursor: pointer;
              `}
            />
          </Stack>
        </div>
        <div className={body}>{children}</div>
        <div className={footer}>
          <Stack align="center" justify="flex-end" gap={12}>
            <Button {...cancelButtonProps} />
            <Button {...submitButtonProps} />
          </Stack>
        </div>
      </div>
    </div>
  );
};
