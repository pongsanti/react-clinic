// drug_selection.jsx
var React = require('react');
var DrugSelect = require('./drug_select.jsx');
var DrugLotSelect = require('./drug_lot_select.jsx');

var drug_lots = [
  {id: 1, name: "Amro lot 1"},
  {id: 2, name: "Amro lot 2"}
];

var DrugSelection = React.createClass({
  getInitialState: function() {
    return {
      drugs: [],
      drug_lots: []
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get(this.props.url, function(result) {
      this.setState({drugs: result['drugs']});
    }.bind(this));
  },

  onDrugSelected: function(drug_id) {
    var url = "/drugs/" + drug_id + "/drug_ins.json";
    //console.log(drug_id);
    this.serverRequest = $.get(url, function(result) {
      this.setState({drug_lots: result});
    }.bind(this));
  },

  render: function() {
    return (
      <div className="form-group">
        <div className="col-sm-1 control-label text-right">Drug:</div>
        <div className="col-sm-5">
          <DrugSelect
            ref="drugSelect"
            drugs={this.state.drugs}
            onDrugSelected={this.onDrugSelected}
          />
        </div>
        <div className="col-sm-1 control-label text-right">Drug Lot:</div>
        <div className="col-sm-5">
          <DrugLotSelect
            drug_lots={this.state.drug_lots}
          />
        </div>
      </div>
    ); 
  }
});

module.exports = DrugSelection;