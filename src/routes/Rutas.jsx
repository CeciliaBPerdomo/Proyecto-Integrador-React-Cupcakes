import {
    Routes,
    Route
} from 'react-router-dom';

import Home from '../pages/Home/Home';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Pedido from '../pages/Pedido/Pedido';

function Rutas() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/tu-pedido' element={<Pedido />} />

            {/* Pagina no encontrada */}
             <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}

export default Rutas;