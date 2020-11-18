import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AsientosData} from '../Data/asientosData'
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ModalAsientos(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Asientos disponibles</h2>
      <p id="simple-modal-description">
        <div style={{display:"flex", flexWrap:"wrap"}}>
      {AsientosData.map((item,index)=>{
        return(
            <div>
                <img src={item.img} style={{height:"50px", width:"50px"}}/>
                <center><caption align="bottom">{item.numeroAsiento}</caption></center>
                
            </div>
        )
})
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