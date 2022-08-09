import supertest from "supertest";
import chai from 'chai'
import faker from "@faker-js/faker";

const request = supertest('http://localhost:8080/')
const expect = chai.expect
faker.locale = 'es'


describe('Test: API Restful', () => {


    before(() => { console.log(('================ INICIO ================')) });
    after(() => { console.log('================ FIN ===================') });
    beforeEach(() => { console.log('********** Inicio del test actual *******') });
    afterEach(() => { console.log('********** Fin del test actual **********') });


    it('Test - Ruta Get: Brinda lista de productos', async () => {

        let resp = await request.get('api/productos');
        resp = resp._body;
        expect(resp.length).greaterThan(0)
    })

    it('Test - Ruta Post: Nuevo producto', async () => {

        const producto = {
            nombre: 'pepe',
            precio: 200,
            foto: 'dsfasdfasfadsf'
        }
        const resp = await request.post('api/productos').send(producto)
        expect(resp.ok).true
    })

    it('Test - Ruta Put: Modificar producto', async () => {

        const producto = {
            id: 214,
            nombre: 'pepote',
            precio: 500,
            foto: 'put',
        }
        const resp = await request.put('api/productos/:id').send(producto)
        expect(resp.ok).true
    })

    it('Test - Ruta Delete: Borrar producto', async () => {

        const id = 214
        const resp = await request.delete(`api/productos/${id}`)
        expect(resp.ok).true
    })
})