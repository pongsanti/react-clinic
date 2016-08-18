// drug_lot_tr.jsx
var React = require('react');

var DrugLotTr = React.createClass({

  handleClick: function() {
    this.props.onDrugLotSelect(this.props.obj);
  },

  render: function() {
    return (
      <tr ref="tr"
          className="pointer"
          onClick={this.handleClick}>
        <td>{this.props.obj.drug.name}</td>
        <td className="text-right">{this.props.obj.id}</td>
        <td className="text-right">{this.props.obj.balance}</td>
        <td className="text-right">{this.props.obj.drug.store_unit.title}</td>
      </tr>
    ); 
  }
});

module.exports = DrugLotTr;