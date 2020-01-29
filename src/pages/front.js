import React from "react"
import avatar from "../images/fma.jpg"
import "./../styles/style.scss"
import Button from "../components/buttons/Button"

export default class Front extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="face-container">
                <div style={{flex:1}}>
                    <h2>Francis Albores</h2>
                    <sub>Web/Mobile Developer</sub>
                    <hr />
                    <h3 className="rotatingSlogan">60% Frontend</h3 >
                </div>
                <img src={avatar}  className="avatar" />
                <Button label="Go" handleClick={this.props.handleClick } />

            </div>
        );
    }
}