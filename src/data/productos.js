export const productos = [
    { id: 1, title: "ChocoBoom", imagen: "", descripcion: "Explosión de chocolate con crema de cacao y trocitos de brownie.", precio: 120, categoria: "chocolate" },
    { id: 2, title: "Vainiberry", imagen: "", descripcion: "Vainilla con corazón de frutilla y topping de chantilly.", precio: 130, categoria: "vainilla" },
    { id: 3, title: "Lemon Kiss", imagen: "", descripcion: "Bizcocho de limón ácido con merengue flameado.", precio: 140, categoria: "fruta" },
    { id: 4, title: "Red Velvet Crush", imagen: "", descripcion: "Red velvet con frosting de queso crema y amor.", precio: 150, categoria: "gourmet" },
    { id: 5, title: "OreoLicious", imagen: "", descripcion: "Base de chocolate con Oreo triturada y crema de vainilla.", precio: 160, categoria: "galleta" },
    { id: 6, title: "Banana Zen", imagen: "", descripcion: "Cupcake vegano de banana con nuez tostada.", precio: 140, categoria: "vegano" },
    { id: 7, title: "CaféLatte", imagen: "", descripcion: "Infusión de café con cobertura de crema moka.", precio: 135, categoria: "café" },
    { id: 8, title: "Dulce Amor", imagen: "", descripcion: "Relleno de dulce de leche con cobertura de chocolate blanco.", precio: 145, categoria: "dulce de leche" },
    { id: 9, title: "CocoLoco", imagen: "", descripcion: "Coco rallado, crema de vainilla y topping de chocolate.", precio: 130, categoria: "coco" },
    { id: 10, title: "Chai Spice", imagen: "", descripcion: "Infusión de especias chai con cobertura cremosa.", precio: 140, categoria: "especias" },
    { id: 11, title: "Carrot Joy", imagen: "", descripcion: "Bizcocho de zanahoria con frosting de queso crema.", precio: 135, categoria: "especias" },
    { id: 12, title: "Peanut Butter Love", imagen: "", descripcion: "Manteca de maní y chispas de chocolate oscuro.", precio: 150, categoria: "gourmet" },
    { id: 13, title: "Blueberry Pop", imagen: "", descripcion: "Muffin de arándanos con glaseado violeta.", precio: 150, categoria: "fruta" },
    { id: 14, title: "MintyFresh", imagen: "", descripcion: "Chocolate y menta, la dupla más refrescante.", precio: 150, categoria: "chocolate" },
    { id: 15, title: "Coconut Kiss", imagen: "", descripcion: "Base de coco y vainilla con cobertura cremosa.", precio: 140, categoria: "coco" },
    { id: 16, title: "ChocoMint Deluxe", imagen: "", descripcion: "Chocolate amargo con toque de menta fresca.", precio: 155, categoria: "chocolate" },
    { id: 17, title: "Frambubliss", imagen: "", descripcion: "Relleno de frambuesa con crema chantilly.", precio: 140, categoria: "fruta" },
    { id: 18, title: "Cocoa Espresso", imagen: "", descripcion: "Bizcochuelo de cacao con infusión de espresso.", precio: 145, categoria: "café" },
    { id: 19, title: "Nutella Love", imagen: "", descripcion: "Bizcochuelo de avellana con corazón de Nutella.", precio: 160, categoria: "chocolate" },
    { id: 20, title: "Vainilla Cream Dream", imagen: "", descripcion: "Pura crema de vainilla y galleta de base.", precio: 140, categoria: "vainilla" },
    { id: 21, title: "Tropical Vibes", imagen: "", descripcion: "Cupcake con piña y coco. Verano en un bocado.", precio: 145, categoria: "coco" },
    { id: 22, title: "Café Bombón", imagen: "", descripcion: "Café con leche condensada y toque dulce final.", precio: 155, categoria: "café" },
    { id: 23, title: "Matcha Mood", imagen: "", descripcion: "Matcha suave con crema batida de vainilla.", precio: 150, categoria: "gourmet" },
    { id: 24, title: "Cherry Glam", imagen: "", descripcion: "Cupcake con cereza fresca y glaseado rosado.", precio: 140, categoria: "fruta" },
    { id: 25, title: "Galletita de la Suerte", imagen: "", descripcion: "Cupcake de galleta con sorpresa adentro.", precio: 150, categoria: "galleta" },
    { id: 26, title: "Almendra Spicy", imagen: "", descripcion: "Almendras tostadas y especias dulces.", precio: 145, categoria: "especias" },
    { id: 27, title: "BrownieCrush", imagen: "", descripcion: "Base de brownie con dulce de leche.", precio: 160, categoria: "dulce de leche" },
    { id: 28, title: "Vegan Dream", imagen: "", descripcion: "Vegan friendly con frutos secos y banana.", precio: 135, categoria: "vegano" },
    { id: 29, title: "GalletaManía", imagen: "", descripcion: "Doble galleta, doble locura.", precio: 140, categoria: "galleta" },
    { id: 30, title: "CocoBanana", imagen: "", descripcion: "Mezcla tropical de banana y coco.", precio: 145, categoria: "coco" },
    { id: 31, title: "Dolce Latte", imagen: "", descripcion: "Dulce de leche con un toque de espresso.", precio: 150, categoria: "dulce de leche" },
    { id: 32, title: "Chocobanana", imagen: "", descripcion: "Banana madura con cobertura de chocolate.", precio: 145, categoria: "chocolate" },
    { id: 33, title: "Spice & Choco", imagen: "", descripcion: "Especias dulces y cacao intenso.", precio: 150, categoria: "especias" },
    { id: 34, title: "Fruit Fantasy", imagen: "", descripcion: "Mix de frutas rojas en bizcochuelo esponjoso.", precio: 150, categoria: "fruta" },
    { id: 35, title: "Vanilla Gold", imagen: "", descripcion: "Vainilla premium con crema pastelera.", precio: 145, categoria: "vainilla" },
    { id: 36, title: "Latte Cookie", imagen: "", descripcion: "Café suave con base crocante de galleta.", precio: 150, categoria: "galleta" }
];


export const TotalProducts = productos.length;

export const cupcakes = productos.reduce((acc, producto) => {
    if (!acc[producto.categoria]) {
        acc[producto.categoria] = [];
    }

    acc[producto.categoria] = [...acc[producto.categoria], producto];

    return acc;
}, {});
