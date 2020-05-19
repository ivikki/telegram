// outsource dependencies
import React, { memo } from 'react';

// local dependencies


export default memo(() => {

    return <div>
        <ul>
            <li>
                <i className="fas fa-bars" />
            </li>
            <li>
                <i className="fas fa-comments">
                    All Chats
                </i>
            </li>
            <li>
                <i className="fas fa-sliders-h">
                    Edit
                </i>
            </li>
        </ul>
    </div>;
});
