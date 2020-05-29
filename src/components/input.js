// outsource dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Input as RFInput } from 'reactstrap';

// local dependencies
import { RFControlWrap } from './form-control-wrapper';

export class Input extends React.PureComponent {

    render () {
        const { input, meta, type, label, rootClassName, ...attr } = this.props;

        let message = '';
        if (meta.touched) {
            message = meta.error;
            attr.className += meta.valid ? ' is-valid' : ' is-invalid';
        }

        return <RFControlWrap
            id={input.name}
            label={label}
            message={message}
            className={`mb-0 ${rootClassName}`}>
            <RFInput
                {...input}
                {...attr}
                type={type}
                onBlur={() => input.onBlur(input.value)}
            />
        </RFControlWrap>;
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
