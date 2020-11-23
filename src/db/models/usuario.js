 const createUserModel = (db) => {
  return {
    findMany(){
      return db.get('usuario').value()
    },
    findOne(usuario) {
     const match = db.get("usuario").filter((usr)=> usr[1] == usuario.nombre && usr[2] == usuario.password).value();
     if (!match.length==0) {
       return db.get("usuarioLogueado").push(match).write()
      }

     return []
    },
    getLogged(){
      return db.get("usuarioLogueado").value()
    },
    logOut(){
      return db.set("usuarioLogueado",[]).write()
    }
  };
};

export default createUserModel
