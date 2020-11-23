/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ReceiptIcon from '@material-ui/icons/Receipt';
// core components/views for Admin layout
import UserProfile from "views/UserProfile/UserProfile2.js";
import TableList from "views/TableList/TableList.js";
import Taquillas from "views/Taquillas/Taquillas.js";
import Usuarios from 'views/Usuarios/Usuarios.js'

const isAdmin =true

const dashboardRoutes = [
  {
    path: "/taquillas",
    name: "Taquillas",
    icon: ConfirmationNumberIcon,
    component:  Taquillas,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Facturar Ticket",
    icon: ReceiptIcon,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/ver-facturas",
    name: "Ventas",
    icon: ListAltIcon,
    component: TableList,
    layout: "/admin"
  },
  isAdmin?
  {
    path: "/administracion",
    name: "Administracion",
    icon: "content_paste",
    component: Usuarios,
    layout: "/admin"
  }
    :null
];



export default dashboardRoutes;
