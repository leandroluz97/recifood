import styled from "styled-components"

export const Container = styled.div`
  background-color: var(--primary);
  padding: 5rem 0 10rem 0;

  header {
    max-width: var(--screen-size);
    margin: 0 auto;
    padding: 0 2.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header__content {
    display: flex;
    justify-content: flex-end;
    flex: 1;
  }
  .header__icon {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 2rem 0 2rem 0;

    img {
      width: 200px;
      height: auto;
    }

    .header__content {
      display: none;
    }

    .header__icon {
      display: block;
    }
  }
`
