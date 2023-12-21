import { useFormik } from "formik";
import { Fragment } from "react";
import { useDispatch } from 'react-redux';
import {addItem} from "../../store/itemSlice";
import { string, number, object } from 'yup';
import { Link, useNavigate  } from 'react-router-dom'

import './AddForm.scss';

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
    let initialValues = {
        id: Date()
    };
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

export default function AddForm({ onAdd, onCancel}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: getInitialValues(),
        validationSchema: getValidationSchema(),
        onSubmit: (values) => {
            dispatch(addItem(values));
            navigate('/');
        },
    });

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
                <div className='btn-block'>
                    <Link to='/' onClick={formik.handleSubmit} className='link-button'>Add</Link>
                    <Link to='/' onClick={onCancel} className='link-button'>Cancel</Link>
                </div>
            </>
        )
    }


    return (
        <div>
            <h2>Form Page</h2>
            <form>
                {generateFormElements()}
            </form>
        </div>
    )
}

