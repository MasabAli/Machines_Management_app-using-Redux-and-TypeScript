export const ADD_ATTRIBUTE = 'ADD_ATTRIBUTE';
export const DELETE_ATTRIBUTE = 'DELETE_ATTRIBUTE';
export const UPDATE_ATTRIBUTE = 'UPDATE_ATTRIBUTE';
export const GET_ATTRIBUTE = 'GET_ATTRIBUTE';
export const GET_ATTRIBUTES = 'GET_ATTRIBUTES';
export const REFRESH_ATTRIBUTES = 'REFRESH_ATTRIBUTES';

export const updateAttribute = (attribute: Attribute) => ({
    type: UPDATE_ATTRIBUTE,
    payload: attribute
});

export const getAttribute = (id: string) => ({
    type: GET_ATTRIBUTE,
    payload: id
});

export const getAttributes = () => ({
    type: GET_ATTRIBUTES
});

export const addAttribute = (attribute: Object) => ({
    type: ADD_ATTRIBUTE,
    payload: attribute
});

export const deleteAttribute = (id: string) => ({
    type: DELETE_ATTRIBUTE,
    payload: id
});

export const refreshAttributes = () => ({
    type: REFRESH_ATTRIBUTES
});

