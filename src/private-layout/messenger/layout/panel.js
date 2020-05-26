// outsource dependencies
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import React, { memo, useCallback, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faSlidersH, faAlignJustify } from '@fortawesome/fontawesome-free-solid';

// local dependencies
import TYPE from './types';
import { selector } from './reducer';

const Panel = memo(({ handleMenu }) => {
    const dispatch = useDispatch();
    const { folders } = useSelector(selector);

    const handleAllChains = useCallback(() => dispatch({ type: TYPE.INITIALIZE }), [dispatch]);

    const preparedFolders = useMemo(() => (folders || []).map(folder => ({
        ...folder,
        changeFolder: () => dispatch({ type: TYPE.UPDATE_FOLDER, id: folder.id })
    })), [folders, dispatch]);

    return <div className="panel">
        <ListGroup tag="div" className="panel-menu">
            <ListGroupItem tag="a" href="#" action className="text-grey" onClick={handleMenu}>
                <FontAwesomeIcon icon={faAlignJustify}/>
            </ListGroupItem>
            <ListGroupItem tag="a" href="#" action className="text-grey" onClick={handleAllChains}>
                <FontAwesomeIcon icon={faComments} />
                <p>All Chats</p>
            </ListGroupItem>
            {preparedFolders.map(folder => {
                return <ListGroupItem key={folder.id} tag="a" href="#" action className="text-grey" onClick={folder.changeFolder}>
                    <FontAwesomeIcon icon={faComments} />
                    <p>{folder.name}</p>
                </ListGroupItem>;
            })}
            <ListGroupItem tag="a" href="#" action className="text-grey">
                <FontAwesomeIcon icon={faSlidersH} />
                <p>Edit</p>
            </ListGroupItem>
        </ListGroup>
    </div>;
});

Panel.propTypes = {
    handleMenu: PropTypes.func.isRequired,
};

export default Panel;
