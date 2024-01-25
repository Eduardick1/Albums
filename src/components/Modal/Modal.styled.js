import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center center;
  background-color: ${"rgba(0,0,0, 0.5)"};
`;

export const ImageModal = styled.div`
  max-width: 600px;
  max-height: 600px;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CloseModal = styled.span`
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
`;
