import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import GoHome from './GoHome'
import GoDetail from './GoDetail';

class List extends React.Component {
    render() {
        const GoHomeWithRouter = withRouter(GoHome)
        const GoDetailWithRouter = withRouter(GoDetail)
        return (
            <div>
                <p>我是List</p>
                <Link to={{pathname:'/Detail/1', search:'?name=tony&age=18'}}>跳转到Detail1</Link><br/>
                <Link to='/Detail/2'>跳转到Detail2</Link><br/>
                <Link to='/Home'>返回Home</Link>
                <GoDetailWithRouter id={1} name={'Tom'}></GoDetailWithRouter>
                <GoDetailWithRouter id={2} name={'Tony'}></GoDetailWithRouter>
                <GoHomeWithRouter></GoHomeWithRouter>
            </div>
        )
    }
}

export default List;