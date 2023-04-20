import { ChangeEvent, useEffect, useState, } from "react";
import { addMachine, updateMachine, deleteMachine, refreshMachines } from "../../store/actions/machine";
import { useDispatch, useSelector } from "react-redux";
import { refreshAttributes } from "../../store/actions/attribute";
import { refreshMachineTypes } from "../../store/actions/machineType";


const MachinePage = () => {
  const dispatch = useDispatch();
  const machines = useSelector((state: any) => state.machines);
  const machineTypes = useSelector((state: any) => state.machineTypes);
  const attributes = useSelector((state: any) => state.machineAttributes);
  const [attribute, setAttribute] = useState("");
  const [machineType, setMachineType] = useState("");
  const [name, setName] = useState<string>("");
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    dispatch(refreshMachines());
    dispatch(refreshMachineTypes());
    dispatch(refreshAttributes());
  }, [dispatch]);

  const handleAddMachine = () => {
    dispatch(addMachine({ name,type:{ name:machineType}, attributes: [{name:attribute}] }));
    setName("");
  }

  const handleUpdateMachine = () => {
    if (selectedMachine) {
      dispatch(updateMachine({ ...selectedMachine, name }));
      setSelectedMachine(null);
      setName("");
    }
  }

  const handleDeleteMachine = (id: string) => {
    
    dispatch(deleteMachine(id));
  }

  const handleSelectMachine = (machine: Machine) => {
    setSelectedMachine(machine);
    setName(machine.name);
  }


  console.log(machineTypes);
  function handleMachineChange(e: ChangeEvent<HTMLSelectElement>): void {
    setMachineType(e.target.value);
  }

  function handleAttributeChange(e: ChangeEvent<HTMLSelectElement>): void {
    setAttribute(e.target.value);
  }

  function handleSearch(e: ChangeEvent<HTMLInputElement>): void {
    setSearchValue(e.target.value);
  



  }

  return (
    <div>
      <input type="text"
      
      value={searchValue}
      onChange={(e) => handleSearch(e)}
      placeholder="Search Machine Type"
      className="form-control"
      
       />
      <h1>Machines</h1>
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <select name="machineType" id="machineType" onChange={(e) => handleMachineChange(e)}>
          {machineTypes && machineTypes.map((machineType: MachineType) => (
            <option key={machineType.id} value={machineType.name}>{machineType.name}
            </option>
            
          ))}
        </select>
        <select name="attribute" id="attribute" onChange={(e) => handleAttributeChange(e)}>
          {attributes && attributes.map((attribute: Attribute) => (
            <option key={attribute.id} value={attribute.name}>{attribute.name}</option>
          ))}
        </select>
        <button onClick={selectedMachine ? handleUpdateMachine : handleAddMachine}>
          {selectedMachine ? 'Update' : 'Add'}
        </button>
      </div>
      
      <h3>Machines:</h3>
        {machines && machines.filter((a:Machine)=> a.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) || searchValue==="").map((machine: Machine) => (
          <ul>
            <li>Name: {machine?.name}</li>
            <li>Machine Type: {machine.type.name}</li>
            {/* <li>Machine Type: {machine.attribute}</li> */}
            <li>
              {machine.attributes.map((attribute: Attribute) => (
                <ul key={attribute.id}>
                  <li>Name: {attribute.name}</li>
                </ul>
              ))}
            </li>
            <button onClick={() => handleSelectMachine(machine)}>Edit</button>
            <button onClick={() => handleDeleteMachine(machine.id)}>Delete</button>
          </ul>
        ))}
    </div>
  );
}

export default MachinePage;