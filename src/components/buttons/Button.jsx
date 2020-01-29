import React from "react"


class Button extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            buttonStyle : {
                margin: '10px 10px 10px 0'
            }
        }
    }
    
    render() {
        return (
          <button
            className="btn btn-default"
            style={this.state.buttonStyle}
            onClick={this.props.handleClick}>{this.props.label}</button>
        );
    }
}

export default Button;