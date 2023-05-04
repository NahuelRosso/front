'use client'

import { Button, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";


type FormValues = {
  nombre: string;
  apellido: string;
  pais: string;
  estado: string;
  localidad: string;
  direccion: string;
  mensaje: string;
};

export default function Formulario() {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    mode: "onChange",
  });

  const { isValid } = formState;

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
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
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="País"
            variant="outlined"
            {...register("pais", { required: true })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Estado"
            variant="outlined"
            {...register("estado", { required: true })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Localidad"
            variant="outlined"
            {...register("localidad", { required: true })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Dirección"
            variant="outlined"
            {...register("direccion", { required: true })}
          />
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
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!isValid}
          >
            Enviar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
