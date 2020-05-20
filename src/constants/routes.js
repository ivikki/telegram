// outsource dependencies

// local dependencies
export const LAYOUT_PUBLIC = '/public';
export const LAYOUT_PRIVATE = '/private';

/*-------------------------------------------------
        LAYOUT_PUBLIC nested routes
---------------------------------------------------*/

/**
 * @name SIGN_IN
 * @type {{ROUTE: string, LINK: (function(): string)}}
 */
export const SIGN_IN = {
    LINK: () => `${LAYOUT_PUBLIC}/sign-in`,
    ROUTE: `${LAYOUT_PUBLIC}/sign-in`
};

// --------------------------------------------------------
//
//          PRIVATE LAYOUT
//
// --------------------------------------------------------

/**
 * @name FLOOR_PLAN
 */

export const MESSENGER = {
    LINK: () => `${LAYOUT_PRIVATE}/messenger`,
    ROUTE: `${LAYOUT_PRIVATE}/messenger`
};

export const MESSENGER_CHAIN = {
    LINK: id => {
        return `${MESSENGER.ROUTE}/chain/${id}`;
    },
    ROUTE: `${MESSENGER.ROUTE}/chain/:id`
};
