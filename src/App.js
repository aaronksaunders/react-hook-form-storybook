import logo from './logo.svg';
import './App.css';
import { TestInputForm } from './TestInputForm';
import {  FormProvider, useForm } from "react-hook-form";

function App() {

  const methods = useForm({
    defaultValues: { user: "", password: "" },
    mode: "onBlur",
  });
  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="App">
      <header >
         <h2>React Hook Form Storybook</h2> 
      </header>
      <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
      <TestInputForm />
      </form>
      </FormProvider>
    </div>
  );
}

export default App;
