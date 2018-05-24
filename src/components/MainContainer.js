import React, { Component } from "react";
import './MainContainer.css';

export default class MainContainer extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                    1 of 2
                    </div>
                    <div className="col-sm-4">
                    2 of 2
                    </div>
                </div>
            </div>
        )
    }
}

