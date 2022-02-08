// React imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';

// Firebase imports
import firebase from './firebase';

// Local imports
import App from './components/App';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

// CSS imports
import 'semantic-ui-css/semantic.min.css'

import registerServiceWorker from './registerServiceWorker';

class Root extends React.Component {

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged( user => {
            if(user){
                this.props.history.push("/")
            }
        })
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        )
    }
    
}

const RootwithAuth = withRouter(Root)

ReactDOM.render(<Router><RootwithAuth /></Router>, document.getElementById('root'));
registerServiceWorker();
