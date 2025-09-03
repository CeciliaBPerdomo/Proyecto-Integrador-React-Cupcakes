import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Persistencia
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage"
import persistStore from "redux-persist/lib/persistStore";

// Recomendados
import recomendadosReducer from "./recomendados/recomendadosSlice"
// Categorias
import categoriasReducer from "./categorias/categoriasSlice"
// Productos
import productosReducer from "./productos/productosSlice"
// Cocineros
import cocinerosReducer from "./cocineros/cocinerosSlice"
// Carrito
import carritoReducer from "./carrito/carritoSlice"
// Usuarios
import usuarioReducer from "./usuario/usuarioSlice"


const reducers = combineReducers({
    recomendados: recomendadosReducer,
    categorias: categoriasReducer,
    productos: productosReducer,
    carrito: carritoReducer,
    cocineros: cocinerosReducer,
    usuario: usuarioReducer,
})

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["carrito", "usuario"] // Lo que realmente quiero peristir
}

// Persiste la info, le paso la configuración y que quiero que persista.
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    // para interactuar con la api externa
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false // redux no guardaba bien los datos serializable
    })
})


export const persistor = persistStore(store)