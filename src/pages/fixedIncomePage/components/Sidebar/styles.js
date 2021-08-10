import styled from 'styled-components';

export const Container = styled.aside`
  height: 100vh;

  background: var(--white);

  ul  {


    li,
    .dropdown {
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

    .drop-content {
      display: none;

      ul li {
        list-style: upper-alpha;

        display: flex;
        justify-content: space-between;

        color: var(--text);

        i {
          font-size: 13px;

          }

        a {
          position: relative;

          font-size: 13px;
          text-decoration: none;
          padding-left: 10px;

          color: var(--text);

          &::before {
            content: '';
            position: absolute;
            top: 40%;
            left: 0px;

            width: 5px;
            height: 5px;

            background: var(--purple);
            border-radius: 50%;
          }
        }

      }
    }

    .drop-content.active {
      display: block;
    }
  }
`
