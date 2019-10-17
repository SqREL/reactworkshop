import React from 'react';
import Game from "./Game"
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'


const props = {
  name: 'test game name',
  price: 1488,
  image: 'http://google.com',
  onAdd: jest.fn()
}

describe('Game', () => {
  it('handles onAdd', () => {
    const wrapper = shallow(<Game {...props}/>)

    wrapper.find('button').simulate('click')
    expect(props.onAdd).toBeCalled();
  })
  it('renders without crashing', () => {
    expect(toJson(shallow(<Game {...props}/>))).toMatchSnapshot()
  })
})

describe('Prce free', () => {
  const npr = {...props, price: 0}
  it('renders without crashing', () => {
    expect(toJson(shallow(<Game {...npr}/>))).toMatchSnapshot()
  })
})
