const getAll = `query Query {
  getAll {
    id
    nombre
    precio
    foto
  }
}`

fetch('/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({ query: getAll })
})
  .then(res => res.json())
  .then(list => { showList(list.data.getAll) })