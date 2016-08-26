import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {assert} from 'chai';
import {should} from 'chai';
import {shallow} from 'enzyme';
import {Foo, Bar} from '../src/components';

// Initialize should wrapper
should();

export function testFooComponent() {
  const renderer = ReactTestUtils.createRenderer();
  renderer.render(<Foo message="testing"/>);

  let result = renderer.getRenderOutput();
  result.props.className.should.equal('foo');
}
