import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  gap: 10px;
  padding: 20px;

  border-bottom: 1px solid var(--white-400);
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 9px;

  border: 1px solid #DAE0E3;
  border-radius: 10px;

  .header {
    display: flex;
    align-items: center;

    h3 {
      font-size: 9px;
      font-weight: normal;
      letter-spacing: 0.45px;
      color: var(--text-400);
    }

    img {
      width: 13px;
      margin-left: 8px;
    }
  }

  .content {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 10px;

    h3 {
      font-size: 13px;
      font-weight: normal;
      color: var(--text-400);
      width: 60%;
    }

    > div {
      width: 35%;

      p {
        font-size: 10px;
        color: var(--text);
      }

      h4 {
        font-size: 14px;
        font-weight: normal;
        color: var(--purple-light);
      }
    }

  }

  .results-content {
    display: flex;
    margin-top: 20px;
    align-items: flex-end;
    justify-content: space-between;

    p {
      font-size: 10px;
      color: var(--text-400);
    }

    h3 {
      font-size: 14px;
      font-weight: normal;
      color: var(--green);
    }
  }

  .venc-content {
    display: flex;
    margin-top: 20px;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 10px;
      color: var(--text-400);
    }

    h3 {
      font-size: 14px;
      font-weight: normal;
      color: var(--blue);
    }
  }
`

