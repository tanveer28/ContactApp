import styled, { css } from "styled-components";

interface FlexProps {
  justifyContext: boolean;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: row;
  width: 200px;
  ${(props) =>
    props.justifyContext &&
    css`
      justify-content: space-between;
    `};
`;

interface FlexContainerProps {
  children?: JSX.Element;
  justifyContext: boolean;
}

export const FlexContainer = ({
  children,
  justifyContext,
}: FlexContainerProps): JSX.Element => {
  return <Flex justifyContext={justifyContext}>{children}</Flex>;
};
