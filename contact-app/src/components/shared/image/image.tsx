import styled, { css } from "styled-components";

interface ImageContainerProps {
  url: string;
}

const ImageContainer = styled.div<ImageContainerProps>`
  width: 50px;
  height: 50px;
  ${(props) =>
    props.url &&
    css`
      background-image: url(${props.url});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `};
`;

interface ImageProps {
  url: string;
}

export const Image = ({ url }: ImageProps): JSX.Element => {
  return <ImageContainer url={url}></ImageContainer>;
};
