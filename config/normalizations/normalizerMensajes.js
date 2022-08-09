import { normalize } from 'normalizr'
import { fileSchema } from './../schemas/index.js'

export const normalizeMessages = (data) => {

    const msjs = []
    data.map(msj => msjs.push(msj))

    const normalized = normalize(msjs, fileSchema)

    const normal = JSON.stringify(normalized).length
    const original = JSON.stringify(data).length
    const compresion = Number((100 - ((normal * 100) / original)).toFixed(2))

    return { normalized, compresion }
}