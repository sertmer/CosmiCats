import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapDispatchToProps } from './Login';
import { setUser } from '../../actions'

describe('Login', () => {

  let wrapper, mockNameEvent, mockAgreeEvent

  beforeEach(() => {
    mockNameEvent = { target: {name: 'name', value:'Davey Havok'} }
    mockAgreeEvent = { target: {name: 'hasAgreed'} }

    wrapper = shallow(<Login />)
  })

  describe('Unit Tests', () => {
    it.skip('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    describe('handleChange', () => {
      it('should call setState when handleChange is invoked', () => {
        const expected = { name: 'Davey Havok' }
        wrapper.instance().setState = jest.fn()
        wrapper.instance().handleChange(mockNameEvent)

        expect(wrapper.instance().setState).toHaveBeenCalledWith(expected)
      })

      it('should set state with name when handleChange is invoked', () => {
        const expected = {name: 'Davey Havok', hasAgreed: false}
        wrapper.setState({ name: '', hasAgreed: false });
        wrapper.instance().handleChange(mockNameEvent);

        expect(wrapper.state()).toEqual(expected)
      });

      it('should be invoked on change', () => {
        wrapper.instance().handleChange = jest.fn()
        wrapper.find('.user-name').simulate('change', mockNameEvent)

        expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockNameEvent)
      })
    })

    describe('handleClick', () => {
      it('should call setState when handleClick is invoked', () => {
        const expected = { hasAgreed: true }
        wrapper.instance().setState = jest.fn()
        wrapper.instance().handleClick(mockAgreeEvent)

        expect(wrapper.instance().setState).toHaveBeenCalledWith(expected)
      })

      it('should set state with true when handleClick is invoked', () => {
        const expected = { name: '', hasAgreed: true }
        wrapper.instance().handleClick(mockAgreeEvent)

        expect(wrapper.state()).toEqual(expected)
      })

      it('should be invoked on click', () => {
        wrapper.instance().handleClick = jest.fn()
        wrapper.find('.agree-radio').simulate('click', mockAgreeEvent)

        expect(wrapper.instance().handleClick).toHaveBeenCalledWith(mockAgreeEvent)
      })
    })
  })
  
  describe('mapDispatchToProps', () => {
    let mockDispatch, mockActionToDispatch

    beforeEach(() => {
      mockDispatch = jest.fn()
    })
    it('should call mapDispatchToProps with a user', () => {
      mockActionToDispatch = setUser('Davey Havok')
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.setUser('Davey Havok')
      expect(mockDispatch).toHaveBeenCalledWith(mockActionToDispatch)
    })
  })
})