import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Modal from './modal';
import TYPE from './types';

export function useModal () {
    const dispatch = useDispatch();

    const open = useCallback(id => dispatch({ type: TYPE.INITIALIZE, id }), [dispatch]);
    const close = useCallback(() => dispatch({ type: TYPE.CLEAR }), [dispatch]);

    return { open, close };
}

export { Modal };
