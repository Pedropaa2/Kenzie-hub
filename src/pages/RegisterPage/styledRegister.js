import styled from "styled-components";
export const StyledRegister = styled.div`
  @media (min-width: 768px) {
    width: 400px;
    margin: 0 auto;
  }
`;
export const StyledMain = styled.main`
  width: 95%;
  margin: 0 auto;
  height: 860px;
  background-color: var(--Grey-02);
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 22px;
  }
  p {
    display: flex;
    justify-content: center;
  }
  select {
    height: 38px;
    background-color: var(--Grey-03);
    color: var(--Grey-04);
    width: 90%;
    margin: 0 auto;
    margin-bottom: 16px;
    border: none;
    border-radius: 4px;
    padding-left: 16px;
  }
  form {
    display: flex;
    flex-direction: column;
  }

  label {
    color: var(--Grey-05);
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 9.73988px;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 18px;
    margin-top: 22px;
  }
`;
