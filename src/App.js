import React, {Component} from 'react';
import Products from './components/Poducts'
import './App.css';

export default class Poducts extends Component {
  constructor(props){
    super(props)
    this.state={
      products:[],
      filteredProducts:[]
    }
  }

 componentWillMount(){
   fetch("http://localhost:8000/products").then(res => res.json())
   .then(data => this.setState({
     products: data,
     filteredProducts: data
   }))
 }
  render() {
      return (
        <div className="container">
          <h1>E-Commerce Shopping Cart Application</h1>
          <hr />
          <div className="row">
            <div className="col-md-8">
              <Products
                products={this.state.filteredProducts}
                handleAddToCard={this.handleAddToCard}
              />
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      );
  }
}



