// drug_lot_select.jsx
var React = require('react');
var DrugLotSelectRow = require('./drug_lot_select_row.jsx')

var DrugLotSelect = React.createClass({

  handleChange: function() {

  },

  componentDidUpdate: function() {
    $(this.refs.select).selectpicker('refresh')
  },

  render: function() {
  
    var optionNodes = this.props.drug_lots.map(function(drug_lot){
      return (
        <DrugLotSelectRow key={drug_lot.id} value={drug_lot.id} balance={drug_lot.balance} />
      );
    });

    return (
      <select
        ref="select"
        className="form-control selectpicker"
        title="Please select drug lot..."
        data-live-search="true"
        onChange={this.handleChange}>
        {optionNodes}
      </select>
    ); 
  }
});

module.exports = DrugLotSelect;