import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';

describe('Login', () => {

  let wrapper, mockEvent

  beforeEach(() => {
    mockEvent = { target: {name: 'name', value:'Davey Havok'} }

    wrapper = shallow(<Login />)
  })

  describe('Unit Tests', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    describe('handleChange', () => {
      it('should call setState when handleChange is invoked', () => {
        const expected = { name: 'Davey Havok' }
        wrapper.instance().setState = jest.fn()
        wrapper.instance().handleChange(mockEvent)

        expect(wrapper.instance().setState).toHaveBeenCalledWith(expected)
      })

      it('should set state with name when handleChange is called', () => {
        const expected = {name: 'Davey Havok', hasAgreed: false}
        wrapper.setState({ name: '', hasAgreed: false });
        wrapper.instance().handleChange(mockEvent);

        expect(wrapper.state()).toEqual(expected)
      });
    })
  })
})