import { Formik, Form, Field } from 'formik';

const SearchBar = ({ handleSubmit }) => {
  return (
    <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
      {({ handleChange, handleSubmit, values }) => (
        <Form onSubmit={handleSubmit}>
          <Field
            name="search"
            placeholder="Search"
            value={values.search}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchBar;
