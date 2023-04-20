export const UPDATE_MACHINE = 'UPDATE_MACHINE';
export const GET_MACHINE = 'GET_MACHINE';
export const GET_MACHINES = 'GET_MACHINES';
export const ADD_MACHINE = 'ADD_MACHINE';
export const DELETE_MACHINE = 'DELETE_MACHINE';
export const REFRESH_MACHINES = 'REFRESH_MACHINES';

export const updateMachine = (machine: Machine) => ({
    type: UPDATE_MACHINE,
    payload: machine
});

export const getMachine = (id: string) => ({
    type: GET_MACHINE,
    payload: id
});

export const getMachines = () => ({
    type: GET_MACHINES
});

export const addMachine = (machine: Object) => ({
    type: ADD_MACHINE,
    payload: machine
});

export const deleteMachine = (id: string) => ({
    type: DELETE_MACHINE,
    payload: id
});

export const refreshMachines = () => ({
    type: REFRESH_MACHINES
});
