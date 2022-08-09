async function delItem(item) {

    const id = document.getElementById(`item-${item}`)

    const res = await fetch(`/api/productos/${item}`, {
        method: 'DELETE'
    }).then(res => res.json())

    if (res) id.remove()
    else alert('Lo sentimos, hubo un error al procesar su petición')
}