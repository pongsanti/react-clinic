// drug_select.jsx
var React = require('react');
var DrugSelectRow = require('./drug_select_row.jsx')

var DrugSelect = React.createClass({
  render: function() {
    var optionNodes = this.props.drugs.map(function(drug){
      return (
        <DrugSelectRow key={drug.id} value={drug.id} name={drug.name} />
      );
    });

    return (
      <select className="form-control selectpicker" title="Please select drug...">
        {optionNodes}
      </select>
    ); 
  }
});

module.exports = DrugSelect;