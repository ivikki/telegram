// outsource dependencies
import qs from 'qs';
import is from '../services/is.service';
// local dependencies
export const LAYOUT_PUBLIC = '/public';
export const LAYOUT_PRIVATE = '/private';
export const NEW_ID = 'new';

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

/**
 * @name SIGN_UP
 * @type {{ROUTE: string, LINK: (function(): string)}}
 */
export const SIGN_UP = {
    LINK: () => `${LAYOUT_PUBLIC}/sign-up`,
    ROUTE: `${LAYOUT_PUBLIC}/sign-up`
};

/**
 * @name FORGOT_PASSWORD
 * @type {{ROUTE: string, LINK: (function(): string)}}
 */
export const FORGOT_PASSWORD = {
    LINK: () => `${LAYOUT_PUBLIC}/forgot-password`,
    ROUTE: `${LAYOUT_PUBLIC}/forgot-password`
};

/**
 * @name CHANGE_PASSWORD
 * @type {{ROUTE: string, LINK: (function({token: *}): string)}}
 */
export const CHANGE_PASSWORD = {
    LINK: ({ token }) => `${LAYOUT_PUBLIC}/change-password/${token}`,
    ROUTE: `${LAYOUT_PUBLIC}/change-password/:token`
};

// --------------------------------------------------------
//
//          PRIVATE LAYOUT
//
// --------------------------------------------------------

/**
 * @name FLOOR_PLAN
 */

export const FLOOR_PLAN = (function (TAB, routes = {}) {
    const ROUTE = `${LAYOUT_PRIVATE}/floor-plan`;
    for (const name in TAB) {
        // eslint-disable-next-line
        if (TAB.hasOwnProperty(name)) {
            // eslint-disable-next-line no-param-reassign
            routes[name] = `${ROUTE}/${TAB[name]}`;
        }
    }
    return {
        TAB,
        ROUTE,
        LINK: ({ tab } = {}) => (`${ROUTE}/${tab || FLOOR_PLAN.TAB.MAIN}`),
        ...routes,
    };
}({ MAIN: 'main', SUMMARY: 'summary', GRID: 'grid', LIST: 'list' }));

export const SETTINGS = ((base, TAB) => {
    const routes = {};
    for (const name in TAB) {
        const route = `${base}/${TAB[name]}`;
        routes[name] = {
            ROUTE: route,
            REGEXP: new RegExp(route, 'i'),
        };
    }

    return {
        TAB,
        PATH: routes,
        ROUTE: `${base}/:tab`,
        REGEXP: new RegExp(`${base}/.*`, 'i'),
        LINK: linkTo.bind({ url: ({ tab = TAB.GENERAL }) => `${base}/${tab || TAB.GENERAL}` })
    };
})(`${LAYOUT_PRIVATE}/settings`, {
    GENERAL: 'general',
    FLOOR_PLAN: 'floor-plan',
    VISIT: 'visit',
    GUEST: 'guest',
    CUSTOMIZE_STATUS: 'customize-status',
    CUSTOMIZE_VISIT: 'customize-visit',
    CUSTOMIZE_REFERENCES: 'customize-references',
    CUSTOMIZE_RECEIPT: 'customize-receipt',
    SERVICE_PERIOD: 'service-period',
    POS: 'pos',
    HOSTS: 'hosts',
    WAITERS: 'waiters',
    ADMIN: 'admin',
});

/**
 * @name GUESTS
 */

export const GUESTS = (ROUTE => ({
    ROUTE,
    REGEXP: new RegExp(`${ROUTE}/.*`, 'i'),
    LIST: `${ROUTE}/list`,
    EDIT: `${ROUTE}/edit/:id`,
    LINK: linkTo.bind({ url: () => (`${ROUTE}/list`) }),
    LINK_EDIT: linkTo.bind({ url: ({ id }) => `${ROUTE}/edit/${id || NEW_ID}` }),
}))(`${LAYOUT_PRIVATE}/guests`);


/**
 * @name RESERVATIONS
 */
export const RESERVATIONS = {
    LINK: () => `${LAYOUT_PRIVATE}/reservations`,
    ROUTE: `${LAYOUT_PRIVATE}/reservations`,
};

/**
 * @example SOME_ROUT.LINK({ some: 'urlParam' query: {some: 'queryParam'}})
 * @param { Object } options
 * @returns { String }
 * @private
 */
function linkTo (options) {
    options = options || {};
    // NOTE provide ability to format query params for url
    const params = is.object(options.query) ? qs.stringify(options.query, { addQueryPrefix: true }) : '';
    // NOTE prepare options to setting in url
    const opt = {};
    for (const key in options) {
        if (is.string(options[key]) || is._number(options[key])) {
            opt[key] = encodeURIComponent(options[key]);
        }
    }
    // console.log('%c linkTo => ( options ) ', 'color: #0747a6; font-weigth: bolder; font-size: 12px;'
    //     ,'\n options:', options
    //     ,'\n params:', params
    //     ,'\n result:', `${this.url(opt)}${params}`
    // );
    return `${this.url(opt)}${params}`;
}
