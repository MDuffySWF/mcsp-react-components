import './App.css';
import React from 'react';

class App extends React.Component{

  state = {
   items : ['Cucumbers', 'Kale']
}

  render(){
    
    return (
    <div>
      <GroceryList items = {this.state.items}/>
    </div>)

  }

}

class GroceryListItem extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      done: false
    };


  }

  onMouseOverListItem(e) {
     this.setState({
       done: !this.state.done
     });
  }

  


  render(){

    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (<li style={style} onMouseOver={this.onMouseOverListItem.bind(this)}>{this.props.item}</li>)
  }

}


var GroceryList = (props) => (

     <ul> 
       {props.items.map(item => 
       <GroceryListItem item ={item}/>
        )} 
     </ul>
)




export default App;
