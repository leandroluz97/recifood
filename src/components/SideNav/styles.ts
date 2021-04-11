import styled from "styled-components"

export const Container = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background-color: #1e1913;
    color: white;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 92px;
    padding: 2.5rem;

    div {
      display: flex;
      flex-direction: column;
      height: 100%;
      position: relative;
    }
  }
`
