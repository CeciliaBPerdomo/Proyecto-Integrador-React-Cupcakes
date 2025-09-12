import {
    Routes,
    Route
} from 'react-router-dom';

import Home from '../pages/Home/Home';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Pedido from '../pages/Pedido/Pedido';
import Registro from '../pages/Registro/Registro';
import Login from '../pages/InicioSesion/Login';
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute"
import Ordenes from '../pages/Ordenes/Ordenes';
import Resumen from '../pages/Ordenes/Resumen/Resumen';

function Rutas() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/registrate' element={<Registro />} />
            <Route path="/iniciar-sesion" element={<Login />} />

            {/* Ruta de pedido y ordenes protegida */}
            <Route
                path='/tu-pedido'
                element={
                    <ProtectedRoute redirectTo="/iniciar-sesion">
                        <Pedido />
                    </ProtectedRoute>
                }
            />

            <Route
                path='tus-ordenes'
                element={
                    <ProtectedRoute redirectTo="/iniciar-sesion">
                        <Ordenes />
                    </ProtectedRoute>
                }
            />

            <Route
                path='resumen-orden/:ordenId'
                element={
                    <ProtectedRoute redirectTo="/iniciar-sesion">
                        <Resumen />
                    </ProtectedRoute>
                }
            />

            {/* Pagina no encontrada */}
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}

export default Rutas;