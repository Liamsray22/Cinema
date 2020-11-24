/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import 'assets/css/footer.css'

export default function Footer(props) {
  return (
    <div>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
      <script src="https://kit.fontawesome.com/826ecc4006.js" crossorigin="anonymous"></script>
    
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>Acerca </h6>
              <p class="text-justify">
                Software desarrollado por la empresa J&E TECH, capaz de brindar los servicios de facturacion, y
                administracion de tickets del establecimiento cinematografico E&J CINEMA</p>
            </div>

            <div class="col-xs-6 col-md-3">
              {/* <h6>Menu</h6>
                <ul class="footer-links">
                  <li><a href="http://localhost:3000/admin/dashboard">Facturacion</a></li>
                  <li><a href="http://localhost:3000/admin/taquillas">Taquillas</a></li>
                  <li><a href="http://localhost:3000/admin/ver-facturas">Ver Facturas</a></li>                
                </ul> */}
            </div>

            <div class="col-xs- col-md-3">
                <h6>Certificaciones NORTIC</h6>
                <ul>
                  <li>
                    <a href="http://optic.gob.do/nortic/index.php/certificaciones/instituciones-certificadas/item/ministerio-de-educacion-minerd" 
                    hreflang="es" target="_blank" rel="nofollow" title="Medio web certificado bajo la NORTIC A2:2016 con el NIU 16014-01-A216167" >
                      <img src="http://optic.gob.do/nortic/images/sellos/minerd-sello-a2-2016/01-minerd.png" lang="es" width="83" height="100" alt="Sello de certificación de la A2:2016 con el NIU 16014-01-A216167" /></a>
                  </li>
                  <li>
                    <a href="http://optic.gob.do/nortic/index.php/certificaciones/instituciones-certificadas/item/ministerio-de-educacion-minerd" 
                    hreflang="es" target="_blank" rel="nofollow" title="Medio web certificado bajo la NORTIC A3:2014 con el NIU 16014-02-A314114" >
                      <img src="http://optic.gob.do/nortic/images/sellos/minerd-sello-a3-2014/02-minerd.png" lang="es" width="83" height="100" alt="Sello de certificación de la A3:2014 con el NIU 16014-02-A314114" /></a>
                  </li>
                </ul>
              </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
         <a href="#">E&J CINEMA</a>.
            </p>
          </div>
        </div>
      </div>
</footer>
    </div>
  );
}
