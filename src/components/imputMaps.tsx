import { useState } from 'react';


import { useLoadScript } from '@react-google-maps/api';
import { Autocomplete, TextField } from '@mui/material';

interface Address {
  description: string;
  place_id: string;
}

interface Props {
  onChange: (address: Address | null) => void;
}

const libraries = ['places'];
const mapContainerStyle = { width: '100%', height: '100%' };
const options = { types: ['address'] };

const AddressInput = ({ onChange }: Props) => {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<Address[]>([]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'YOUR_API_KEY',
    libraries,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSelect = (address: Address) => {
    onChange(address);
    setInputValue(address.description);
  };

  const fetchOptions = async () => {
    const service = new google.maps.places.AutocompleteService();
    const results = await service.getPlacePredictions({ input: inputValue, options });
    setOptions(results || []);
  };

  return (
    <Autocomplete
      inputValue={inputValue}
      onInputChange={handleInputChange}
      options={options}
      getOptionLabel={(option: { description: any; }) => option.description}
      filterOptions={(x: any) => x}
      onSelect={(event: any, value: Address) => handleSelect(value)}
      style={{ width: '100%' }}
      renderInput={(params: JSX.IntrinsicAttributes) => (
        <TextField {...params} label="Dirección" variant="outlined" fullWidth />
      )}
    />
  );
};

export default AddressInput;
