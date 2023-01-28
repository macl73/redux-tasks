import { compose, combineReducers, legacy_createStore } from 'redux';
import createRecordReducer from './reducers/createRecord.js';
import recordListReducer from './reducers/recordList.js';
import editRecordReducer from './reducers/editRecord.js';
import filterRecordsReducer from './reducers/filterRecords.js';

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
    return legacy_createStore(
        combineReducers({
            createRecord: createRecordReducer,
            recordList: recordListReducer,
            editRecord: editRecordReducer,
            filterRecords: filterRecordsReducer
        }),
        undefined,
        compose(
            ReactReduxDevTools,
        )
    );
};

export default configureStore;
