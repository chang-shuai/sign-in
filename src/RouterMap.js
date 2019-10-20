import React from 'react';
import {HashRouter, Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Home from './Home';
import UnFound from './UnFound';
import Drag from './Drag';
import Calen from './Calen';

class RouterMap extends React.Component {
    render() {
        const WithRouterDrag = withRouter(Drag)
        return (
            <HashRouter>
                <Switch>
                    <Redirect exact from='/' to='/Drag'/>
                    <Route exact path='/Drag' component={WithRouterDrag} />
                    <Route exact path='/Home' component={Home} />
                    <Route exact path='/Calen/:name' component={Calen} />
                    <Route path='*' component={UnFound} />
                </Switch>
            </HashRouter>    
        )
    }
}

export default RouterMap;