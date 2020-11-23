import React,{useContext,useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";

import InputLabel from "@material-ui/core/InputLabel";

import avatar from "assets/img/faces/marc.jpg";
import CardAvatar from "components/Card/CardAvatar.js";
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

export default function UserProfile() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [nombre,setNombre] =useState("");
  const [apellido,setApellido] =useState("");
  const [cartelera,setCartelera] =useState();
  const [asiento,setAsiento] =useState();
  const [tipoPago,setTipoPago] =useState("");
  const [monto,setMonto] =useState(0);

  const ventasContext = useContext(VentasContext)

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
                  <CustomInput
                    labelText="E&J CINEMA"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                </GridItem>
                {/* <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Nombre del Cliente"
                    id="username"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem> */}
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Calle Jose Contreras, Distrito Nacional"
                    id="direccion"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Nombre"
                    id="nombre"
                    onChange={(e)=>setNombre(e.target.value)}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Apellido"
                    id="apellido"
                    onChange={()=>console.log("lel")}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Cartelera"
                    id="cartelera"
                    onChange={()=>console.log("lel")}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Asiento"
                    id="asiento"
                    onChange={()=>console.log("lel")}
                    fn= {handleOpen}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  <ModalAsientos open={open} handleClose={handleClose}/>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Tipo de Pago"
                    id="tipo-pago"
                    onChange={()=>console.log("lel")}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <Input
                  type="text"
                  id="nombre" 
                  placeholder="Tu usuario" 
                  onChange={()=>console.log("lel")}
                />
                 <Input
                  type="text" 
                  id="nombre" 
                  placeholder="Tu pass" 
                  onChange={(e)=>setNombre(e.target.value)}
                />
                  <CustomInput
                    labelText="Monto"
                    id="monto"
                    onChange={()=>console.log("lel")}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary">Procesar</Button>
            </CardFooter>
          </Card>
      </GridContainer>
    </div>
  );
}
