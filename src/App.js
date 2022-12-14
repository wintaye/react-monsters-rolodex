import logo from './logo.svg';
import './App.css';
import { Component } from "react";


class App extends Component {
    //when component is built, runs constructor first always, super calls underlying method from any classes you're extending from
    //this.state is always a json object
    constructor() {
        super();

        this.state = {
            monsters: [],
        };
    }
//fetch data, turn it into a json, point monsters to users array, use function method to create callback () => { } for console.log
// promise response accessed by .then()
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState(() => {
                return {monsters:users}
            },
                () => {
                console.log(this.state);
                }
                ));
    }


    render() {
    return (
        <div className="App">
            {this.state.monsters.map((monster) => {
                    return <div key={monster.id}>
                        <h1>{monster.name}</h1> </div>
            })}
        </div>
    );
  }}

export default App;
