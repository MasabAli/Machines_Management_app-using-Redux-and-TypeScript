import { updateAttribute, addAttribute, deleteAttribute, refreshAttributes } from '../../store/actions/attribute';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Attribute = () => {
  const dispatch = useDispatch();
  const attributes = useSelector((state: any) => state.machineAttributes);
  const [name, setName] = useState<string>('');
  const [selectedAttribute, setSelectedAttribute] = useState<Attribute | null>(null);

  useEffect(() => {
    dispatch(refreshAttributes());
  }, [dispatch]);

  const handleAddAttribute = () => {
    dispatch(addAttribute({ name }));
    setName('');
  }

  const handleUpdateAttribute = () => {
    if (selectedAttribute) {
      dispatch(updateAttribute({ ...selectedAttribute, name }));
      setSelectedAttribute(null);
      setName('');
    }
  }

  const handleDeleteAttribute = (id: string) => {
    dispatch(deleteAttribute(id));
  }

  const handleSelectAttribute = (attribute: Attribute) => {
    setSelectedAttribute(attribute);
    setName(attribute.name);
  }

  return (
    <div>
      <h1>Attributes</h1>
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={selectedAttribute ? handleUpdateAttribute : handleAddAttribute}>
          {selectedAttribute ? 'Update' : 'Add'}
        </button>
      </div>
      <div>
        <h3>Attributes:</h3>
        <ul>
          {attributes && attributes.map((attribute: Attribute) => (
            <li key={attribute.id}>
              <span>{attribute.name}</span>
              <button onClick={() => handleSelectAttribute(attribute)}>Edit</button>
              <button onClick={() => handleDeleteAttribute(attribute.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Attribute;