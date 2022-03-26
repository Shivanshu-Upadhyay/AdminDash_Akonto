import React from 'react'
import { Form, Field } from "react-final-form";
function Test() {
    const onSubmit = (formValues) => {
      console.log(formValues);
    };
  return (
    <>
      <Form onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Field name="firstname">
              {({ input }) => (
                <div className="cardio fullw10">
                  <label>First Name </label>
                  <input type="text" {...input} placeholder="" />
                </div>
              )}

            </Field>
            <button type='submit'>save</button>
          </form>
        )}
      </Form>
    </>
  );
}

export default Test