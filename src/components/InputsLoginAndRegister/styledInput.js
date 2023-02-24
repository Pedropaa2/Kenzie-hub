import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
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

  input {
    border: none;
    border-radius: 4px;
    height: 38px;
    background-color: var(--Grey-03);
    color: var(--Grey-04);
    width: 90%;
    margin: 0 auto;
    padding-left: 16px;
  }
  .error {
    color: var(--Color-primary-02);
    flex-direction: inherit;
    width: 90%;
    margin: 0 auto;
    font-size: 14px;
  }
`;
