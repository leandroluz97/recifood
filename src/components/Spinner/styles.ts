import styled from "styled-components"

export const Container = styled.div`
  display: inline-block;
  position: absolute;
  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid var(--primary);
    border-radius: 50%;
    animation: ldsRing 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--primary) transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes ldsRing {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
