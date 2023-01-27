import { CHANGE_SERVICE_FIELD } from '../actions.js';

const initialState = {name: '', price: ''};

export default function recordListReducer(state = initialState, action) {

    switch(action.type) {
        case CHANGE_SERVICE_FIELD: 
            const {name, value} = action.payload;
            return {...state, [name]: value};
        default: 
            return state;
    };
};