import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home/index';
import { Banks } from './pages/Banks/index';
import { BankDetails } from './pages/BankDetails/index';

export function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/banks" component={Banks} />
            <Route path="/bankdetails/:name/:code/:ispb" component={BankDetails} />
        </Switch>
        </BrowserRouter>
    );
}