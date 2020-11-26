import React,{useContext,useState} from 'react'
import Footer from 'components/Footer/Footer'
import UsuariosContext from 'context/usuarios/UsuariosContext'
import "assets/css/login.css";

function Login() {
    const [datosUsuario,setDatos] = useState({ 
        nombre:'',
        password: ''
    })

    const usuariosContext = useContext(UsuariosContext)
    const {nombre, password} = datosUsuario
    const { loguearUsuario, error} = usuariosContext

    const handleChange = (e) => {
        setDatos({
          ...datosUsuario,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre.trim() === "" || password.trim() === "") {
          return;
        }
        loguearUsuario(datosUsuario);
      };

    return (
        <>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    
        <div id="login">
            <h3 className="text-center text-white pt-5">Iniciar Sesion</h3>
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                        <form id="login-form" className="form" onSubmit={handleSubmit}>
                                <h3 className="text-center text-info">Iniciar Sesion</h3>
                                <div className="form-group">
                                    <label htmlFor="nombre" className="text-info">Usuario:</label><br/>
                                    <input 
                                        type="text" 
                                        name="nombre" 
                                        id="nombre" 
                                        placeholder="Tu usuario" 
                                        className="form-control"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="text-info">Contraseña:</label><br/>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        id="password" 
                                        placeholder="Tu contraseña" 
                                        className="form-control"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="submit" 
                                        name="submit" 
                                        className="btn btn-info btn-lg" 
                                        value="Iniciar Sesion"
                                    />
                                </div>
                                {error ? <p className="alert alert-danger text-center text-uppercase p3">Datos erroneos</p> : null}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer/>
    </>
    )
}

export default Login
