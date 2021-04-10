import styled from "styled-components"

export const FavButton = styled.button`
  background-color: var(--secondary);
  height: 6rem;
  padding: 0 2rem 0 2rem;
  border: none;
  border-radius: 6px;
  margin: 0 2rem;
  transition: background-color 0.6s ease;

  &:hover {
    background-color: #3f372d;
  }
`
