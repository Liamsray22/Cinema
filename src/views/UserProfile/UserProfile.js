import React,{useContext,useState,useEffect} from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import ModalAsientos from "components/ModalAsientos/ModalAsientos.js";
// context
import VentasContext from "context/ventas/VentasContext"
import SalasContext from "context/salas/SalasContext"
import CartelerasContext from 'context/carteleras/CartelerasContext'

import db from 'db'
import {nanoid} from 'nanoid'

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [nombre,setNombre] =useState("");
  const [apellido,setApellido] =useState("");
  const [cartelera,setCartelera] =useState(0);
  const [asiento,setAsiento] =useState(0);
  const [tipoPago,setTipoPago] =useState("");
  const [monto,setMonto] =useState(0);

  const [error,setError]=useState(false);
  const [agregado,setAgregado] = useState(false)

  const ventasContext = useContext(VentasContext)
  const cartelerasContext = useContext(CartelerasContext)
  const salasContext = useContext(SalasContext)

  const {agregarFactura}=ventasContext
  const {carteleras,obtenerCarteleras} = cartelerasContext;
  const {salaSeleccionada,getSalaPorId} = salasContext

  useEffect(()=>{
    obtenerCarteleras()
  },[])

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const underlineClasses = classNames({
    [classes.underline]: true
  });

  const handleSubmit=()=> {
    if(nombre.trim()=="" || apellido.trim()=="" || cartelera.length<=0 ||
      asiento.length<=0 || tipoPago.trim()=="" || monto.length<=0) {
        setError(true)
        setTimeout(()=>{
          setError(false)
        }, 3000)
        return;
    }
    const currentDate = new Date();
    const factura = [`${nombre} ${apellido}`, Number(cartelera), nanoid(2),asiento,
    `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`,tipoPago,Number(monto)]

    db.models.Sala.toggleDisponible(salaSeleccionada.id,asiento)
    agregarFactura(factura)
    
    setAgregado(true)
    setTimeout(() =>{
      setAgregado(false)
    }, 3000)

    setNombre("")
    setApellido("")
    setCartelera(0)
    setAsiento(0)
    setTipoPago("")
    setMonto(0)
  }

  const handleCartelera =(e)=>{
    const salaId = db.models.Cartelera.findOne(e.target.value)[7]
    getSalaPorId(salaId)
    setCartelera(e.target.value)
   
  }
  
  return (
    <div>
      <GridContainer>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Facturar Taquilla</h4>
              <p className={classes.cardCategoryWhite}>Complete los campos</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                   <FormControl
                    fullWidth= {true}
                    className={classes.formControl}
                   >
                     <InputLabel
                        className={classes.labelRoot}
                      >
                        Establecimiento
                      </InputLabel>
                    <Input
                      classes={{
                        root: classes.marginTop,
                        disabled: classes.disabled,
                        underline: underlineClasses
                      }}
                      value={"E&J CINEMA"}
                      disabled={true}
                    />
                  </FormControl>
                
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <FormControl
                    fullWidth= {true}
                    className={classes.formControl}
                >
                     <InputLabel
                        className={classes.labelRoot}
                      >
                        Direccion
                      </InputLabel>
                    <Input
                      classes={{
                        root: classes.marginTop,
                        disabled: classes.disabled,
                        underline: underlineClasses
                      }}
                      value={"Calle Jose Contreras, Distrito Nacional"}
                      disabled={true}
                    />
                  </FormControl>
                
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <FormControl
                    fullWidth= {true}
                    className={classes.formControl}
                  >
                     <InputLabel
                        className={classes.labelRoot}
                      >
                        Nombre
                      </InputLabel>
                    <Input
                      classes={{
                        root: classes.marginTop,
                        disabled: classes.disabled,
                        underline: underlineClasses
                      }}
                      name="nombre"
                      type="text"
                      onChange={(e)=>setNombre(e.target.value)}
                    />
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <FormControl
                    fullWidth= {true}
                    className={classes.formControl}
                  >
                     <InputLabel
                        className={classes.labelRoot}
                      >
                        Apellido
                      </InputLabel>
                    <Input
                      classes={{
                        root: classes.marginTop,
                        disabled: classes.disabled,
                        underline: underlineClasses
                      }}
                      name="apellido"
                      type="text"
                      onChange={(e)=>setApellido(e.target.value)}
                    />
                  </FormControl>
                </GridItem>
              </GridContainer>
              <GridContainer>
              <GridItem xs={12} sm={12} md={4}>

              <FormControl
                  fullWidth= {true}
                  className={classes.formControl}
              >
                     <InputLabel
                        className={classes.labelRoot}
                      >
                        Cartelera
                      </InputLabel>

                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={cartelera}
                        onChange={(e)=>handleCartelera(e)}
                      >
                        {carteleras? 
                          carteleras.map((cartelera)=>(
                          <MenuItem value={cartelera[0]}>{cartelera[0]}</MenuItem>
                        ))
                        :<MenuItem value="" disabled>No hay carteleras</MenuItem>  }
                      </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <FormControl
                    fullWidth= {true}
                    className={classes.formControl}
                  >
                     <InputLabel
                        className={classes.labelRoot}
                      >
                        Asiento
                      </InputLabel>
                    <Input
                      classes={{
                        root: classes.marginTop,
                        disabled: classes.disabled,
                        underline: underlineClasses
                      }}
                      onClick={handleOpen}
                      value={asiento}
                    />
                  </FormControl>
                  <ModalAsientos open={open} handleClose={handleClose} setAsiento={setAsiento}/>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <FormControl
                    fullWidth= {true}
                    className={classes.formControl}
                  >
                     <InputLabel
                        className={classes.labelRoot}
                      >
                        Tipo de pago
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={tipoPago}
                        onChange={(e)=>setTipoPago(e.target.value)}
                      >
                         <MenuItem value="Efectivo">Efectivo</MenuItem>
                         <MenuItem value="Tarjeta">Tarjeta</MenuItem>
                      </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <FormControl
                    fullWidth= {true}
                    className={classes.formControl}
                  >
                     <InputLabel
                        className={classes.labelRoot}
                      >
                        Monto
                      </InputLabel>
                    <Input
                      classes={{
                        root: classes.marginTop,
                        disabled: classes.disabled,
                        underline: underlineClasses
                      }}
                      name="monto"
                      type="number"
                      onChange={(e)=>setMonto(e.target.value)}
                    />
                  </FormControl>
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={handleSubmit}>Procesar</Button>
            </CardFooter>
            {error ? <p className="alert alert-danger text-center text-uppercase p3">Debe completar todos los campos</p> : null}
            {agregado ? <p className="alert alert-info text-center text-uppercase p3">Venta registrada exitosamente</p> : null}
          </Card>
      </GridContainer>
    </div>
  );
}
