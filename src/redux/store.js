import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Persistencia
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage"
import persistStore from "redux-persist/lib/persistStore";

// Recomendados
import recomendadosReducer from "./recomendados/recomendadosSlice"
// Categorias
import categoriasReducer from "./categorias/categoriasSlice"

const reducers = combineReducers({
    recomendados: recomendadosReducer,
    categorias: categoriasReducer,
})

const persistConfig = {
    key: "root",
    storage,
    whitelist: [] // Lo que realmente quiero peristir
}

// Persiste la info, le paso la configuración y que quiero que persista.
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
})


export const persistor = persistStore(store)