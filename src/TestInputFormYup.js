import React from "react";
import { useFormContext } from "react-hook-form";

/**
 * Primary UI component for user interaction
 */
export const TestInputFormYup = () => {
  const methods = useFormContext();

  console.log(methods.errors);
  return (
    <>
      <h3>Using Yup For Validation</h3>
      <input name="user" type="text" ref={methods.register} />
      <p>{methods.errors.user?.message}</p>

      <button type="submit">SAVE</button>
    </>
  );
};
