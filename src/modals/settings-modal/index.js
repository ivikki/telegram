import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Modal from './modal';
import TYPES from './types';

export function useModal () {
    const dispatch = useDispatch();

    const open = useCallback(() => dispatch({ type: TYPES.META, isOpen: true }), [dispatch]);
    const close = useCallback(() => dispatch({ type: TYPES.CLEAR }), [dispatch]);

    return { open, close };
}

export { Modal };
