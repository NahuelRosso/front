import * as React from 'react';
import Autocomplete from "react-google-autocomplete";



export type Option = {
  value: string;
  label: string;
};

type AutocompleteProps ={
  onChange:(place:any)=>void
}

export const AutocompleteInput = (({onChange}:AutocompleteProps) => {
  
  return (
    
    <Autocomplete 
      style={{padding:"15px", width: "100%", border:"1px solid rgb(133, 133, 133)", borderRadius:"5px", outline:'3px' }}
      apiKey="AIzaSyBQ5hY7g6JNZ6H19NjO3EyPO4_J2bzAkFA" 
      types={["adrress"]}
      lable="Ingrese Localidad"
      onPlaceSelected={(place: any) =>  onChange(place)}
    />
  );
});



