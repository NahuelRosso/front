import { Grid, TextField, Button, Card, Typography, Box } from '@mui/material'
import { useForm } from 'react-hook-form';
import { db } from "./.././services/firebase-config.js";
import {
  collection,
  getDocs,
  addDoc,
} from "../../node_modules/firebase/firestore";
import { AutocompleteInput } from '@/components/Autocomplete/inputMaps.tsx';


const collectionmensajes = "mensajes";

export async function getMensajes() {
  const colRef = collection(db, collectionmensajes);
  const docsRef = await getDocs(colRef);
  console.log(docsRef);
}

getMensajes();


export function addMensaje(data:FormValues) {
  
  addDoc(collection(db, collectionmensajes), data);
  
}

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

  const { isValid } = formState;

  const onSubmit = (data: FormValues) => {
    addMensaje(data);
    console.log(data);
  };
  const handleDireccionChange = (option: any | null) => {
   
    setValue("direccion", option?.formatted_address 
    ?? "");
  }
  



  return (
    <Box sx={{display:"flex", alignContent: "center", textAlign:"center", paddingTop:"15px", paddingRight:"10px ", marginLeft:"15%", marginRight:"10%"}}>
      
    <Card sx={{maxWidth:"900px", maxHeight:"1200px", background:"white", margin:"2px 2px 2px 2px", padding:"50px", paddingBottom:"50px"}}>
    <Typography variant='h1'> Ingrese su mensaje para la posteridad </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
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
      <Grid item xs={12}>
        <Button
          type="submit"
          variant="text"
          color="primary"
          disabled={!isValid}
        >
          Enviar
        </Button>
      </Grid>
    </Grid>
  </form>
    </Card>
    </Box>
    
  )
}
// realizar un dialog con matirialUI,

//AIzaSyBQ5hY7g6JNZ6H19NjO3EyPO4_J2bzAkFA 