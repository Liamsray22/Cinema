import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
import DB from './db'
import createUserModel from './models/usuario'
import createSalaModel from './models/sala'
import createCarteleraModel from './models/cartelera'
import createVentasModel from './models/ventas'
const adapter = new LocalStorage('db')
const db = low(adapter)

db.defaults(DB).write()

export default {
 models: {
    Usuario: createUserModel(db),
    Cartelera: createCarteleraModel(db),
    Venta: createVentasModel(db),
    Sala: createSalaModel(db),
  },
  db
}
