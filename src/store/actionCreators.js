import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, EDIT_RECORD, FILTER } from './actions.js';

export function addService(num, name, price) {
	return {
		type: ADD_SERVICE,
		payload: {num, name, price}
	};
};

export function removeService(id) {
	return {
		type: REMOVE_SERVICE,
		payload: {id}
	};
};

export function changeServiceField(name, value) {
	return {
		type: CHANGE_SERVICE_FIELD,
		payload: {name, value}
	};
};

export function editRecord(id, name, price) {
	return {
		type: EDIT_RECORD,
		payload: {id, name, price}
	};
};

export function filterRecords(filterWord) {
	return {
		type: FILTER,
		payload: {filterWord}
	};
};

export default {
    addService,
    removeService,
    changeServiceField,
	editRecord,
	filterRecords
};