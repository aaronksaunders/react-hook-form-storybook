import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {  FormProvider, useForm } from "react-hook-form";
import { TestInputFormYup } from "../TestInputFormYup"

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Example/TestInputFormYup',
  component: TestInputFormYup,
  argTypes: {
    onLogin: { action: "onLogin" },
  },
};

function Template(args) {

  const schema = yup.object().shape({
    user: yup.string().required(),
  });

  const methods = useForm({
    defaultValues: { user: "" },
    mode: "onBlur",
    resolver: yupResolver(schema)
  });
  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log(data);
    args.onLogin(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TestInputFormYup />
      </form>
    </FormProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};