import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
import { useEffect } from 'react';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign:"center",
 
};

export interface IData{
    text:string,
    buttonAction:boolean,
    dataTitle:string,
    dataDescription:string,
    width?:string,
    fontSize?:string,
    
}

export default function BasicModal(props:IData) {
    
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(props.buttonAction);
  const handleClose = () => setOpen(false);
  
  useEffect(() => {
    if (props.buttonAction) {
      handleOpen();
    }
  }, [props.buttonAction]);


  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2" color={'black'}>
            {props.dataTitle}
          </Typography>
          <Typography id="modal-modal-description" variant="h6" component="h2" sx={{ mt: 2 }} color={'black'}>
           {props.dataDescription}
          </Typography>
          <Grid item xs={12}>
          <Button
            sx={{marginTop:"15px"}}
           type="submit"
           variant="outlined"
           color="primary">Pagar</Button>
           </Grid>
        </Box>
      </Modal>
    </div>
  );
}


