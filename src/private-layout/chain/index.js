// outsource dependencies
import React, {memo, useEffect} from 'react';
// import {useDispatch, useSelector} from "react-redux";

// local dependencies
// import TYPE from "./types";
// import {selector} from "./reducer";

export default memo(() => {
    // const dispatch = useDispatch();
    // const { messages } = useSelector(selector);
    //
    // useEffect(() => {
    //     dispatch({ type: TYPE.INITIALIZE });
    // }, [dispatch]);
    let messages = [];

    return <div className="chain-wrapper">
        {messages.length ?
        (<>
            <div className="block-info">
                <p>Name</p>
            </div>
            <div className="messages-wrapper">
                Messages
            </div>
        </>) :
        (<div className="messages-wrapper text-center">
            <p className="text-white">Please select a chat to start messaging</p>
        </div>)}
    </div>;
});
