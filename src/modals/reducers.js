// outsource dependencies
import { combineReducers } from 'redux';

// local dependencies
import info from './info-modal/reducer';
import folders from './folders-modal/reducer';
import settings from './settings-modal/reducer';
import newFolder from './new-folder-modal/reducer';

export default combineReducers({
    info,
    settings,
    folders,
    newFolder
});
