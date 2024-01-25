import styled from "styled-components";

export const FavoritesNotFound = styled.main`
  display: grid;
  place-content: center center;
`;

export const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
  h1 {
    font-size: 22px;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 18px;
  }
`;
