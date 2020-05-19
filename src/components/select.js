import React from 'react';
import PropTypes from 'prop-types';

import ReactSelect from 'react-select';

export class Select extends React.PureComponent {

    render () {
        const { input, meta, ...attr } = this.props;

        return <ReactSelect
            {...input}
            {...attr}
            onBlur={() => input.onBlur(input.value)}
        />;
    }

}

Select.propTypes = {
    meta: PropTypes.object.isRequired,
    input: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
};
