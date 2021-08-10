import styled from "styled-components";

export const Container = styled.section `
  display: flex;
  gap: 20px;
  margin-top: 20px;

  .content {
    background: white;
    width: 100%;

    border-radius: 10px;
    box-shadow: 0px 2px 20px #0000000D;

    h1 {
      font-size: 18px;
      font-weight: 500;

      padding: 20px;

      color: var(--text-200);
      border-bottom: 1px solid var(--white-400);
    }

    div {
      margin: 0 auto;

      border-bottom: 1px solid var(--white-400);
    }
  }
`