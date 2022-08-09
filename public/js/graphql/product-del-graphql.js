
const delItem = async (item) => {

    const id = document.getElementById(`item-${item}`)

    const query = `mutation Mutation($delItemId: ID!) {
                        delItem(id: $delItemId)
                    }`

    const delItemId = Number(item)

    fetch('/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            query,
            variables: { delItemId }
        })
    })
        .then(res => res.json())
        .then(({ data }) => {
            if (data.delItem) id.remove()
            else alert('Lo sentimos, hubo un error al procesar su petición')
        })
}
