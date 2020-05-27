import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import TYPE from './types';
import Modal from './modal';

export function useModal () {
    const dispatch = useDispatch();

    const open = useCallback(() => dispatch({ type: TYPE.META, isOpen: true }), [dispatch]);
    const close = useCallback(() => dispatch({ type: TYPE.META, isOpen: false }), [dispatch]);

    return { open, close };
}

export { Modal };
