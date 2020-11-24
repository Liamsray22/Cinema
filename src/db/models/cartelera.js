import * as nanoid from 'nanoid'

 const createCarteleraModel = (db) => {
  return {
    findMany(){
     return db.get('cartelera').value()
    }
  };
};

export default createCarteleraModel
