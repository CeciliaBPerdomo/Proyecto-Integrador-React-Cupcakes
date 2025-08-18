export const agregarCupcake = (itemsCarrito, cupcake) => {
    const cupcakeInCart = itemsCarrito.find(item => item.id === cupcake.id);

    if (cupcakeInCart) {
        return itemsCarrito.map((item) => {
            return item.id === cupcake.id
                ? { ...item, cantidad: item.cantidad + 1 }
                : item;
        });
    }

    return [...itemsCarrito, { ...cupcake, cantidad: 1 }];
}


export const borrarCupacke = (itemsCarrito, id) => {
    const chauCupcake = itemsCarrito.find((item) => {
        return item.id === id
    });

    if (chauCupcake.cantidad > 1) {
        return itemsCarrito.map((item) => {
            return item.id === chauCupcake.id
                ? { ...item, cantidad: item.cantidad - 1 }
                : item;
        });
    }

    return itemsCarrito.filter((item) => {
        return item.id !== chauCupcake.id
    });
}

export const resetEnvio = (itemsCarrito, envio) => {
    if (itemsCarrito.length === 1 && itemsCarrito[0].cantidad === 1) {
        return 0
    }
    return envio
}