import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Delete from './pags/clientes/CRUD/delCliente/delCliente';
import GetClientes from './pags/clientes/CRUD/getClientes/getClientes';
import Forme from './pags/clientes/CRUD/postCliente/postCliente';
import Atualiza from './pags/clientes/CRUD/putCliente/putCliente';
import Grafico from './pags/grafico/grafico';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Grafico}/>
                <Route path='/getClientes' component={GetClientes}/>
                <Route path='/delete/:numeroCliente' component={Delete}/>
                <Route path='/cliente' component={Forme}/>
                <Route path='/atualiza/:numeroCliente' component={Atualiza}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;