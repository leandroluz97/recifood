import styled from "styled-components"

export const InputSearch = styled.input`
  background-color: var(--secondary);
  color: white;
  border: none;
  font-family: "Poppins", sans-serif;
  height: 6rem;
  padding: 0 1.6rem;
  font-size: 1.6rem;
  border-radius: 6px;
  outline-color: #635c52;
  outline: none;
  margin: 0 2rem;
  width: 100%;
  max-width: 300px;
  &::placeholder {
    color: #635c52;
  }
`
