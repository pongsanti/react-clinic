// drug_lot_select_list.jsx
var React = require('react');
var DrugLotTr = require('./drug_lot_tr.jsx');
var DrugLotText = require('./drug_lot_text.jsx');

var DrugLotSelectList = React.createClass({

  render: function() {
  
    var self = this;
    var trNodes = this.props.drug_lots.map(function(drug_lot) {
      return (
        <DrugLotTr
          key={drug_lot.id}
          obj={drug_lot}
          onDrugLotSelect={self.props.onDrugLotSelect}
        />
      );
    });

    return (
      <div className="panel panel-default">
        <table className="table table-hover table-striped table-condensed table-responsive">
          <thead>
            <tr>
              <th>Drug Name</th>
              <th className="text-right">Lot ID</th>
              <th className="text-right">Balance</th>
              <th className="text-right">Unit</th>
            </tr>
          </thead>
          <tbody>
            {trNodes}
          </tbody>
        </table>
      </div>
    ); 
  }
});

module.exports = DrugLotSelectList;