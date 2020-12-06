import React, { Component } from 'react';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import './App.css';

class App extends Component {
  constructor(){ 
    super(); // Enables us to use methods from the extended class + sets the context of "this" to our class component
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState({ monsters: users});
      })
  }

  handleChange = (e) => { // In this case we need to use an arrow function so "this" doesn't lose it's context
    this.setState({searchField: e.target.value});
  }

  render(){
    const {monsters, searchField} = this.state //Destructuring 
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
