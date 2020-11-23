import React,{useContext,useEffect} from 'react'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
//Context
import UsuariosContext from 'context/usuarios/UsuariosContext'

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

export default function Usuarios() {
  const classes = useStyles();

  const usuariosContext = useContext(UsuariosContext)
    
    const {usuarios, obtenerUsuarios} = usuariosContext

    const isAdmin = db.models.Usuario.getLogged()[0][0][4]
   
    useEffect(()=>{
        obtenerUsuarios()
    },[])

  return (
    <GridContainer>
       {isAdmin?<Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Usuarios</h4>
            <p className={classes.cardCategoryWhite}>
              Listado de Usuarios
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Nombre de Usuario", "Password", "Rol"]}
              tableData={usuarios}
            />
          </CardBody>
        </Card>
        : 
        <Typography variant="h3" align="center" gutterBottom>
          Necesitas permisos de administrador para acceder a esta vista
        </Typography>
      }
        
    </GridContainer>
  );
}
