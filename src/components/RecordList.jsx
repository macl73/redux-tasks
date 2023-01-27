import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editRecord, removeService, changeServiceField } from '../store/actionCreators.js';

export default function RecordList() {

    const items = useSelector(state => state.recordList);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeService(id));
    };

    const handleEdit = (id, name, price) => {
        dispatch(editRecord(id, name, price));
        dispatch(changeServiceField('name', name));
        dispatch(changeServiceField('price', price));
    };

    return (
        <ul>
            {items.map(o => <li key={o.id}>{o.name}: {o.price} 
            <button onClick={() => handleEdit(o.id, o.name, o.price)}>Edit</button> 
            <button onClick={() => handleRemove(o.id)}>X</button></li>)}
        </ul>
    );
};
