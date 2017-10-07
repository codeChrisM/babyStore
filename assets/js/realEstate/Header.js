import React, { Component} from 'react'


export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Chris'
    }
    var temp = "temporary";
  }


  render () {
    return (<header>


  <nav>
      <a href="#">Baby Apparel</a>
      <a href="#">Baby Gifts</a>
      <div className="dropdown">
        <div className="dropbtn">Christening</div>
        <div className=" dropdown-content">
          <a href="#">Christening</a>
          <a href="#">Silver</a>
        </div>
      </div>
      <div className="dropdown">
        <div className="dropbtn">Furniture</div>
        <div className=" dropdown-content">
          <a href="#">Christening</a>
          <a href="#">Silver</a>
          <a href="#">Christening</a>
          <a href="#">Silver</a>
        </div>
      </div>
      <div className="dropdown">
        <div className="dropbtn">Bedding</div>
        <div className=" dropdown-content">
          <a href="#">Christening</a>
          <a href="#">Silver</a>
          <a href="#">Christening</a>
          <a href="#">Silver</a>
        </div>
      </div>
      <div className="dropdown">
        <div className="dropbtn">Decor</div>
        <div className=" dropdown-content">
          <a href="#">Christening</a>
          <a href="#">Silver</a>
          <a href="#">Christening</a>
          <a href="#">Silver</a>
        </div>
      </div>
      <div className="dropdown">
        <div className="dropbtn">Lighting</div>
        <div className=" dropdown-content">
          <a href="#">Christening</a>
          <a href="#">Silver</a>
          <a href="#">Christening</a>
          <a href="#">Silver</a>
        </div>
      </div>
      <div className="dropdown">
        <div className="dropbtn">Sale</div>
        <div className=" dropdown-content">
          <a href="#">Christening</a>
          <a href="#">Silver</a>
        </div>
      </div>
      <div className="dropdown">
        <div className="dropbtn">Brands</div>
        <div className=" dropdown-content">
          <a href="#">Christening</a>
        </div>
      </div>
    </nav>



      </header>)
  }
}
