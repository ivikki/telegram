// outsource dependencies
import React, { memo, useEffect } from 'react';

// local dependencies
import TYPE from './types';
import Panel from '../panel';
import Chain from '../chain';
import Chains from '../chains';
import { selector } from './reducer';
import { useDispatch, useSelector } from 'react-redux';

export default memo(() => {
    const dispatch = useDispatch();
    const { chains } = useSelector(selector);

    useEffect(() => {
        dispatch({ type: TYPE.INITIALIZE });
    }, [dispatch]);

    return <div className="d-flex">
        <div className="panel">
            <Panel />
        </div>
        <div className="chains border-right">
            <Chains chains={chains}/>
        </div>
        <div className="chain">
            <Chain />
        </div>
    </div>;
});
