import React from 'react'
import {assert} from 'chai'
import {shallow} from 'enzyme'
import {Foo, Bar} from '../src/components'

export function testFooComponent() {
  const wrapper = shallow(<Foo message="testing"/>)
  assert.equal(wrapper.unrendered.props.message, 'testing');
  assert.equal(wrapper.text(), "Foo says 'testing.'")
}
