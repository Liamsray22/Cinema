import * as nanoid from 'nanoid'

 const createUserModel = (db) => {
  return {
    findMany(){
      return db.get('usuario').value()
    },
    findOne(usuario) {
      return db.get("usuario").filter((usr)=> usr[1] == usuario.nombre && usr[2] == usuario.password).value();
    },
    // create(user) {
    //   const newUser = [nanoid(), ...user]
    //   db.set("user", newUser).write(); 
    //   return newUser;
    // },
  };
};

export default createUserModel
