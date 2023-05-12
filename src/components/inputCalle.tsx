import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { GoogleMap, Autocomplete } from '@react-google-maps/api';

interface FormValues {
  address: string;
}

const AutocompleteExample = () => {
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const { control, handleSubmit } = useForm<FormValues>();

  const handlePlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      const address = place.formatted_address;
      console.log(address); // Guarda la dirección completa en el estado o en el formulario
    }
  };

  return (
    <GoogleMap
      center={{ lat: 0, lng: 0 }}
      zoom={8}
    >
      <Autocomplete
        onLoad={autocomplete => setAutocomplete(autocomplete)}
        onPlaceChanged={handlePlaceChanged}
        options={{ types: ['address'] }}
      >
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Dirección"
              variant="outlined"
            />
          )}
        />
      </Autocomplete>
    </GoogleMap>
  );
};

export default AutocompleteExample;
