'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var CommentBox = require('./src/comment_box/comment_box.jsx');

window.render_comment_box = function(id) {
  ReactDOM.render(
    <CommentBox />,
    document.getElementById(id)
  );
}