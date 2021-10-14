import * as yup from 'yup';

const formSchema = yup.object().shape({
    firstName: yup
        .string()
        .trim()
        .required('First Name is required')
        .min(3, 'First name must be 3 or more characters long!'),
    lastName: yup
        .string()
        .trim()
        .required('Last Name is required')
        .min(3, 'Last name must be 3 or more characters long!'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('You must enter a email'),
    password: yup
        .string()
        .required(),
    agree: yup
        .boolean()
        .required('You must agree to terms of service!')
});

export default formSchema;