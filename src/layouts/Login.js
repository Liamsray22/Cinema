import React from 'react'
import "assets/css/login.css";


function Login() {
    return (
        <html>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        
            <div id="login">
        <h3 class="text-center text-white pt-5">Iniciar Sesion</h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                    <form id="login-form" class="form" action="" method="post">
                            <h3 class="text-center text-info">Iniciar Sesion</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">Usuario:</label><br/>
                                <input type="text" name="username" id="username" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Clave:</label><br/>
                                <input type="text" name="password" id="password" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label for="remember-me" class="text-info"><span>Recordarme</span> <span><input id="remember-me" name="remember-me" type="checkbox"/></span></label><br/>
                                <input type="submit" name="submit" class="btn btn-info btn-md" value="Entrar"/>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </html>
    )
}

export default Login
