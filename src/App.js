import React from 'react';
///yo how are you
import data from './data.json'
import './App.css';
import HomeTab from './componets/homeTab';
class  App extends React.Component {
  constructor() {
   super();
   this.state={
   products: data.products,
   }
  }
  render(){
  return (
    <div className="App">
    <HomeTab products={this.state.products}></HomeTab>
    </div>
  );
  }
}

export default App;
