import React from "react"
import avatar from "../images/fma.jpg"
import "./../styles/style.scss"
import Button from "../components/buttons/Button"
class App extends React.Component{
    constructor(props) {
        super(props); 
        this.toTop = this.toTop.bind(this);
    }
    shrink = () => {
        const box = document.getElementById('box');
        const sides = box.getElementsByTagName('div');
        const screen = document.getElementById('screen');
  
        box.style.opacity = "1";
        box.style.zIndex = "1";
        screen.innerHTML = "";
        screen.style.opacity = "0";
  
        box.style.transform += "scale3d(1,1,1)";
        Object.keys(sides).forEach((i) => {
            sides[i].style.opacity = "0.5"
        })
    }
    expand = (current) => {
        setTimeout(function() {
            const box = document.getElementById('box');
            const sides = box.getElementsByTagName('div');
            const screen = document.getElementById('screen');
            box.style.transform += "scale3d(8,8,8)";
            Object.keys(sides).forEach((i) => {
                sides[i].style.opacity = "1"
            })
            setTimeout(function() {
                box.style.opacity = "0";
                box.style.zIndex = "-1";
                screen.innerHTML = document.getElementById(current).innerHTML;
                screen.style.opacity = "1";
            },1000)
        }, 1500)
    }
    toTop = () => {
        this.shrink();
        setTimeout(function() {
            const box = document.getElementById('box');
            box.style.transform = "rotate3d(1,0,0,-90deg)";
            this.expand('top');
        }.bind(this),1000)
    }
    render() {
        return (
            <div>
                <div className="box-container">
                    <div className="box" id="box">
                    <div id="top">

                        top
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
                            <Button label="Go" handleClick={this.toTop} />

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
