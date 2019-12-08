import React, { Component } from 'react'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'

export default class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  }

  componentDidMount() {
    // turn search object to url param
    const query = new URLSearchParams(this.props.location.search)
    const ingredients = {}
    // map url params to an object
    for (let param of query.entries()) {
      // ['salad','1']
      ingredients[param[0]] = +param[1]
    }

    this.setState({ingredients: ingredients})
  }

  checkoutCancelledHandler = () => {
    console.log('cancel handler')
    this.props.history.goBack()
  }

  checkoutContinuedHandler = () => {
    console.log('checkout handler')
    this.props.history.replace('/checkout/contact-data')
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
      </div>
    )
  }
}
