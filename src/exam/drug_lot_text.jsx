// drug_lot_text.jsx
var React = require('react');

var DrugLotText = React.createClass({

  render: function() {
    return (
      <input type="text" className="form-control" value={this.props.value} readOnly />
    ); 
  }
});

module.exports = DrugLotText;