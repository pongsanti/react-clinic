// drug_lot_select_row.jsx
var React = require('react');

var DrugLotSelectRow = React.createClass({
  render: function() {
    return (
      <option value={this.props.value}>{this.props.value}: {this.props.balance}</option>
    ); 
  }
});

module.exports = DrugLotSelectRow;