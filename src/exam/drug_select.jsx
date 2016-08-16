// drug_select.jsx
var React = require('react');
var DrugSelectRow = require('./drug_select_row.jsx')

var DrugSelect = React.createClass({

  handleChange: function() {
    this.selectValue = this.refs.select.value;
    if(this.selectValue != -1)
      this.props.onDrugSelectChange(this.refs.select.value);
  },

  // Don't render if it is the same drugs
  shouldComponentUpdate: function(nextProps, nextState) {
    return this.props.drugs !== nextProps.drugs;
  },

  componentDidUpdate: function() {
    $(this.refs.select).selectpicker('refresh')
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
        data-live-search="true"
        data-size="10"
        data-width="auto"
        onChange={this.handleChange}>
          <option value="-1">Nothing selected</option>
          {optionNodes}
      </select>
    ); 
  }
});

module.exports = DrugSelect;