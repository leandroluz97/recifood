import styled from "styled-components"

export const Card = styled.a`
  background-color: var(--card-color);
  border-radius: 13px;
  overflow: hidden;
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
    color: #3d3d4d;
    font-size: 2.5rem;
    padding: 1rem 2.5rem 0 2.5rem;
    margin-bottom: 1.5rem;
  }

  .card__description {
    color: #7c7c92;
    font-size: 1.6rem;
    padding: 1rem 2.5rem 0 2.5rem;
    height: 6rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .card__price {
    color: #3ab226;
    font-size: 2.5rem;
    font-weight: 700;
    padding: 1rem 0 0 2.5rem;
    margin-bottom: 2rem;
  }

  footer {
    background-color: #e4e4eb;
    display: flex;
    justify-content: space-between;
    padding: 2rem;

    .card__footer-left {
      display: flex;

      button {
        background-color: #f3f3f3;
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
      background-color: #f3f3f3;
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
`
