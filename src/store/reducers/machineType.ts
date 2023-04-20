import { v4 as uuid4 } from "uuid";
import { MACHINE_TYPE_LOCAL_STORAGE_KEY } from "../../utils/constants";
import { ADD_MACHINE_TYPE, DELETE_MACHINE_TYPE, UPDATE_MACHINE_TYPE, GET_MACHINE_TYPE, GET_MACHINE_TYPES, REFRESH_MACHINE_TYPES } from "../actions/machineType";

const initialState: MachineType[] = []

type MachineTypeAction = {
    type: string;
    payload: MachineType | MachineType[] | string | Object;
}

const machineTypeReducers = (state = initialState, action: MachineTypeAction) => {
    switch (action.type) {
        case ADD_MACHINE_TYPE:
            console.log(action);

            const machineTypesToAdd = [...state, {id: uuid4(), ...action.payload as Object}];
            console.log(machineTypesToAdd);
            localStorage.setItem(MACHINE_TYPE_LOCAL_STORAGE_KEY, JSON.stringify(machineTypesToAdd));
            return machineTypesToAdd;
        case DELETE_MACHINE_TYPE:
            const machineTypesAfterDelete = state.filter(machineType => machineType.id !== action.payload);
            localStorage.setItem(MACHINE_TYPE_LOCAL_STORAGE_KEY, JSON.stringify(machineTypesAfterDelete));
            return machineTypesAfterDelete;
        case UPDATE_MACHINE_TYPE:
            const machineTypesAfterUpdate = state.map(machineType => {
                if (machineType.id === (action.payload as MachineType).id) {
                    return action.payload;
                }
                return machineType;
            });
            localStorage.setItem(MACHINE_TYPE_LOCAL_STORAGE_KEY, JSON.stringify(machineTypesAfterUpdate));
            return machineTypesAfterUpdate;
        case GET_MACHINE_TYPE:
            return state.filter(machineType => machineType.id === (action.payload as MachineType).id);
        case GET_MACHINE_TYPES:
            return state;
        case REFRESH_MACHINE_TYPES:
            const machineTypes = localStorage.getItem(MACHINE_TYPE_LOCAL_STORAGE_KEY);
            return machineTypes ? JSON.parse(machineTypes) : [];
        default:
            return state;
    }
}
            

export default machineTypeReducers;