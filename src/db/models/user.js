import * as nanoid from 'nanoid'

 const createUserModel = (db) => {
  return {
    findOne(id) {
      return db.get("user").filter((usuario)=> usuario[0] == id).value();
    },
    create(user) {
      const newUser = [nanoid(), ...user]
      // const newUser ={ id: nanoid(), createdAt: Date.now(), ...user };
      db.set("user", newUser).write(); 
      return newUser;
    },
  };
};

export default createUserModel
