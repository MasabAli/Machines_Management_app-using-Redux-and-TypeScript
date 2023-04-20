import { MACHINE_LOCAL_STORAGE_KEY } from "../../utils/constants";
import { UPDATE_MACHINE, ADD_MACHINE, DELETE_MACHINE, GET_MACHINE, GET_MACHINES, REFRESH_MACHINES } from "../actions/machine";
import { v4 as uuid4 } from 'uuid';


const initialState: Machine[] = []
type MachineAction = {
    type: string,
    payload: Machine | Machine[] | string | Object
}


export default function machineReducer(state = initialState, action: MachineAction) {
    switch (action.type) {
        case ADD_MACHINE:
            const machinesToAdd = [...state, {id:uuid4(),...action.payload as Object}];
            localStorage.setItem(MACHINE_LOCAL_STORAGE_KEY, JSON.stringify(machinesToAdd));
            return machinesToAdd;
        case DELETE_MACHINE:
            const machinesAfterDelete = state.filter(machine => machine.id !== action.payload);
            localStorage.setItem(MACHINE_LOCAL_STORAGE_KEY, JSON.stringify(machinesAfterDelete));
            return machinesAfterDelete;
        case UPDATE_MACHINE:
            const machinesAfterUpdate = state.map(machine => {
                if (machine.id === (action.payload as Machine).id) {
                    return action.payload;
                }
                return machine;
            });
            localStorage.setItem(MACHINE_LOCAL_STORAGE_KEY, JSON.stringify(machinesAfterUpdate));
            return machinesAfterUpdate;
        case GET_MACHINE:
            return state.filter(machine => machine.id === (action.payload as Machine).id);
        case GET_MACHINES:
            return state;
        case REFRESH_MACHINES:
            const machines = localStorage.getItem(MACHINE_LOCAL_STORAGE_KEY);
            return machines ? JSON.parse(machines) : [];
        default:
            return state;
    }
}