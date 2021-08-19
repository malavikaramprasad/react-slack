// React imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Local imports
import App from './components/App';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

// CSS imports
import 'semantic-ui-css/semantic.min.css'

import registerServiceWorker from './registerServiceWorker';

const Root = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Switch>
    </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
