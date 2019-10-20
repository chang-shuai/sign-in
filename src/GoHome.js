import React from 'react';

class GoHome extends React.Component {
    render() {
        return(
            <div onClick={this.myClick.bind(this)}>返回Home</div>
        )
    }

    myClick() {
        this.props.history.push('/Home')
    }

}

export default GoHome;