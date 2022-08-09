import { ServicesProductos } from "../services/index.js";
import assert from 'assert/strict';


describe('Test de servicios: Productos en MySQL', () => {

    const testing = new ServicesProductos();

    before(() => { console.log(('================ INICIO ================')) });
    after(() => { console.log('================ FIN ===================') });
    beforeEach(() => { console.log('********** Inicio del test actual *******') });
    afterEach(() => { console.log('********** Fin del test actual **********') });


    it('getAll: Recepción total de archivos', () => {

        testing.getAll('any').then(res => {
            assert.strictEqual(res.length, 3)
        })
    })

    it('newItem: Agregar nuevo producto', () => {

        const producto = {
            nombre: 'Ojota',
            precio: 900,
            foto: 'link descriptivo'
        }

        testing.newItem(producto).then(res => {
            assert.deepStrictEqual(res, true)
        })
    })

    it('updateItem: Modificar producto anterior', () => {

        const modificado = {
            id: 114,
            nombre: 'Ojotas',
            precio: 1500,
            foto: 'nuevo link descriptivo'
        }

        testing.updateItem(modificado).then(res => {
            assert.deepStrictEqual(res, true)
        })
    })

    it('delItem: Borrar producto cargado', () => {

        const id = 114;

        testing.delItem(id).then(res => {
            assert.deepStrictEqual(res, true)
        })
    })
})