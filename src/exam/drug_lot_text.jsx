// drug_lot_text.jsx
var React = require('react');

var DrugLotText = React.createClass({

  render: function() {
    var text = ""
    if(this.props.obj) {
      var drug_lot = this.props.obj
      text = "Lot Id: " + drug_lot.id + " Balance: " + drug_lot.balance
      if(drug_lot.drug)
        text = text + " " + drug_lot.drug.store_unit.title;
    }
    return (
      <input type="text" className="form-control" value={text} readOnly />
    ); 
  }
});

module.exports = DrugLotText;