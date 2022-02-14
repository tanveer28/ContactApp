import styled, { css } from "styled-components";

interface ButtonProps {
  primary: boolean;
  disabled?: boolean;
}

const Button = styled.input.attrs({
  type: "button",
})<ButtonProps>`
  color: "blue";
  text-color: "black";

  ${(props) =>
    props.disabled &&
    css`
    disabled
    `}

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
    `}
`;

interface HeaderButtonProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const HeaderButton = ({
  text,
  disabled,
  onClick,
}: HeaderButtonProps): JSX.Element => {
  return (
    <div>
      <Button onClick={onClick} primary disabled={disabled} value={text} />
    </div>
  );
};
