export const ADD_MACHINE_TYPE = 'ADD_MACHINE_TYPE';
export const DELETE_MACHINE_TYPE = 'DELETE_MACHINE_TYPE';
export const UPDATE_MACHINE_TYPE = 'UPDATE_MACHINE_TYPE';
export const GET_MACHINE_TYPE = 'GET_MACHINE_TYPE';
export const GET_MACHINE_TYPES = 'GET_MACHINE_TYPES';
export const REFRESH_MACHINE_TYPES = 'REFRESH_MACHINE_TYPES';


export const updateMachineType = (machineType: MachineType) => ({
    type: UPDATE_MACHINE_TYPE,
    payload: machineType
});

export const getMachineType = (id: string) => ({
    type: GET_MACHINE_TYPE,
    payload: id
});

export const getMachineTypes = () => ({
    type: GET_MACHINE_TYPES
});

export const addMachineType = (machineType: Object) => ({
    type: ADD_MACHINE_TYPE,
    payload: machineType
});

export const deleteMachineType = (id: string) => ({
    type: DELETE_MACHINE_TYPE,
    payload: id
});

export const refreshMachineTypes = () => ({
    type: REFRESH_MACHINE_TYPES
});
