import React, { Component } from 'react'

class DataRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.rank}</td>
        <td>{this.props.quotes}</td>
      </tr>
    )
  }
}
export default DataRow
