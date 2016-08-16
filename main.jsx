'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var DrugSelection = require('./src/exam/drug_selection.jsx');

window.render_drug_select = function(id) {
  ReactDOM.render(
    <DrugSelection url="/drug_has_drug_ins"/>,
    document.getElementById(id)
  );
}