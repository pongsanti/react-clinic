// drug_lot_tr.jsx
var React = require('react');

var DrugLotTr = React.createClass({

  handleClick: function() {
    //$(this.refs.tr).addClass('success').siblings().removeClass('success');
    this.props.onDrugLotSelected(this.props.value);
  },

  render: function() {
    return (
      <tr ref="tr"
          className="pointer"
          onClick={this.handleClick}>
        <td></td>
        <td className="text-right">{this.props.value}</td>
        <td className="text-right">{this.props.balance}</td>
      </tr>
    ); 
  }
});

module.exports = DrugLotTr;