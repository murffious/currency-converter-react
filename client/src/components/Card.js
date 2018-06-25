import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
import ConverterField from "./ConverterField";
import AmountField from "./AmountField";
import BaseAmountField from "./BaseAmountField";

import SwapHoriz from "@material-ui/icons/SwapHoriz";
import IconButton from "@material-ui/core/IconButton";
import classNames from "classnames";
import Save from "@material-ui/icons/Save";
import Icon from "@material-ui/core/Icon";
import ExchangeRateDisplay from "./ExchangeRateDisplay";

const styles = theme => ({
  root: {
    color: theme.palette.text.primary
  },
  icon: {
    margin: theme.spacing.unit
  },
  card: {
    minWidth: 275
  },
  wrapper: {
    maxWidth: 400,
    margin: "0 auto"
  },
  countries: {
    display: "flex"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

// const styles = {
//   card: {
//     minWidth: 275
//   },
//   wrapper: {
//     maxWidth: 400,
//     margin: "0 auto"
//   },
//   countries: {
//     display: "flex"
//   },
//   bullet: {
//     display: "inline-block",
//     margin: "0 2px",
//     transform: "scale(0.8)"
//   },
//   title: {
//     marginBottom: 16,
//     fontSize: 14
//   },
//   pos: {
//     marginBottom: 12
//   }
// };

function SimpleCard(props) {
  console.log(props);
  const {
    classes,
    currencies,
    baseField,
    quoteField,
    changeCurrency,
    changeValue,
    convertMoney,
    changeInput,
    quoteInput,
    baseInput,
    defaultLoaded
  } = props;
  //   const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.wrapper}>
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.countries}>
            <ConverterField
              field="base"
              currencies={currencies}
              changeCurrency={changeCurrency}
            />
            <ConverterField
              field="quote"
              currencies={currencies}
              changeCurrency={changeCurrency}
            />
          </div>
          <IconButton className={classes.button} aria-label="Swap">
            <SwapHoriz className={classes.icon} />
          </IconButton>
          <div />
          <div className={classes.countries}>
            <BaseAmountField
              name="base"
              refs={props.refs}
              baseField={baseField}
              currencies={currencies}
              changeValue={changeValue}
              convertMoney={convertMoney}
              changeInput={changeInput}
              baseInput={baseInput}
            />
            <AmountField
              name="quote"
              quoteField={quoteField}
              currencies={currencies}
              changeValue={changeValue}
              changeCurrency={changeCurrency}
              convertMoney={convertMoney}
              changeInput={changeInput}
              quoteInput={quoteInput}
              defaultLoaded={defaultLoaded}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small" className={classes.button}>
            <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
            Save
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Send
            <Icon className={classes.rightIcon}>send</Icon>
          </Button>
          <Button size="small">Favorite(must login gmail)</Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);

// Exchange rate =
// US Dollar↔Euro
// 1 USD = 0.861447 EUR    1 EUR = 1.16084 USD
// $.getJSON(
//   // NB: using Open Exchange Rates here, but you can use any source!
//     'https://openexchangerates.org/api/latest.json?app_id=[YOUR APP ID]',
//     function(data) {
//         // Check money.js has finished loading:
//         if ( typeof fx !== "undefined" && fx.rates ) {
//             fx.rates = data.rates;
//             fx.base = data.base;
//         } else {
//             // If not, apply to fxSetup global:
//             var fxSetup = {
//                 rates : data.rates,
//                 base : data.base
//             }
//         }
//     }
// );
