import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Modal from './modal';
import TYPE from './types';

export function useModal () {
    const dispatch = useDispatch();

    const open = useCallback(() => dispatch({ type: TYPE.META, isOpen: true }), [dispatch]);
    const close = useCallback(() => dispatch({ type: TYPE.META, isOpen: false }), [dispatch]);

    return { open, close };
}

export { Modal };
