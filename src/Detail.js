import React from 'react';

class Detail extends React.Component {

    render() {
        return(
            <div>
                <p>我是detail</p>
                <p>
                    得到的id是：{this.props.match.params.id}
                </p>
                <p>    
                    search: {this.props.location.search}
                </p>
            </div>
        )
    }
}

export default Detail;