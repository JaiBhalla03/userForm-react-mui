import React from 'react';
import { Formik, Form, Field } from 'formik';
import {
    Button,
    FormControl,
    FormControlLabel,
    FormHelperText,
    InputLabel,
    MenuItem, Radio,
    RadioGroup, Select,
    TextField
} from "@mui/material";

const UserForm = () => {
    const initialValues = {
        name: '',
        email: '',
        message: '',
        country: '',
        gender: '',
        hobbies: [],
    };

    const validate = (values) => {
        const errors = {};

        if (!values.name) {
            errors.name = 'Required';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.message) {
            errors.message = 'Required';
        }

        if (!values.country) {
            errors.country = 'Required';
        }

        if (!values.gender) {
            errors.gender = 'Required';
        }

        return errors;
    };

    const handleSubmit = (values) => {
        console.log(values);
        alert(JSON.stringify(values, null, 2));
    };
    return (
        <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
            {({ errors, touched, values, handleChange }) => (
                <Form className={'flex flex-col gap-4 justify-between p-2 md:py-4 md:px-8 w-full bg-white sm:w-[80%] lg:w-[50%] md:w-[70%] shadow shadow-lg h-full shadow-gray-400'}>
                    <div>
                        <div>
                            <Field
                                as={TextField}
                                name="name"
                                label="Name"
                                error={errors.name && touched.name}
                                helperText={touched.name && errors.name}
                                className={'w-full'}

                            />
                        </div>

                        <div>
                            <Field
                                as={TextField}
                                name="email"
                                label="Email"
                                error={errors.email && touched.email}
                                helperText={touched.email && errors.email}
                                className={'w-full'}
                            />
                        </div>

                        <div>
                            <Field
                                as={TextField}
                                name="message"
                                label="Message"
                                multiline
                                rows={4}
                                error={errors.message && touched.message}
                                helperText={touched.message && errors.message}
                                className={'w-full'}
                            />
                        </div>

                        <div>
                            <FormControl error={errors.country && touched.country} className={'w-full'}>
                                <InputLabel id="country-label">Country</InputLabel>
                                <Field as={Select} name="country" labelId="country-label" className={'w-full'}>
                                    <MenuItem value="USA">USA</MenuItem>
                                    <MenuItem value="Canada">Canada</MenuItem>
                                    <MenuItem value="UK">UK</MenuItem>
                                </Field>
                                {touched.country && errors.country && (
                                    <FormHelperText>{errors.country}</FormHelperText>
                                )}
                            </FormControl>
                        </div>

                        <div>
                            <FormControl component="fieldset" error={errors.gender && touched.gender} className={'flex'}>
                                <RadioGroup name="gender" value={values.gender} onChange={handleChange} className={'flex'}>
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                </RadioGroup>
                                {touched.gender && errors.gender && (
                                    <FormHelperText>{errors.gender}</FormHelperText>
                                )}
                            </FormControl>
                        </div>

                        <div>
                            <FormControl error={errors.hobbies && touched.hobbies}
                                         className={'w-full'}
                            >
                                <InputLabel id="hobbies-label">Hobbies</InputLabel>
                                <Field
                                    as={Select}
                                    multiple
                                    name="hobbies"
                                    labelId="hobbies-label"
                                    value={values.hobbies}
                                    onChange={handleChange}
                                    className={'w-full'}
                                >
                                    <MenuItem value="reading">Reading</MenuItem>
                                    <MenuItem value="writing">Writing</MenuItem>
                                    <MenuItem value="coding">Coding</MenuItem>
                                </Field>
                                {touched.hobbies && errors.hobbies && (
                                    <FormHelperText>{errors.hobbies}</FormHelperText>
                                )}
                            </FormControl>
                        </div>
                    </div>
                    <div className={'flex justify-center'}>
                        <Button type="submit" variant="contained" color="primary" className={'w-48'}>
                            SUBMIT
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default UserForm;