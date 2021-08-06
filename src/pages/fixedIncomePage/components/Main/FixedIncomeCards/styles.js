import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;
`

export const Card = styled.div`
  width: 100%;
  padding: 14px 8px;

  box-shadow: 0px 2px 20px #0000000D;

  border-radius: 10px;
  background: white;

  div {
    border-left: 2px solid var(--white-600);
    padding-left: 8px;

    p {
      font-size: 9px;
      font-weight: normal;

      color: var(--text-400)
    }

    h2 {
      font-size: 14px;
      font-weight: bold;

      color: var(--purple)
    }
  }
`