import './Forms.css';
import React from 'react';
import { UserData } from './IUserData';

class Forms extends React.Component<any, UserData> {
  constructor(props: any) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCVVChange = this.handleCVVChange.bind(this);
    this.handleCardNumberChange = this.handleCardNumberChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.state = {
      fullName: '',
      cardCVV: 0,
      cardNumber: 0,
      expDate: '2020-06'
    };
  }

  handleNameChange(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    this.setState({
      fullName: value
    });
  }

  handleCVVChange(e: React.FormEvent<HTMLInputElement>) {
    const value = parseInt(e.currentTarget.value);
    this.setState({
      cardCVV: value
    });
  }

  handleCardNumberChange(e: React.FormEvent<HTMLInputElement>) {
    const value = parseInt(e.currentTarget.value);
    this.setState({
      cardNumber: value
    });
  }

  handleDateChange(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    this.setState({
      expDate: value
    });
  }

  handleSubmit() {
    this.props.handleFormSubmit(this.state);
  }

  render() {
    return (
      <div className="Forms">
        <form action="" method="post" className="subscription-form">
          <div className="form-row">
            <label>
              Full Name
              <input
                id="full-name"
                type="text"
                name="fullName"
                onChange={this.handleNameChange}
              />
            </label>
            <label>
              Card CVV
              <input
                id="card-cvv"
                type="text"
                name="cardCVV"
                maxLength={3}
                onChange={this.handleCVVChange}
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Credit Card Number
              <input
                id="card-number"
                type="text"
                name="cardNumber"
                maxLength={16}
                onChange={this.handleCardNumberChange}
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Card Expiration Date
              <input
                id="card-expiration"
                type="month"
                value="2020-06"
                name="expDate"
                onChange={this.handleDateChange}
              />
            </label>
          </div>
          <div className="form-row">
            <button
              type="button"
              className="submitButton"
              onClick={this.handleSubmit}
            >
              Get Free Subscription!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Forms;
