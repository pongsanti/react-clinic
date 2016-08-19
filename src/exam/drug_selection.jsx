// drug_selection.jsx
var React = require('react');

var DrugSelect = require('./drug_select.jsx');
var DrugLotSelectList = require('./drug_lot_select_list.jsx');
var DrugLotText = require('./drug_lot_text.jsx')

var DrugSelection = React.createClass({
  getInitialState: function() {
    return {
      drugs: [],
      drug_lots: [],
      selectedDrugLot: undefined,
      showDrugLogList: false
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get(this.props.url, function(result) {
      this.setState({drugs: result['drugs']});
    }.bind(this));
  },

  onDrugSelectChange: function(drug_id) {
    var self = this;
    if(drug_id == -1) {
      this.setState({drug_lots: [], selectedDrugLot: undefined, showDrugLogList: false});
    } else {
      var url = "/drugs/" + drug_id + "/drug_ins.json";
      this.serverRequest = $.get(url, function(result) {
        self.setState({drug_lots: result["drug_ins"], showDrugLogList: true});
      });
    }
  },

  onDrugLotSelect: function(obj) {
    this.setState({selectedDrugLot: obj, showDrugLogList: false});
  },

  render: function() {
    var drugLotList = null;
    if(this.state.showDrugLogList) {
      drugLotList = 
        <DrugLotSelectList
          drug_lots={this.state.drug_lots}
          onDrugLotSelect={this.onDrugLotSelect}
        />;
    }

    return (
      <form className="form-horizontal">
        <div className="form-group">
          <div className="col-sm-1 control-label text-right">Drug:</div>
          <div className="col-sm-5">
            <DrugSelect
              ref="drugSelect"
              drugs={this.state.drugs}
              onDrugSelectChange={this.onDrugSelectChange}
            />
          </div>
          <div className="col-sm-1 control-label text-right">Drug Lot:</div>
          <div className="col-sm-5">
            <DrugLotText
              ref="drugLotText"
              obj={this.state.selectedDrugLot}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-1 col-sm-11">
            {drugLotList}
          </div>
        </div>
      </form>
    ); 
  }
});

module.exports = DrugSelection;