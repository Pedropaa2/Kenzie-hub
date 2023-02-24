import styled from "styled-components";

export const StyledDashHeader = styled.header`
  button {
    height: 32px;
    width: 80px;
    color: var(--Grey-05);
    background-color: var(--Grey-02);
  }
  .header_Container {
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
    margin-bottom: 40px;
  }
  @media (min-width: 768px) {
    width: 60%;
    margin: 0 auto;

    .header_Container {
      width: 100%;
    }
  }
`;

export const StyledSection = styled.section`
  margin: 0 auto;
  height: 150px;
  border-top: 1px var(--Grey-02) solid;
  border-bottom: 1px var(--Grey-02) solid;
  h1 {
    margin-top: 31px;
    margin-bottom: 10px;
  }
  .text_Container {
    width: 95%;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    .text_Container {
      width: 60%;
      display: flex;
      justify-content: space-between;
      margin-top: 60px;
      align-items: center;
    }
    h1 {
      margin: 0;
    }
  }
`;
export const StyledContent = styled.section`
  width: 95%;
  margin: 0 auto;
  h1 {
    margin-top: 37px;
    margin-bottom: 23px;
  }
  .create {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .img_Container {
    width: 32px;
    height: 32px;
    background-color: var(--Grey-02);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .img_Container:hover {
    background-color: var(--Grey-03);
  }
  button {
    color: white;
  }
  ul {
    background-color: var(--Grey-02);
    height: 420px;
    width: 100%;
    background-color: var(--Grey-02);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    align-items: center;
  }
  @media (min-width: 768px) {
    width: 60%;
  }
`;
