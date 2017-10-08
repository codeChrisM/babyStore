import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import FeaturedProducts from './FeaturedProducts.js'
import productData from  './data/productData.js'


class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Chris',
      productData: productData
    }


  }
  render () {
    console.log(this.state.productData);
    return (<div>
        <Header />
        <FeaturedProducts />
       </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
