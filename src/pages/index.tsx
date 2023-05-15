import { Grid, TextField, Button, Card, Typography, Box } from '@mui/material'
import { useForm } from 'react-hook-form';
// import { db } from "./.././services/firebase-config.js";
import {
  collection,
  getDocs,
  addDoc,
} from "../../node_modules/firebase/firestore";
import { AutocompleteInput } from '@/components/Autocomplete/inputMaps.tsx';
import BasicModal from '@/shared/Dialogs/dialogPago';
import { useState } from 'react';

const collectionmensajes = "mensajes";

// export async function getMensajes() {
//   const colRef = collection(db, collectionmensajes);
//   const docsRef = await getDocs(colRef);
//   console.log(docsRef);
// }

// getMensajes();


// export function addMensaje(data:FormValues) {
  
//   addDoc(collection(db, collectionmensajes), data);
  
// }

type FormValues = {
  nombre: string;
  apellido: string;
  calle: string;
  numero:number;
  direccion: string;
  mensaje: string;
  
};
export default function Home() {
  const { register, handleSubmit, formState,control, setValue } = useForm<FormValues>({
    mode: "onChange",
  });
  const [isFormComplete, setIsFormComplete] = useState(false);


  const { isValid } = formState;

  const onSubmit = (data: FormValues) => {
    // addMensaje(data);
    
    console.log(data);

  };
  const handleFormSubmit = (data: FormValues) => {
    if (formState.isValid) {
      setIsFormComplete(true);
    }
  };
  const handleDireccionChange = (option: any | null) => {
   
    setValue("direccion", option?.formatted_address 
    ?? "");
  }
  
  return (
    <Box sx={{display:"flex", alignContent: "center", textAlign:"center", paddingTop:"15px", paddingRight:"10px ", marginLeft:"15%", marginRight:"10%"}}>
      
    <Card sx={{maxWidth:"900px", maxHeight:"1200px", background:"white", margin:"2px 2px 2px 2px", padding:"50px", paddingBottom:"50px"}}>
    <Typography sx={{marginBottom:"50px"}} variant='h1'> Ingrese su mensaje para la posteridad </Typography>
      <form >
      <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Nombre"
          variant="outlined"
          {...register("nombre", { required: true })}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Apellido"
          variant="outlined"
          {...register("apellido", { required: true })}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
      <TextField
          fullWidth
          label="Calle"
          variant="outlined"
          {...register("calle", { required: true })}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
      <TextField
      type='number'
          fullWidth
          label="Número"
          variant="outlined"
          {...register("numero", { required: true })}
        />
      </Grid>
      <Grid item xs={12}>
      <AutocompleteInput  onChange={ (option: any) =>{
               handleDireccionChange(option)
             
              } } />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Mensaje"
          variant="outlined"
          multiline
          rows={4}
          {...register("mensaje", { required: true })}
        />
      </Grid>
      <Grid>
     
      </Grid>
      
    </Grid>
    <Button
          type="submit"
          variant="text"
          color="primary"
          disabled={!isValid}
          onClick={handleSubmit(handleFormSubmit)}
          sx={{ marginTop: "10px" }}
        >
          Enviar
        </Button>
        <BasicModal
          text={'Pagar'}
          buttonAction={isFormComplete}
          dataTitle={'Explicamos por qué'}
          dataDescription={'Hola, paga porque tengo ganas!!'}
        />
  </form>
  
    </Card>
    </Box>
    
  )
}
// realizar un dialog con matirialUI,

//