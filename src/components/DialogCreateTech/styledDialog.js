import styled from "styled-components";
export const StyledDialog = styled.dialog`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  .modal_Container {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .modal_Content {
    background-color: var(--Grey-02);
    margin: auto;
    width: 95%;
    height: 380px;
    position: relative;
  }

  h3 {
    color: var(--Grey-05);
    margin-left: 20px;
  }
  label {
    color: var(--Grey-05);
    font-size: 12px;
    margin-top: 20px;
  }
  input {
    color: var(--Grey-05);
    background-color: var(--Grey-03);
  }
  select {
    color: var(--Grey-05);
    background-color: var(--Grey-03);
  }
  .close {
    color: var(--Grey-04);
    position: absolute;
    right: 12px;
    top: 12px;
    cursor: pointer;
  }
  .modalHeader {
    height: 50px;
    background-color: var(--Grey-03);
    display: flex;
    align-items: center;
  }
  .input_Container {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
  }

  .select_Container {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
  }
  input {
    height: 48px;
    border-radius: 4px;
    border: none;
    margin-top: 22.3px;
    padding-left: 17px;
  }
  select {
    height: 48px;
    border-radius: 4px;
    border: none;
    margin-top: 22.3px;
    padding-left: 17px;
  }
  .button {
    width: 90%;
    cursor: pointer;
    margin: 0 auto;
  }
  button {
    height: 48px;
    border-radius: 4px;
    border: none;
    background-color: var(--Color-primary);
    color: var(--Grey-05);
    width: 100%;
    margin-top: 20px;
  }
  button:hover {
    background-color: var(--Color-primary-02);
  }
  .error {
    color: var(--Color-primary-02);
  }
  @media (min-width: 768px) {
    .modal_Content {
      width: 370px;
      height: 380px;
    }
  }
`;
