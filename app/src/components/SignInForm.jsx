import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.string()
  .min(2, 'Must be longer than 2 characters')
  .max(15, 'Nice try, nobody has a login that long')
  .required('Required');

const SignInSchema = Yup.object().shape({
  login: loginSchema,
  // ...
});

const SignUpSchema = Yup.object().shape({
  login: loginSchema,
  // ....
});

export default function SignInForm() {
  return (
    <Formik
      initialValues={{
        login: '',
      }}
      validationSchema={SignInSchema}
      onSubmit={values => {
        console.log(values);
      }}
      render={({
        errors
      }) => (
        <Form>
          <ErrorMessage
            name="login"
            component="div"
            className="field-error"
          />
          <Field
            name="login"
            placeholder="Login"
          />
            <Field
                name="name"
                placeholder="name"
            />
          <input type="submit" value="Sign in" />
        </Form>
      )}
    />
  );
}

