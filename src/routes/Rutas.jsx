import {
    Routes,
    Route
} from 'react-router-dom';

import Home from '../pages/Home/Home';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Pedido from '../pages/Pedido/Pedido';
import Registro from '../pages/Registro/Registro';
import Login from '../pages/InicioSesion/Login';

function Rutas() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/tu-pedido' element={<Pedido />} />
            <Route path='/registrate' element={<Registro />} />
            <Route path="/iniciar-sesion" element={<Login />} />

            {/* Pagina no encontrada */}
             <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}

export default Rutas;