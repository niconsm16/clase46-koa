import { schema } from 'normalizr'


const autoresSchema = new schema.Entity('autores')
const msjsSchema = new schema.Entity('mensajes',
    { autor: autoresSchema }, { idAttribute: 'id' })
export const fileSchema = [msjsSchema]