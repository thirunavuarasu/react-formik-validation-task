// src/components/BookForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  author: Yup.string().required('Author is required'),
  isbn: Yup.string().required('ISBN number is required'),
  publicationDate: Yup.date().required('Publication date is required').nullable()
});

const BookForm = ({ initialValues, onSubmit, onCancel }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={BookSchema}
    onSubmit={onSubmit}
  >
    {({ isSubmitting }) => (
      <Form>
        <div>
          <label htmlFor="title">Title</label>
          <Field type="text" name="title" />
          <ErrorMessage name="title" component="div" />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <Field type="text" name="author" />
          <ErrorMessage name="author" component="div" />
        </div>
        <div>
          <label htmlFor="isbn">ISBN Number</label>
          <Field type="text" name="isbn" />
          <ErrorMessage name="isbn" component="div" />
        </div>
        <div>
          <label htmlFor="publicationDate">Publication Date</label>
          <Field type="date" name="publicationDate" />
          <ErrorMessage name="publicationDate" component="div" />
        </div>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </Form>
    )}
  </Formik>
);

export default BookForm;
