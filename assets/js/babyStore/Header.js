import React, { Component} from 'react'


export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      itemCount: '5',
      totalCost: '2103.92'
    }
  }


  render () {
    return (<header>
    <div className="header-top wrapper">
        <div className="contact">Call us at: <span>708-246-1212</span><button className="chat-btn" type="submit">LIVE CHAT NOW</button></div>
        <div className="user-session-area">
          <div>Baby Registry</div>
          <div>Login/ Register</div>
          <ul>
            <li> {` ${this.state.itemCount} items`}</li>
            <li>Check out</li>
            <li><span>$</span>{` ${this.state.totalCost}`}</li>
          </ul>
        </div>
    </div>



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
