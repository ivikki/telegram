// outsource dependencies
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// local dependencies
import TYPE from './types';
import Panel from './panel';
import Chains from './chains';
import Chain from './chain';
import { selector } from './reducer';

export default memo(() => {
    const dispatch = useDispatch();
    const { chains } = useSelector(selector);

    useEffect(() => {
        dispatch({ type: TYPE.INITIALIZE });
    }, [dispatch]);

    return <div className="d-flex wrapper">
        <Panel />
        <Chains chains={chains}/>
        <Chain />
    </div>;
});


