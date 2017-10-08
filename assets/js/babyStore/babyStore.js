import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import FeaturedProducts from './FeaturedProducts.js'


class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Chris'
    }

  }
  render () {
    return (<div>
        <Header />
        <FeaturedProducts />
       </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
