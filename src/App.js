import React from 'react';
///yo how are you
import data from './data.json'
import data1 from './data1.json'
import HomeTab from './componets/home/homeTab'
import Main from './componets/main/main'
import Content from './componets/content/content'
import dataP from './dataP.json'
class  App extends React.Component {
  
  constructor() {
   super();
   this.state={
   products: data.products,
   production: data1.production,
   productions:dataP.productions,
   }
  }
  render(){
  return (
    <div className="App">
    <HomeTab products={this.state.products}></HomeTab>
    <Main greats={this.state.production}></Main>
    <Content businesses={this.state.productions}></Content>
    </div>
  );
  }
}

export default App;
