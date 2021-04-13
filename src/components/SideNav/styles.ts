import styled from "styled-components"
interface ContainerProps {
  isSideNavOpen: boolean
}
export const Container = styled.div<ContainerProps>`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background-color: #1e1913;
    color: white;
    position: absolute;
    bottom: 0;
    left: ${(props) => (props.isSideNavOpen ? "0%" : "100%")};
    right: 0;
    top: 92px;
    padding: 2.5rem;
    transition: all 0.4s ease;

    div {
      display: flex;
      flex-direction: column;
      height: 100%;
      position: relative;
    }
  }
`
