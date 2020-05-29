// outsource dependencies
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// local dependencies
import { Label, FormGroup } from 'reactstrap';

export const RFControlWrap = memo(({ id, label, className, message, children }) =>
    <FormGroup className={className}>
        {label ? <Label for={id}>{label}</Label> : null}
        {children}
        {message ? <Label for={id} className="invalid-feedback">{message}</Label> : null}
    </FormGroup>
);
RFControlWrap.propTypes = {
    label: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.element]),
    className: PropTypes.string,
    message: PropTypes.string,
    id: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.element, PropTypes.node]).isRequired
};
RFControlWrap.defaultProps = {
    label: null,
    className: '',
    message: null,
    id: null
};