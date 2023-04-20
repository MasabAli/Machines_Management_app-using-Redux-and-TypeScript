import { Switch, Route } from 'react-router-dom';
import MachineTypePage from './pages/MachineType';
import MachinePage from './pages/Machine';
import Attribute from './pages/Attribute';


const Routes = () => {
    return (
        <Switch>
            
            <Route path="/" exact component={MachinePage} />
            <Route path="/attribute" exact component={Attribute} />
            <Route path="/types" exact component={MachineTypePage} />
        </Switch>
    );
};

export default Routes;