// outsource dependencies
import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';

// local dependencies
import { RFControlWrap } from './form-control-wrapper';

export class Select extends React.PureComponent {

    render () {
        const { input, meta, rootClassName, className, label, options, ...attr } = this.props;

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
            <ReactSelect
                id={input.name}
                name={input.name}
                options={options}
                value={input.value}
                className={className}
                onChange={input.onChange}
                {...attr}
            />
        </RFControlWrap>;
    }

}
Select.propTypes = {
    meta: PropTypes.object.isRequired,
    input: PropTypes.object.isRequired,
    className: PropTypes.string,
    rootClassName: PropTypes.string,
    label: PropTypes.node,
    options: PropTypes.array.isRequired,
};

Select.defaultProps = {
    className: '',
    label: '',
    rootClassName: ''
};
