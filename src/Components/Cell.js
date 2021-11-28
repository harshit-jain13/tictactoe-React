import React, { Component } from 'react';
import circle from './Images/circle.png';
import cross from './Images/cross.png';

class Cell extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            clicked: -1
        }
    }

    changeClicked = () => {
        if(this.state.clicked !== -1)return;
        this.setState({
            clicked: this.props.imageType
        });
        this.props.changeTurn();
    }

    getCellContents = () => {
        
        if(this.state.clicked === 0){
            return <img src={circle} alt="circle"/>
        }else if(this.state.clicked === 1){
            return <img src={cross} alt="cross"/>
        }else{
            return "Hi";
        }
    }
    
    render() {
        return (
            <div className="cell" onClick={this.changeClicked}>
                {this.getCellContents()}
            </div>
        );
    }
}

export default Cell;