import * as nanoid from 'nanoid'

 const createVentasModel = (db) => {
  return {
      getVentas(){
       return db.get('factura').value()
      },
      removeVenta(id){
        const removedVenta = db.get("factura").find((factura) => factura[0] == id).value();
        db.get("factura").remove((factura) => factura[0] == id).write();
        return removedVenta;
      }
  };
};

export default createVentasModel
