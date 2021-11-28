import React, { Component } from 'react';
import Cell from './Cell';
import './styles/tictactoe.css';

class Grid extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            turn: 0
        }
    }

    changeTurn = () => {
        this.setState({
            turn: 1 - this.state.turn
        })
    }

    getGrid = () => {

        let gridElements = [];
        for(let i = 0; i < 3; i++){
            let gridRowElements = [];
            for(let j = 0; j < 3; j++){
                gridRowElements.push(
                    <Cell 
                        imageType={this.state.turn}
                        changeTurn={this.changeTurn}
                    />
                );
            }
            gridElements.push(
                <div className="row">
                    {[...gridRowElements]}
                </div>
            );
        }
        return [...gridElements];
    }

    render() {
        return (
            <div className="grid">
                {this.getGrid()}
            </div>
        );
    }
}

export default Grid;

