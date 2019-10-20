import React from 'react';
import { Redirect, withRouter } from 'react-router-dom'
import {sessionStore as store} from './storage';
import Show from './Show';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.workbook = store.get('workbook')
        if (!this.workbook) {
            this.state = {isRedirect : true}
        } else {
            this.state = {isRedirect : false}
        }
    }

    render() {
        const WithRouterShow = withRouter(Show);
        if (this.state.isRedirect) {
            return <Redirect to="/Drag" ></Redirect>
        } else {
            return (
                <div>
                    <WithRouterShow></WithRouterShow>
                </div>
            )
        }
    }
}

export default Home;