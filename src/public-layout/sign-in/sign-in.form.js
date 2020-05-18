// outsource dependencies
import React, { memo } from 'react';
import { Button, Form } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';

// local dependencies

export default memo(() => {

    return <Form name="signInForm" onSubmit={() => console.log('Ok')}>
        <div>
            <Field
                type="text"
                name="country"
                component="input"
            />
        </div>
        <div>
            <Field
                type="text"
                name="phone"
                component="input"
            />
        </div>
        <Button
            type="submit"
            color="primary"
        >
            NEXT
        </Button>
    </Form>;
});
