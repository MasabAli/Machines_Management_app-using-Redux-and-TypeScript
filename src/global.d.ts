

type MachineStateType = {
    machine: Machine
};

type MachineType = {
    id: string;
    name: string;   
};

type Attribute = {
    id: string;
    name: string;
};

type Machine = {
    machineType: any;
    id: string;
    name: string;
    attributes: Attribute[];
    type: MachineType;
};