// drug_select.jsx
var React = require('react');
var DrugSelectRow = require('./drug_select_row.jsx')

var DrugSelect = React.createClass({

  handleChange: function() {
    this.selectValue = this.refs.select.value;
    console.log(this.selectValue);
    this.props.onDrugSelected(this.refs.select.value);
  },

  componentDidUpdate: function() {
    $(this.refs.select).selectpicker('refresh')
    console.log('drug select refreshed with selected value ' + this.selectValue);
    if(this.selectValue)
      $(this.refs.select).selectpicker('val', this.selectValue);
  },

  render: function() {
    var optionNodes = this.props.drugs.map(function(drug){
      return (
        <DrugSelectRow key={drug.id} value={drug.id} name={drug.name} />
      );
    });

    return (
      <select
        ref="select"
        className="form-control selectpicker"
        title="Please select drug..."
        data-live-search="true"
        onChange={this.handleChange}>
        {optionNodes}
      </select>
    ); 
  }
});

module.exports = DrugSelect;