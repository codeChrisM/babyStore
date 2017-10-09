import React, { Component} from 'react'


export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Chris'
    }
    this.loopListings =this.loopListings.bind(this);
  }
  loopListings(){


    var {productData} = this.props
    return productData.map((product, index)=> {
      return (   <div className="product" key={index}>
                  <div className="product-img">
                  <img src={product.img} />
                      <span className="details">{product.details}</span>  {/* detail to appear during hover over product img */}
                      <div className="summary">{product.price}</div>
                  </div>
                  <div className="details">
                    <div className="title">{product.title}</div>
                    <div className="author">{product.author}</div>
                    <div className="price">{product.price}</div>
                    <span></span>
                  </div>
              </div>
        )
    })

  }
  render () {
    return (
      <section className="featured-area">
        <section className="featured-product-results">
            <div className="product" >
                    <div className="featured-block">
                    <h2>Featured Products</h2>
                    <p>Lorem ipsum dolor sit amet, eu ius erat commune, facer semper sea ad.</p>
                    <button className="btn" type="submit">SEE ALL</button>
                    </div>
            </div>
          {this.loopListings()}
        </section>
      </section>
    )
  }
}
