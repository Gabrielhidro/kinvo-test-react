import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  border-bottom: 1px solid var(--white-400);

  div {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    
    select {
      width: 155px;
      padding: 8px;

      background: white;
      border: 1px solid #D6D9DD;
      border-radius: 10px;
      color: var(--text);

      outline: none;
    }

    div {
      position: relative;

      input {

      width: 240px;
      padding: 8px;
      padding-left: 30px;

      border: 1px solid #D6D9DD;
      border-radius: 10px;
      color: var(--text);

      outline: none;
      }

      img {
        position: absolute;

        left: 10px;
        top: 8px;
      }
    }
  }
`