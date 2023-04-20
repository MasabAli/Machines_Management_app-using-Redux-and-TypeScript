import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMachineType, updateMachineType, deleteMachineType, refreshMachineTypes } from '../../store/actions/machineType';

const MachineTypePage = () => {
  const dispatch = useDispatch();
  const machineTypes = useSelector((state: any) => state.machineTypes);
  const [name, setName] = useState<string>('');
  const [selectedMachineType, setSelectedMachineType] = useState<MachineType | null>(null);

  useEffect(() => {
    dispatch(refreshMachineTypes());
  }
  , [dispatch]);

  const handleAddMachineType = () => {
    dispatch(addMachineType({ name }));
    setName('');
  };

  const handleUpdateMachineType = () => {
    if (selectedMachineType) {
      dispatch(updateMachineType({ ...selectedMachineType, name }));
      setSelectedMachineType(null);
      setName('');
    }
  };

  const handleDeleteMachineType = (id: string) => {
    dispatch(deleteMachineType(id));
  };
  
  const handleSelectMachineType = (machineType: MachineType) => {
    setSelectedMachineType(machineType);
    setName(machineType.name);
  };

  const filer = (machineType: MachineType) => {
    return machineType.name === name;
  };

  return (
    <div>

      




      <h1>Machine Types</h1>
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={selectedMachineType ? handleUpdateMachineType : handleAddMachineType}>
          {selectedMachineType ? 'Update' : 'Add'}
        </button>
      </div>
      <div>
        <h3>Machine Types:</h3>
        <ul>
          {machineTypes && machineTypes.map((machineType: MachineType) => (
            <li key={machineType.id}>
              <span>{machineType.name}</span>
              <button onClick={() => handleSelectMachineType(machineType)}>Edit</button>
              <button onClick={() => handleDeleteMachineType(machineType.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MachineTypePage;
