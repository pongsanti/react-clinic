// drug_lot_select_list.jsx
var React = require('react');
var DrugLotTr = require('./drug_lot_tr.jsx');
var DrugLotText = require('./drug_lot_text.jsx');

var DrugLotSelectList = React.createClass({

  getInitialState: function() {
    return {
      selectedLot: ''
    };
  },

  onDrugLotSelected: function(drugLogId) {
    this.setState({selectedLot: drugLogId});
  },

  render: function() {
  
    var self = this;
    var trNodes = this.props.drug_lots.map(function(drug_lot) {
      return (
        <DrugLotTr
          key={drug_lot.id}
          value={drug_lot.id}
          balance={drug_lot.balance}
          onDrugLotSelected={self.onDrugLotSelected}
        />
      );
    });

    return (
      <div>
        <DrugLotText value={this.state.selectedLot} />
        <table className="table table-hover table-striped table-condensed table-responsive">
          <thead>
            <tr>
              <th></th>
              <th className="text-right">Lot ID</th>
              <th className="text-right">Balance</th>
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