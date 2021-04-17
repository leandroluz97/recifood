import styled from "styled-components"

export const Card = styled.a`
  background-color: #fef0de;
  border-radius: 13px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }

  .card__title {
    color: #443b30;
    font-size: 2.5rem;
    padding: 1rem 2.5rem 0 2.5rem;
    margin-bottom: 1.5rem;
  }

  .card__description {
    color: #6b6b6b;
    font-size: 1.6rem;
    padding: 1rem 2.5rem 0 2.5rem;
    height: 6rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .card__price {
    color: #fd7777;
    font-size: 2.5rem;
    font-weight: 700;
    padding: 1rem 0 0 2.5rem;
    margin-bottom: 2rem;
  }

  footer {
    background-color: #7a6e5e;
    display: flex;
    justify-content: space-between;
    padding: 2rem;

    .card__footer-left {
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

    .card__footer-right {
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
`
