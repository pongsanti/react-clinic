import React from 'react';
import CommentBox from '../../src/comment_box/comment_box.jsx';
import renderer from 'react-test-renderer';

describe('CommentBox', () => {
  it('is a div with text', () => {
    const component = renderer.create(
      <CommentBox />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

  });

});