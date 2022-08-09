import axios from 'axios';

axios.all([

    axios.post('http://localhost:8080/login', {
        username: 'a@b',
        password: 'b'
    }),
    axios.get('http://localhost:8080/api/productos'),
    axios.post('http://localhost:8080/api/productos', {
        nombre: 'pepe',
        precio: 200,
        foto: 'dsfasdfasfadsf',
    }),
    axios.put('http://localhost:8080/api/productos/:id', {
        id: 64,
        nombre: 'pepote',
        precio: 500,
        foto: 'put',
    }),
    axios.delete('http://localhost:8080/api/productos/64')

])
    .then(axios.spread((a, b) => {
        console.log(b)
    }))

