 const createSalaModel = (db) => {
  return {
    findMany(){
      return db.get("sala").value()
    },
    findOne(id){
      return db.get("sala").find({id}).value()
    },
    toggleDisponible(id,asientoId){
      console.log('salaModel1', db.get('sala').find((sala)=>sala.id == id).value());
      let newAsientos = db.get('sala').find((sala)=>sala.id == id).value().asientos
      newAsientos = newAsientos.map(asiento=>(
      asiento.id == asientoId? {id:asiento.id,disponible:!asiento.disponible, img: asiento.img} : asiento
     ))
     return db.get('sala').find((sala)=>sala.id == id).assign({asientos:newAsientos}).write()
    }
  };
};

export default createSalaModel
