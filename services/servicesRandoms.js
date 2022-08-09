export const randomsGen = (x) => {

    let numbers = new Object()
    let { cant } = x

    if (!cant || isNaN(cant)) {
        cant = 100000000
    }
    else { cant = parseInt(cant) }

    for (let i = 1; i <= cant; i++) {

        let a = Math.floor(Math.random() * 2000 + 1)

        if (isNaN(numbers[a])) {
            numbers[a] = 1
        } else { numbers[a]++ }
    }
    return numbers
}


process.on('message', req => {

    process.send(randomsGen(req))
    process.exit()
})

try { process.send('start') }
catch (err) { console.log('error en inicialización del fork, sin embargo funcionará') }