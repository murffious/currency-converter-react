import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AmountField from "../components/AmountField";
import ExchangeRateDisplay from "../components/ExchangeRateDisplay";
import * as Actions from "../redux/actions/fx_actions";
import Card from "../components/Card";
import money from "./library";

class ConverterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: ""
    };
  }
  updateExchangeRates() {
    this.props.actions.updateExchangeRates(Object.keys(this.props.currencies));
  }

  componentDidMount() {
    this.updateExchangeRates();
    // Use this to update the rates
    //   setInterval(() => {
    //     this.updateExchangeRates();
    //   }, 100000);
  }

  convertCurrency = () => {
    var fx = money();

    fx.base = "EUR";
    fx.rates = {
      EUR: 1, //base rate
      USD: 1.1578,
      JPY: 127.39,
      BGN: 1.9558,
      CZK: 25.835,
      DKK: 7.4525,
      GBP: 0.87878,
      HUF: 324.15,
      PLN: 4.3152,
      RON: 4.6695,
      SEK: 10.2755,
      CHF: 1.1537,
      ISK: 125.8,
      NOK: 9.4693,
      HRK: 7.3836,
      RUB: 73.6225,
      TRY: 5.4943,
      AUD: 1.5688,
      BRL: 4.3273,
      CAD: 1.5398,
      CNY: 7.4953,
      HKD: 9.0847,
      IDR: 16320.23,
      ILS: 4.2085,
      INR: 78.86,
      KRW: 1281.98,
      MXN: 23.6794,
      MYR: 4.6318,
      NZD: 1.6853,
      PHP: 61.864,
      SGD: 1.5718,
      THB: 37.987,
      ZAR: 15.8367
    };

    var num = fx.convert(1, { from: "CHF", to: "USD" });
    console.log(num);
  };
  componentWillReceiveProps() {}

  render() {
    return (
      // <div className="container" key={this.props.quote.value}>

      <div className="container">
        <Card
          refs={this.myRef}
          baseField={this.props.base}
          quoteField={this.props.quote}
          currencies={this.props.currencies}
          changeValue={this.props.actions.changeValue}
          changeCurrency={this.props.actions.changeCurrency}
          // not needed convert money ..?
          convertMoney={this.props.actions.convertMoney}
          changeInput={this.props.actions.changeInput}
          baseInput={this.props.baseInput}
          quoteInput={this.props.quoteInput}
          defaultLoaded={this.props.defaultLoaded}
        />
        {/* <AmountField
                name="base"
                fields={this.props.base}
                currencies={this.props.currencies}
                changeValue={this.props.actions.changeValue}
                changeCurrency={this.props.actions.changeCurrency}
              /> */}

        {/* <AmountField
                name="quote"
                fields={this.props.quote}
                currencies={this.props.currencies}
                changeValue={this.props.actions.changeValue}
                changeCurrency={this.props.actions.changeCurrency}
              /> */}

        {/* <ExchangeRateDisplay
                exchangeRates={this.props.exchangeRates}
                baseCurrency={this.props.currencies[this.props.base.currency]}
                quoteCurrency={this.props.currencies[this.props.quote.currency]}
              /> */}
      </div>
    );
  }
}

ConverterContainer.propTypes = {
  base: PropTypes.object.isRequired,
  quote: PropTypes.object.isRequired,
  currencies: PropTypes.object.isRequired,
  exchangeRates: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  console.log(state);
  return {
    base: state.base,
    quote: state.quote,
    currencies: state.currencies,
    exchangeRates: state.exchangeRates,
    baseInput: state.baseInput,
    quoteInput: state.quoteInput,
    defaultLoaded: state.defaultLoaded
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConverterContainer);
