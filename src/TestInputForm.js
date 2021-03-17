import React from "react";
import { useFormContext } from "react-hook-form";

/**
 * Primary UI component for user interaction
 */
export const TestInputForm = () => {
  const methods = useFormContext();

  console.log(methods.errors);
  return (
    <>
      <h3>Default Validation</h3>
      <input
        name="user"
        type="text"
        ref={methods.register({ required: "User Name Is Required" })}
      />
      <p>{methods.errors.user?.message}</p>
      {/* <Controller
        control={methods.control}
        name="user"
        render={(
          { onChange, onBlur, value, name, ref },
          { invalid, isTouched, isDirty }
        ) => (
          <input
            name="user"
            type="text"
            onChange={onChange}
            ref={methods.register({ required: true, maxLength: 80 })}
          />
        )}
      /> */}

      <button type="submit">SAVE</button>
    </>
  );
};
