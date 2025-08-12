import { productos } from "../data/productos"

export const recomendadosAleatorios = (cantidad) => {
    const cupcakesAleatorios = []

    while (cupcakesAleatorios.length < cantidad) {
        const indexRandom = Math.floor(Math.random() * productos.length)

        if(!cupcakesAleatorios.length) {
            cupcakesAleatorios.push(productos[indexRandom])
        }
        
        const productExistente = cupcakesAleatorios.find((newProduct) => {
            return newProduct.id === productos[indexRandom].id
        })

        if(!productExistente) {
            cupcakesAleatorios.push(productos[indexRandom])
        }
    }
    return cupcakesAleatorios
}