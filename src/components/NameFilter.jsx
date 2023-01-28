import React from 'react';
import { useDispatch } from 'react-redux';
import { filterRecords } from '../store/actionCreators.js';

export default function CreateRecord() {

    const dispatch = useDispatch();

    const handleChange = e => {
        const filterWord = e.target.value;
        dispatch(filterRecords(filterWord));
    };

    return (
        <input onChange={handleChange} type="text" name="filter" />
    );
};
