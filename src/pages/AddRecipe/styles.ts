import styled from "styled-components"

export const Container = styled.div`
  max-width: var(--screen-size);
  margin: -7rem auto 0 auto;
  padding: 5rem 2.5rem;
  border-radius: 13px;
  background-color: #fef0de;

  @media (max-width: 768px) {
    margin: 0rem auto 0 auto;
    border-radius: 0px;
  }
`
export const Form = styled.form`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  button {
    background-color: var(--primary);
    height: 6rem;
    padding: 0 2rem 0 2rem;
    border: none;
    border-radius: 6px;
    transition: background-color 0.6s ease;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--btn-color);
    margin-top: 1rem;
    width: 100%;

    &:hover {
      background-color: #3f372d;
    }
  }
`
