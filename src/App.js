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



