import React, { Component} from 'react'


export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Chris'
    }
  }
  render () {
    return (
      <section className="listings">
      Listings
      </section>
    )
  }
}
