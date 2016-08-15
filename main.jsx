'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var DrugSelect = require('./src/exam/drug_select.jsx');


// tutorial8.js
var drugs = [
  {id: 1, name: "Amro"},
  {id: 2, name: "AirX"}
];

window.render_drug_select = function(id) {
  ReactDOM.render(
    <DrugSelect drugs={drugs} />,
    document.getElementById(id)
  );
}