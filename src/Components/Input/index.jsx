import React from "react";
import { StyledFieldset } from "./styledInput";

export function Input({ labelText, placeHolder, register, errors, type }) {
  return (
    <StyledFieldset>
      <label htmlFor={register.name}> {labelText} </label>
      <input
        type={type}
        id={register.name}
        placeholder={placeHolder}
        {...register}
      />
      {errors && <p className="error"> {errors.message} </p>}
    </StyledFieldset>
  );
}
