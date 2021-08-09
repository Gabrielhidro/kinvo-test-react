import styled from 'styled-components';

export const Container = styled.aside`
  height: 100vh;

  background: var(--white);

  ul  {


    li {
      min-width: 200px;
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 15px;

      border-bottom: 1px solid var(--white-600);

      cursor: pointer;

      &:hover {
        background: var(--white-200);
      }

      div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p, i {
          color: var(--text);
          font-size: 13px;
        }
      }
    }
  }
`
