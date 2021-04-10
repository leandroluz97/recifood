import styled from "styled-components"

export const Container = styled.div`
  background-color: var(--primary);
  padding: 5rem 0 20rem 0;

  header {
    max-width: var(--screen-size);
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
  }
  .header__content {
    display: flex;
    justify-content: flex-end;
    flex: 1;
  }
`
