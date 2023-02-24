import styled from "styled-components";

export const StyledLogin = styled.div`
  img {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 81px;
    margin-bottom: 20px;
  }
  .form_Container {
    height: 450px;
    background-color: var(--Grey-02);
    width: 95%;
    margin: 0 auto;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 19px;
  }
  p {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  h1 {
    display: flex;
    justify-content: center;
    padding-top: 33px;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 19px;
    height: 38px;
    width: 90%;
    background-color: var(--Grey-04);
    color: var(--Grey-05);
    margin: 0 auto;
    border: none;
    border-radius: 4px;
    text-decoration: none;
    margin-top: 20px;
    :hover {
      background-color: var(--Grey-03);
    }
  }
  @media (min-width: 768px) {
    .form_Container {
      width: 400px;
    }
  }
`;
