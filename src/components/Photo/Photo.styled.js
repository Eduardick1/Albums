import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
`;

export const TitlePhoto = styled.div`
  position: absolute;
  width: 100%;
  display: none;
  bottom: calc(100% + 1rem);
  left: 0;
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 1rem;
    border-style: solid;
    border-color: #000 transparent transparent transparent;
  }
`;

export const PhotoWrapper = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  &:hover {
    ${TitlePhoto} {
      display: block;
    }
  }
`;
