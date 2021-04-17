import styled from "styled-components"

export const Container = styled.div`
  max-width: var(--screen-size);
  margin: -7rem auto 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  padding: 0 2.5rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin: 4rem auto 0 auto;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 3rem;
  }
  @media (max-width: 630px) {
    grid-template-columns: 1fr;
    margin-bottom: 3rem;
  }
`
