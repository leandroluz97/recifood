import styled from "styled-components"

export const Container = styled.div`
  max-width: var(--screen-size);
  margin: -8rem auto 0 auto;
  padding: 0 2.5rem;

  div {
    border-radius: 13px;
    overflow: hidden;
    background-color: #fef0de;

    .open__title {
      color: #443b30;
      font-size: 2.5rem;
      padding: 1rem 2.5rem 0 2.5rem;
      margin-bottom: 1.5rem;
      text-align: center;
    }

    .open__description {
      color: #6b6b6b;
      font-size: 1.6rem;
      padding: 1rem 2.5rem 0 2.5rem;
      height: 6rem;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
    }

    .open__price {
      color: #fd7777;
      font-size: 2.5rem;
      font-weight: 700;
      padding: 1rem 0 0 2.5rem;
      margin-bottom: 2rem;
      text-align: center;
    }

    footer {
      background-color: #7a6e5e;
      display: flex;
      justify-content: space-between;
      padding: 2rem;

      .open__footer-left {
        display: flex;
        background: transparent !important;

        button {
          background-color: #f8e8d4;
          border-radius: 7px;
          height: 40px;
          width: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0.3rem;
          border: none;
        }
      }

      .open__footer-right {
        display: flex;
        button {
          background-color: #f8e8d4;
          border-radius: 7px;
          height: 40px;
          width: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0.3rem;
          border: none;
        }
      }
    }
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    margin: 3rem auto 0 auto;
  }
`
