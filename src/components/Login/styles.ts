import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fffbf7;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .login__logo {
    max-width: 250px;
    margin-bottom: 8rem;
  }

  .login__box {
    background-color: #fef0de;
    padding: 7rem 10rem;
    border-radius: 13px;
    border: 1px solid #f0e3d1;

    h2 {
      margin-bottom: 5rem;
      font-weight: 500;
    }

    button {
      background: #26211b;
      border-radius: 6px;
      color: white;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 1rem;
      transition: all 0.3s ease;

      span {
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
        margin-right: 1rem;
      }

      &:hover {
        background-color: #403a34;
      }
    }
  }
`
