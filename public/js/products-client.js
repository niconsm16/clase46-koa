const template = ({ id, nombre, precio, foto }) => `
    <div id=item-${id} class=" flex w-full h-24 m-1 p-2 bg-zinc-200 rounded" style="place-items: center">
                <div class="w-auto pr-2 text-left">${id}</div>
                <div class="w-3/4">${nombre}</div>
                <div class="w-20 text-center">${precio}</div>
                <div class="w-48 flex justify-center bg-neutral-100"><img alt="image" class="h-20"
                        style="max-width: 13em; object-fit: contain"
                        onerror="this.src='https://i.pinimg.com/originals/f4/9d/0b/f49d0bc00e44cb196068b635e530f340.jpg'"
                        src=${foto}></div>
                <button onclick="delItem('${id}')"
                    class="w-6 ml-4 px-2 flex justify-center font-bold bg-black text-white rounded-full">X
                </button>
            </div>
            `

showList = (list) => {

    const productList = document.getElementById('products-list')

    list.map(prod => {

        const item = document.createElement('div')
        item.className = 'w-full'
        item.innerHTML = template(prod)
        productList.append(item)
    })
}