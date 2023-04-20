import { MACHINE_ATTRIBUTE_LOCAL_STORAGE_KEY } from "../../utils/constants";
import { ADD_ATTRIBUTE, DELETE_ATTRIBUTE, UPDATE_ATTRIBUTE, GET_ATTRIBUTE, GET_ATTRIBUTES, REFRESH_ATTRIBUTES } from "../actions/attribute";
import { v4 as uuid4 } from 'uuid';

const initialState: Attribute[] = []
type AttributeAction = {
    type: string,
    payload: Attribute | Attribute[] | string | Object
}

export default function attributeReducer(state = initialState, action: AttributeAction) {
    switch (action.type) {
        case ADD_ATTRIBUTE:
            const attributesToAdd = [...state, {id: uuid4(), ...action.payload as Object}];
            localStorage.setItem(MACHINE_ATTRIBUTE_LOCAL_STORAGE_KEY, JSON.stringify(attributesToAdd));
            return attributesToAdd;
        case DELETE_ATTRIBUTE:
            const attributesAfterDelete = state.filter(attribute => attribute.id !== action.payload);
            localStorage.setItem(MACHINE_ATTRIBUTE_LOCAL_STORAGE_KEY, JSON.stringify(attributesAfterDelete));
            return attributesAfterDelete;
        case UPDATE_ATTRIBUTE:
            const attributesAfterUpdate = state.map(attribute => {
                if (attribute.id === (action.payload as Attribute).id) {
                    return action.payload;
                }
                return attribute;
            });
            localStorage.setItem(MACHINE_ATTRIBUTE_LOCAL_STORAGE_KEY, JSON.stringify(attributesAfterUpdate));
            return attributesAfterUpdate;
        case GET_ATTRIBUTE:
            return state.filter(attribute => attribute.id === (action.payload as Attribute).id);
        case GET_ATTRIBUTES:
            return state;
        case REFRESH_ATTRIBUTES:
            const attributes = localStorage.getItem(MACHINE_ATTRIBUTE_LOCAL_STORAGE_KEY);
            return attributes ? JSON.parse(attributes) : [];
        default:
            return state;
    }
}
