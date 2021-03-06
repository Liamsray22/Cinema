import React,{useContext,useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
//Context
import VentasContext from 'context/ventas/VentasContext'

import db from 'db'

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);
export default function TableList() {
  const classes = useStyles();

  const ventasContext = useContext(VentasContext)
  const {facturas,removerFactura,obtenerFacturas} = ventasContext;
  
  useEffect(()=>{
    obtenerFacturas()
  },[])

  const isAdmin = db.models.Usuario.getLogged()[0][0][4]
  return (
    <GridContainer>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Ventas</h4>
            <p className={classes.cardCategoryWhite}>
              Listado de ventas de taquillas
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Id","Nombre del cliente", "Id Cartelera", "Id del Ticket", "Id del Asiento","Fecha de registro","Forma de pago","Monto",
              isAdmin?
              "Acciones"
              : null
            ]}
              tableData={facturas.map(factura => ([...factura,
                isAdmin?
                <> 
                <Button color="primary" onClick={() =>removerFactura(factura[0])}>Eliminar</Button>
                </>
                :null
             ]))}
            />
          </CardBody>
        </Card>
    </GridContainer>
  );
}
