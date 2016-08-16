// drug_select_row.jsx
var React = require('react');

var DrugSelectRow = React.createClass({
  render: function() {
    return (
      <option value={this.props.value}>{this.props.name}</option>
    ); 
  }
});

module.exports = DrugSelectRow;