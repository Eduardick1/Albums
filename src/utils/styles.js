import styled from "styled-components";

export const Label = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const LiWrapper = styled.li`
  display: flex;
  flex-direction: column;
`;

export const LiTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
`;

export const Photos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-content: center center;
  padding: 2rem;
  gap: 2rem;
`;
