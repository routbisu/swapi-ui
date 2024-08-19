import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { Icon } from "@phosphor-icons/react";
import { debounce } from "lodash";
import { useMemo } from "react";

type TextfieldProps = {
  disabled?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
  defaultValue?: string;
  icon?: Icon;
};

export const Textfield: React.FC<TextfieldProps> = ({
  disabled,
  placeholder,
  onChange,
  icon,
  value,
  defaultValue,
}) => {
  const EndIcon = icon;
  const theme = useTheme();

  const container = css`
    position: relative;
  `;

  const textfield = css`
    border-radius: 4px;
    padding: 8px 12px;
    padding-right: ${icon ? 32 : 12}px;
    border: 1px solid
      ${disabled
        ? theme.color.background.buttonDisabled
        : theme.color.background.button};
    background: transparent;
    color: ${theme.color.text.secondary};
    ${theme.typography.body1}
  `;

  const iconHolder = css`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  `;

  const debouncedOnChange = useMemo(
    () => onChange && debounce(onChange, 250),
    [onChange]
  );

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (debouncedOnChange) {
      debouncedOnChange(evt.target.value);
    }
  };

  return (
    <div className={container}>
      <input
        type="text"
        className={textfield}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        defaultValue={defaultValue}
      />

      {EndIcon && (
        <EndIcon
          size={16}
          color={theme.color.text.secondary}
          className={iconHolder}
        />
      )}
    </div>
  );
};
