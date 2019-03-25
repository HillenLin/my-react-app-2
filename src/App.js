import React, { Component } from 'react';
import './App.css';
import StopWatch from './pages/Stopwatch';
// import Card from './pages/Cart';
//import Clock from './pages/Clock';

// const cardInfo = [
//   {title: 'title one', imgUrl: "../", subTitle:"sub title one"},
//   {title: 'title two', imgUrl: "../", subTitle:"sub title two"},
//   {title: 'title three',imgUrl: "../",  subTitle:"sub title three"}
// ]


class App extends Component {
  render() {
    return (
      <div className="App">
        {
          // <Clock/>
          /* {
          cardInfo.map((cardInfo, index)=>
            <Card key={index} cardInfo={cardInfo} />)
          } */
          // <button onClick={this.handleClick}>Greeting</button>
          <StopWatch/>
        }
      </div>
    );
  }
  handleClick= () => {
    window.alert(`hello. ${this.props.name}`);
  }
}

export default App;
