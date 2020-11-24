import * as nanoid from 'nanoid'

 const createCarteleraModel = (db) => {
  return {
    findMany(){
     return db.get('cartelera').value()
    },
    findOne(id){
      return db.get('cartelera').find((cartelera)=>cartelera[0]==id).value()
    }
  };
};

export default createCarteleraModel
