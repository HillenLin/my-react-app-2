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

const superheroes = ['Batman', 'Superman', 'Spiderman', 'Thor', 'Black widow', 'Captain America'];

class App extends Component {

  state = {
    username:'',
    email:'',
    city:'Sydney'
  };
  
  render() {
    console.log(this.state);
    return (
      <div className="App">
      {
        <form style={{ width: 300, margin: 20 }} onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" className="form-control" id="username" placeholder="Username" value={this.state.userName} onChange={e=>this.handleFieldChange(e)}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" className="form-control" id="email" placeholder="Email" value={this.state.email} onChange={e=>this.handleFieldChange(e)}/>
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <select name="city" className="form-control" id="city" value={this.state.city} onChange={e=>this.handleFieldChange(e)}>
              <option value="Sydney">Sydney</option>
              <option value="Melbourne">Melbourne</option>
              <option value="Brisbane">Brisbane</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Sign up</button>
        </form>
      }
      {/* {
        <form>
          <input type="text" value={this.state.username} onChange={e=>this.setState({userName: e.target.value})}/>
        </form>
      } */}
        {/* {this.list(superheroes)} */}
        {
          // <Clock/>
          /* {
          cardInfo.map((cardInfo, index)=>
            <Card key={index} cardInfo={cardInfo} />)
          } */
          // <button onClick={this.handleClick}>Greeting</button>
          // <StopWatch/>
          // superheroes.map((superhero)=>{
          //   return <h3 key={superhero}>{superhero}</h3>
          // })
        }
      </div>
    );
  }
  handleClick= () => {
    window.alert(`hello. ${this.props.name}`);
  }

  handleFieldChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    console.log('Sumitted:');
    console.log(this.state);
  }

  list = (array)=>{
    return (
      <div>
        {array.map(element=>{
          return <h3 key={element}>{element}</h3>
        })}
      </div>
    );
  }
}

export default App;
