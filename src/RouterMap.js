import React from 'react';
import {HashRouter, Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Home from './Home';
import List from './List';
import UnFound from './UnFound';
import Detail from './Detail';
import Drag from './Drag';

class RouterMap extends React.Component {
    render() {
        const WithRouterDrag = withRouter(Drag)
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/Drag' component={WithRouterDrag} />
                    <Route exact path='/Home' component={Home} />
                    <Route exact path='/List' component={List} />
                    <Route path='/Detail/:id' component={Detail} />
                    <Redirect  from='/*' to='/Drag'/>
                    <Route path='*' component={UnFound} />
                </Switch>
            </HashRouter>    
        )
    }
}

export default RouterMap;