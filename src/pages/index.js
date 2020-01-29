import React from "react"
import avatar from "../images/fma.jpg"
import "./../styles/style.scss"

class App extends React.Component{
    constructor(props) {super(props); }

    render() {
        return (
            <div>
                <div className="box-container">
                    <div className="box" id="box">
                    <div id="top">


                    </div>
                    <div id="front">

                        <div className="face-container">
                        <div style={{flex:1}}>
                            <h2>Francis Albores</h2>
                            <sub>Web/Mobile Developer</sub>
                            <hr />
                            <h3 className="rotatingSlogan">60% Frontend</h3 >
                        </div>
                        <img src={avatar}  className="avatar" />
                        </div>

                    </div>
                    <div id="bottom">


                    </div>
                    <div id="back">


                    </div>
                    <div id="side-left">


                    </div>
                    <div id="side-right">


                    </div>
                    </div>
                </div>
                <div id="screen">

                </div>
            </div>
        )
    }
}
export default App
