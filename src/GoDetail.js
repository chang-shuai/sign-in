import React from 'react';

class GoDetail extends React.Component {
    render() {
        return (
            <div onClick={this.myClick.bind(this)}>跳转GoDetail</div>
        )
    }
    myClick() {
        this.props.history.push('/Detail/' + this.props.id + "?name=" + this.props.name);
    }
}

export default GoDetail;