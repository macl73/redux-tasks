import React from 'react';
import CancelButton from './CancelButton.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { editRecord, addService, changeServiceField } from '../store/actionCreators.js';

export default function CreateRecord() {

    const edit = useSelector(state => state.editRecord);
    const item = useSelector(state => state.createRecord);
    const dispatch = useDispatch();

    const handleChange = e => {
        const {name, value} = e.target;
        dispatch(changeServiceField(name, value));
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (edit !== null) {
            dispatch(addService(edit.id, item.name, item.price));
        } else {
            dispatch(addService(null, item.name, item.price));
        };
        dispatch(editRecord());
        dispatch(changeServiceField('name',''));
        dispatch(changeServiceField('price',''));
    };

    return (
        <form onSubmit={handleSubmit} >
            <input onChange={handleChange} type="text" name="name" value={item.name} />
            <input onChange={handleChange} type="text" name="price" value={item.price} />
            <input type="submit" value="Save" />
            <CancelButton edit={edit} />
        </form>
    );
};
