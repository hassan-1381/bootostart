import React ,{Component} from "react";
import Menu from "./script/Menu";
import Mobilmenu from "./script/Mobilmenu";

import "./style/style.css";


export default class App extends React.Component {
    constructor(){
        super();
        this.state={
            logo:"./public/img/logo.webp",
        }
    }
    render() {
        return (
            <>
                <div className="container">
                    <Menu />
                    <Mobilmenu/>
          
                </div>


            </>
        )

    }


}