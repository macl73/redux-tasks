import React from 'react';
import { useDispatch } from 'react-redux';
import { editRecord, changeServiceField } from '../store/actionCreators.js';

export default function CancelButton({edit}) {

    const dispatch = useDispatch();

    const cancelEdit = () => {
        dispatch(editRecord());
        dispatch(changeServiceField('name',''));
        dispatch(changeServiceField('price',''));
    };
    
    if (edit !== null) {
        return <input type="submit" onClick={() => cancelEdit()} value="Cancel" />
    };
    
    return ;
};