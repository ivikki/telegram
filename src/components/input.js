import React from 'react';
import PropTypes from 'prop-types';

import { Input as RFInput, Label, FormGroup, FormText } from 'reactstrap';

export class Input extends React.PureComponent {

    render () {
        const { input, meta, type, label, rootClassName, className, ...attr } = this.props;

        const message = meta.touched ? meta.error : null;

        return <FormGroup className={`mb-0 ${rootClassName}`}>
            {label && <Label>{label}</Label>}
            <RFInput
                {...input}
                {...attr}
                type={type}
                onBlur={() => input.onBlur(input.value)}
                className={className}
            />
            <FormText className="text-center">
                {message}
            </FormText>
        </FormGroup>;
    }

}
Input.propTypes = {
    meta: PropTypes.object.isRequired,
    input: PropTypes.object.isRequired,
    className: PropTypes.string,
    rootClassName: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.node,
};

Input.defaultProps = {
    className: '',
    label: '',
    type: 'text',
    rootClassName: ''
};
