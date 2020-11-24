import {nanoid} from 'nanoid'

 const createVentasModel = (db) => {
  return {
      createVenta(venta){
        console.log("creando factura...",venta);
        const newVenta = [nanoid(2),...venta]
        return db.get("factura").push(newVenta).write()
      },
      getVentas(){
       return db.get("factura").value()
      },
      removeVenta(id){
        const removedVenta = db.get("factura").find((factura) => factura[0] == id).value();
        db.get("factura").remove((factura) => factura[0] == id).write();
        return removedVenta;
      }
  };
};

export default createVentasModel
