import { nanoid } from 'nanoid';
import { ADD_SERVICE, REMOVE_SERVICE } from '../actions.js';

export default function createRecordReducer(state = [], action) {

    switch(action.type) {
        case REMOVE_SERVICE:
            const {id} = action.payload;
            return state.filter(service => service.id !== id);
        case ADD_SERVICE: 
            const {num, name, price} = action.payload;
            if (!num) {
                return [...state, {id: nanoid(), name: name, price: Number(price)}];
            } else {
                const delItem = state.findIndex(el => el.id === num);
                state.splice(delItem, 1);
                return [...state, {id: num, name: name, price: Number(price)}];
            }
        default: 
            return state;
    };
};