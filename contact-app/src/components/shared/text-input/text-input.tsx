import { useLayoutEffect, useRef } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";

interface TextInputProps {
  readonly label: string;
  readonly text: string;
  readonly id: number;
  readonly disabled: boolean;
  readonly onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readonly type?: string;
}

export const TextInput = ({
  label,
  text,
  id,
  disabled,
  onChange,
  type,
}: TextInputProps): JSX.Element => {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id={`${label}-${id}`}>{label}</InputGroup.Text>
        <FormControl
          type={type}
          className={label}
          onChange={onChange}
          disabled={disabled}
          value={text}
        />
      </InputGroup>
    </>
  );
};
