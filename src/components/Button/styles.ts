import styled from "styled-components"

export const ButtonAction = styled.button`
  background-color: var(--btn-color);
  height: 6rem;
  padding: 0 2rem 0 2rem;
  border: none;
  border-radius: 6px;
  transition: background-color 0.6s ease;
  text-transform: uppercase;
  font-weight: 600;

  &:hover {
    background-color: #fbe7cc;
  }
`
