import React, { Component } from 'react';

var HOC = function (WrappedComponent) {
    return class HOCComponent extends Component {
        state={
            username: "Richa Dewan"
        };
        render(){
            return(
                <>
                <WrappedComponent username={this.state.username} {...this.props} />
                </>
            );
        }

    }
}

export default HOC;
