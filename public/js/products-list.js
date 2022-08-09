fetch('/api/productos')
    .then(res => res.json())
    .then(list => { showList(list.data) })



