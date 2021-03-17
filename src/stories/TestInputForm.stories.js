import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {  FormProvider, useForm } from "react-hook-form";
import { TestInputForm } from "../TestInputForm"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Example/TestInputForm',
  component: TestInputForm,
  argTypes: {
    onLogin: { action: "onLogin" },
  },
};

function Template(args) {
  const methods = useForm({
    defaultValues: { user: "", password: "" },
    mode: "onBlur",
  });
  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log(data);
    args.onLogin(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TestInputForm />
      </form>
    </FormProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};