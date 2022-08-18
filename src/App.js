import logo from './logo.svg';
import './App.css';
import { Component } from "react";


class App extends Component {
    //when component is built, runs constructor first, super calls underlying method from any classes your extending from
    //this.state is always a json object
    constructor() {
        super();

        this.state = {
            monsters: [
                {
                    name: 'Linda'
                },
                {
                    name: 'Frank'
                },
                {
                    name: 'Jackie'
                },
                {
                    name: 'Andrei'
                }
            ]
        };
    }




  render() {
    return (
        <div className="App">
            {
                this.state.monsters.map((monster) => {
                    return <h1>{monster.name}</h1>;
                    })}
        </div>
    );
  }
}

export default App;
