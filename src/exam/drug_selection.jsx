// drug_selection.jsx
var React = require('react');
var DrugSelect = require('./drug_select.jsx');
var DrugLotSelectList = require('./drug_lot_select_list.jsx');

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

  onDrugSelectChange: function(drug_id) {
    var url = "/drugs/" + drug_id + "/drug_ins.json";
    this.serverRequest = $.get(url, function(result) {
      this.setState({drug_lots: result});
    }.bind(this));
  },

  render: function() {
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <div className="col-sm-2 control-label text-right">Drug:</div>
          <div className="col-sm-10">
            <DrugSelect
              ref="drugSelect"
              drugs={this.state.drugs}
              onDrugSelectChange={this.onDrugSelectChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-2 control-label text-right">Drug Lot:</div>
          <div className="col-sm-10">
            <DrugLotSelectList
              drug_lots={this.state.drug_lots}
            />
          </div>
        </div>
      </form>
    ); 
  }
});

module.exports = DrugSelection;