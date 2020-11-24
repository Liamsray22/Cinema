import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import {AsientosData} from '../Data/asientosData'
import Modal from '@material-ui/core/Modal';
//context
import SalasContext from 'context/salas/SalasContext'


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ModalAsientos(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const salasContext = useContext(SalasContext)
  const {salaSeleccionada:{asientos}} = salasContext

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Asientos disponibles</h2>
      <p id="simple-modal-description">
        <div style={{display:"flex", flexWrap:"wrap"}}>
            {asientos ? asientos.map((asiento)=>{
                if (asiento.disponible){
                  return(
                    <div>
                      <img key={asiento.id} src={asiento.img} style={{height:"50px", width:"50px"}} onClick={()=>
                        {
                          props.setAsiento(asiento.id)
                          props.handleClose()
                        }}/>
                      <center><caption align="bottom">{asiento.id}</caption></center>
                    </div>
                  )
                } 
              }): <p>No hay asientos disponibles</p>
            }
        </div>
      </p>
    </div>
  );

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}