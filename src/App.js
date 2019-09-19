import React, {Component} from 'react';
import Products from './components/Poducts'
import Filter from './components/Filter'
import './App.css';

export default class Poducts extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: [],
      filteredProducts: [],
      size: "",
      sort: "",
      cartItems: []
    };
  }

 componentDidMount(){
   fetch("http://localhost:8000/products").then(res => res.json())
   .then(data => this.setState({
     products: data,
     filteredProducts: data
   }))
 }
 listProducts = () =>{
       this.setState(state => {
         if (state.sort !== "") {
           state.products.sort((a, b) =>
             state.sort === "lowestprice"
               ? a.price > b.price
                 ? 1
                 : -1
               : a.price < b.price
               ? 1
               : -1
           );
         } else {
           state.products.sort((a, b) => (a.id > b.id ? 1 : -1));
         }
         if (state.size !== "") {
           return {
             filteredProducts: state.products.filter(
               a => a.availableSizes.indexOf(state.size.toUpperCase()) >= 0
             )
           };
         }
         return { filteredProducts: state.products };
       });
 }
  handleChangeSort = (e) => {
    this.setState({ sort: e.target.value });
    this.listProducts();
  }
  handleChangeSize = (e) => {
    this.setState({ size: e.target.value });
    this.listProducts();
  }
  render() {
      return (
        <div className="container">
          <h1>E-Commerce Shopping Cart Application</h1>
          <hr />
          <div className="row">
            <div className="col-md-8">
              <Filter
                size={this.state.size}
                sort={this.state.sort}
                handleChangeSize={this.handleChangeSize}
                handleChangeSort={this.handleChangeSort}
                count={this.state.filteredProducts.length}
              />
              <hr/>
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



