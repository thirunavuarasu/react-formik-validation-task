// src/components/AuthorForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AuthorSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  birthDate: Yup.date().required('Birth date is required').nullable(),
  biography: Yup.string().required('Biography is required')
});

const AuthorForm = ({ initialValues, onSubmit, onCancel }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={AuthorSchema}
    onSubmit={onSubmit}
  >
    {({ isSubmitting }) => (
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label htmlFor="birthDate">Birth Date</label>
          <Field type="date" name="birthDate" />
          <ErrorMessage name="birthDate" component="div" />
        </div>
        <div>
          <label htmlFor="biography">Biography</label>
          <Field as="textarea" name="biography" />
          <ErrorMessage name="biography" component="div" />
        </div>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </Form>
    )}
  </Formik>
);

export default AuthorForm;
