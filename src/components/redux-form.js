
// outsource dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Form, reduxForm } from 'redux-form';

export const ReduxForm = reduxForm({
    // initialValues: {},
    // destroyOnUnmount: false,
    // form: FORM_NAME,
    // enableReinitialize: true,
    // onSubmit: formData => console.log('%c RF.onSubmit ', 'color: #000000;'
    //     , '\n formData: ', formData
    // ),
    // validate: (values, meta) => console.log('%c RF.validate ', 'color: #000000;'
    //     , '\n values: ', values
    //     , '\n meta: ', meta
    // ),
})(({ children, onSubmit, handleSubmit, className }) => <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)} className={className}>
    { children }
</Form>);
ReduxForm.propTypes = {
    form: PropTypes.string.isRequired,
    className: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    initialValues: PropTypes.object.isRequired,
};
ReduxForm.defaultProps={
    className: ''
};

export default ReduxForm;
