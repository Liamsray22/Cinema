import * as nanoid from 'nanoid'

 const createSalaModel = (db) => {
  return {
    findMany(){
      return db.get("sala").value()
    },
    findOne(id){  
      return db.get("sala").find({id}).value()
    },
  };
};

export default createSalaModel
