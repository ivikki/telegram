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

    return <div className="">
        <div className="block-info">
            <p>Name</p>
        </div>
        <div className="messages-wrapper">
            Messages
        </div>
    </div>;
});
