import styled from 'styled-components';

export const Container = styled.aside`
  height: 100vh;
  padding-top: 94px;

  background: var(--white);

  ul  {


    li {
      width: 250px;
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 15px;

      border-bottom: 1px solid var(--gray);

      cursor: pointer;

      &:hover {
        background: var(--white-200);
      }

      div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
`
