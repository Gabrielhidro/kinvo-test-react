import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  width: 100%;

  background: var(--white);
  box-shadow: 0px 3px 20px #707b811a;

  section {
    display: flex;
    gap: 2rem;

    > div {
      display: flex;
      gap: 10px;

      div { 
        
        p {
          color: var(--text-200);
          font-size: 12px;
          font-weight: regular;
        }

        h2 {
          color: var(--text-400);
          font-size: 16px; 
          font-weight: bold;
        }
      }
    }
  }
`
