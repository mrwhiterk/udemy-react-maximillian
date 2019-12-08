import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Input from '../../../components/UI/Input/Input'

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = event => {
    event.preventDefault()
    this.setState({ loading: true })
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Ryan White',
        address: {
          street: '123 test st',
          zipCode: '41351',
          country: 'Germany'
        },
        email: 'test@test.com'
      },
      deliverMethod: 'fastest'
    }

    axios
      .post('/orders.json', order)
      .then(res => {
        this.setState({ loading: false })
        this.props.history.push('/');
      })
      .catch(err => this.setState({ loading: false }))
  }

  render() {
    let form = (
      <form>
        <Input
          type="text"
          name="name"
          inputtype="input"
          placeholder="Your name"
        />
        <Input
          type="email"
          name="email"
          inputtype="input"
          placeholder="Your email"
        />
        <Input
          type="text"
          name="street"
          inputtype="input"
          placeholder="Street"
        />
        <Input
          type="text"
          name="postal"
          inputtype="input"
          placeholder="Postal Code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    )
    if (this.state.loading) {
      form = <Spinner />
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData
