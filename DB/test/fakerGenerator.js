import { v4 as uuidv4 } from 'uuid'
import faker from '@faker-js/faker'
import { config } from './../../config/index.js'

faker.locale = 'es'

const fakerProduct = () => {
    return {
        id: uuidv4(),
        nombre: faker.commerce.productName(),
        precio: faker.commerce.price(50, 5000, 2),
        foto: faker.image.food(240, 240, true)
    }
}

const fakerGenerator = () => {
    const productos = []
    for (let i = 1; i <= config.cantidadFake; i++) {
        productos.push(fakerProduct())
    }
    return productos
}

export default fakerGenerator