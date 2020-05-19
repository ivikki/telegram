// outsource dependencies
import React, { memo } from 'react';

// local dependencies
import SignInForm from './sign-in.form';

export default memo(() => {

    return <div className="wrapper d-flex justify-content-center align-items-center flex-column">
        <div className="form-wrapper">
            <h5 className="h5">Your Phone Number</h5>
            <p className="text-grey">Please confirm your country code and enter your phone number.</p>
            <SignInForm />
        </div>
    </div>;
});
