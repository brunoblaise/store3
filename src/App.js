import React from 'react';
///yo how are you
import data from './data.json'
import data1 from './data1.json'
import './App.css';
import HomeTab from './componets/homeTab';
import Main from './componets/main';
class  App extends React.Component {
  constructor() {
   super();
   this.state={
   products: data.products,
   production: data1.production,
   }
  }
  render(){
  return (
    <div className="App">
    <HomeTab products={this.state.products}></HomeTab>
    <Main greats={this.state.production}></Main>
    </div>
  );
  }
}

export default App;
