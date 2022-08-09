const form = document.getElementById('productForm')

const submit = (e) => {

    e.preventDefault();

    const id = document.getElementById('idprod').value
    const nombre = document.getElementById('nombre').value
    const precio = document.getElementById('precio').value
    const foto = document.getElementById('foto').value

    const query = `mutation Mutation($prod: ProductosModif) {
  updateItem(prod: $prod)
}`

    const prod = {
        id,
        nombre,
        precio: Number(precio),
        foto
    }

    fetch('/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            query,
            variables: { prod }
        })
    })
        .then(res => res.json())
        .then(({ data }) => {
            if (data.updateItem) {
                window.parent.location.reload()
            }
        })
}

form.addEventListener('submit', submit)