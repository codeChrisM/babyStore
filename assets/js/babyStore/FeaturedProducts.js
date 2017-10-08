import React, { Component} from 'react'


export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Chris'
    }
  }
  loopListings(){
    return
    <div className="product">
        <div className="product-img">
            <span className="details">details</span>  {/* detail to appear during hover over product img */}
            <div className="summary">Summary about the product</div>
        </div>
        <div className="product-details">
          <div className="product-title">title</div>
          <div className="product-author">author</div>
          <div className="product-price">price</div>
          <span></span>
        </div>
    </div>

  }
  render () {
    return (
      <section className="featured-area">
        <section className="featured-product-results">
        <div className="product">
            <div className="product-img">
            <img src={'/img/product_outfit.jpg'} />
                <span className="details">details</span>  {/* detail to appear during hover over product img */}
                <div className="summary">Summary about the product</div>
            </div>
            <div className="product-details">
              <div className="product-title">title</div>
              <div className="product-author">author</div>
              <div className="product-price">price</div>
              <span></span>
            </div>
        </div>

        </section>
      </section>
    )
  }
}
