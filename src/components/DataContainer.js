import React, { Component } from 'react'
import DataRow from './DataRow'

class DataContainer extends Component {
  state = {
    currencies: []
  }
  //mount data on page
  // establish the state

  //fetch crypto-currency data
  getCurrency = () => {
    fetch('https://api.coinmarketcap.com/v2/ticker/?limit=20')
      .then(resp => {
        return resp.json()
      })
      .then(dlResp => {
        console.log({ dlResp })
        this.setState({
          currencies: Object.values(dlResp.data)
        })
      })
  }
  componentDidMount() {
    this.getCurrency()
    setInterval(() => this.getCurrency(), 10000)
  }
  render() {
    return (
      <>
        <h1>Crypto Currency Rates</h1>
        <table>
          <tbody>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Rank</th>
              <th>Quote</th>
            </tr>
            {this.state.currencies.map(currency => {
              return (
                <>
                  <DataRow
                    id={currency.id}
                    name={currency.name}
                    rank={currency.rank}
                    quotes={currency.quotes.USD.price}
                  />
                </>
              )
            })}
          </tbody>
        </table>
      </>
    )
  }
}

export default DataContainer
