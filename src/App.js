import logo from './logo.svg';
import './App.css';
import { Component } from "react";


class App extends Component {
    //when component is built, runs constructor first, super calls underlying method from any classes your extending from
    //this.state is always a json object
    constructor() {
        super();

        this.state = {
            name: {firstName: 'Wintaye', lastName: 'Gebru'},
            company: 'ZTM'
        };
    }



  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Hi, {this.state.name.firstName} {this.state.name.lastName} and I work at {this.state.company}
            </p>
            <button onClick={() => {
                this.setState(
                () => {
                    return {
                        name: { firstName: 'Andrea', lastName: 'Bocelli'},
                };
            },
                () => {
                    console.log(this.state);
                }
            );
            }}>Change Name</button>
          </header>
        </div>
    );
  }
}

export default App;
