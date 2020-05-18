import React from 'react';
import PropTypes from 'prop-types';

import ReactSelect from 'react-select';

export class Select extends React.PureComponent {

    render () {
        const { input, meta, ...attr } = this.props;
        console.log('input', input);
        console.log('meta', meta);
        console.log('attr', attr);

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
