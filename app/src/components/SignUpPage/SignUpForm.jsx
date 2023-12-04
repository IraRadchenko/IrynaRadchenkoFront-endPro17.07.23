import { useFormik } from "formik";
import { Fragment } from "react";
import { string, number, object } from 'yup';


const formElementsConfiguration = {
  name: {
    defaultValue: '',
    inputType: 'text',
    labelText: 'Name: ',
    vSchema: string()
        .min(2, 'too short name')
        .max(14, 'too long name')
        .required(),
  },

    username: {
    defaultValue: '',
    inputType: 'text',
    labelText: 'Login: ',
    vSchema: string()
      .min(3, 'too short login')
      .max(14, 'too long login')
      .required(),
  },

  phone: {
    defaultValue: '',
    inputType: 'tel',
    labelText: 'Phone Number: ',
    vSchema: number()
      .integer()
      .min(10, 'The phone number must contain at least 10 digits')
      .required(),
  },
};

function getInitialValues() {
  let initialValues = {};
  for (let key of Object.keys(formElementsConfiguration)) {
    initialValues[key] = formElementsConfiguration[key].defaultValue;
  }
  return initialValues;
}

function getValidationSchema() {
  let objWithSchemas = {};
  for (let key of Object.keys(formElementsConfiguration)) {
    objWithSchemas[key] = formElementsConfiguration[key].vSchema;
  }
  return object(objWithSchemas);
}

export default function SignUpForm({ onAdd, onCancel}) {
  const formik = useFormik({
    initialValues: getInitialValues(),
    validationSchema: getValidationSchema(),

    onSubmit: values => {
      console.log('lalla')
      // finishSignUp(values);
      onAdd(values);
    }

  });
  // const handleCancel = () => {
  //   onCancel();
  // }
  const generateFormElements = () => {
    const formItems = [];
    for (let key of Object.keys(formElementsConfiguration)) {
      const { labelText, inputType } = formElementsConfiguration[key];
      formItems.push((
        <Fragment key={key}>
          {formik.errors[key] && <div>{formik.errors[key]}</div>}
          <div>
            <label htmlFor={key}>{labelText}</label>
            <input type={inputType} name={key} value={formik.values[key]} onChange={formik.handleChange} />
          </div>
        </Fragment>
      ));
    }
    return (
      <>
        {formItems}
        <div>
          <input type="button" onClick={formik.handleSubmit} value="Add" />
          <input type="button" onClick={onCancel} value="Cancel" />
        </div>
      </>
    )
  }


  return (
    <div>
      <form>
        {generateFormElements()}

      </form>
    </div>
  )
}
