import { EDIT_RECORD} from '../actions.js';

export default function editRecordReducer(state = null, action) {

    switch(action.type) {
        case EDIT_RECORD:
            const {id, name, price} = action.payload;
            if (!id) {
                return state = null;
            } else {
                return state = {id: id, name: name, price: Number(price)};
            }
        default: 
            return state;
    };
};
