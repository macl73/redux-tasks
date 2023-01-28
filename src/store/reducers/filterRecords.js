import { FILTER } from '../actions.js';

export default function filterRecordsReducer(state = null, action) {

    switch(action.type) {
        case FILTER:
            const {filterWord} = action.payload;
            return state = {filter: filterWord};
        default: 
            return state;
    };
};
